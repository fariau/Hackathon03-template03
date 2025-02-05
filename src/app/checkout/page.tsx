"use client";

import { Product } from "@/types/products";
import React, { useEffect, useState } from "react";
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

const Checkout = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
    });
    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        zipCode: false,
        city: false,
    });

    useEffect(() => {
        setCartItems(getCartItems());
        const appliedDiscount = localStorage.getItem("appliedDiscount");
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount));
        }
    }, []);

    const subTotal = cartItems.reduce(
        (total, item) => total + item.price * item.inventory,
        0
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value,
        });
    };

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            email: !formValues.email,
            phone: !formValues.phone,
            address: !formValues.address,
            zipCode: !formValues.zipCode,
            city: !formValues.city,
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };

    const handlePlaceOrder = async () => {
        Swal.fire({
            title: "Processing your order...",
            text: "Please wait a moment.",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "proceed",
        }).then((result) => {
            if (result.isConfirmed) {
                if (validateForm()) {
                    localStorage.removeItem("appliedDiscount");
                    Swal.fire(" Success!",
                        "Your order has been successfully processed!",
                        "success"
                    );
                } else {
                    Swal.fire(
                        "Error!",
                        "Please fill all the fields before processing",
                        "error",
                    );
                }
            }
        });

        const total = subTotal - discount;

        const orderData = {
            _type: 'order',
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            address: formValues.address,
            city: formValues.city,
            zipCode: formValues.zipCode,
            phone: formValues.phone,
            email: formValues.email,
            
            cartItems: cartItems.map(item => ({
                _type: 'cartItem',
                product: {
                    _type: 'reference',
                    _ref: item._id,
                },
                quantity: item.inventory,
                price: item.price,
            })),
            total: total,
            discount: discount,
            orderDate: new Date().toISOString(),
        };

        try {
            const response = await client.create(orderData);
            console.log("Order created:", response);
            Swal.fire("Success!", "Your order has been successfully processed!", "success");
            localStorage.removeItem("appliedDiscount");
        } catch (error) {
            console.error("Error creating order:", error);
            Swal.fire("Error", "Failed to process order. Please try again.", "error");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <nav className="flex items-center gap-2 text-sm mb-6">
                    <Link href="/cart" className="text-amber-700 hover:text-black">
                        Cart
                    </Link>
                    <span className="text-gray-500">/</span>
                    <span className="font-medium">Checkout</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Order Summary */}
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div
                                    key={item._id}
                                    className="flex items-center gap-4 py-3 border-b"
                                >
                                    <div className="w-16 h-16 rounded overflow-hidden">
                                        {item.image && (
                                            <Image
                                                src={urlFor(item.image).url()}
                                                alt="image"
                                                width={50}
                                                height={50}
                                                className="object-cover w-full h-full"
                                            />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium">{item.productName}</h3>
                                        <p className="text-xs text-gray-500">Quantity: {item.inventory}</p>
                                    </div>
                                    <p className="font-semibold">${item.price * item.inventory}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-gray-600">No item in cart</p>
                        )}
                        <div className="text-right pt-4">
                            <p className="text-sm">Subtotal: ${subTotal.toFixed(2)}</p>
                            <p className="text-sm">Discount: ${discount}</p>
                            <p className="text-lg font-semibold">Total: ${subTotal.toFixed(2)}</p>
                        </div>
                    </div>

                    {/* Billing Information */}
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                        <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {Object.keys(formValues).map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-700">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <input
                                        type="text"
                                        id={field}
                                        placeholder={`Enter your ${field}`}
                                        value={formValues[field as keyof typeof formValues]}
                                        onChange={handleInputChange}
                                        className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-amber-500"
                                    />
                                    {formErrors[field as keyof typeof formErrors] && (
                                        <p className="text-xs text-red-500">{`${field} is required`}</p>
                                    )}
                                </div>
                            ))}
                            <button
                                onClick={handlePlaceOrder}
                                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800 transition"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
