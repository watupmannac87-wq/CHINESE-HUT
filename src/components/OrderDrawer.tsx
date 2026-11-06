import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag, Info } from 'lucide-react';
import { CartItem } from '../types';
import { BUSINESS_INFO } from '../data/restaurantData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerNote, setCustomerNote] = useState('');

  if (!isOpen) return null;

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const sampleEstimatedTotal = cart.reduce(
    (sum, item) => sum + item.item.samplePrice * item.quantity,
    0
  );

  const handleSendToWhatsApp = () => {
    if (cart.length === 0) return;

    let message = `*Order Request for CHINESE HUT*\n`;
    message += `------------------------------\n`;
    cart.forEach((ci) => {
      message += `• ${ci.quantity}x ${ci.item.name} (~₹${ci.item.samplePrice * ci.quantity})\n`;
    });
    message += `------------------------------\n`;
    message += `Approx Total: ₹${sampleEstimatedTotal}\n`;
    if (customerNote.trim()) {
      message += `Special Note: ${customerNote.trim()}\n`;
    }
    message += `\nPlease confirm availability and preparation time for pickup. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918237870284?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#11121a] border-l border-zinc-800 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-600/20 text-rose-500 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold font-['Outfit'] text-white">
                  Your Takeaway Tray
                </h3>
                <p className="text-xs text-zinc-400">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close tray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body: Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center text-zinc-400">
                <ShoppingBag className="w-12 h-12 mx-auto text-zinc-600 mb-3" />
                <p className="text-base font-semibold text-zinc-300">Your tray is empty</p>
                <p className="text-xs text-zinc-500 mt-1 max-w-xs mx-auto">
                  Browse our menu and tap "Add to Tray" to assemble your custom Chinese meal.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {cart.map((cartItem) => (
                    <div
                      key={cartItem.item.id}
                      className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              cartItem.item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                            }`}
                          />
                          <h4 className="text-sm font-bold text-white truncate">
                            {cartItem.item.name}
                          </h4>
                        </div>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          ₹{cartItem.item.samplePrice} each
                        </p>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-zinc-800 rounded-lg border border-zinc-700/80">
                          <button
                            onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                            className="p-1.5 text-zinc-300 hover:text-white hover:bg-zinc-700 rounded-l-lg transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-bold text-white tabular-nums">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                            className="p-1.5 text-zinc-300 hover:text-white hover:bg-zinc-700 rounded-r-lg transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => onRemoveItem(cartItem.item.id)}
                          className="p-1.5 text-zinc-500 hover:text-rose-400 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clear Tray link */}
                <div className="flex justify-end">
                  <button
                    onClick={onClearCart}
                    className="text-xs text-zinc-500 hover:text-rose-400 underline"
                  >
                    Clear Tray
                  </button>
                </div>

                {/* Special Instructions Note */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Order Note / Customization
                  </label>
                  <textarea
                    rows={2}
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    placeholder="e.g. Extra spicy, less oil, ready by 8:30 PM..."
                    className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Action */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-zinc-800 bg-zinc-950/80 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400 font-medium">Sample Estimate:</span>
                <span className="text-lg font-black text-white font-mono tabular-nums">
                  ₹{sampleEstimatedTotal}
                </span>
              </div>

              <div className="flex items-start gap-2 p-2 rounded-lg bg-zinc-900 border border-zinc-800/80 text-[11px] text-zinc-400">
                <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Sample pricing shown. Confirm final pricing, daily availability and pickup readiness directly with the restaurant on WhatsApp.
                </span>
              </div>

              <button
                onClick={handleSendToWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Send Order via WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
