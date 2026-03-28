import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";

type CartAccompaniment = {
  id: string;
  label: string;
  amount: number;
};

export type CartItem = {
  id: string;
  productSlug: string;
  productName: string;
  productImage: string;
  quantity: number;
  sizeLabel: string;
  baseAmount: number;
  unitTotal: number;
  accompaniments: CartAccompaniment[];
};

type AddToCartPayload = Omit<CartItem, "id">;

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (payload: AddToCartPayload) => void;
  replaceItem: (currentId: string, payload: AddToCartPayload) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const STORAGE_KEY = "kalis-cart";

const CartContext = createContext<CartContextValue | null>(null);

function createItemId(payload: AddToCartPayload) {
  return [
    payload.productSlug,
    payload.sizeLabel,
    payload.accompaniments.map((item) => `${item.id}:${item.label}`).join("|"),
  ].join("::");
}

export function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      return;
    }

    try {
      const parsedItems = JSON.parse(storedValue) as CartItem[];
      setItems(parsedItems);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.unitTotal * item.quantity, 0);

    return {
      items,
      itemCount,
      subtotal,
      addItem: (payload) => {
        const id = createItemId(payload);

        setItems((current) => {
          const existingItem = current.find((item) => item.id === id);

          if (existingItem) {
            return current.map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + payload.quantity,
                  }
                : item,
            );
          }

          return [...current, { ...payload, id }];
        });
      },
      replaceItem: (currentId, payload) => {
        const nextId = createItemId(payload);

        setItems((current) => {
          const remainingItems = current.filter((item) => item.id !== currentId);
          const existingItem = remainingItems.find((item) => item.id === nextId);

          if (existingItem) {
            return remainingItems.map((item) =>
              item.id === nextId
                ? {
                    ...item,
                    quantity: item.quantity + payload.quantity,
                  }
                : item,
            );
          }

          return [...remainingItems, { ...payload, id: nextId }];
        });
      },
      updateQuantity: (id, quantity) => {
        setItems((current) =>
          current.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: Math.max(1, quantity),
                }
              : item,
          ),
        );
      },
      removeItem: (id) => {
        setItems((current) => current.filter((item) => item.id !== id));
      },
      clearCart: () => {
        setItems([]);
      },
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
