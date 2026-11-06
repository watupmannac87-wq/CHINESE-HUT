import React from 'react';
import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface MobileStickyBarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  cartCount,
  onOpenCart,
}) => {
  return (
    <aside
      aria-label="Quick mobile contact and ordering options"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 h-14 bg-[#0d0e14]/95 backdrop-blur-md border-t border-zinc-800 px-3 flex items-center justify-between gap-2 shadow-2xl"
    >
      {/* Click to Call */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-800 active:bg-zinc-700 text-zinc-100 text-xs font-bold border border-zinc-700 transition-colors"
      >
        <Phone className="w-4 h-4 text-amber-400" />
        <span>Call</span>
      </a>

      {/* WhatsApp Order */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.5] flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 active:bg-emerald-500 text-white text-xs font-bold shadow-md transition-colors"
      >
        <MessageCircle className="w-4 h-4 fill-white/20" />
        <span>WhatsApp Order</span>
      </a>

      {/* Order Tray Button */}
      {cartCount > 0 && (
        <button
          onClick={onOpenCart}
          className="relative flex items-center justify-center p-2 rounded-lg bg-rose-600 active:bg-rose-500 text-white shadow-md transition-colors"
          aria-label={`View ${cartCount} items in tray`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-black text-[10px] font-black rounded-full flex items-center justify-center tabular-nums">
            {cartCount}
          </span>
        </button>
      )}
    </aside>
  );
};
