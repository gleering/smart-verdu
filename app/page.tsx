import CartSidebar from "../components/CartSidebar";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <CartSidebar />
      <section className="bg-green-700 text-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold leading-tight">
            Tu verdulería ahora online
          </h1>

          <p className="mt-4 text-lg text-green-100 max-w-2xl">
            Pedí frutas y verduras frescas desde tu celular
            en segundos.
          </p>

          <button className="mt-8 bg-white text-green-700 px-6 py-3 rounded-xl font-semibold">
            Hacer pedido
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-black mb-8">
          Productos destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
} 