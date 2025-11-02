export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  platform?: string;
  region?: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 'all' | 'game-codes' | 'gift-cards' | 'subscriptions' | 'accessories';
