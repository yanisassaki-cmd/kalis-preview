import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock3, Gift, Minus, Plus, ShieldCheck, ShoppingBag, Trash2, Truck } from "lucide-react";
import { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { formatChf } from "../lib/price";

const deliveryOptions = [
  {
    id: "atelier",
    title: "Retrait atelier",
    delay: "Aujourd'hui des 14h",
    note: "Passez à la boutique pour récupérer votre commande préparée à la main.",
    amount: 0,
  },
  {
    id: "geneve",
    title: "Livraison Genève",
    delay: "Aujourd'hui ou demain",
    note: "Coursier floral avec fenêtre de livraison souple dans Genève centre.",
    amount: 18,
  },
  {
    id: "express",
    title: "Express signature",
    delay: "Sous 3h selon atelier",
    note: "Traitement prioritaire pour une attention de derniere minute.",
    amount: 32,
  },
] as const;

const editorialNotes = [
  "Chaque bouquet est composé peu avant le départ pour garder son souffle et sa tenue.",
  "Les accompagnements sélectionnés sont attachés à la pièce et préparés dans le même esprit.",
  "Une carte manuscrite peut être glissée avec votre mot à l'atelier.",
];

export function CartPage() {
  const { items, subtotal, itemCount, replaceItem, updateQuantity, removeItem, clearCart } = useCart();
  const [selectedDelivery, setSelectedDelivery] = useState<(typeof deliveryOptions)[number]["id"]>("geneve");

  const delivery = deliveryOptions.find((option) => option.id === selectedDelivery) ?? deliveryOptions[1];
  const total = subtotal + delivery.amount;
  const suggestedProducts = products.filter((product) => product.slug).slice(0, 3);
  const hasItems = items.length > 0;

  const accompanimentCount = useMemo(
    () => items.reduce((sum, item) => sum + item.accompaniments.length, 0),
    [items],
  );

  const addCrossProduct = (itemId: string, accompanimentId: string) => {
    const currentItem = items.find((entry) => entry.id === itemId);

    if (!currentItem) {
      return;
    }

    const product = products.find((entry) => entry.slug === currentItem.productSlug);
    const accompaniment = product?.accompaniments?.find((entry) => entry.id === accompanimentId);

    if (!product || !accompaniment) {
      return;
    }

    const selectedVariation = accompaniment.variations?.[0];
    const nextAccompaniment = {
      id: accompaniment.id,
      label: selectedVariation ? `${accompaniment.name} · ${selectedVariation.label}` : accompaniment.name,
      amount: selectedVariation?.amount ?? accompaniment.amount ?? 0,
    };

    replaceItem(itemId, {
      productSlug: currentItem.productSlug,
      productName: currentItem.productName,
      productImage: currentItem.productImage,
      quantity: currentItem.quantity,
      sizeLabel: currentItem.sizeLabel,
      baseAmount: currentItem.baseAmount,
      unitTotal: currentItem.unitTotal + nextAccompaniment.amount,
      accompaniments: [...currentItem.accompaniments, nextAccompaniment],
    });
  };

  return (
    <main className="bg-[#F5F0E8]">
      <section className="relative overflow-hidden border-b border-[rgba(139,94,60,0.12)] bg-[linear-gradient(180deg,#fdfaf6_0%,#f5f0e8_100%)] px-6 py-12 lg:px-16 lg:py-16">
        <div className="absolute left-[-60px] top-[120px] h-[240px] w-[240px] rounded-full bg-[#E9D9CC] opacity-70 blur-3xl" />
        <div className="absolute right-[6%] top-[-40px] h-[300px] w-[300px] rounded-full bg-[#E7D4C3] opacity-60 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px]">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
            style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}
          >
            <ArrowLeft className="h-4 w-4" />
            RETOUR À LA COLLECTION
          </Link>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div
                className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
              >
                Votre sélection Kalis
              </div>
              <h1
                className="mb-5 max-w-4xl text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 300, lineHeight: 0.98 }}
              >
                Un panier pensé comme une mise en scène florale, net, doux et précis.
              </h1>
              <p
                className="max-w-2xl text-[#7A6A60]"
                style={{ fontSize: "16px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
              >
                Vérifiez les volumes, ajustez la livraison et laissez l&apos;atelier préparer l&apos;ensemble avec le même soin que la composition.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Pièces", value: `${itemCount}`.padStart(2, "0") },
                { label: "Accompagnements", value: `${accompanimentCount}`.padStart(2, "0") },
                { label: "Sous-total", value: formatChf(subtotal) },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-[rgba(139,94,60,0.12)] bg-white/72 p-5 shadow-[0_18px_50px_rgba(44,36,32,0.06)] backdrop-blur-sm"
                >
                  <div
                    className="mb-2 tracking-[0.16em] uppercase text-[#8B5E3C]"
                    style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                  >
                    {stat.label}
                  </div>
                  <div
                    className="text-[#2C2420]"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 400, lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {hasItems ? (
              items.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="overflow-hidden rounded-[30px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] shadow-[0_22px_70px_rgba(44,36,32,0.08)]"
                >
                  <div className="grid gap-0 md:grid-cols-[280px_1fr]">
                    <div className="relative min-h-[280px] overflow-hidden bg-[#EADFD3]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.46),transparent_36%)]" />
                      <ImageWithFallback src={item.productImage} alt={item.productName} className="h-full w-full object-cover" />
                    </div>

                    <div className="p-6 lg:p-8">
                      <div className="mb-5 flex flex-col gap-4 border-b border-[rgba(139,94,60,0.12)] pb-5 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div
                            className="mb-2 tracking-[0.16em] uppercase text-[#8B5E3C]"
                            style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                          >
                            Bouquet réservé
                          </div>
                          <h2
                            className="mb-2 text-[#2C2420]"
                            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "40px", fontWeight: 400, lineHeight: 1 }}
                          >
                            {item.productName}
                          </h2>
                          <p
                            className="text-[#7A6A60]"
                            style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.7 }}
                          >
                            Taille {item.sizeLabel} avec finition atelier et sélection florale du jour.
                          </p>
                        </div>

                        <div className="text-left md:text-right">
                          <div
                            className="mb-1 tracking-[0.16em] uppercase text-[#8B5E3C]"
                            style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                          >
                            Total ligne
                          </div>
                          <div
                            className="text-[#8B5E3C]"
                            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "38px", fontWeight: 400, lineHeight: 1 }}
                          >
                            {formatChf(item.unitTotal * item.quantity)}
                          </div>
                          <div
                            className="mt-1 text-[#7A6A60]"
                            style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                          >
                            {formatChf(item.unitTotal)} par pièce
                          </div>
                        </div>
                      </div>

                      <div className="mb-5 grid gap-4 md:grid-cols-2">
                        <div className="rounded-[22px] bg-[#F7EFE6] p-5">
                          <div
                            className="mb-2 tracking-[0.16em] uppercase text-[#8B5E3C]"
                            style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                          >
                            Composition
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-3 text-[#5F4B3E]">
                              <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                                Base florale {item.sizeLabel}
                              </span>
                              <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}>
                                {formatChf(item.baseAmount)}
                              </span>
                            </div>
                            {item.accompaniments.map((accompaniment) => (
                              <div key={accompaniment.id} className="flex items-center justify-between gap-3 text-[#5F4B3E]">
                                <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                                  {accompaniment.label}
                                </span>
                                <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}>
                                  {formatChf(accompaniment.amount)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-[22px] border border-[rgba(139,94,60,0.12)] bg-white p-5">
                          <div
                            className="mb-2 tracking-[0.16em] uppercase text-[#8B5E3C]"
                            style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                          >
                            Quantité
                          </div>
                          <div className="mb-4 flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7EFE6] text-[#8B5E3C] transition-colors hover:bg-[#F1E2D2]"
                              aria-label={`Réduire la quantité de ${item.productName}`}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <div
                              className="min-w-8 text-center text-[#2C2420]"
                              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "30px", fontWeight: 500 }}
                            >
                              {item.quantity}
                            </div>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7EFE6] text-[#8B5E3C] transition-colors hover:bg-[#F1E2D2]"
                              aria-label={`Augmenter la quantité de ${item.productName}`}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
                            style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.08em" }}
                          >
                            <Trash2 className="h-4 w-4" />
                            RETIRER CETTE PIECE
                          </button>
                        </div>
                      </div>

                      {(() => {
                        const product = products.find((entry) => entry.slug === item.productSlug);
                        const selectedIds = new Set(item.accompaniments.map((entry) => entry.id));
                        const quickAdds = product?.accompaniments?.filter((entry) => !selectedIds.has(entry.id)).slice(0, 4) ?? [];

                        if (quickAdds.length === 0) {
                          return null;
                        }

                        return (
                          <div className="mb-5 rounded-[22px] border border-[rgba(139,94,60,0.12)] bg-[#FCF8F3] p-4">
                            <div
                              className="mb-3 tracking-[0.16em] uppercase text-[#8B5E3C]"
                              style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                            >
                              Ajouter aussi
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                              {quickAdds.map((entry) => {
                                const amount = entry.variations?.[0]?.amount ?? entry.amount ?? 0;
                                const detail = entry.variations?.[0]?.label;

                                return (
                                  <button
                                    key={entry.id}
                                    type="button"
                                    onClick={() => addCrossProduct(item.id, entry.id)}
                                    className="rounded-[18px] border border-[rgba(139,94,60,0.12)] bg-white px-4 py-3 text-left transition-all duration-300 hover:border-[#8B5E3C] hover:bg-[#F8EEE4]"
                                  >
                                    <div
                                      className="mb-1 text-[#2C2420]"
                                      style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 400, lineHeight: 1.4 }}
                                    >
                                      {entry.name}
                                    </div>
                                    <div
                                      className="mb-2 text-[#7A6A60]"
                                      style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
                                    >
                                      {detail ? `${detail} · ${entry.note}` : entry.note}
                                    </div>
                                    <div className="flex items-center justify-between gap-3">
                                      <span
                                        className="text-[#8B5E3C]"
                                        style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                                      >
                                        {amount > 0 ? `+ ${formatChf(amount)}` : entry.price}
                                      </span>
                                      <span
                                        className="text-[#8B5E3C]"
                                        style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.12em" }}
                                      >
                                        AJOUTER
                                      </span>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })()}

                      <Link
                        to={`/produit/${item.productSlug}`}
                        className="inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
                        style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.12em" }}
                      >
                        REVOIR LE BOUQUET
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="rounded-[34px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] px-8 py-14 text-center shadow-[0_22px_70px_rgba(44,36,32,0.06)]">
                <div className="mx-auto mb-5 flex h-18 w-18 items-center justify-center rounded-full bg-[#F3E7DB] text-[#8B5E3C]">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <div
                  className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
                  style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
                >
                  Panier vide
                </div>
                <h2
                  className="mb-4 text-[#2C2420]"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(38px,5vw,56px)", fontWeight: 300, lineHeight: 1 }}
                >
                  Votre sélection attend son premier bouquet.
                </h2>
                <p
                  className="mx-auto mb-8 max-w-2xl text-[#7A6A60]"
                  style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
                >
                  Parcourez la collection, choisissez un format et composez un geste floral complet avec les accompagnements de l&apos;atelier.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-[2px] bg-[#8B5E3C] px-6 py-4 text-white transition-all duration-300 hover:bg-[#5C3D2E]"
                  style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                >
                  DÉCOUVRIR LES BOUQUETS
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-3">
              {editorialNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-[24px] border border-[rgba(139,94,60,0.12)] bg-white/70 p-5 text-[#5F4B3E]"
                  style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.75 }}
                >
                  {note}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[30px] bg-[#2C2420] p-7 text-[#F5F0E8] shadow-[0_24px_70px_rgba(44,36,32,0.18)] lg:p-8">
              <div className="mb-6 flex items-start justify-between gap-4 border-b border-white/12 pb-6">
                <div>
                  <div
                    className="mb-2 tracking-[0.18em] uppercase text-[#C4956A]"
                    style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                  >
                    Finalisation
                  </div>
                  <h2
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "44px", fontWeight: 300, lineHeight: 1 }}
                  >
                    Récapitulatif
                  </h2>
                </div>
                {hasItems && (
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-[#D8C6B7] transition-colors hover:text-white"
                    style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.12em" }}
                  >
                    VIDER
                  </button>
                )}
              </div>

              <div className="mb-6 space-y-3">
                {deliveryOptions.map((option) => {
                  const isActive = option.id === selectedDelivery;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedDelivery(option.id)}
                      className={`w-full rounded-[22px] border px-4 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-[#C4956A] bg-white/8"
                          : "border-white/10 bg-white/[0.03] hover:border-white/30"
                      }`}
                    >
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <div>
                          <div
                            className="text-[#F5F0E8]"
                            style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                          >
                            {option.title}
                          </div>
                          <div
                            className="mt-1 text-[#D8C6B7]"
                            style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                          >
                            {option.delay}
                          </div>
                        </div>
                        <div
                          className="text-[#F5F0E8]"
                          style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                        >
                          {option.amount === 0 ? "Offert" : formatChf(option.amount)}
                        </div>
                      </div>
                      <p
                        className="text-[#D8C6B7]"
                        style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.7 }}
                      >
                        {option.note}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="space-y-3 border-t border-white/12 pt-5">
                <div className="flex items-center justify-between gap-4 text-[#D8C6B7]">
                  <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>Sous-total</span>
                  <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}>{formatChf(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-[#D8C6B7]">
                  <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>Livraison</span>
                  <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}>
                    {delivery.amount === 0 ? "Offert" : formatChf(delivery.amount)}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 border-t border-white/12 pt-4">
                  <div>
                    <div
                      className="mb-1 tracking-[0.18em] uppercase text-[#C4956A]"
                      style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                    >
                      Total estimé
                    </div>
                    <div
                      className="text-[#F5F0E8]"
                      style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "46px", fontWeight: 300, lineHeight: 1 }}
                    >
                      {formatChf(total)}
                    </div>
                  </div>
                  <div
                    className="text-right text-[#D8C6B7]"
                    style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
                  >
                    {itemCount} pièce{itemCount > 1 ? "s" : ""}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href={`mailto:bonjour@kalis.com?subject=${encodeURIComponent("Finalisation panier Kalis")}`}
                  className="inline-flex items-center justify-center rounded-[2px] bg-[#C4956A] px-6 py-4 text-[#2C2420] transition-all duration-300 hover:bg-[#D9AA7C]"
                  style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                >
                  FINALISER AVEC L&apos;ATELIER
                </a>
                <a
                  href="tel:+41223106714"
                  className="inline-flex items-center justify-center rounded-[2px] border border-white/20 px-6 py-4 text-white transition-all duration-300 hover:bg-white hover:text-[#2C2420]"
                  style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                >
                  APPELER LA BOUTIQUE
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] p-6">
              <div className="mb-4 flex items-center gap-3 text-[#8B5E3C]">
                <ShieldCheck className="h-5 w-5" />
                <div
                  className="tracking-[0.16em] uppercase"
                  style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                >
                  Ce que l&apos;atelier garantit
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Truck, title: "Livraison suivie", text: "Chaque départ est coordonné avec l'état du bouquet et le bon timing." },
                  { icon: Clock3, title: "Préparation récente", text: "Assemblage en atelier au plus proche du créneau choisi." },
                  { icon: Gift, title: "Présentation complète", text: "Ruban, emballage et accompagnements harmonisés avec votre sélection." },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-[22px] bg-[#F8EEE4] p-4">
                    <div className="mb-2 flex items-center gap-3 text-[#5C3D2E]">
                      <Icon className="h-4 w-4" />
                      <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}>{title}</span>
                    </div>
                    <p
                      className="text-[#7A6A60]"
                      style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.7 }}
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] px-6 py-18 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div
                className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
              >
                Pour prolonger le geste
              </div>
              <h2
                className="text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 300 }}
              >
                D&apos;autres compositions dans la même respiration.
              </h2>
            </div>
            <Link
              to="/"
              className="text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
              style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
            >
              VOIR LA COLLECTION
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {suggestedProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="overflow-hidden rounded-[24px] border border-[rgba(139,94,60,0.1)] bg-white shadow-[0_18px_40px_rgba(44,36,32,0.06)]"
              >
                <ImageWithFallback src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover" />
                <div className="p-5">
                  <h3
                    className="mb-2 text-[#2C2420]"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "30px", fontWeight: 400 }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="mb-3 text-[#7A6A60]"
                    style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.7 }}
                  >
                    {product.desc}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="text-[#8B5E3C]"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                    >
                      {product.price}
                    </span>
                    {product.slug && (
                      <Link
                        to={`/produit/${product.slug}`}
                        className="text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
                        style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.12em" }}
                      >
                        VOIR
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
