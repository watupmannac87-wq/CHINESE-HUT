import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Copy, Check, ExternalLink, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">
            <MapPin className="w-4 h-4" />
            <span>Find Our Restaurant</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] tracking-tight text-white mb-4 text-balance">
            Location & Hours
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed text-balance">
            Easily accessible along Mantra City Road in Talegaon Dabhade. Stop by for hot takeaway or dine-in when visiting the market.
          </p>
        </div>

        {/* Content Split: Details Left, Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#14151e] border border-zinc-800 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address Block */}
              <div>
                <span className="text-xs uppercase tracking-wider text-rose-400 font-bold block mb-1">
                  Full Address
                </span>
                <p className="text-base sm:text-lg font-bold text-white leading-snug">
                  {BUSINESS_INFO.address}
                </p>
                <p className="text-xs text-zinc-400 mt-2">
                  Landmark: Right in front of Shriram Plywood, Mantra City Road.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors border border-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors border border-zinc-700"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>

              {/* Operating Hours Block */}
              <div className="pt-6 border-t border-zinc-800/80">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-2">
                  Opening Hours
                </span>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="font-medium">Monday – Sunday</span>
                    <span className="font-semibold text-white">{BUSINESS_INFO.openingHours}</span>
                  </div>
                  <div className="flex items-center justify-between text-rose-400">
                    <span>Kitchen Closing Time</span>
                    <span className="font-bold text-amber-400">{BUSINESS_INFO.closingTime} Daily</span>
                  </div>
                </div>
              </div>

              {/* Contact Snapshot */}
              <div className="pt-6 border-t border-zinc-800/80">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-2">
                  Quick Calling
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Direct Directions CTA */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm shadow-md transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 rounded-2xl bg-[#14151e] border border-zinc-800 overflow-hidden relative min-h-[380px] flex flex-col">
            <div className="p-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span className="font-medium text-zinc-300">Talegaon Dabhade R, Maharashtra 410506</span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1 font-medium"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full relative">
              <iframe
                title="Chinese Hut Location Map"
                src={`https://maps.google.com/maps?q=${BUSINESS_INFO.googleMapsEmbedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert hue-rotate-180 brightness-95 contrast-90"
              />
              <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-700 text-[11px] text-zinc-300 flex items-center gap-2">
                <span>In front of Shriram Plywood</span>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 font-bold hover:underline"
                >
                  Open Map &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
