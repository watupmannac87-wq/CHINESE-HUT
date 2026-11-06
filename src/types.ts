export type MenuCategory = 'All' | 'Starters' | 'Noodles' | 'Fried Rice' | 'Chinese Main Course' | 'Popular Combos';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  description: string;
  isVeg: boolean;
  spiceLevel: 'Mild' | 'Medium' | 'Fiery';
  isPopular?: boolean;
  samplePrice: number;
  image?: string;
}

export interface ReviewStat {
  rating: number;
  totalReviews: number;
  ratingBreakdown: {
    stars: number;
    percentage: number;
  }[];
  highlights: string[];
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}
