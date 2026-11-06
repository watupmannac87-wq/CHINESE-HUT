import React from 'react';
import { Star, MessageCircle, ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Cinematic Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Chef cooking stir-fry noodles in a flaming Chinese iron wok"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse [animation-duration:12s]"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/85 to-[#0b0c10]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0b0c10]/40 to-[#0b0c10]/90" />
      </div>

      {/* Decorative fiery glow accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Clean unboxed brand kicker */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-400 mb-4">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{BUSINESS_INFO.tagline}</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span className="text-zinc-300">Talegaon Dabhade</span>
        </div>

        {/* Brand Lockup */}
        <div className="mb-2">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-rose-500">
            Welcome To
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-['Outfit'] tracking-tight text-white mt-1 mb-4 text-balance">
            CHINESE <span className="bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">HUT</span>
          </h1>
        </div>

        {/* Eye-catching Main Headline */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-100 font-['Outfit'] tracking-wide uppercase mb-4 text-balance">
          BIG FLAVOURS. AUTHENTIC CRAVINGS.
        </p>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-300 mb-8 font-normal leading-relaxed text-balance">
          {BUSINESS_INFO.subtitle} Sizzling wok-tossed Hakka noodles, crispy Manchurian, aromatic Schezwan rice, and rich savory gravies freshly made for you.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 rounded-xl shadow-lg shadow-rose-950/60 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          >
            <span>Explore Our Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Unboxed Trust & Ratings Metadata */}
        <div className="w-full max-w-2xl pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {/* Rating */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-lg tabular-nums">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/40 text-amber-400'}`}
                  />
                ))}
              </div>
              <span>{BUSINESS_INFO.rating} / 5</span>
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              Based on {BUSINESS_INFO.totalReviews} Google Reviews
            </div>
          </div>

          {/* Operating Hours */}
          <div className="flex flex-col items-center justify-center border-t sm:border-t-0 sm:border-l sm:border-r border-zinc-800/80 pt-3 sm:pt-0">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-sm">
              <Clock className="w-4 h-4" />
              <span>Open Daily Till {BUSINESS_INFO.closingTime}</span>
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              Fresh Hot Dinner & Takeaway
            </div>
          </div>

          {/* Location Landmark */}
          <div className="flex flex-col items-center justify-center border-t sm:border-t-0 border-zinc-800/80 pt-3 sm:pt-0">
            <div className="flex items-center gap-1.5 text-zinc-200 font-semibold text-sm">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>Mantra City Road</span>
            </div>
            <div className="text-xs text-zinc-400 mt-1 truncate max-w-[200px]">
              Opp. Shriram Plywood, Talegaon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
