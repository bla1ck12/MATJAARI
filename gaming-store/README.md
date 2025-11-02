# Gaming Store - E-commerce Platform

A modern, gaming-focused e-commerce website built with Next.js 14, TypeScript, and Tailwind CSS. Inspired by wifi4game.com, this platform offers game codes, gift cards, subscriptions, and gaming accessories.

## Features

- 🎮 **Modern Gaming Design** - Dark theme with purple/blue gradient accents
- 🛒 **Shopping Cart** - Full cart functionality with local storage persistence
- 🔍 **Product Search & Filters** - Search products and filter by category
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Built with Next.js 14 and optimized for speed
- 🎨 **Beautiful UI** - Clean, modern interface with smooth animations

## Product Categories

- **Game Codes** - Digital game downloads
- **Gift Cards** - Platform gift cards (Steam, PlayStation, Xbox, Nintendo)
- **Subscriptions** - Gaming service subscriptions (PS Plus, Xbox Game Pass, EA Play)
- **Accessories** - Gaming peripherals and hardware

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks + Local Storage
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd gaming-store
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
gaming-store/
├── app/
│   ├── cart/              # Shopping cart page
│   ├── products/          # Products listing and detail pages
│   │   └── [id]/         # Dynamic product detail page
│   ├── layout.tsx        # Root layout with header/footer
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header with cart counter
│   ├── Footer.tsx        # Footer component
│   └── ProductCard.tsx   # Reusable product card
├── lib/
│   ├── cart.ts           # Cart management functions
│   └── products.ts       # Product data and utilities
├── types/
│   └── index.ts          # TypeScript type definitions
└── public/               # Static assets
```

## Key Features Explained

### Shopping Cart
- Add/remove products
- Update quantities
- Persistent storage using localStorage
- Real-time cart counter in header
- Responsive cart page with order summary

### Product Management
- 12 sample products across 4 categories
- Featured products on home page
- Detailed product pages with images
- Platform and region information
- Price display and instant add-to-cart

### User Experience
- Smooth animations and transitions
- Hover effects on interactive elements
- Toast notifications for cart actions
- Mobile-friendly navigation
- Search functionality
- Category filtering

## Customization

### Adding Products
Edit `/lib/products.ts` to add or modify products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  price: 59.99,
  category: 'game-codes', // or 'gift-cards', 'subscriptions', 'accessories'
  description: 'Product description',
  image: 'image-url',
  platform: 'Platform name',
  region: 'Region',
  featured: true // optional
}
```

### Styling
- Main colors defined in Tailwind classes
- Purple/blue gradient theme
- Dark mode optimized
- Modify `app/globals.css` for global style changes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Static page generation where possible
- Optimized images with Next.js Image
- Minimal JavaScript bundle
- Fast page transitions

## Future Enhancements

- User authentication
- Payment gateway integration
- Order history
- Product reviews and ratings
- Wishlist functionality
- Admin dashboard
- Email notifications
- Multi-language support

## License

This project is open source and available for educational purposes.

## Support

For issues or questions, please open an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
