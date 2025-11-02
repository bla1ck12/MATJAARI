import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/lib/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="bg-gray-900 min-h-screen">
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-black py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Level Up Your
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Gaming Experience
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get instant access to game codes, gift cards, subscriptions, and premium gaming gear
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
              >
                Browse Products
              </Link>
              <Link
                href="/products?category=subscriptions"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 border-2 border-purple-500 hover:scale-105"
              >
                View Subscriptions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Delivery</h3>
              <p className="text-gray-400">Get your codes immediately after purchase</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">Secure Payment</h3>
              <p className="text-gray-400">Safe and encrypted transactions</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-2">Best Prices</h3>
              <p className="text-gray-400">Competitive pricing on all products</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Products</h2>
            <p className="text-gray-400">Check out our most popular items</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/products?category=game-codes"
                className="bg-gray-800 hover:bg-purple-900 p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-purple-500"
              >
                <div className="text-3xl mb-2">🎮</div>
                <h3 className="text-white font-semibold">Game Codes</h3>
              </Link>
              <Link
                href="/products?category=gift-cards"
                className="bg-gray-800 hover:bg-blue-900 p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-blue-500"
              >
                <div className="text-3xl mb-2">🎁</div>
                <h3 className="text-white font-semibold">Gift Cards</h3>
              </Link>
              <Link
                href="/products?category=subscriptions"
                className="bg-gray-800 hover:bg-purple-900 p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-purple-500"
              >
                <div className="text-3xl mb-2">⭐</div>
                <h3 className="text-white font-semibold">Subscriptions</h3>
              </Link>
              <Link
                href="/products?category=accessories"
                className="bg-gray-800 hover:bg-blue-900 p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-blue-500"
              >
                <div className="text-3xl mb-2">🖱️</div>
                <h3 className="text-white font-semibold">Accessories</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
