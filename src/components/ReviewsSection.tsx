import React from 'react';
import { Star, MessageSquare, ExternalLink, ThumbsUp } from 'lucide-react';
import { BUSINESS_INFO, REVIEW_STATS, SAMPLE_REVIEWS } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#0f1016] border-y border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>Community Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] tracking-tight text-white mb-4 text-balance">
            Customer Reviews & Ratings
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed text-balance">
            Transparent ratings directly from Google. See how local Talegaon Dabhade food lovers rate their Chinese Hut dining and takeaway experience.
          </p>
        </div>

        {/* Rating Breakdown Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Big Score Card */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#14151e] border border-zinc-800 text-center flex flex-col items-center justify-center">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
              Google Rating
            </span>
            <div className="text-6xl sm:text-7xl font-black font-['Outfit'] text-white my-2 tabular-nums">
              {BUSINESS_INFO.rating}
              <span className="text-2xl text-zinc-500 font-normal">/5</span>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1.5 my-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < 4
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-amber-400/30 text-amber-400'
                  }`}
                />
              ))}
            </div>

            <p className="text-sm font-semibold text-zinc-300 mt-2">
              Based on <strong className="text-white">{BUSINESS_INFO.totalReviews} verified Google reviews</strong>
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              Talegaon Dabhade R, Maharashtra
            </p>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white transition-colors border border-zinc-700"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Rating Bars & Review Highlights */}
          <div className="lg:col-span-7 space-y-6">
            {/* Rating distribution */}
            <div className="p-6 rounded-2xl bg-[#14151e] border border-zinc-800">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Rating Distribution
              </h4>
              <div className="space-y-2.5">
                {REVIEW_STATS.ratingBreakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs">
                    <span className="w-12 text-zinc-400 flex items-center gap-1 tabular-nums">
                      <span>{row.stars}</span>
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    </span>
                    <div className="flex-1 h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full transition-all duration-500"
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>
                    <span className="w-10 text-right text-zinc-400 font-mono tabular-nums">
                      {row.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What customers appreciate */}
            <div className="p-6 rounded-2xl bg-[#14151e] border border-zinc-800">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-emerald-400" />
                <span>Customer Praise Highlights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {REVIEW_STATS.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Authentic Customer Feedback Notes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SAMPLE_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#14151e] border border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500">{review.relativeDate}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-semibold text-zinc-300">{review.author}</span>
                <span className="text-[11px] text-zinc-500">Talegaon Dabhade</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
