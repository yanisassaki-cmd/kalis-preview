import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock, Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";

const subjects = [
  "Commander un bouquet",
  "Demande de devis événement",
  "Fleurs de deuil",
  "Abonnement entreprise",
  "Autre demande",
];

const infos = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["Rue du Vieux-Collège 10 bis", "1204 Genève, Suisse"],
  },
  {
    icon: Phone,
    title: "Téléphone",
    lines: ["+41 22 310 67 14", "+41 79 241 66 23"],
  },
  {
    icon: Clock,
    title: "Horaires",
    lines: ["Lun – Ven : 9h – 19h", "Sam : 9h – 18h", "Dim : fermé"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["bonjour@kalis.com"],
  },
];

const faqs = [
  {
    question: "Livrez-vous en dehors de Genève ?",
    answer: "Nous livrons principalement Genève et ses environs proches. Pour des livraisons plus éloignées, contactez-nous pour étudier la faisabilité.",
  },
  {
    question: "Quel est le délai pour une commande urgente ?",
    answer: "Nous pouvons préparer et livrer un bouquet le jour même si la commande est passée avant 14h. Pour les compositions complexes (deuil, événements), appelez-nous directement.",
  },
  {
    question: "Puis-je personnaliser entièrement mon bouquet ?",
    answer: "Absolument. Appelez-nous ou passez à l'atelier pour discuter de vos envies — couleurs, fleurs, taille, budget. Chaque composition est unique.",
  },
  {
    question: "Proposez-vous des abonnements pour les entreprises ?",
    answer: "Oui, nous proposons des abonnements floraux hebdomadaires ou bimensuels pour les bureaux, hôtels et restaurants genevois. Tarifs sur mesure.",
  },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: subjects[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

          <div className="max-w-3xl">
            <div
              className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
              style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
            >
              Contact
            </div>
            <h1
              className="mb-5 text-[#2C2420]"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(48px, 7vw, 84px)", fontWeight: 300, lineHeight: 1 }}
            >
              Parlons de votre prochaine composition.
            </h1>
            <p
              className="max-w-2xl text-[#7A6A60]"
              style={{ fontSize: "16px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
            >
              Une question, une commande sur mesure ou un projet événementiel ? Notre équipe est disponible par téléphone, email ou directement à l'atelier.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 py-14 lg:px-16 lg:py-18">
        <div className="mx-auto max-w-[1400px] grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {infos.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 * index }}
                className="rounded-[26px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] p-6 shadow-[0_18px_50px_rgba(44,36,32,0.05)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F3E7DB] text-[#8B5E3C]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3
                  className="mb-3 text-[#2C2420]"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "20px", fontWeight: 400 }}
                >
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[#7A6A60]"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.7 }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Form + Map */}
      <section className="px-6 pb-16 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-[1400px] grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-[30px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] p-8 lg:p-10 shadow-[0_24px_70px_rgba(44,36,32,0.08)]"
          >
            <div
              className="mb-2 tracking-[0.18em] uppercase text-[#8B5E3C]"
              style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
            >
              Formulaire
            </div>
            <h2
              className="mb-8 text-[#2C2420]"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 300 }}
            >
              Envoyez-nous un message.
            </h2>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F3E7DB] text-[#8B5E3C]">
                  <Send className="h-6 w-6" />
                </div>
                <h3
                  className="mb-3 text-[#2C2420]"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "32px", fontWeight: 300 }}
                >
                  Message envoyé.
                </h3>
                <p
                  className="mx-auto mb-6 max-w-sm text-[#7A6A60]"
                  style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
                >
                  Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", subject: subjects[0], message: "" });
                  }}
                  className="text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
                  style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                >
                  ENVOYER UN AUTRE MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[#2C2420]"
                      style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.1em" }}
                    >
                      NOM COMPLET
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      className="w-full rounded-[16px] border border-[rgba(139,94,60,0.16)] bg-white px-5 py-4 text-[#2C2420] placeholder:text-[#B8A99E] focus:border-[#8B5E3C] focus:outline-none transition-colors"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif" }}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[#2C2420]"
                      style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.1em" }}
                    >
                      EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      className="w-full rounded-[16px] border border-[rgba(139,94,60,0.16)] bg-white px-5 py-4 text-[#2C2420] placeholder:text-[#B8A99E] focus:border-[#8B5E3C] focus:outline-none transition-colors"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif" }}
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[#2C2420]"
                      style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.1em" }}
                    >
                      TÉLÉPHONE (OPTIONNEL)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full rounded-[16px] border border-[rgba(139,94,60,0.16)] bg-white px-5 py-4 text-[#2C2420] placeholder:text-[#B8A99E] focus:border-[#8B5E3C] focus:outline-none transition-colors"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif" }}
                      placeholder="+41 XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-[#2C2420]"
                      style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.1em" }}
                    >
                      SUJET
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
                      className="w-full rounded-[16px] border border-[rgba(139,94,60,0.16)] bg-white px-5 py-4 text-[#2C2420] focus:border-[#8B5E3C] focus:outline-none transition-colors"
                      style={{ fontSize: "14px", fontFamily: "Jost, sans-serif" }}
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[#2C2420]"
                    style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.1em" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    className="w-full resize-none rounded-[16px] border border-[rgba(139,94,60,0.16)] bg-white px-5 py-4 text-[#2C2420] placeholder:text-[#B8A99E] focus:border-[#8B5E3C] focus:outline-none transition-colors"
                    style={{ fontSize: "14px", fontFamily: "Jost, sans-serif" }}
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[2px] bg-[#8B5E3C] px-8 py-4 text-white transition-all duration-300 hover:bg-[#5C3D2E] sm:w-auto"
                  style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                >
                  ENVOYER LE MESSAGE
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Side Panel */}
          <div className="flex flex-col gap-6">
            {/* Map placeholder */}
            <div className="relative flex-1 overflow-hidden rounded-[30px] border border-[rgba(139,94,60,0.12)] bg-[#EADFD3] shadow-[0_18px_50px_rgba(44,36,32,0.06)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <MapPin className="mb-4 h-8 w-8 text-[#8B5E3C]" />
                <h3
                  className="mb-2 text-[#2C2420]"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "28px", fontWeight: 300 }}
                >
                  Vieille ville de Genève
                </h3>
                <p
                  className="mb-6 max-w-xs text-[#7A6A60]"
                  style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.7 }}
                >
                  Rue du Vieux-Collège 10 bis, 1204 Genève
                </p>
                <a
                  href="https://maps.google.com/?q=Rue+du+Vieux-Collège+10+bis+1204+Genève"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
                  style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                >
                  OUVRIR DANS GOOGLE MAPS
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="rounded-[26px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] p-6 shadow-[0_18px_50px_rgba(44,36,32,0.05)]">
              <div
                className="mb-4 tracking-[0.16em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
              >
                Suivez-nous
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/kalisgeneve/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[rgba(139,94,60,0.14)] bg-white text-[#8B5E3C] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/kalisgeneve/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[rgba(139,94,60,0.14)] bg-white text-[#8B5E3C] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 max-w-2xl">
            <div
              className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
              style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
            >
              Questions fréquentes
            </div>
            <h2
              className="text-[#2C2420]"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(34px, 4.6vw, 50px)", fontWeight: 300 }}
            >
              Les réponses aux demandes les plus courantes.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[26px] border border-[rgba(139,94,60,0.12)] bg-white p-6 shadow-[0_18px_50px_rgba(44,36,32,0.05)]"
              >
                <h3
                  className="mb-3 text-[#2C2420]"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "22px", fontWeight: 400, lineHeight: 1.2 }}
                >
                  {faq.question}
                </h3>
                <p
                  className="text-[#7A6A60]"
                  style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.85 }}
                >
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
