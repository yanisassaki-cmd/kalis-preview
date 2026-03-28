import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Award, Clock, Flower2, Heart, Leaf, MapPin, Scissors, Sprout } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const timeline = [
  {
    year: "2004",
    title: "Naissance de Kalis",
    text: "Pierre Mugnier ouvre son premier atelier dans la vieille ville de Genève. Le nom « Kalis » vient du latin calice — l'enveloppe qui protège la fleur avant son éclosion.",
  },
  {
    year: "2010",
    title: "L'atelier s'agrandit",
    text: "Kalis investit un espace de 250m² au cœur du quartier historique. Béton brut, murs noirs et lumière naturelle — un écrin pensé pour sublimer les couleurs des fleurs.",
  },
  {
    year: "2016",
    title: "Engagement éco-responsable",
    text: "Partenariats directs avec des producteurs locaux et saisonniers. Suppression progressive des emballages plastiques et adoption du zéro déchet floral.",
  },
  {
    year: "2024",
    title: "20 ans de créativité",
    text: "Deux décennies de compositions uniques, des milliers de mariages fleuris et une équipe passionnée qui perpétue le geste artisanal chaque jour.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Éco-responsable",
    text: "Fleurs de saison, circuits courts et emballages recyclables. Chaque bouquet respecte le rythme de la nature.",
  },
  {
    icon: Scissors,
    title: "Artisanat",
    text: "Chaque composition est montée à la main, tige après tige, avec un savoir-faire transmis et affiné depuis vingt ans.",
  },
  {
    icon: Heart,
    title: "Émotion",
    text: "Un bouquet Kalis n'est pas un objet, c'est un geste. Nous créons des pièces qui touchent, surprennent et marquent.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Des fleurs rares, des variétés choisies pour leur tenue et leur beauté. Jamais de compromis sur la qualité.",
  },
];

const team = [
  {
    name: "Pierre Mugnier",
    role: "Fondateur & Directeur artistique",
    bio: "Passionné de botanique et de design, Pierre imagine chaque collection comme une silhouette de haute couture florale.",
    image: "https://kalis.com/wp-content/uploads/2023/03/Kalis-15.jpg",
  },
  {
    name: "L'équipe atelier",
    role: "Fleuristes & artisans",
    bio: "Six fleuristes composent quotidiennement à l'atelier. Leur geste, précis et sensible, donne vie à chaque commande.",
    image: "https://kalis.com/wp-content/uploads/2023/03/Kalis-21.jpg",
  },
];

const numbers = [
  { value: "20+", label: "Années d'expertise", icon: Clock },
  { value: "250m²", label: "Atelier vieille ville", icon: MapPin },
  { value: "6/7j", label: "Livraison Genève", icon: Flower2 },
  { value: "100%", label: "Compositions à la main", icon: Sprout },
];

