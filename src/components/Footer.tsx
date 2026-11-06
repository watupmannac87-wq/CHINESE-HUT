import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ArrowUp, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090d] border-t border-zinc-800/80 pt-16 pb-24 sm:pb-16 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-rose-600 to-amber-500 text-white font-black text-sm shadow-md">
                CH
              </span>
              <span className="text-xl font-black font-['Outfit'] tracking-wider text-white">
                CHINESE <span className="text-rose-500">HUT</span>
              </span>
            </div>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              {BUSINESS_INFO.tagline} Your neighbourhood hub in Talegaon Dabhade for piping-hot Hakka noodles, sizzling fried rice, and crispy Chinese starters.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">{BUSINESS_INFO.rating} / 5</span>
              <span className="text-zinc-500">·</span>
              <span>{BUSINESS_INFO.totalReviews} Google Reviews</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Food Menu
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-amber-400 transition-colors">
                  Specialties Showcase
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  Why Visit Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Location & Hours
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact & Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Hours
            </h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-300 leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-xs text-zinc-300 hover:text-white font-semibold transition-colors"
              >
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-teal-400 shrink-0" />
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-300 hover:text-white font-semibold transition-colors"
              >
                {BUSINESS_INFO.whatsappNumber} (WhatsApp)
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-zinc-300">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Daily: {BUSINESS_INFO.openingHours} · <strong className="text-amber-400">Closing: {BUSINESS_INFO.closingTime}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-center sm:text-left">
            © {new Date().getFullYear()} CHINESE HUT. All rights reserved. Talegaon Dabhade R, Maharashtra 410506.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
