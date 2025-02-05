"use client";

import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/products";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/qurries";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";

export default function Featured() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allproducts);
        setProducts(fetchedProducts);
      } catch {
        setError("Failed to load products. Please try again later.");
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  if (error) {
    return (
      <div className="text-center mt-8 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <main className="my-20 max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-x-10">
      {/* Sidebar */}
      <section className="flex flex-col w-full lg:w-[250px] p-4 border-r">
        <h1 className="font-semibold text-sm md:text-2xl">New (500)</h1>
        <div className="font-medium text-[15px] lg:text-md space-y-2 mt-6 flex flex-col">
          {["Shoes", "Sports Bras", "Tops & T-Shirts", "Hoodies & Sweatshirts", "Jackets", "Trousers & Tights", "Shorts", "Tracksuits", "Jumpsuits & Rompers", "Skirts & Dresses", "Socks", "Accessories & Equipment"].map((item, index) => (
            <Link key={index} href={"#"}>{item}</Link>
          ))}
        </div>

        {/* Gender Filter */}
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex justify-between items-center text-sm mt-1">
            Gender <span><IoIosArrowUp /></span>
          </h1>
          <div className="mt-2 text-[9px] lg:text-sm">
            <h1 className="flex gap-2 items-center">Men</h1>
            <h1 className="flex gap-2 items-center">Women</h1>
            <h1 className="flex gap-2 items-center">Unisex</h1>
          </div>
        </div>

        {/* Kids Filter */}
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex justify-between text-sm items-center mt-1">
            Kids <span><IoIosArrowUp /></span>
          </h1>
          <div className="mt-2 text-[9px] lg:text-sm">
            <h1 className="flex gap-2 items-center">Boys</h1>
            <h1 className="flex gap-2 items-center">Girls</h1>
          </div>
        </div>

        {/* Price Sort Filter */}
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex text-[9px] lg:text-[12px] justify-between items-center mt-1">
            Sort By Price <span><IoIosArrowUp /></span>
          </h1>
          <div className="mt-2 text-[9px] lg:text-sm">
            <h1 className="flex gap-2 items-center">Under ₹ 2,500.00</h1>
            <h1 className="flex gap-2 items-center">₹ 2,501.00 - ₹ 7,500.00</h1>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-[1000px] mx-auto overflow-clip">
        <div className="flex gap-4 ml-10 md:ml-[400px] lg:ml-[620px] xl:ml-[800px] overflow-clip">
          <h1 className="flex items-center gap-2 font-semibold text-sm">
            Hide Filters <FiFilter size={14} />
          </h1>
          <h2 className="flex items-center gap-2 font-semibold text-sm">
            Sort By <RiArrowDropDownLine size={25} />
          </h2>
        </div>

        <div className="mb-20"></div>

        <div className="flex justify-evenly flex-wrap gap-5">
          <h1 className="font-semibold text-xl mb-3 ml-2">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
              >
                <Link
                  href={product?.slug?.current ? `/product/${product.slug.current}` : "#"}
                  className={!product?.slug?.current ? "cursor-not-allowed" : ""}
                >
                  {product?.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.productName || "Product Image"}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  )}
                  <h2 className="text-lg font-semibold mt-4">
                    {product.productName || "Unnamed Product"}
                  </h2>
                  <p className="text-gray-500 mt-2">
                    {product.price ? `₹${product.price}` : "Price not available"}
                  </p>
                  <button
                    className="bg-gradient-to-r bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add To Cart
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <hr />
        <br />

        {/* Related Categories */}
        <section className="my-10">
          <h1 className="font-semibold text-xl">Related Categories</h1>
          <div className="space-x-2 space-y-2">
            {[
              "Best Selling Products",
              "Best Shoes",
              "New Basketball Shoes",
              "New Football Shoes",
              "New Men's Shoes",
              "New Running Shoes",
              "Best Men's Shoes",
              "New Jordan Shoes",
              "Best Women's Shoes",
              "Best Training & Gym",
            ].map((category, index) => (
              <Button
                key={index}
                className="bg-white text-black rounded-full border-[1px] shadow-none"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
