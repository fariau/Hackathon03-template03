"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3445d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0).toFixed(2);
  };

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3445d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed!", "success");
        router.push("/checkout");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-6 p-4 border rounded-lg shadow-md bg-white"
              >
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt="image"
                    width={100}
                    height={100}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                )}

                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">{item.productName}</h2>
                  <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      className="px-2 py-1 text-sm"
                      onClick={() => handleDecrement(item._id)}
                    >
                      -
                    </button>
                    <span>{item.inventory}</span>
                    <button
                      className="px-2 py-1 text-sm"
                      onClick={() => handleIncrement(item._id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="text-sm text-red-600 hover:text-red-800"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="p-6 border rounded-lg shadow-md bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
            <button
              className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleProceed}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

