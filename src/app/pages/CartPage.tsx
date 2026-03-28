import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock3, Flame, Gift, Mail, Minus, Plus, ShieldCheck, ShoppingBag, Sparkles, Trash2, Truck } from "lucide-react";
import { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { formatChf } from "../lib/price";

const deliveryOptions = [
  {
    id: "atelier",
    title: "Retrait atelier",
    delay: "Aujourd'hui dès 14h",
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
    note: "Traitement prioritaire pour une attention de dernière minute.",
    amount: 32,
  },
] as const;

const accompanimentVisuals: Record<string, { icon: typeof Gift; gradient: string }> = {
  bear: { icon: Gift, gradient: "from-[#E9DBC8] to-[#B89469]" },
  citronella: { icon: Flame, gradient: "from-[#EEF2C7] to-[#8E9D3C]" },
  candle: { icon: Sparkles, gradient: "from-[#F3E6D5] to-[#7C5C3B]" },
  card: { icon: Mail, gradient: "from-[#F7EFE2] to-[#C7AF87]" },
};

export function CartPage() {
  const { items, subtotal, itemCount, replaceItem, updateQuantity, removeItem, clearCart } = useCart();
  const [selectedDelivery, setSelectedDelivery] = useState<(typeof deliveryOptions)[number]["id"]>("geneve");

  const delivery = deliveryOptions.find((option) => option.id === selectedDelivery) ?? deliveryOptions[1];
  const total = subtotal + delivery.amount;
  const hasItems = items.length > 0;

  const accompanimentCount = useMemo(
    () => items.reduce((sum, item) => sum + item.accompaniments.length, 0),
    [items],
  );

  const crossSellProducts = useMemo(() => {
    const cartSlugs = new Set(items.map((item) => item.productSlug));
    return products.filter((p) => !cartSlugs.has(p.slug ?? "")).slice(0, 4);
  }, [items]);

  const addCrossProduct = (itemId: string, accompanimentId: string) => {
    const currentItem = items.find((entry) => entry.id === itemId);
    if (!currentItem) return;

    const product = products.find((entry) => entry.slug === currentItem.productSlug);
    const accompaniment = product?.accompaniments?.find((entry) => entry.id === accompanimentId);
    if (!product || !accompaniment) return;

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
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[rgba(139,94,60,0.12)] bg-[linear-gradient(180deg,#fdfaf6_0%,#f5f0e8_100%)] px-6 py-12 lg:px-16 lg:py-16">
        <div className="absolute left-[-60px] top-[120px] h-[240px] w-[240px] rounded-full bg-[#E9D9CC] opacity-70 blur-3xl" />
        <div className="absolute right-[6%] top-[-40px] h-[300px] w-[300px] rounded-full bg-[#E7D4C3] opacity-60 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px]">
          <Link
            to="/collection"
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
                Votre sélection
              </div>
              <h1
                className="mb-5 max-w-3xl text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(44px, 6vw, 76px)", fontWeight: 300, lineHeight: 1 }}
              >
                Votre panier Kalis.
              </h1>
              <p
                className="max-w-xl text-[#7A6A60]"
                style={{ fontSize: "16px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
              >
                Vérifiez votre sélection, ajustez la livraison et laissez l'atelier préparer l'ensemble avec soin.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Pièces", value: `${itemCount}`.padStart(2, "0") },
                { label: "Accompagnements", value: `${accompanimentCount}`.padStart(2, "0") },
                { label: "Sous-total", value: hasItems ? formatChf(subtotal) : "—" },
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

      {/* Cart Content */}
      <section className="px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column - Items */}
          <div className="space-y-6">
            {hasItems ? (
              items.map((item, index) => {
                const product = products.find((entry) => entry.slug === item.productSlug);
                const selectedIds = new Set(item.accompaniments.map((entry) => entry.id));
                const quickAdds = product?.accompaniments?.filter((entry) => !selectedIds.has(entry.id)).slice(0, 4) ?? [];

                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="overflow-hidden rounded-[30px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] shadow-[0_22px_70px_rgba(44,36,32,0.08)]"
                  >
                    {/* Product Header */}
                    <div className="grid gap-0 md:grid-cols-[240px_1fr]">
                      <div className="relative min-h-[240px] overflow-hidden bg-[#EADFD3]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.46),transparent_36%)]" />
                        <ImageWithFallback src={item.productImage} alt={item.productName} className="h-full w-full object-cover" />
                      </div>

                      <div className="p-6 lg:p-8">
                        <div className="mb-4 flex flex-col gap-3 border-b border-[rgba(139,94,60,0.12)] pb-4 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <div
                              className="mb-1 tracking-[0.16em] uppercase text-[#8B5E3C]"
                              style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                            >
                              Bouquet réservé
                            </div>
                            <h2
                              className="mb-1 text-[#2C2420]"
                              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "34px", fontWeight: 400, lineHeight: 1.1 }}
                            >
                              {item.productName}
                            </h2>
                            <p
                              className="text-[#7A6A60]"
                              style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                            >
                              Taille {item.sizeLabel} · finition atelier
                            </p>
                          </div>
                          <div className="text-left sm:text-right shrink-0">
                            <div
                              className="text-[#2C2420]"
                              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "34px", fontWeight: 400, lineHeight: 1 }}
                            >
                              {formatChf(item.unitTotal * item.quantity)}
                            </div>
                            <div
                              className="mt-1 text-[#7A6A60]"
                              style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                            >
                              {formatChf(item.unitTotal)} par pièce
                            </div>
                          </div>
                        </div>

                        {/* Composition + Quantity */}
                        <div className="mb-4 grid gap-4 sm:grid-cols-2">
                          <div className="rounded-[18px] bg-[#F7EFE6] p-4">
                            <div
                              className="mb-2 tracking-[0.16em] uppercase text-[#8B5E3C]"
                              style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                            >
                              Composition
                            </div>
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between gap-3 text-[#5F4B3E]">
                                <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                                  Base florale {item.sizeLabel}
                                </span>
                                <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}>
                                  {formatChf(item.baseAmount)}
                                </span>
                              </div>
                              {item.accompaniments.map((acc) => (
                                <div key={acc.id} className="flex items-center justify-between gap-3 text-[#5F4B3E]">
                                  <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                                    {acc.label}
                                  </span>
                                  <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}>
                                    {formatChf(acc.amount)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col justify-between rounded-[18px] border border-[rgba(139,94,60,0.12)] bg-white p-4">
                            <div>
                              <div
                                className="mb-3 tracking-[0.16em] uppercase text-[#8B5E3C]"
                                style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                              >
                                Quantité
                              </div>
                              <div className="mb-3 flex items-center gap-3">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7EFE6] text-[#8B5E3C] transition-colors hover:bg-[#F1E2D2]"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <div
                                  className="min-w-8 text-center text-[#2C2420]"
                                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "26px", fontWeight: 500 }}
                                >
                                  {item.quantity}
                                </div>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7EFE6] text-[#8B5E3C] transition-colors hover:bg-[#F1E2D2]"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
                              style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.08em" }}
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                              RETIRER
                            </button>
                          </div>
                        </div>

                        {/* Quick-add accompaniments with visuals */}
                        {quickAdds.length > 0 && (
                          <div className="rounded-[18px] border border-[rgba(139,94,60,0.12)] bg-[#FCF8F3] p-4">
                            <div
                              className="mb-3 tracking-[0.16em] uppercase text-[#8B5E3C]"
                              style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                            >
                              Compléter votre bouquet
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2">
                              {quickAdds.map((entry) => {
                                const amount = entry.variations?.[0]?.amount ?? entry.amount ?? 0;
                                const visual = accompanimentVisuals[entry.visual] ?? accompanimentVisuals.card;
                                const Icon = visual.icon;

                                return (
                                  <button
                                    key={entry.id}
                                    type="button"
                                    onClick={() => addCrossProduct(item.id, entry.id)}
                                    className="group flex items-center gap-3 overflow-hidden rounded-[14px] border border-[rgba(139,94,60,0.12)] bg-white text-left transition-all duration-300 hover:border-[#8B5E3C] hover:shadow-[0_8px_24px_rgba(44,36,32,0.08)]"
                                  >
                                    <div className={`flex h-full w-16 shrink-0 items-center justify-center bg-gradient-to-br ${visual.gradient}`}>
                                      <Icon className="h-5 w-5 text-white/90" />
                                    </div>
                                    <div className="py-2.5 pr-3">
                                      <div
                                        className="mb-0.5 text-[#2C2420]"
                                        style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 400, lineHeight: 1.3 }}
                                      >
                                        {entry.name}
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <span
                                          className="text-[#8B5E3C]"
                                          style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                                        >
                                          +{formatChf(amount)}
                                        </span>
                                        <span
                                          className="text-[#8B5E3C] opacity-0 transition-opacity group-hover:opacity-100"
                                          style={{ fontSize: "10px", fontFamily: "Jost, sans-serif", letterSpacing: "0.1em" }}
                                        >
                                          AJOUTER
                                        </span>
                                      </div>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })
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
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(34px,5vw,52px)", fontWeight: 300, lineHeight: 1.05 }}
                >
                  Votre sélection attend son premier bouquet.
                </h2>
                <p
                  className="mx-auto mb-8 max-w-lg text-[#7A6A60]"
                  style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
                >
                  Parcourez la collection, choisissez un format et composez un geste floral complet.
                </p>
                <Link
                  to="/collection"
                  className="inline-flex items-center gap-2 rounded-[2px] bg-[#8B5E3C] px-6 py-4 text-white transition-all duration-300 hover:bg-[#5C3D2E]"
                  style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                >
                  DÉCOUVRIR LES BOUQUETS
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column - Recap */}
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
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "40px", fontWeight: 300, lineHeight: 1 }}
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

              {/* Delivery options */}
              <div className="mb-6 space-y-3">
                {deliveryOptions.map((option) => {
                  const isActive = option.id === selectedDelivery;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedDelivery(option.id)}
                      className={`w-full rounded-[18px] border px-4 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-[#C4956A] bg-white/8"
                          : "border-white/10 bg-white/[0.03] hover:border-white/30"
                      }`}
                    >
                      <div className="mb-1 flex items-start justify-between gap-3">
                        <div>
                          <div
                            className="text-[#F5F0E8]"
                            style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                          >
                            {option.title}
                          </div>
                          <div
                            className="mt-0.5 text-[#D8C6B7]"
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
                        className="text-[#9A8A7D]"
                        style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
                      >
                        {option.note}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Totals */}
              <div className="space-y-2.5 border-t border-white/12 pt-5">
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
                      style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "42px", fontWeight: 300, lineHeight: 1 }}
                    >
                      {formatChf(total)}
                    </div>
                  </div>
                  <div
                    className="text-right text-[#D8C6B7]"
                    style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                  >
                    {itemCount} pièce{itemCount !== 1 ? "s" : ""}
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 grid gap-3">
                <a
                  href={`mailto:bonjour@kalis.com?subject=${encodeURIComponent("Finalisation panier Kalis")}`}
                  className="inline-flex items-center justify-center rounded-[2px] bg-[#C4956A] px-6 py-4 text-[#2C2420] transition-all duration-300 hover:bg-[#D9AA7C]"
                  style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                >
                  FINALISER AVEC L'ATELIER
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

            {/* Guarantees */}
            <div className="rounded-[24px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] p-5">
              <div className="mb-3 flex items-center gap-2.5 text-[#8B5E3C]">
                <ShieldCheck className="h-4 w-4" />
                <div
                  className="tracking-[0.16em] uppercase"
                  style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                >
                  Garanties atelier
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  { icon: Truck, text: "Livraison suivie et coordonnée avec la fraîcheur du bouquet" },
                  { icon: Clock3, text: "Assemblage en atelier au plus proche du créneau choisi" },
                  { icon: Gift, text: "Ruban, emballage et accompagnements harmonisés" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3 rounded-[14px] bg-[#F8EEE4] p-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#8B5E3C]" />
                    <p
                      className="text-[#5F4B3E]"
                      style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.5 }}
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

      {/* Cross-sell Section */}
      <section className="border-t border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div
                className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
              >
                Vous aimerez aussi
              </div>
              <h2
                className="text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(34px, 4.5vw, 50px)", fontWeight: 300 }}
              >
                D'autres compositions à découvrir.
              </h2>
            </div>
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
              style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
            >
              VOIR TOUTE LA COLLECTION
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {crossSellProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[24px] border border-[rgba(139,94,60,0.1)] bg-white shadow-[0_18px_40px_rgba(44,36,32,0.06)]"
              >
                <div className="relative aspect-[4/4.5] overflow-hidden bg-[#EADFD3]">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(44,36,32,0.25)_100%)]" />
                  {product.badge && (
                    <div
                      className="absolute left-3 top-3 rounded-full bg-[#8B5E3C] px-2.5 py-1 text-white uppercase tracking-[0.12em]"
                      style={{ fontSize: "9px", fontFamily: "Jost, sans-serif" }}
                    >
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3
                    className="mb-1.5 text-[#2C2420]"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "26px", fontWeight: 400, lineHeight: 1.1 }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="mb-3 text-[#7A6A60]"
                    style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
                  >
                    {product.desc}
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="text-[#8B5E3C]"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                    >
                      {product.price}
                    </span>
                    {product.slug ? (
                      <Link
                        to={`/produit/${product.slug}`}
                        className="inline-flex items-center gap-1.5 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
                        style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.12em" }}
                      >
                        CONFIGURER
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <span
                        className="text-[#7A6A60]"
                        style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.06em" }}
                      >
                        BIENTÔT
                      </span>
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
