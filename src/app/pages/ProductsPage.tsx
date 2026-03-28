import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Flower2, Sparkles, Truck } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { products } from "../data/products";

const curationNotes = [
  {
    label: "Saisonnalité",
    text: "Des volumes et des textures qui suivent l’arrivage, la lumière et la tenue des fleurs.",
  },
  {
    label: "Style atelier",
    text: "Des compositions souples, aérées et nettes, jamais figées ni trop démonstratives.",
  },
  {
    label: "Livraison Genève",
    text: "Préparation à l’atelier puis départ coordonné selon le créneau et la fraîcheur de la pièce.",
  },
];

export function ProductsPage() {
  const featured = products[0];
  const availableProducts = products.filter((product) => product.slug);
  const secondaryProducts = products.filter((product) => !product.slug);

  return (
    <main className="bg-[#F5F0E8]">
      <section className="relative overflow-hidden border-b border-[rgba(139,94,60,0.12)] bg-[linear-gradient(180deg,#fdfaf6_0%,#f5f0e8_100%)] px-6 py-12 lg:px-16 lg:py-16">
        <div className="absolute left-[-80px] top-[120px] h-[280px] w-[280px] rounded-full bg-[#EAD7C8] opacity-70 blur-3xl" />
        <div className="absolute right-[4%] top-[-30px] h-[320px] w-[320px] rounded-full bg-[#E7D6C8] opacity-60 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px]">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
            style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}
          >
            <ArrowLeft className="h-4 w-4" />
            RETOUR À L’ACCUEIL
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <div
                className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
              >
                Sélection de bouquets
              </div>
              <h1
                className="mb-5 max-w-4xl text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(52px, 8vw, 92px)", fontWeight: 300, lineHeight: 0.96 }}
              >
                Choisir une pièce florale comme on choisit une silhouette.
              </h1>
              <p
                className="max-w-2xl text-[#7A6A60]"
                style={{ fontSize: "16px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
              >
                Des bouquets pensés par tonalité, présence et geste. Certains sont prêts à être configurés en ligne,
                d’autres ouvrent déjà la direction artistique de la collection.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Flower2, label: "Bouquets visibles", value: `${products.length}`.padStart(2, "0") },
                { icon: Sparkles, label: "Configurables", value: `${availableProducts.length}`.padStart(2, "0") },
                { icon: Truck, label: "Retrait & livraison", value: "Genève" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-[24px] border border-[rgba(139,94,60,0.12)] bg-white/72 p-5 shadow-[0_18px_50px_rgba(44,36,32,0.06)] backdrop-blur-sm"
                >
                  <Icon className="mb-3 h-4 w-4 text-[#8B5E3C]" />
                  <div
                    className="mb-2 tracking-[0.16em] uppercase text-[#8B5E3C]"
                    style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                  >
                    {label}
                  </div>
                  <div
                    className="text-[#2C2420]"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 400, lineHeight: 1 }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-16 lg:py-18">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[34px] bg-[#2C2420] text-[#F5F0E8] shadow-[0_28px_80px_rgba(44,36,32,0.18)]"
          >
            <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
              <div className="p-8 lg:p-10">
                <div
                  className="mb-4 tracking-[0.18em] uppercase text-[#C4956A]"
                  style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                >
                  Mise en avant
                </div>
                <h2
                  className="mb-4"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(38px,5vw,58px)", fontWeight: 300, lineHeight: 1 }}
                >
                  {featured.name}
                </h2>
                <p
                  className="mb-6 max-w-xl text-[#D8C6B7]"
                  style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.85 }}
                >
                  {featured.intro}
                </p>
                <div className="mb-8 flex flex-wrap gap-3">
                  {[featured.palette, featured.stemCount, featured.availability].map((detail) => (
                    <div
                      key={detail}
                      className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[#F5F0E8]"
                      style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                    >
                      {detail}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    to={`/produit/${featured.slug}`}
                    className="inline-flex items-center justify-center rounded-[2px] bg-[#C4956A] px-6 py-4 text-[#2C2420] transition-all duration-300 hover:bg-[#D8A97B]"
                    style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                  >
                    VOIR LE BOUQUET
                  </Link>
                  <div
                    className="text-[#D8C6B7]"
                    style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                  >
                    À partir de {featured.price}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[340px] bg-[#EADFD3]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_36%)]" />
                <ImageWithFallback src={featured.image} alt={featured.name} className="h-full w-full object-cover" />
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {curationNotes.map((note, index) => (
              <motion.div
                key={note.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 * index }}
                className="rounded-[26px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] p-6 shadow-[0_18px_50px_rgba(44,36,32,0.05)]"
              >
                <div
                  className="mb-3 tracking-[0.16em] uppercase text-[#8B5E3C]"
                  style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                >
                  {note.label}
                </div>
                <p
                  className="text-[#5F4B3E]"
                  style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
                >
                  {note.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div
                className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
              >
                Bouquets à découvrir
              </div>
              <h2
                className="text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(38px, 5vw, 58px)", fontWeight: 300 }}
              >
                La sélection complète.
              </h2>
            </div>
            <p
              className="max-w-xl text-[#7A6A60]"
              style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
            >
              Les pièces configurables permettent de choisir le format et d’ajouter des attentions complémentaires.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => {
              const isConfigurable = Boolean(product.slug);

              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group overflow-hidden rounded-[28px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] shadow-[0_18px_50px_rgba(44,36,32,0.06)]"
                >
                  <div className="relative aspect-[4/4.8] overflow-hidden bg-[#EADFD3]">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(44,36,32,0.28)_100%)]" />
                    {product.badge && (
                      <div
                        className="absolute left-4 top-4 rounded-full bg-[#8B5E3C] px-3 py-1 text-white uppercase tracking-[0.12em]"
                        style={{ fontSize: "9px", fontFamily: "Jost, sans-serif" }}
                      >
                        {product.badge}
                      </div>
                    )}
                    <div
                      className="absolute bottom-4 left-4 rounded-full bg-white/92 px-4 py-2 text-[#8B5E3C] shadow-lg backdrop-blur-sm"
                      style={{ fontSize: "10px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                    >
                      {isConfigurable ? "CONFIGURABLE" : "INSPIRATION ATELIER"}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3
                        className="text-[#2C2420]"
                        style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "32px", fontWeight: 400, lineHeight: 1 }}
                      >
                        {product.name}
                      </h3>
                      <span
                        className="text-[#8B5E3C]"
                        style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 400, whiteSpace: "nowrap" }}
                      >
                        {product.price}
                      </span>
                    </div>
                    <p
                      className="mb-5 text-[#7A6A60]"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
                    >
                      {product.desc}
                    </p>

                    {isConfigurable ? (
                      <Link
                        to={`/produit/${product.slug}`}
                        className="inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
                        style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                      >
                        SÉLECTIONNER CE BOUQUET
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <div
                        className="text-[#7A6A60]"
                        style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.08em" }}
                      >
                        Bientôt configurable en ligne
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {secondaryProducts.length > 0 && (
        <section className="border-t border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] px-6 py-16 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-8">
              <div
                className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
              >
                À venir en ligne
              </div>
              <h2
                className="text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(34px, 4.6vw, 50px)", fontWeight: 300 }}
              >
                Des silhouettes déjà présentes à l’atelier.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {secondaryProducts.map((product) => (
                <div
                  key={product.name}
                  className="rounded-[24px] border border-[rgba(139,94,60,0.1)] bg-white p-4 shadow-[0_14px_34px_rgba(44,36,32,0.04)]"
                >
                  <ImageWithFallback src={product.image} alt={product.name} className="mb-4 aspect-[4/4.8] w-full rounded-[18px] object-cover" />
                  <h3
                    className="mb-2 text-[#2C2420]"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "28px", fontWeight: 400 }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="mb-3 text-[#7A6A60]"
                    style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.7 }}
                  >
                    {product.desc}
                  </p>
                  <div
                    className="text-[#8B5E3C]"
                    style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                  >
                    {product.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
