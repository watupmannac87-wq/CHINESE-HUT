import React, { useState, useMemo } from 'react';
import { 
  Flame, 
  Search, 
  Plus, 
  MessageCircle, 
  Info, 
  UtensilsCrossed, 
  Check, 
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, BUSINESS_INFO } from '../data/restaurantData';
import { MenuCategory, MenuItem } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: Record<string, number>;
  onOpenCart: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  cartItemIds,
  onOpenCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Veg filter
      if (vegFilter === 'veg' && !item.isVeg) return false;
      if (vegFilter === 'non-veg' && item.isVeg) return false;

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesCategory;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, vegFilter]);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedNotice(item.name);
    setTimeout(() => {
      setAddedNotice((curr) => (curr === item.name ? null : curr));
    }, 1800);
  };

  const handleDirectWhatsAppOrder = (item: MenuItem) => {
    const text = encodeURIComponent(
      `Hello Chinese Hut! I would like to place an order for: 1x ${item.name}. Please confirm availability and preparation time for pickup.`
    );
    window.open(`https://wa.me/918237870284?text=${text}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-[#0f1016] border-y border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">
            <UtensilsCrossed className="w-4 h-4" />
            <span>Fresh From The Wok</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] tracking-tight text-white mb-3 text-balance">
            Explore Our Menu
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed text-balance">
            Authentic noodles, sizzling fried rice, crispy starters, and rich curries. Tap any dish to order directly on WhatsApp or build your custom takeaway tray.
          </p>

          {/* Sample dishes disclosure note */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-400 max-w-xl mx-auto">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Sample menu items & illustrative pricing. Please confirm daily specials and current rates directly when ordering.</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-8 space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md shadow-rose-950/40'
                    : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search + Dietary Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search Hakka noodles, Manchurian, fried rice..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Veg / Non-Veg Toggle Filter */}
            <div className="flex items-center gap-1.5 p-1 bg-zinc-900 rounded-xl border border-zinc-800 shrink-0">
              <button
                onClick={() => setVegFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  vegFilter === 'all'
                    ? 'bg-zinc-800 text-white font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                All Items ({MENU_ITEMS.length})
              </button>
              <button
                onClick={() => setVegFilter('veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  vegFilter === 'veg'
                    ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-800/80 font-semibold'
                    : 'text-zinc-400 hover:text-emerald-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Pure Veg</span>
              </button>
              <button
                onClick={() => setVegFilter('non-veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  vegFilter === 'non-veg'
                    ? 'bg-rose-950/70 text-rose-300 border border-rose-800/80 font-semibold'
                    : 'text-zinc-400 hover:text-rose-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Non-Veg</span>
              </button>
            </div>
          </div>
        </div>

        {/* Temporary added alert banner */}
        {addedNotice && (
          <div className="mb-6 p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs flex items-center justify-between animate-fadeIn">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Added <strong>{addedNotice}</strong> to your WhatsApp order tray!</span>
            </span>
            <button
              onClick={onOpenCart}
              className="text-white underline font-semibold hover:text-emerald-200"
            >
              View Order Tray &rarr;
            </button>
          </div>
        )}

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <p className="text-zinc-400 text-base">No dishes found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setVegFilter('all');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((dish) => {
              const inTrayCount = cartItemIds[dish.id] || 0;

              return (
                <div
                  key={dish.id}
                  className="rounded-2xl bg-[#14151e] border border-zinc-800/80 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/50 transition-all duration-200 p-5 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top indicator row: Veg/Non-veg symbol + Spice level + Category */}
                    <div className="flex items-center justify-between gap-2 mb-3 text-xs text-zinc-400">
                      <div className="flex items-center gap-2">
                        {/* Food Category standard Indian dot symbol */}
                        <div
                          className={`w-4 h-4 border flex items-center justify-center rounded-sm shrink-0 ${
                            dish.isVeg
                              ? 'border-emerald-500'
                              : 'border-rose-500'
                          }`}
                          title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              dish.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                            }`}
                          />
                        </div>
                        <span className="text-[11px] font-medium text-zinc-400">
                          {dish.category}
                        </span>
                      </div>

                      {/* Spice indicator */}
                      <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                        <Flame
                          className={`w-3.5 h-3.5 ${
                            dish.spiceLevel === 'Fiery'
                              ? 'text-rose-500'
                              : dish.spiceLevel === 'Medium'
                              ? 'text-amber-500'
                              : 'text-zinc-500'
                          }`}
                        />
                        <span>{dish.spiceLevel}</span>
                        {dish.isPopular && (
                          <>
                            <span aria-hidden="true" className="text-zinc-600">·</span>
                            <span className="text-amber-400 font-semibold flex items-center gap-0.5">
                              <Sparkles className="w-3 h-3 text-amber-400 inline" />
                              Popular
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Dish Name */}
                    <h3 className="text-base sm:text-lg font-bold font-['Outfit'] text-white group-hover:text-amber-400 transition-colors">
                      {dish.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2">
                      {dish.description}
                    </p>
                  </div>

                  {/* Bottom Row: Sample Price & Order Buttons */}
                  <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-zinc-500 block uppercase font-medium">Sample Rate</span>
                      <span className="text-base font-extrabold text-white font-mono tabular-nums">
                        ₹{dish.samplePrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Direct WhatsApp Order */}
                      <button
                        onClick={() => handleDirectWhatsAppOrder(dish)}
                        title="Order this dish directly on WhatsApp"
                        className="p-2 rounded-lg bg-zinc-800 hover:bg-emerald-600 text-zinc-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        aria-label={`Order ${dish.name} directly on WhatsApp`}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>

                      {/* Add to Tray Button */}
                      <button
                        onClick={() => handleAdd(dish)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                          inTrayCount > 0
                            ? 'bg-rose-600/90 text-white hover:bg-rose-500'
                            : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white'
                        }`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{inTrayCount > 0 ? `In Tray (${inTrayCount})` : 'Add to Tray'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Floating Tray Callout when user has items */}
        {Object.values(cartItemIds).reduce((a, b) => a + b, 0) > 0 && (
          <div className="mt-10 p-4 rounded-2xl bg-gradient-to-r from-rose-950/80 via-zinc-900 to-rose-950/80 border border-rose-800/60 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  You have {Object.values(cartItemIds).reduce((a, b) => a + b, 0)} item(s) in your Takeaway Tray
                </p>
                <p className="text-xs text-zinc-400">Review your customized order before sending to Chinese Hut via WhatsApp.</p>
              </div>
            </div>
            <button
              onClick={onOpenCart}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Review & Send via WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
