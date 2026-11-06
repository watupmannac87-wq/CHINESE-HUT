import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Send, Flame, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const ContactOrderSection: React.FC = () => {
  const [customNote, setCustomNote] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('takeaway');

  const templates: Record<string, string> = {
    takeaway: 'Hi Chinese Hut! I would like to place an order for takeaway pickup.',
    menu: 'Hi Chinese Hut! What are your recommended specials and spicy noodles today?',
    combos: 'Hi Chinese Hut! I would like to inquire about popular dinner combos for my family.',
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const baseMessage = templates[selectedTemplate] || templates.takeaway;
    const finalMessage = customNote.trim()
      ? `${baseMessage}\n\nMy order details/note: ${customNote.trim()}`
      : baseMessage;

    const encoded = encodeURIComponent(finalMessage);
    window.open(`https://wa.me/918237870284?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#0f1016] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
            <MessageCircle className="w-4 h-4" />
            <span>Fast & Direct Ordering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] tracking-tight text-white mb-4 text-balance">
            Order or Connect With Us
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed text-balance">
            Skip delivery commission markups and aggregator delays. Chat directly with the Chinese Hut kitchen team on WhatsApp or call our phone line for instant confirmation.
          </p>
        </div>

        {/* 2-Column Split: Quick Action Cards Left, Interactive WhatsApp Message Builder Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Call & WhatsApp Highlights */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            {/* WhatsApp Big CTA Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-zinc-900 to-zinc-900 border border-emerald-800/60 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-950">
                  <MessageCircle className="w-6 h-6 fill-white/20" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Official WhatsApp
                  </span>
                  <h3 className="text-xl font-bold font-['Outfit'] text-white">
                    {BUSINESS_INFO.whatsappNumber}
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed">
                Send your order list, customize spice levels, or check daily specials directly with our chef team on WhatsApp.
              </p>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/60 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Order Directly on WhatsApp</span>
              </a>
            </div>

            {/* Click-to-Call Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#14151e] border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Direct Phone Line
                  </span>
                  <h3 className="text-xl font-bold font-['Outfit'] text-white">
                    {BUSINESS_INFO.phoneFormatted}
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                Prefer speaking directly with the counter? Tap below to call and place your quick pickup order.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm border border-zinc-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Closing Time Strip */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <Clock className="w-4 h-4 text-rose-500" />
                <span>Kitchen Service Hours:</span>
              </div>
              <span className="font-bold text-amber-400">Closes at {BUSINESS_INFO.closingTime}</span>
            </div>
          </div>

          {/* Right Column: Pre-filled WhatsApp Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#14151e] border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3 className="text-lg font-bold font-['Outfit'] text-white">
                  Send a Quick Order or Inquiry
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Select your order intention, add any dish names or special notes (e.g. extra spicy or less oil), and tap Send to chat instantly on WhatsApp.
              </p>

              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                {/* Template Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    What would you like to do?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedTemplate('takeaway')}
                      className={`p-3 rounded-xl text-left border text-xs transition-all ${
                        selectedTemplate === 'takeaway'
                          ? 'bg-rose-950/40 border-rose-600 text-white font-semibold'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <p className="font-bold text-zinc-200">Takeaway Order</p>
                      <p className="text-[11px] text-zinc-500 mt-0.5">Quick food pickup</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedTemplate('combos')}
                      className={`p-3 rounded-xl text-left border text-xs transition-all ${
                        selectedTemplate === 'combos'
                          ? 'bg-rose-950/40 border-rose-600 text-white font-semibold'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <p className="font-bold text-zinc-200">Dinner Combos</p>
                      <p className="text-[11px] text-zinc-500 mt-0.5">Family & party packs</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedTemplate('menu')}
                      className={`p-3 rounded-xl text-left border text-xs transition-all ${
                        selectedTemplate === 'menu'
                          ? 'bg-rose-950/40 border-rose-600 text-white font-semibold'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <p className="font-bold text-zinc-200">Menu & Specials</p>
                      <p className="text-[11px] text-zinc-500 mt-0.5">Ask about dishes</p>
                    </button>
                  </div>
                </div>

                {/* Message preview */}
                <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-semibold mb-1">
                    Base Message
                  </span>
                  <p className="italic">"{templates[selectedTemplate]}"</p>
                </div>

                {/* Custom note textarea */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Your Dishes / Special Instructions (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="e.g. 1x Veg Hakka Noodles, 1x Veg Manchurian Dry (make it extra spicy), pickup in 20 mins"
                    className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch WhatsApp With This Order</span>
                </button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
              <span>Direct connection to Chinese Hut kitchen</span>
              <span>Available daily till 11:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
