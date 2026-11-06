import React from 'react';
import { MapPin, Flame, PhoneCall, Star, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, WHY_VISIT_REASONS } from '../data/restaurantData';

export const WhyVisitUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-rose-500" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-orange-400" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-emerald-400" />;
      case 'Star':
        return <Star className="w-6 h-6 text-amber-400 fill-amber-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-zinc-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>Talegaon's Chinese Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] tracking-tight text-white mb-4 text-balance">
            Why Visit Chinese Hut?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed text-balance">
            Honest flavours, fast local takeaway, and direct communication. Here is why locals choose Chinese Hut for their evening cravings.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_VISIT_REASONS.map((reason, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#14151e] border border-zinc-800 hover:border-zinc-700 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5">
                  {getIcon(reason.icon)}
                </div>
                <h3 className="text-lg font-bold font-['Outfit'] text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-medium">Core Value</span>
                <span className="text-zinc-300 font-semibold">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#13141d] border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 items-center justify-center font-black text-xl shrink-0">
              4.1★
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-['Outfit']">
                4.1 Star Google Rating across 22 Verified Local Reviews
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Located on Mantra City Road, opposite Shriram Plywood. Open every evening until 11:00 PM.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold border border-zinc-700 transition-colors"
            >
              Call 08237 870284
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
