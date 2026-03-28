import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Flame, Flower2, Gift, Mail, MapPin, Minus, Plus, Sparkles, Truck } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { formatChf, parseAmountFromPrice } from "../lib/price";

export function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find((item) => item.slug === slug);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]?.label ?? "");
  const [quantity, setQuantity] = useState(1);
  const [selectedAccompaniments, setSelectedAccompaniments] = useState<Record<string, boolean>>({});
  const [selectedVariations, setSelectedVariations] = useState<Record<string, string>>({});

  if (!product || !product.slug || !product.sizes) {
    return (
      <main className="bg-[#F5F0E8] px-6 py-24 lg:px-16">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-[rgba(139,94,60,0.14)] bg-[#FDFAF6] px-8 py-16 text-center shadow-[0_24px_80px_rgba(44,36,32,0.08)]">
          <div
            className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
            style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
          >
            Produit introuvable
          </div>
          <h1
            className="mb-4 text-[#2C2420]"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(42px, 6vw, 64px)", fontWeight: 300 }}
          >
            Cette creation n&apos;est plus disponible.
          </h1>
          <p
            className="mx-auto mb-8 max-w-xl text-[#7A6A60]"
            style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
          >
            Nous pouvons composer une alternative dans le même esprit floral depuis la collection actuelle.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-[2px] border border-[#8B5E3C] px-6 py-3 text-[#8B5E3C] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white"
            style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
          >
            <ArrowLeft className="h-4 w-4" />
            RETOUR A LA COLLECTION
          </Link>
        </div>
      </main>
    );
  }

  const activeSize = product.sizes.find((size) => size.label === selectedSize) ?? product.sizes[0];
  const relatedProducts = products.filter((item) => item.name !== product.name).slice(0, 3);
  const accompaniments = product.accompaniments ?? [];
  const baseAmount = activeSize.amount ?? parseAmountFromPrice(activeSize.price);

  const toggleAccompaniment = (id: string) => {
    const accompaniment = accompaniments.find((item) => item.id === id);

    if (!accompaniment) {
      return;
    }

    setSelectedAccompaniments((current) => {
      const nextValue = !current[id];

      if (nextValue && accompaniment.variations?.length && !selectedVariations[id]) {
        setSelectedVariations((variationState) => ({
          ...variationState,
          [id]: accompaniment.variations![0].id,
        }));
      }

      return {
        ...current,
        [id]: nextValue,
      };
    });
  };

  const selectedAccompanimentDetails = useMemo(
    () =>
      accompaniments
        .filter((item) => selectedAccompaniments[item.id])
        .map((item) => {
          const selectedVariationId = selectedVariations[item.id];
          const selectedVariation =
            item.variations?.find((variation) => variation.id === selectedVariationId) ?? item.variations?.[0];

          return {
            id: item.id,
            detailLabel: selectedVariation ? `${item.name} · ${selectedVariation.label}` : item.name,
            amount: selectedVariation?.amount ?? item.amount ?? 0,
          };
        }),
    [accompaniments, selectedAccompaniments, selectedVariations],
  );

  const unitTotal = baseAmount + selectedAccompanimentDetails.reduce((sum, item) => sum + item.amount, 0);
  const total = unitTotal * quantity;

  const handleAddToCart = () => {
    addItem({
      productSlug: product.slug,
      productName: product.name,
      productImage: product.image,
      quantity,
      sizeLabel: activeSize.label,
      baseAmount,
      unitTotal,
      accompaniments: selectedAccompanimentDetails.map((item) => ({
        id: item.id,
        label: item.detailLabel,
        amount: item.amount,
      })),
    });

    navigate("/panier");
  };

  const accompanimentVisuals = {
    bear: {
      icon: Gift,
      gradient: "from-[#E9DBC8] via-[#D3B792] to-[#B89469]",
      title: "Peluche",
    },
    citronella: {
      icon: Flame,
      gradient: "from-[#EEF2C7] via-[#C8D56C] to-[#8E9D3C]",
      title: "Citronnelle",
    },
    candle: {
      icon: Sparkles,
      gradient: "from-[#F3E6D5] via-[#D8B68B] to-[#7C5C3B]",
      title: "Bougie",
    },
    card: {
      icon: Mail,
      gradient: "from-[#F7EFE2] via-[#E6D7BF] to-[#C7AF87]",
      title: "Carte",
    },
  } as const;

  return (
    <main className="bg-[#F5F0E8]">
      <section className="relative overflow-hidden border-b border-[rgba(139,94,60,0.12)] bg-[linear-gradient(180deg,#fdfaf6_0%,#f5f0e8_100%)] px-6 py-10 lg:px-16 lg:py-14">
        <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-[#E8D8CA] blur-3xl opacity-60" />
        <div className="absolute left-[-60px] top-[140px] h-[240px] w-[240px] rounded-full bg-[#EED9D0] blur-3xl opacity-50" />

        <div className="relative mx-auto max-w-[1400px]">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
            style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}
          >
            <ArrowLeft className="h-4 w-4" />
            RETOUR AUX BOUQUETS
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-[28px] bg-[#EADFD3] shadow-[0_30px_90px_rgba(44,36,32,0.14)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_35%)]" />
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="h-full min-h-[420px] w-full object-cover lg:min-h-[760px]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -24, y: 24 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative -mt-16 ml-auto hidden max-w-[300px] rounded-[24px] border border-white/70 bg-[#FDFAF6] p-4 shadow-[0_20px_60px_rgba(44,36,32,0.14)] md:block lg:-mr-8"
              >
                <div className="overflow-hidden rounded-[18px]">
                  <ImageWithFallback
                    src={product.secondaryImage ?? product.image}
                    alt={`${product.name} detail`}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="px-2 pb-2 pt-4">
                  <div
                    className="mb-2 tracking-[0.16em] uppercase text-[#8B5E3C]"
                    style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                  >
                    Atelier detail
                  </div>
                  <p
                    className="text-[#7A6A60]"
                    style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.7 }}
                  >
                    Un ruban souple, une ouverture progressive et un volume pensé pour être beau dès le premier regard.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="lg:sticky lg:top-28"
            >
              <div
                className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
              >
                {product.badge ?? "Collection signature"}
              </div>
              <h1
                className="mb-4 text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(48px, 7vw, 82px)", fontWeight: 300, lineHeight: 1 }}
              >
                {product.name}
              </h1>
              <p
                className="mb-6 max-w-xl text-[#7A6A60]"
                style={{ fontSize: "17px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
              >
                {product.intro}
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                {[
                  { icon: Sparkles, label: product.palette },
                  { icon: Flower2, label: product.stemCount },
                  { icon: Truck, label: product.availability },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="inline-flex min-h-[56px] items-center gap-3 rounded-full border border-[rgba(139,94,60,0.14)] bg-white/70 px-5 py-3 text-[#5F4B3E] backdrop-blur-sm"
                  >
                    <Icon className="h-4 w-4 text-[#8B5E3C]" />
                    <span style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-6 rounded-[28px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] p-6 shadow-[0_18px_60px_rgba(44,36,32,0.08)]">
                <div className="mb-5 flex items-end justify-between gap-4 border-b border-[rgba(139,94,60,0.12)] pb-5">
                  <div>
                    <div
                      className="mb-1 tracking-[0.16em] uppercase text-[#8B5E3C]"
                      style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                    >
                      A partir de
                    </div>
                    <div
                      className="text-[#2C2420]"
                      style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "44px", fontWeight: 400, lineHeight: 1 }}
                    >
                      {activeSize.price}
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-[#F3E7DB] px-4 py-2 text-[#8B5E3C]"
                    style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                  >
                    PIECE MONTEE A LA MAIN
                  </div>
                </div>

                <div className="mb-6 grid gap-3">
                  {product.sizes.map((size) => {
                    const isActive = size.label === activeSize.label;

                    return (
                      <button
                        key={size.label}
                        type="button"
                        onClick={() => setSelectedSize(size.label)}
                        className={`rounded-[20px] border px-4 py-4 text-left transition-all duration-300 ${
                          isActive
                            ? "border-[#8B5E3C] bg-[#8B5E3C] text-white shadow-lg"
                            : "border-[rgba(139,94,60,0.14)] bg-white text-[#2C2420] hover:border-[#8B5E3C]"
                        }`}
                      >
                        <div className="mb-1 flex items-center justify-between gap-4">
                          <span style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}>
                            {size.label}
                          </span>
                          <span style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}>
                            {size.price}
                          </span>
                        </div>
                        <p
                          className={isActive ? "text-white/82" : "text-[#7A6A60]"}
                          style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.7 }}
                        >
                          {size.note}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {accompaniments.length > 0 && (
                  <div className="mb-6 border-t border-[rgba(139,94,60,0.12)] pt-6">
                    <div className="mb-4">
                      <div
                        className="mb-2 tracking-[0.16em] uppercase text-[#8B5E3C]"
                        style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                      >
                        Accompagnez votre bouquet
                      </div>
                      <p
                        className="text-[#7A6A60]"
                        style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.7 }}
                      >
                        Les options s&apos;adaptent à ce bouquet. Certaines s&apos;ajoutent directement, d&apos;autres proposent une variation.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {accompaniments.map((item) => {
                        const isActive = Boolean(selectedAccompaniments[item.id]);
                        const visual = accompanimentVisuals[item.visual];
                        const Icon = visual.icon;

                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => toggleAccompaniment(item.id)}
                            className={`overflow-hidden rounded-[22px] border text-left transition-all duration-300 ${
                              isActive
                                ? "border-[#8B5E3C] bg-[#F8EEE4] shadow-[0_14px_40px_rgba(44,36,32,0.08)]"
                                : "border-[rgba(139,94,60,0.12)] bg-white hover:border-[#8B5E3C]"
                            }`}
                          >
                            <div className={`relative h-32 bg-gradient-to-br ${visual.gradient}`}>
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_40%)]" />
                              <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[#8B5E3C] backdrop-blur-sm">
                                <span style={{ fontSize: "10px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}>
                                  {visual.title}
                                </span>
                              </div>
                              <div className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/82 text-[#5C3D2E] shadow-lg">
                                <Icon className="h-6 w-6" />
                              </div>
                            </div>

                            <div className="p-4">
                              <div className="mb-2 flex items-start justify-between gap-3">
                                <h3
                                  className="text-[#2C2420]"
                                  style={{ fontSize: "16px", fontFamily: "Jost, sans-serif", fontWeight: 400, lineHeight: 1.4 }}
                                >
                                  {item.name}
                                </h3>
                                <span
                                  className={isActive ? "text-[#8B5E3C]" : "text-[#7A6A60]"}
                                  style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                                >
                                  {item.price}
                                </span>
                              </div>
                              <p
                                className="text-[#7A6A60]"
                                style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.7 }}
                              >
                                {item.note}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {accompaniments
                      .filter((item) => selectedAccompaniments[item.id] && item.variations?.length)
                      .map((item) => {
                        const selectedVariationId = selectedVariations[item.id] ?? item.variations?.[0]?.id ?? "";

                        return (
                          <div
                            key={item.id}
                            className="mt-4 rounded-[22px] border border-[rgba(139,94,60,0.12)] bg-white px-4 py-4"
                          >
                            <label
                              htmlFor={`variation-${item.id}`}
                              className="mb-2 block text-[#2C2420]"
                              style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                            >
                              {item.variationLabel}
                            </label>
                            <select
                              id={`variation-${item.id}`}
                              value={selectedVariationId}
                              onChange={(event) =>
                                setSelectedVariations((current) => ({
                                  ...current,
                                  [item.id]: event.target.value,
                                }))
                              }
                              className="w-full rounded-[16px] border border-[rgba(139,94,60,0.16)] bg-[#FDFAF6] px-4 py-3 text-[#2C2420] focus:border-[#8B5E3C] focus:outline-none"
                              style={{ fontSize: "14px", fontFamily: "Jost, sans-serif" }}
                            >
                              {item.variations?.map((variation) => (
                                <option key={variation.id} value={variation.id}>
                                  {variation.label} · {variation.price}
                                </option>
                              ))}
                            </select>
                          </div>
                        );
                      })}
                  </div>
                )}

                <div className="mb-6 rounded-[24px] bg-[#F7EFE6] p-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <div
                        className="mb-1 tracking-[0.16em] uppercase text-[#8B5E3C]"
                        style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                      >
                        Total
                      </div>
                      <div
                        className="text-[#8B5E3C]"
                        style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "40px", fontWeight: 400, lineHeight: 1 }}
                      >
                        {formatChf(total)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className="text-[#7A6A60]"
                        style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.12em" }}
                      >
                        PAR BOUQUET
                      </div>
                      <div
                        className="text-[#2C2420]"
                        style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                      >
                        {formatChf(unitTotal)}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <div
                        className="mb-1 tracking-[0.16em] uppercase text-[#8B5E3C]"
                        style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                      >
                        Quantité
                      </div>
                      <div
                        className="text-[#7A6A60]"
                        style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                      >
                        Le total s&apos;ajuste avec les accompagnements choisis.
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#8B5E3C] shadow-sm transition-colors hover:bg-[#F3E7DB]"
                        aria-label="Réduire la quantité"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <div
                        className="min-w-8 text-center text-[#2C2420]"
                        style={{ fontSize: "22px", fontFamily: "Cormorant Garamond, serif", fontWeight: 500 }}
                      >
                        {quantity}
                      </div>
                      <button
                        type="button"
                        onClick={() => setQuantity((current) => current + 1)}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#8B5E3C] shadow-sm transition-colors hover:bg-[#F3E7DB]"
                        aria-label="Augmenter la quantité"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {selectedAccompanimentDetails.length > 0 && (
                    <div className="border-t border-[rgba(139,94,60,0.12)] pt-4">
                      <div
                        className="mb-3 tracking-[0.16em] uppercase text-[#8B5E3C]"
                        style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                      >
                        Sélection
                      </div>
                      <div className="space-y-2">
                        {selectedAccompanimentDetails.map((item) => (
                          <div key={item.id} className="flex items-center justify-between gap-4 text-[#5F4B3E]">
                            <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                              {item.detailLabel}
                            </span>
                            <span style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}>
                              {formatChf(item.amount)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="inline-flex flex-1 items-center justify-center rounded-[2px] bg-[#8B5E3C] px-6 py-4 text-white transition-all duration-300 hover:bg-[#5C3D2E]"
                    style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                  >
                    AJOUTER AU PANIER
                  </button>
                  <a
                    href={`mailto:bonjour@kalis.com?subject=${encodeURIComponent(`Demande ${product.name}`)}`}
                    className="inline-flex flex-1 items-center justify-center rounded-[2px] border border-[#8B5E3C] px-6 py-4 text-[#8B5E3C] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white"
                    style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                  >
                    DEMANDER UN CONSEIL
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Esprit floral",
                    text: "Romantique, profond et silencieux. Une presence qui reste chic meme en grand format.",
                  },
                  {
                    title: "Livraison",
                    text: "Genève centre le jour même selon le créneau de commande et la disponibilité atelier.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-[rgba(139,94,60,0.12)] bg-white/70 p-5"
                  >
                    <div
                      className="mb-2 tracking-[0.16em] uppercase text-[#8B5E3C]"
                      style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                    >
                      {item.title}
                    </div>
                    <p
                      className="text-[#7A6A60]"
                      style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.7 }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] bg-[#2C2420] p-8 text-[#F5F0E8] lg:p-10">
            <div
              className="mb-4 tracking-[0.18em] uppercase text-[#C4956A]"
              style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
            >
              L'esprit du bouquet
            </div>
            <p
              className="mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(34px, 5vw, 52px)", fontWeight: 300, lineHeight: 1.1 }}
            >
              Une déclaration florale qui garde du souffle et de la retenue.
            </p>
            <p
              className="max-w-lg text-[#D8C6B7]"
              style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
            >
              {product.story}
            </p>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] p-7">
                <div
                  className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
                  style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                >
                  Ce que vous retrouvez
                </div>
                <ul className="space-y-3">
                  {product.highlights?.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[rgba(139,94,60,0.08)] pb-3 text-[#2C2420] last:border-b-0 last:pb-0"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.7 }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-[rgba(139,94,60,0.12)] bg-[#F8EEE4] p-7">
                <div
                  className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
                  style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                >
                  Notes atelier
                </div>
                <ul className="space-y-3">
                  {product.details?.map((item) => (
                    <li
                      key={item}
                      className="text-[#5F4B3E]"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.75 }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[30px] border border-[rgba(139,94,60,0.12)] bg-white p-7 lg:p-8">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div
                    className="mb-2 tracking-[0.18em] uppercase text-[#8B5E3C]"
                    style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                  >
                    Livraison et soin
                  </div>
                  <h2
                    className="text-[#2C2420]"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(34px, 4vw, 46px)", fontWeight: 300 }}
                  >
                    Pensé pour être beau à l&apos;arrivée, puis les jours suivants.
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#F3E7DB] px-4 py-2 text-[#8B5E3C]">
                  <MapPin className="h-4 w-4" />
                  <span style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.12em" }}>
                    GENEVE ET ENVIRONS
                  </span>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {product.care?.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] bg-[#F9F4EE] p-5 text-[#5F4B3E]"
                    style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.75 }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div
                className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
              >
                A voir ensuite
              </div>
              <h2
                className="text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 300 }}
              >
                D&apos;autres bouquets dans le meme souffle.
              </h2>
            </div>
            <Link
              to="/"
              className="text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
              style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
            >
              RETOUR A LA COLLECTION
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-[24px] border border-[rgba(139,94,60,0.1)] bg-white shadow-[0_18px_40px_rgba(44,36,32,0.06)]"
              >
                <div className="overflow-hidden">
                  <ImageWithFallback src={item.image} alt={item.name} className="aspect-[4/5] w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3
                    className="mb-2 text-[#2C2420]"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "28px", fontWeight: 400 }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="mb-3 text-[#7A6A60]"
                    style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                  >
                    {item.desc}
                  </p>
                  <div
                    className="text-[#8B5E3C]"
                    style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                  >
                    {item.price}
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
