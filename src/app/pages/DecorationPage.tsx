import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Flame, Gift, Heart, Lamp, Sparkles, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categories = [
  {
    title: "Bougies parfumées",
    description: "Des cires naturelles aux notes ambrées, florales ou boisées, coulées à la main dans notre atelier genevois.",
    image: "https://kalis.com/wp-content/uploads/2018/12/5-600x600.png",
    tag: "ATELIER KALIS",
    icon: Flame,
    gradient: "from-[#F3E6D5] via-[#D8B68B] to-[#7C5C3B]",
    items: ["Bougie Ambre & Figue", "Bougie Rose Ancienne", "Bougie Bois de Cèdre"],
    price: "Dès 25 CHF",
  },
  {
    title: "Vases & cache-pots",
    description: "Des pièces en céramique, en verre soufflé ou en grès pour sublimer chaque composition — avec ou sans fleurs.",
    image: "https://kalis.com/wp-content/uploads/2023/03/Kalis-21.jpg",
    tag: "SÉLECTION OBJET",
    icon: Lamp,
    gradient: "from-[#EAD7C8] via-[#C4956A] to-[#8B5E3C]",
    items: ["Vase Organique Grès", "Cache-pot Lin naturel", "Vase Cilindre fumé"],
    price: "Dès 35 CHF",
  },
  {
    title: "Cartes cadeaux",
    description: "Offrez le choix. Une carte Kalis permet de composer un bouquet sur mesure à l'atelier ou en ligne.",
    image: "https://kalis.com/wp-content/uploads/2024/04/IMG_2073-600x600.jpg",
    tag: "OFFRIR",
    icon: Gift,
    gradient: "from-[#F7EFE2] via-[#E6D7BF] to-[#C7AF87]",
    items: ["Carte 50 CHF", "Carte 100 CHF", "Carte 200 CHF"],
    price: "50 — 500 CHF",
  },
  {
    title: "Fleurs séchées",
    description: "Des compositions durables, pensées comme des tableaux végétaux. Couleurs sourdes, textures riches.",
    image: "https://kalis.com/wp-content/uploads/2024/11/image00006-600x600.jpeg",
    tag: "DURABILITÉ",
    icon: Sparkles,
    gradient: "from-[#EEF2C7] via-[#C8D56C] to-[#8E9D3C]",
    items: ["Bouquet séché Nude", "Couronne murale", "Composition cloche"],
    price: "Dès 45 CHF",
  },
];

const giftIdeas = [
  {
    title: "Coffret Naissance",
    desc: "Bouquet pastel, peluche artisanale et carte manuscrite dans un écrin de soie.",
    price: "120 CHF",
    icon: Heart,
    image: "https://kalis.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-05-at-19.25.09-e1760533620748-600x600.jpeg",
  },
  {
    title: "Coffret Remerciement",
    desc: "Bougie parfumée, bouquet séché miniature et carte dorée à la feuille.",
    price: "85 CHF",
    icon: Star,
    image: "https://kalis.com/wp-content/uploads/2025/10/IMG_5255-600x600.jpg",
  },
  {
    title: "Coffret Maison",
    desc: "Vase en grès, brume d'intérieur aux notes florales et bouquet frais de saison.",
    price: "165 CHF",
    icon: Lamp,
    image: "https://kalis.com/wp-content/uploads/2024/03/image00001-600x600.jpeg",
  },
];

const curationNotes = [
  {
    label: "Fait main",
    text: "Chaque pièce décorative est choisie ou fabriquée à l'atelier, avec le même soin que nos compositions florales.",
  },
  {
    label: "Matières nobles",
    text: "Céramique, lin, verre soufflé, cire naturelle — des textures qui dialoguent avec la fleur sans la concurrencer.",
  },
  {
    label: "Idée cadeau",
    text: "Composez un coffret sur mesure en associant fleurs, objets et carte personnalisée. Livraison Genève le jour même.",
  },
];

