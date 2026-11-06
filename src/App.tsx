import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { FoodShowcase } from './components/FoodShowcase';
import { WhyVisitUs } from './components/WhyVisitUs';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ContactOrderSection } from './components/ContactOrderSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CartItem, MenuItem } from './types';
import { MENU_ITEMS } from './data/restaurantData';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Cart helper map for fast lookup of counts
  const cartItemIds = cart.reduce<Record<string, number>>((acc, item) => {
    acc[item.item.id] = item.quantity;
    return acc;
  }, {});

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Add item to cart
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  // Update item quantity
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter((ci): ci is CartItem => ci !== null);
    });
  };

  // Remove single item
  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Quick order from showcase
  const handleQuickOrder = (dishTitle: string) => {
    const matched = MENU_ITEMS.find((m) =>
      m.name.toLowerCase().includes(dishTitle.toLowerCase()) ||
      dishTitle.toLowerCase().includes(m.name.toLowerCase())
    );
    if (matched) {
      handleAddToCart(matched);
      setIsDrawerOpen(true);
    } else {
      const text = encodeURIComponent(
        `Hello Chinese Hut! I would like to order: ${dishTitle}. Please confirm preparation time.`
      );
      window.open(`https://wa.me/918237870284?text=${text}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f3f4f6] font-sans selection:bg-rose-600 selection:text-white flex flex-col">
      {/* Top Bar Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsDrawerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Interactive Menu Section */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
          onOpenCart={() => setIsDrawerOpen(true)}
        />

        {/* 4. Special Food Showcase */}
        <FoodShowcase onQuickOrder={handleQuickOrder} />

        {/* 5. Why Visit Us Section */}
        <WhyVisitUs />

        {/* 6. Customer Reviews Section */}
        <ReviewsSection />

        {/* 7. Location & Hours Section */}
        <LocationSection />

        {/* 8. Contact & Order Section */}
        <ContactOrderSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Slide-over Takeaway Tray / Cart Drawer */}
      <OrderDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar
        cartCount={totalCartCount}
        onOpenCart={() => setIsDrawerOpen(true)}
      />
    </div>
  );
}
