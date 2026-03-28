import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const WHATSAPP_NUMBER = "41792416623";
const PREFILLED_MESSAGE = "Bonjour, j'aimerais avoir des informations sur vos compositions florales.";

export function WhatsAppWidget() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.55);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="w-[320px] overflow-hidden rounded-[16px] shadow-[0_12px_48px_rgba(0,0,0,0.18)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#075E54] px-5 py-4">
              <div className="flex items-center gap-3">
                <WhatsAppIcon className="h-6 w-6 text-white" />
                <span className="text-[15px] font-medium text-white" style={{ fontFamily: "Jost, sans-serif" }}>
                  WhatsApp
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Chat body */}
            <div
              className="px-4 py-5"
              style={{
                backgroundColor: "#ECE5DD",
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence baseFrequency=\'0.65\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'.03\' /%3E%3C/svg%3E")',
              }}
            >
              <div className="max-w-[240px] rounded-[8px] rounded-tl-none bg-white px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                <p className="text-[14px] leading-[1.55] text-[#303030]" style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                  <span className="mr-1">👋</span> Bonjour, je m'appelle Théa.
                  <br />
                  En quoi puis-je vous aider ?
                </p>
                <div className="mt-1 text-right text-[11px] text-[#8c8c8c]" style={{ fontFamily: "Jost, sans-serif" }}>
                  14:32
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#F0F0F0] px-5 py-4 transition-colors hover:bg-[#E5E5E5]"
            >
              <span
                className="text-[14px] font-medium text-[#075E54]"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                Envoyer un message
              </span>
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_6px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 active:scale-95"
        aria-label="Ouvrir WhatsApp"
      >
        {open ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <WhatsAppIcon className="h-7 w-7 text-white" />
        )}
      </motion.button>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
