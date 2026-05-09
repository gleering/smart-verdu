import type { Metadata } from "next";
import { CartProvider } from "../context/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Verdu",
  description: "Verduleria online con pedidos por WhatsApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
