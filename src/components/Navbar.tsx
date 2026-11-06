import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c10]/95 backdrop-blur-md border-b border-zinc-800 shadow-xl shadow-black/40 py-3'
          : 'bg-gradient-to-b from-[#0b0c10]/90 via-[#0b0c10]/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl sm:text-2xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-sm"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-rose-600 to-amber-500 text-white font-black text-sm shadow-md shadow-rose-900/40">
              CH
            </span>
            <span className="font-['Outfit'] font-black tracking-wider text-white group-hover:text-amber-400 transition-colors">
              CHINESE <span className="text-rose-500">HUT</span>
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action & cart access */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Order Cart Drawer trigger */}
            <button
              onClick={onOpenCart}
              aria-label={`View order tray with ${cartCount} items`}
              className="relative p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/70 text-zinc-200 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-rose-600 text-white text-[11px] font-bold rounded-full flex items-center justify-center tabular-nums shadow-sm shadow-rose-950">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Order Action */}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg shadow-sm shadow-emerald-950 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Order</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-800 bg-[#0d0e14] px-4 pt-3 pb-5 mt-2 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-amber-400 hover:bg-zinc-900/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-zinc-800/80 flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
