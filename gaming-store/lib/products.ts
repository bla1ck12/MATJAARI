import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'PlayStation Plus 12 Months',
    price: 59.99,
    category: 'subscriptions',
    description: 'Get 12 months of PlayStation Plus with monthly games and online multiplayer',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=300&fit=crop',
    platform: 'PlayStation',
    region: 'Global',
    featured: true
  },
  {
    id: '2',
    name: 'Xbox Game Pass Ultimate 3 Months',
    price: 44.99,
    category: 'subscriptions',
    description: 'Access hundreds of games with Xbox Game Pass Ultimate',
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500&h=300&fit=crop',
    platform: 'Xbox',
    region: 'Global',
    featured: true
  },
  {
    id: '3',
    name: 'Steam Gift Card $50',
    price: 50.00,
    category: 'gift-cards',
    description: 'Add $50 to your Steam Wallet for games and content',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop',
    platform: 'PC',
    region: 'US',
    featured: true
  },
  {
    id: '4',
    name: 'FIFA 24 Ultimate Edition',
    price: 79.99,
    category: 'game-codes',
    description: 'Digital code for FIFA 24 Ultimate Edition with bonus content',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&h=300&fit=crop',
    platform: 'Multi-platform',
    region: 'Global'
  },
  {
    id: '5',
    name: 'Call of Duty: Modern Warfare III',
    price: 69.99,
    category: 'game-codes',
    description: 'Latest Call of Duty game with campaign and multiplayer',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&h=300&fit=crop',
    platform: 'Multi-platform',
    region: 'Global',
    featured: true
  },
  {
    id: '6',
    name: 'Nintendo eShop Card $35',
    price: 35.00,
    category: 'gift-cards',
    description: 'Add funds to your Nintendo eShop account',
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&h=300&fit=crop',
    platform: 'Nintendo Switch',
    region: 'US'
  },
  {
    id: '7',
    name: 'Razer BlackWidow V3 Keyboard',
    price: 139.99,
    category: 'accessories',
    description: 'Mechanical gaming keyboard with RGB lighting',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=300&fit=crop',
    platform: 'PC',
    region: 'Global'
  },
  {
    id: '8',
    name: 'PlayStation Store Gift Card $25',
    price: 25.00,
    category: 'gift-cards',
    description: 'Add $25 to your PlayStation Store wallet',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=300&fit=crop',
    platform: 'PlayStation',
    region: 'US'
  },
  {
    id: '9',
    name: 'Cyberpunk 2077: Phantom Liberty',
    price: 29.99,
    category: 'game-codes',
    description: 'Expansion pack for Cyberpunk 2077',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop',
    platform: 'Multi-platform',
    region: 'Global'
  },
  {
    id: '10',
    name: 'Logitech G502 HERO Gaming Mouse',
    price: 79.99,
    category: 'accessories',
    description: 'High-performance gaming mouse with 25K sensor',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=300&fit=crop',
    platform: 'PC',
    region: 'Global'
  },
  {
    id: '11',
    name: 'EA Play 12 Months',
    price: 29.99,
    category: 'subscriptions',
    description: 'Access EA games library with exclusive rewards',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop',
    platform: 'Multi-platform',
    region: 'Global'
  },
  {
    id: '12',
    name: 'Baldurs Gate 3 Digital Code',
    price: 59.99,
    category: 'game-codes',
    description: 'Award-winning RPG adventure game',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&h=300&fit=crop',
    platform: 'PC',
    region: 'Global',
    featured: true
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}
