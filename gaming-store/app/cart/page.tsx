'use client';

import { useState, useEffect } from 'react';
import { getCart, updateQuantity, removeFromCart, getCartTotal } from '@/lib/cart';
import { CartItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCartItems(getCart());
    setIsLoading(false);
  }, []);

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    const updatedCart = updateQuantity(productId, quantity);
    setCartItems(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleRemove = (productId: string) => {
    const updatedCart = removeFromCart(productId);
    setCartItems(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const total = getCartTotal();

  if (isLoading) {
    return (
      <div className="bg-gray-900 min-h-screen py-16 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">Loading cart...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-900 min-h-screen py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-8">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h1>
            <p className="text-gray-400 mb-8">Add some awesome gaming products to get started!</p>
            <Link
              href="/products"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row gap-4">
                <div className="relative w-full sm:w-32 h-32 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="128px"
                  />
                </div>

                <div className="flex-grow">
                  <Link href={`/products/${item.id}`}>
                    <h3 className="text-lg font-bold text-white hover:text-purple-400 transition-colors mb-2">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-gray-400 text-sm mb-2">{item.platform}</p>
                  <p className="text-purple-400 font-bold text-xl">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">
                  <div className="flex items-center gap-2 bg-gray-700 rounded-lg">
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 text-white hover:bg-gray-600 rounded-l-lg transition-colors"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="px-4 py-1 text-white font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 text-white hover:bg-gray-600 rounded-r-lg transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-400 hover:text-red-300 font-semibold transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t border-gray-700 pt-3 flex justify-between text-white text-xl font-bold">
                  <span>Total</span>
                  <span className="text-purple-400">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 mb-4">
                Proceed to Checkout
              </button>

              <Link
                href="/products"
                className="block text-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-green-400">✓</span>
                  <span>Secure checkout with instant delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
