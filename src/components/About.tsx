import React from 'react';
import { Flame, Clock, Utensils, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/restaurantData';
import { SafeImage } from './SafeImage';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0f1016] border-y border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Food Montage with High Craft */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/80 group">
              <SafeImage
                src={IMAGES.noodles}
                fallbackSrc={IMAGES.noodlesLocal}
                alt="Fresh wok-tossed Hakka noodles with vegetables at Chinese Hut"
                className="w-full h-[380px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              {/* Bottom overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-700/60 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-rose-400 font-bold">Wok-Hei Craft</p>
                  <p className="text-sm font-semibold text-white">Freshly Cooked To Order</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-zinc-400">Open Daily</span>
                  <p className="text-sm font-bold text-amber-400">Until 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Accent Card / Detail */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -right-6 p-4 rounded-xl bg-zinc-900 border border-zinc-700 shadow-xl max-w-xs">
              <div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Sizzling & Aromatic</p>
                <p className="text-zinc-400">Classic Hakka, Schezwan & Manchurian flavors</p>
              </div>
            </div>
          </div>

          {/* Right Column: Engaging, honest restaurant story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean Section Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">
              <Utensils className="w-4 h-4" />
              <span>About Chinese Hut</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight text-white mb-6 text-balance">
              Your Favourite Spot for <span className="text-amber-400">Crispy, Fiery, Authentic</span> Chinese Cravings.
            </h2>

            <div className="space-y-4 text-base text-zinc-300 leading-relaxed">
              <p>
                Located along Mantra City Road in Talegaon Dabhade (in front of Shriram Plywood), <strong className="text-white font-semibold">CHINESE HUT</strong> is a dedicated local food shop crafted for true lovers of bold Chinese flavours.
              </p>
              <p>
                From smoking iron wok Hakka noodles and fiery Schezwan fried rice to crunchy veg and chicken Manchurian starters, every dish is tossed fresh with quality aromatics, crisp vegetables, and rich house sauces.
              </p>
              <p>
                Whether you are picking up an evening snack after work or ordering a hearty dinner combo for the family, our kitchen stays hot and active until <strong className="text-amber-400 font-semibold">11:00 PM every night</strong>.
              </p>
            </div>

            {/* Feature bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">High Flame Wok-Tossing</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Classic wok-hei smokiness in every single noodle and rice dish.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Late Evening Takeaway</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Serving dinner and cravings right up to 11:00 PM daily.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Easy Local Access</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Prominently positioned on Mantra City Road in Talegaon Dabhade.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Hassle-Free Contact</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Direct chat via WhatsApp or one-tap call for your pickup order.</p>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="px-6 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-sm font-semibold shadow-md transition-colors"
              >
                Browse Menu
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-6 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-semibold border border-zinc-700 transition-colors"
              >
                Call {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