export function DecorationPage() {
  return (
    <main className="bg-[#F5F0E8]">
      {/* Hero */}
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
            RETOUR À L'ACCUEIL
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <div
                className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
              >
                Décoration & Cadeaux
              </div>
              <h1
                className="mb-5 max-w-4xl text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(48px, 7vw, 84px)", fontWeight: 300, lineHeight: 0.98 }}
              >
                Des objets pensés pour prolonger l'émotion florale.
              </h1>
              <p
                className="max-w-2xl text-[#7A6A60]"
                style={{ fontSize: "16px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
              >
                Bougies, vases, compositions séchées et coffrets cadeaux — chaque pièce est sélectionnée ou conçue à l'atelier pour accompagner nos créations florales avec cohérence et élégance.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Gift, label: "Coffrets cadeaux", value: "Sur mesure" },
                { icon: Sparkles, label: "Objets atelier", value: `${categories.length}`.padStart(2, "0") },
                { icon: Flame, label: "Bougies artisanales", value: "Genève" },
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

      {/* Curation Notes */}
      <section className="px-6 py-14 lg:px-16 lg:py-18">
        <div className="mx-auto max-w-[1400px] grid gap-4 md:grid-cols-3">
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
      </section>

      {/* Categories Grid */}
      <section className="px-6 pb-16 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div
                className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
              >
                Nos univers
              </div>
              <h2
                className="text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(38px, 5vw, 58px)", fontWeight: 300 }}
              >
                Chaque objet raconte une intention.
              </h2>
            </div>
            <p
              className="max-w-xl text-[#7A6A60]"
              style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
            >
              Des pièces à offrir ou à s'offrir, toujours en lien avec l'univers floral de la maison Kalis.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group overflow-hidden rounded-[28px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] shadow-[0_18px_50px_rgba(44,36,32,0.06)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EADFD3]">
                    <ImageWithFallback
                      src={cat.image}
                      alt={cat.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(44,36,32,0.35)_100%)]" />
                    <div
                      className="absolute left-4 top-4 rounded-full bg-white/92 px-4 py-2 text-[#8B5E3C] shadow-lg backdrop-blur-sm"
                      style={{ fontSize: "10px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                    >
                      {cat.tag}
                    </div>
                    <div className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/82 text-[#5C3D2E] shadow-lg backdrop-blur-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="p-6 lg:p-8">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3
                        className="text-[#2C2420]"
                        style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "32px", fontWeight: 400, lineHeight: 1 }}
                      >
                        {cat.title}
                      </h3>
                      <span
                        className="text-[#8B5E3C] whitespace-nowrap"
                        style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                      >
                        {cat.price}
                      </span>
                    </div>
                    <p
                      className="mb-5 text-[#7A6A60]"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
                    >
                      {cat.description}
                    </p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-[rgba(139,94,60,0.14)] bg-white/70 px-4 py-2 text-[#5F4B3E]"
                          style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div
                      className="inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
                      style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                    >
                      DÉCOUVRIR
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gift Coffrets */}
      <section className="border-t border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div
              className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
              style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
            >
              Idées cadeaux
            </div>
            <h2
              className="mb-4 text-[#2C2420]"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(38px, 5vw, 58px)", fontWeight: 300 }}
            >
              Nos coffrets signature.
            </h2>
            <p
              className="max-w-2xl text-[#7A6A60]"
              style={{ fontSize: "16px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
            >
              Des compositions pensées pour offrir avec justesse. Chaque coffret associe fleurs, objets et attention personnalisée.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {giftIdeas.map((gift, index) => {
              const Icon = gift.icon;
              return (
                <motion.div
                  key={gift.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group overflow-hidden rounded-[28px] border border-[rgba(139,94,60,0.12)] bg-white shadow-[0_18px_50px_rgba(44,36,32,0.06)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EADFD3]">
                    <ImageWithFallback
                      src={gift.image}
                      alt={gift.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(44,36,32,0.3)_100%)]" />
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#8B5E3C] shadow-lg backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3
                        className="text-[#2C2420]"
                        style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "28px", fontWeight: 400, lineHeight: 1 }}
                      >
                        {gift.title}
                      </h3>
                      <span
                        className="text-[#8B5E3C] whitespace-nowrap"
                        style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                      >
                        {gift.price}
                      </span>
                    </div>
                    <p
                      className="mb-4 text-[#7A6A60]"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
                    >
                      {gift.desc}
                    </p>
                    <div
                      className="inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
                      style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                    >
                      COMPOSER CE COFFRET
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-width CTA */}
      <section className="relative overflow-hidden bg-[#2C2420] px-6 py-20 lg:px-16 lg:py-28">
        <div className="absolute left-[-60px] top-[40px] h-[300px] w-[300px] rounded-full bg-[#3D2B1F] blur-3xl" />
        <div className="absolute bottom-[-40px] right-[-60px] h-[280px] w-[280px] rounded-full bg-[#4A3328] blur-3xl" />

        <div className="relative mx-auto max-w-[800px] text-center">
          <div
            className="mb-4 tracking-[0.18em] uppercase text-[#C4956A]"
            style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
          >
            Sur mesure
          </div>
          <h2
            className="mb-6 text-[#F5F0E8]"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, lineHeight: 1.1 }}
          >
            Vous cherchez une pièce unique ou un coffret personnalisé ?
          </h2>
          <p
            className="mx-auto mb-10 max-w-xl text-[#D8C6B7]"
            style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
          >
            Notre équipe compose des ensembles sur mesure pour chaque occasion — naissance, mariage, remerciement ou simple envie de beauté. Contactez-nous pour imaginer le vôtre.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:bonjour@kalis.com?subject=Coffret%20sur%20mesure"
              className="inline-flex items-center justify-center rounded-[2px] bg-[#C4956A] px-8 py-4 text-[#2C2420] transition-all duration-300 hover:bg-[#D8A97B]"
              style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
            >
              NOUS CONTACTER
            </a>
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 text-[#C4956A] transition-colors hover:text-[#D8A97B]"
              style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
            >
              VOIR LES BOUQUETS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
