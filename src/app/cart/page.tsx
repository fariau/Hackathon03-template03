
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function cart() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white p-6">
        {/* Free Delivery Notice */}
        <div className="mt-6 text-sm text-gray-500 text-center sm:text-left">
          Free Delivery applies to orders of ₹ 14,000.00 or more.
          <a href="#" className="text-blue-500 hover:underline"> View details</a>
        </div>
        <br />

        {/* Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items Section */}
          <div className="lg:col-span-2">
            <h1 className="text-lg font-bold mb-4">Bag</h1>
            {/* Item 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between border-b pb-4 mb-4">
              <Image
                src="/cart-img.jpeg"
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                width={120}
                height={120}
                className="w-24 h-24 rounded-md border"
              />
              <div className="sm:ml-4 flex-1 text-center sm:text-left mt-4 sm:mt-0">
                <h3 className="font-medium text-gray-800">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <p className="text-sm text-gray-600">Men&apos;s Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm text-gray-500">Size: L</p>
              </div>
              <div className="text-right mt-4 sm:mt-0">
                <p className="font-medium">₹ 3,895.00</p>
                <button className="text-sm text-red-500 hover:underline mt-2">Remove</button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between border-b pb-4 mb-4">
              <Image
                src="/cart-img.jpeg"
                alt=""
                width={120}
                height={120}
                className="w-24 h-24 rounded-md border"
              />
              <div className="sm:ml-4 flex-1 text-center sm:text-left mt-4 sm:mt-0">
                <h3 className="font-medium text-gray-800">Nike Air Max 97 SE</h3>
                <p className="text-sm text-gray-600">Men&apos;s Shoes</p>
                <p className="text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
                <p className="text-sm text-gray-500">Size: 8</p>
              </div>
              <div className="text-right mt-4 sm:mt-0">
                <p className="font-medium">₹ 16,995.00</p>
                <button className="text-sm text-red-500 hover:underline mt-2">Remove</button>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gray-100 rounded-lg p-6 border border-gray-200">
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">₹ 20,890.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Estimated Delivery & Handling</p>
              <p className="font-medium">Free</p>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-4">
              <p>Total</p>
              <p>₹ 20,890.00</p>
            </div>
            <Button className="w-full font-medium py-3 rounded-lg mt-4">
              Member Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
