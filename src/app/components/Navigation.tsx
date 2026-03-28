import { useState } from "react";
import { Link } from "react-router";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "FLEURS", to: "/collection" },
  { label: "DÉCORATION & CADEAUX", to: "/decoration-cadeaux" },
  { label: "DEUIL", to: "/deuil" },
  { label: "NOTRE MÉTIER", to: "/notre-metier" },
  { label: "ÉVÉNEMENTS" },
  { label: "LE MÉDIA FLEURI", to: "/blog" },
  { label: "CONTACT", to: "/contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { itemCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFAF6] border-b border-[rgba(139,94,60,0.12)]">
      <div className="h-[72px] px-8 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="tracking-[0.25em] text-[24px] text-[#2C2420]"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
        >
          KALIS
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.to ? (
                <Link
                  to={link.to}
                  className="tracking-[0.14em] text-[#7A6A60] hover:text-[#8B5E3C] transition-colors relative pb-1"
                  style={{ fontSize: '11px', fontFamily: 'Jost, sans-serif' }}
                  onMouseEnter={() => setActiveLink(link.label)}
                  onMouseLeave={() => setActiveLink("")}
                >
                  {link.label}
                  {activeLink === link.label && (
                    <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#8B5E3C] animate-in slide-in-from-left duration-200" />
                  )}
                </Link>
              ) : (
                <button
                  className="tracking-[0.14em] text-[#7A6A60] hover:text-[#8B5E3C] transition-colors relative pb-1"
                  style={{ fontSize: '11px', fontFamily: 'Jost, sans-serif' }}
                  onMouseEnter={() => setActiveLink(link.label)}
                  onMouseLeave={() => setActiveLink("")}
                >
                  {link.label}
                  {link.hasDropdown && " ↓"}
                  {activeLink === link.label && (
                    <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#8B5E3C] animate-in slide-in-from-left duration-200" />
                  )}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 text-[#7A6A60]" style={{ fontSize: '11px', fontFamily: 'Jost, sans-serif' }}>
            <button className="tracking-[0.14em] hover:text-[#8B5E3C] transition-colors">FR</button>
            <span>|</span>
            <button className="tracking-[0.14em] hover:text-[#8B5E3C] transition-colors">EN</button>
          </div>
          <button className="text-[#7A6A60] hover:text-[#8B5E3C] transition-colors">
            <User className="w-5 h-5" />
          </button>
          <Link to="/panier" className="text-[#7A6A60] hover:text-[#8B5E3C] transition-colors flex items-center gap-1">
            <ShoppingCart className="w-5 h-5" />
            <span style={{ fontSize: '11px', fontFamily: 'Jost, sans-serif' }}>({itemCount})</span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#7A6A60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FDFAF6] border-t border-[rgba(139,94,60,0.12)] px-8 py-6">
          {navLinks.map((link) => (
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="block w-full py-3 text-left tracking-[0.14em] text-[#7A6A60] transition-colors hover:text-[#8B5E3C]"
                style={{ fontSize: '11px', fontFamily: 'Jost, sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                className="block w-full text-left py-3 tracking-[0.14em] text-[#7A6A60] hover:text-[#8B5E3C] transition-colors"
                style={{ fontSize: '11px', fontFamily: 'Jost, sans-serif' }}
              >
                {link.label}
              </button>
            )
          ))}
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[rgba(139,94,60,0.12)] text-[#7A6A60]" style={{ fontSize: '11px' }}>
            <button className="tracking-[0.14em]">FR</button>
            <span>|</span>
            <button className="tracking-[0.14em]">EN</button>
          </div>
          <Link
            to="/panier"
            className="mt-4 inline-flex items-center gap-2 text-[#7A6A60] transition-colors hover:text-[#8B5E3C]"
            style={{ fontSize: '11px', fontFamily: 'Jost, sans-serif', letterSpacing: '0.14em' }}
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingCart className="w-4 h-4" />
            PANIER ({itemCount})
          </Link>
        </div>
      )}
    </nav>
  );
}
