import React from 'react';
import { Flame, MessageCircle, Sparkles } from 'lucide-react';
import { SHOWCASE_ITEMS, BUSINESS_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

interface FoodShowcaseProps {
  onQuickOrder: (itemName: string) => void;
}

export const FoodShowcase: React.FC<FoodShowcaseProps> = ({ onQuickOrder }) => {
  return (
    <section id="specialties" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Chef's Signature Selections</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] tracking-tight text-white mb-4 text-balance">
            Special Food Showcase
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed text-balance">
            Made fresh on roaring iron woks. Discover the signature items that keep our Talegaon regulars coming back day after day.
          </p>
        </div>

        {/* 4-Item Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHOWCASE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-[#14151e] border border-zinc-800/90 overflow-hidden flex flex-col hover:border-zinc-700 hover:shadow-2xl hover:shadow-rose-950/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14151e] via-transparent to-black/30" />
                
                {/* Clean unboxed tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-amber-300">
                  {item.tag}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Action button */}
                <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-zinc-500 font-medium">Fresh Wok Tossed</span>
                  <button
                    onClick={() => onQuickOrder(item.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-rose-600 text-zinc-200 hover:text-white text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order Dish</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner strip below showcase */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-rose-950/30 to-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-rose-600/20 text-rose-500 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-['Outfit']">Have a custom craving or preference?</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Let us know if you want it extra spicy, mild, or crispy — we customize every order to your taste!</p>
            </div>
          </div>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md whitespace-nowrap transition-colors"
          >
            Chat With Us On WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
