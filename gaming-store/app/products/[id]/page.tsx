'use client';

import { useParams } from 'next/navigation';
import { getProductById } from '@/lib/products';
import { addToCart } from '@/lib/cart';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

export default function ProductDetailPage() {
  const params = use(Promise.resolve(useParams()));
  const product = getProductById(params.id as string);

  if (!product) {
    return (
      <div className="bg-gray-900 min-h-screen py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
          <Link href="/products" className="text-purple-400 hover:text-purple-300">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    window.dispatchEvent(new Event('cartUpdated'));
    
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.textContent = 'Added to cart!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 2000);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <Link href="/products" className="text-purple-400 hover:text-purple-300 mb-6 inline-block">
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          <div className="relative h-96 lg:h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {product.featured && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                FEATURED
              </div>
            )}
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded">
                {product.platform}
              </span>
              {product.region && (
                <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded">
                  {product.region}
                </span>
              )}
              <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded capitalize">
                {product.category.replace('-', ' ')}
              </span>
            </div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="border-t border-gray-700 pt-6 mb-8">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-purple-400">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
              >
                Add to Cart
              </button>
            </div>

            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-white font-bold mb-4">Product Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Instant digital delivery
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  100% authentic codes
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  24/7 customer support
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Secure payment processing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
