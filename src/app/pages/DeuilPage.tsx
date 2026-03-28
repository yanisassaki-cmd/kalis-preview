import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock, Flower2, Heart, Phone, Shield, Truck } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const compositions = [
  {
    title: "Gerbe de fleurs",
    description: "Un geste classique et respectueux. Roses, lys ou fleurs de saison, composées avec délicatesse pour un dernier hommage.",
    image: "https://kalis.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-15-at-16.52.54.jpeg",
    price: "Dès 80 CHF",
    tag: "TRADITION",
  },
  {
    title: "Coussin & cœur",
    description: "Des formes symboliques montées sur mousse florale, avec un travail de densité et de couleur pensé pour être vu de près.",
    image: "https://kalis.com/wp-content/uploads/2021/01/M-rouge-2-600x600.jpg",
    price: "Dès 150 CHF",
    tag: "HOMMAGE",
  },
  {
    title: "Couronne mortuaire",
    description: "Un cercle de vie et de mémoire, composé de feuillage persistant, fleurs blanches et rubans personnalisés.",
    image: "https://kalis.com/wp-content/uploads/2025/10/IMG_5255-600x600.jpg",
    price: "Dès 180 CHF",
    tag: "MÉMOIRE",
  },
  {
    title: "Composition d'urne",
    description: "Un arrangement discret et soigné, pensé pour entourer l'urne avec douceur et sobriété.",
    image: "https://kalis.com/wp-content/uploads/2024/04/IMG_2073-600x600.jpg",
    price: "Dès 90 CHF",
    tag: "RECUEILLEMENT",
  },
  {
    title: "Raquette de cercueil",
    description: "Une pièce maîtresse posée sur le cercueil — un dernier geste floral d'une grande élégance.",
    image: "https://kalis.com/wp-content/uploads/2024/03/image00001-600x600.jpeg",
    price: "Dès 200 CHF",
    tag: "CÉRÉMONIAL",
  },
  {
    title: "Bouquet de condoléances",
    description: "Un bouquet à offrir à la famille — sobre, généreux et sincère, dans les tons que vous souhaitez.",
    image: "https://kalis.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-05-at-19.25.09-e1760533620748-600x600.jpeg",
    price: "Dès 60 CHF",
    tag: "SYMPATHIE",
  },
];

const engagements = [
  {
    icon: Clock,
    title: "Réactivité",
    text: "Nous comprenons l'urgence. Commande possible le jour même pour une livraison rapide à Genève et environs.",
  },
  {
    icon: Heart,
    title: "Écoute & sensibilité",
    text: "Notre équipe vous accompagne avec discrétion et bienveillance pour choisir la composition la plus juste.",
  },
  {
    icon: Truck,
    title: "Livraison directe",
    text: "Livraison dans les lieux de cérémonie, funérariums, églises et domiciles dans tout le canton de Genève.",
  },
  {
    icon: Shield,
    title: "Ruban personnalisé",
    text: "Chaque composition peut être accompagnée d'un ruban avec un message personnel, inclus dans le prix.",
  },
];

