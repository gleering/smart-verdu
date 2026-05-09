"use client";

import { useCart } from "../context/CartContext";

const WHATSAPP_PHONE = "5490000000000";

export default function CartSidebar() {
    const { cart, addToCart, removeFromCart } = useCart();

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const whatsappMessage = cart
        .map(
            (item) =>
                `- ${item.name} x${item.quantity} - $${item.price * item.quantity}`
        )
        .join("%0A");

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=Hola,%20quiero%20hacer%20este%20pedido:%0A%0A${whatsappMessage}%0A%0ATotal:%20$${total}`;

    return (
        <aside className="fixed right-0 top-0 h-screen w-[350px] bg-white shadow-2xl border-l p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold text-black mb-6">
                Tu pedido
            </h2>

            <div className="flex flex-col gap-4">
                {cart.length === 0 && (
                    <p className="text-gray-500">
                        Tu carrito esta vacio
                    </p>
                )}

                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded-xl p-4"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 rounded-lg object-cover"
                            />

                            <div className="flex-1">
                                <h3 className="font-semibold text-black">
                                    {item.name}
                                </h3>

                                <div className="flex items-center gap-3 mt-2">
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="w-8 h-8 rounded-lg bg-gray-200 text-black font-bold"
                                    >
                                        -
                                    </button>

                                    <span className="font-medium text-black">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() => addToCart(item)}
                                        className="w-8 h-8 rounded-lg bg-green-600 text-white font-bold"
                                    >
                                        +
                                    </button>
                                </div>

                                <p className="font-bold text-green-700 mt-2">
                                    ${item.price * item.quantity}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-medium text-black">
                        Total
                    </span>

                    <span className="text-2xl font-bold text-green-700">
                        ${total}
                    </span>
                </div>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-xl font-semibold text-center"
                >
                    Finalizar pedido
                </a>
            </div>
        </aside>
    );
}
