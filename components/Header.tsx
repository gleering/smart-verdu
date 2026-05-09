"use client";

import { useCart } from "../context/CartContext";

export default function Header() {
    const { cart } = useCart();

    const totalItems = cart.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-green-700">
                    Smart Verdu
                </h1>

                <div className="bg-green-600 text-white px-4 py-2 rounded-xl font-medium">
                    Carrito ({totalItems})
                </div>
            </div>
        </header>
    );
}