export function DeuilPage() {
  return (
    <main className="bg-[#F5F0E8]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[rgba(139,94,60,0.12)] bg-[linear-gradient(180deg,#fdfaf6_0%,#f5f0e8_100%)] px-6 py-12 lg:px-16 lg:py-16">
        <div className="absolute left-[-80px] top-[120px] h-[280px] w-[280px] rounded-full bg-[#E2DBD4] opacity-60 blur-3xl" />
        <div className="absolute right-[4%] top-[-30px] h-[320px] w-[320px] rounded-full bg-[#DDD6CE] opacity-50 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px]">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
            style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}
          >
            <ArrowLeft className="h-4 w-4" />
            RETOUR À L'ACCUEIL
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div
                className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
              >
                Fleurs de deuil
              </div>
              <h1
                className="mb-5 max-w-4xl text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(48px, 7vw, 84px)", fontWeight: 300, lineHeight: 0.98 }}
              >
                Accompagner l'absence avec beauté et dignité.
              </h1>
              <p
                className="max-w-2xl text-[#7A6A60]"
                style={{ fontSize: "16px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
              >
                Gerbes, couronnes, coussins et compositions sur mesure — chaque pièce est montée à la main avec le soin et le respect que ces moments exigent. Livraison le jour même à Genève.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+41223106714"
                  className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-[#8B5E3C] px-8 py-4 text-white transition-all duration-300 hover:bg-[#5C3D2E]"
                  style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                >
                  <Phone className="h-4 w-4" />
                  APPELER L'ATELIER
                </a>
                <a
                  href="mailto:bonjour@kalis.com?subject=Commande%20fleurs%20de%20deuil"
                  className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-[#8B5E3C] px-8 py-4 text-[#8B5E3C] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white"
                  style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                >
                  NOUS ÉCRIRE
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Flower2, label: "Compositions", value: `${compositions.length}`.padStart(2, "0") },
                { icon: Clock, label: "Livraison jour même", value: "Genève" },
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

      {/* Engagements */}
      <section className="px-6 py-14 lg:px-16 lg:py-18">
        <div className="mx-auto max-w-[1400px] grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {engagements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 * index }}
                className="rounded-[26px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] p-6 shadow-[0_18px_50px_rgba(44,36,32,0.05)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F3E7DB] text-[#8B5E3C]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3
                  className="mb-2 text-[#2C2420]"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "20px", fontWeight: 400 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#7A6A60]"
                  style={{ fontSize: "13px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
                >
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Approach Section */}
      <section className="px-6 pb-16 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-[1400px]">
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
                  Notre approche
                </div>
                <h2
                  className="mb-4"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(34px,4.5vw,52px)", fontWeight: 300, lineHeight: 1.08 }}
                >
                  Chaque composition est un dernier geste de tendresse.
                </h2>
                <p
                  className="mb-6 max-w-xl text-[#D8C6B7]"
                  style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.85 }}
                >
                  Depuis vingt ans, nous accompagnons les familles genevoises dans ces moments délicats. Nos fleuristes travaillent avec une attention particulière pour que chaque composition reflète le respect, l'amour et la mémoire du défunt.
                </p>
                <p
                  className="mb-8 max-w-xl text-[#D8C6B7]"
                  style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.85 }}
                >
                  Nous vous conseillons par téléphone ou à l'atelier pour choisir les fleurs, les couleurs et la forme les plus adaptées à la cérémonie. Le ruban avec votre message personnel est toujours inclus.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Ruban inclus", "Message personnalisé", "Livraison cérémonies"].map((detail) => (
                    <div
                      key={detail}
                      className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[#F5F0E8]"
                      style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[340px] bg-[#EADFD3]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_36%)]" />
                <ImageWithFallback
                  src="https://kalis.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-15-at-16.52.54.jpeg"
                  alt="Composition florale de deuil"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compositions Grid */}
      <section className="border-t border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div
                className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
              >
                Nos compositions
              </div>
              <h2
                className="text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(38px, 5vw, 58px)", fontWeight: 300 }}
              >
                Des pièces florales pour chaque hommage.
              </h2>
            </div>
            <p
              className="max-w-xl text-[#7A6A60]"
              style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
            >
              Toutes les compositions sont personnalisables. Contactez-nous pour adapter les couleurs, les fleurs et le message.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {compositions.map((comp, index) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group overflow-hidden rounded-[28px] border border-[rgba(139,94,60,0.12)] bg-white shadow-[0_18px_50px_rgba(44,36,32,0.06)]"
              >
                <div className="relative aspect-[4/3.5] overflow-hidden bg-[#EADFD3]">
                  <ImageWithFallback
                    src={comp.image}
                    alt={comp.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(44,36,32,0.28)_100%)]" />
                  <div
                    className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[#8B5E3C] shadow-lg backdrop-blur-sm uppercase tracking-[0.12em]"
                    style={{ fontSize: "9px", fontFamily: "Jost, sans-serif" }}
                  >
                    {comp.tag}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3
                      className="text-[#2C2420]"
                      style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "28px", fontWeight: 400, lineHeight: 1.1 }}
                    >
                      {comp.title}
                    </h3>
                    <span
                      className="text-[#8B5E3C] whitespace-nowrap"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 400 }}
                    >
                      {comp.price}
                    </span>
                  </div>
                  <p
                    className="mb-5 text-[#7A6A60]"
                    style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
                  >
                    {comp.description}
                  </p>
                  <a
                    href="tel:+41223106714"
                    className="inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
                    style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                  >
                    COMMANDER PAR TÉLÉPHONE
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 max-w-2xl">
            <div
              className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
              style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
            >
              Comment ça fonctionne
            </div>
            <h2
              className="mb-4 text-[#2C2420]"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(34px, 4.6vw, 50px)", fontWeight: 300 }}
            >
              Un accompagnement simple et humain.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Contactez-nous",
                text: "Par téléphone au +41 22 310 67 14 ou par email. Nous sommes disponibles 6 jours sur 7 et comprenons l'urgence de ces situations.",
              },
              {
                step: "02",
                title: "Nous vous conseillons",
                text: "Notre équipe vous aide à choisir la composition, les fleurs et les couleurs adaptées à vos souhaits et à la cérémonie prévue.",
              },
              {
                step: "03",
                title: "Livraison assurée",
                text: "Votre composition est montée à la main et livrée directement au lieu de cérémonie, funérarium ou domicile dans les délais convenus.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[26px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] p-7 shadow-[0_18px_50px_rgba(44,36,32,0.05)]"
              >
                <div
                  className="mb-4 text-[#8B5E3C]"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "42px", fontWeight: 400, lineHeight: 1 }}
                >
                  {item.step}
                </div>
                <h3
                  className="mb-3 text-[#2C2420]"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: 400, lineHeight: 1.15 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#7A6A60]"
                  style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.85 }}
                >
                  {item.text}
                </p>
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
            Nous sommes là pour vous
          </div>
          <h2
            className="mb-6 text-[#F5F0E8]"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, lineHeight: 1.1 }}
          >
            Besoin de conseil ou d'une commande urgente ?
          </h2>
          <p
            className="mx-auto mb-10 max-w-xl text-[#D8C6B7]"
            style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
          >
            Notre équipe vous accompagne avec discrétion et bienveillance. Appelez-nous directement ou passez à l'atelier — nous ferons tout pour répondre à vos besoins dans les meilleurs délais.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+41223106714"
              className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-[#C4956A] px-8 py-4 text-[#2C2420] transition-all duration-300 hover:bg-[#D8A97B]"
              style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
            >
              <Phone className="h-4 w-4" />
              +41 22 310 67 14
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#C4956A] transition-colors hover:text-[#D8A97B]"
              style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
            >
              FORMULAIRE DE CONTACT
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
