"use client";
import { useCart } from "../context/CartContext";
import { Product } from "../types/product";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
            />

            <div className="p-4">
                <span className="text-sm text-green-600">{product.category}</span>

                <h2 className="text-xl font-semibold text-black mt-1">
                    {product.name}
                </h2>

                <p className="text-black mt-2 font-bold">${product.price}</p>

                <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-4 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}