export function NotreMetierPage() {
  return (
    <main className="bg-[#F5F0E8]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[rgba(139,94,60,0.12)]">
        <div className="grid lg:grid-cols-2 min-h-[85vh]">
          <div className="relative order-2 lg:order-1 bg-[linear-gradient(180deg,#fdfaf6_0%,#f5f0e8_100%)] px-8 lg:px-20 py-16 lg:py-20 flex flex-col justify-center">
            <div className="absolute left-[-80px] top-[120px] h-[280px] w-[280px] rounded-full bg-[#EAD7C8] opacity-50 blur-3xl" />

            <div className="relative">
              <Link
                to="/"
                className="mb-8 inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
                style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}
              >
                <ArrowLeft className="h-4 w-4" />
                RETOUR À L'ACCUEIL
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
                  style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
                >
                  Notre métier
                </div>
                <h1
                  className="mb-6 text-[#2C2420]"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(48px, 7vw, 84px)", fontWeight: 300, lineHeight: 1 }}
                >
                  L'art floral comme un{" "}
                  <span style={{ fontStyle: "italic", color: "#8B5E3C" }}>langage</span>{" "}
                  silencieux.
                </h1>
                <p
                  className="max-w-[420px] text-[#7A6A60] mb-10"
                  style={{ fontSize: "16px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
                >
                  Depuis 2004, Kalis compose des bouquets comme des gestes d'attention — sculpturaux, locaux et de saison, pour celles et ceux qui recherchent une beauté sobre, consciente et précieuse.
                </p>

                <div className="flex flex-wrap gap-8 lg:gap-12">
                  {numbers.slice(0, 3).map(({ value, label }) => (
                    <div key={label}>
                      <div
                        className="text-[#2C2420] mb-1"
                        style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "40px" }}
                      >
                        {value}
                      </div>
                      <div
                        className="text-[#7A6A60] uppercase tracking-[0.12em]"
                        style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative min-h-[400px] lg:min-h-0 order-1 lg:order-2">
            <div className="absolute inset-0">
              <img
                src="https://kalis.com/wp-content/uploads/2023/03/Kalis-21.jpg"
                alt="Atelier Kalis Genève"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-8 left-[-20px] lg:left-[-40px] w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] border-[6px] border-white shadow-2xl hidden sm:block"
            >
              <img
                src="https://kalis.com/wp-content/uploads/2023/03/Kalis-15.jpg"
                alt="Kalis détail atelier"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div
              className="absolute top-8 right-8 bg-white px-6 py-3 rounded-full shadow-lg"
              style={{ fontSize: "12px", fontFamily: "Jost, sans-serif" }}
            >
              <span className="text-[#8B5E3C]">✦ Depuis 2004 · Genève</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Philosophy */}
      <section className="bg-[#FDFAF6] px-6 py-20 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1400px] grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <div
              className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
              style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
            >
              Philosophie
            </div>
            <blockquote
              className="mb-8 text-[#8B5E3C] relative"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.2 }}
            >
              <span
                className="absolute -left-4 -top-6 text-[#F5F0E8] select-none pointer-events-none"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "120px", opacity: 0.3, lineHeight: 1 }}
              >
                "
              </span>
              La créativité est notre qualité première. Chaque fleur est un trait de caractère, chaque bouquet une silhouette.
            </blockquote>
            <div className="border-t border-[rgba(139,94,60,0.2)] pt-6">
              <div
                className="text-[#8B5E3C] mb-1"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "22px", fontStyle: "italic" }}
              >
                Pierre Mugnier
              </div>
              <div
                className="text-[#7A6A60] uppercase tracking-[0.14em]"
                style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
              >
                Fondateur & Artisan fleuriste
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[26px] border border-[rgba(139,94,60,0.12)] bg-white p-6 shadow-[0_18px_50px_rgba(44,36,32,0.05)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E7DB] text-[#8B5E3C]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className="mb-2 text-[#2C2420]"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "22px", fontWeight: 400 }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-[#7A6A60]"
                    style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
                  >
                    {value.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 max-w-2xl">
            <div
              className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
              style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
            >
              Notre histoire
            </div>
            <h2
              className="mb-4 text-[#2C2420]"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(38px, 5vw, 58px)", fontWeight: 300 }}
            >
              Vingt ans de passion, fleur après fleur.
            </h2>
            <p
              className="text-[#7A6A60]"
              style={{ fontSize: "16px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
            >
              De l'ouverture d'un petit atelier à une maison reconnue — chaque étape a nourri notre savoir-faire.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-[1px] bg-[rgba(139,94,60,0.18)] hidden md:block" />

            <div className="grid gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid gap-6 md:grid-cols-[48px_1fr] md:items-start"
                >
                  <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5E3C] text-white shadow-lg relative z-10">
                    <span style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", fontWeight: 500 }}>
                      {item.year.slice(2)}
                    </span>
                  </div>

                  <div className="rounded-[26px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] p-6 lg:p-8 shadow-[0_18px_50px_rgba(44,36,32,0.05)]">
                    <div className="mb-2 flex items-center gap-3">
                      <span
                        className="text-[#8B5E3C]"
                        style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "36px", fontWeight: 400, lineHeight: 1 }}
                      >
                        {item.year}
                      </span>
                      <div className="h-[1px] flex-1 bg-[rgba(139,94,60,0.12)]" />
                    </div>
                    <h3
                      className="mb-3 text-[#2C2420]"
                      style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "26px", fontWeight: 400, lineHeight: 1.15 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#7A6A60]"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.85 }}
                    >
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] px-6 py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 max-w-2xl">
            <div
              className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
              style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
            >
              L'équipe
            </div>
            <h2
              className="mb-4 text-[#2C2420]"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(38px, 5vw, 58px)", fontWeight: 300 }}
            >
              Les mains derrière chaque bouquet.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group overflow-hidden rounded-[30px] border border-[rgba(139,94,60,0.12)] bg-white shadow-[0_24px_70px_rgba(44,36,32,0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EADFD3]">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(44,36,32,0.25)_100%)]" />
                </div>
                <div className="p-8">
                  <h3
                    className="mb-1 text-[#2C2420]"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "32px", fontWeight: 400, lineHeight: 1.1 }}
                  >
                    {member.name}
                  </h3>
                  <div
                    className="mb-4 tracking-[0.14em] uppercase text-[#8B5E3C]"
                    style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                  >
                    {member.role}
                  </div>
                  <p
                    className="text-[#7A6A60]"
                    style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.85 }}
                  >
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Band */}
      <section className="bg-[#3D2B1F] px-6 py-16 lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[rgba(255,255,255,0.1)]">
          {numbers.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="text-center lg:px-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(196,149,106,0.15)]">
                  <Icon className="h-5 w-5 text-[#C4956A]" />
                </div>
                <div
                  className="text-white mb-2"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "40px", fontWeight: 400, lineHeight: 1 }}
                >
                  {item.value}
                </div>
                <div
                  className="text-[#C4956A] uppercase tracking-[0.12em]"
                  style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Atelier Gallery */}
      <section className="px-6 py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div
                className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
              >
                L'atelier
              </div>
              <h2
                className="text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(38px, 5vw, 58px)", fontWeight: 300 }}
              >
                Rue du Vieux-Collège, Genève.
              </h2>
            </div>
            <p
              className="max-w-md text-[#7A6A60]"
              style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
            >
              Un espace de 250m² pensé comme une galerie d'art végétal — béton brut, lumière naturelle et fleurs exposées.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                src: "https://kalis.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-15-at-16.53.09.jpeg",
                label: "L'espace composition",
              },
              {
                src: "https://kalis.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-15-at-16.54.20.jpeg",
                label: "La vitrine",
              },
              {
                src: "https://kalis.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-15-at-16.55.06.jpeg",
                label: "Le comptoir",
              },
            ].map((photo, index) => (
              <motion.div
                key={photo.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[24px]"
              >
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.label}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(44,36,32,0.6)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="text-white"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: 300 }}
                  >
                    {photo.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#2C2420] px-6 py-20 lg:px-16 lg:py-28">
        <div className="absolute left-[-60px] top-[40px] h-[300px] w-[300px] rounded-full bg-[#3D2B1F] blur-3xl" />
        <div className="absolute bottom-[-40px] right-[-60px] h-[280px] w-[280px] rounded-full bg-[#4A3328] blur-3xl" />

        <div className="relative mx-auto max-w-[800px] text-center">
          <div
            className="mb-4 tracking-[0.18em] uppercase text-[#C4956A]"
            style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
          >
            Rendez-nous visite
          </div>
          <h2
            className="mb-6 text-[#F5F0E8]"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, lineHeight: 1.1 }}
          >
            L'atelier est ouvert du lundi au samedi.
          </h2>
          <p
            className="mx-auto mb-4 max-w-xl text-[#D8C6B7]"
            style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
          >
            Rue du Vieux-Collège 10 bis, 1204 Genève
          </p>
          <p
            className="mx-auto mb-10 max-w-xl text-[#7A6A60]"
            style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
          >
            Lun–Ven 9h–19h · Sam 9h–18h
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/collection"
              className="inline-flex items-center justify-center rounded-[2px] bg-[#C4956A] px-8 py-4 text-[#2C2420] transition-all duration-300 hover:bg-[#D8A97B]"
              style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
            >
              DÉCOUVRIR NOS BOUQUETS
            </Link>
            <a
              href="tel:+41223106714"
              className="inline-flex items-center gap-2 text-[#C4956A] transition-colors hover:text-[#D8A97B]"
              style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
            >
              NOUS APPELER
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
