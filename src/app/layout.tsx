import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "sonner";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doğal Şifa - Ballı Sirke",
  description: "Doğal, katkısız, ballı el yapımı sirkeler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          "antialiased min-h-screen font-sans"
        )}
      >
        <CartProvider>
          {children}
          <Toaster position="top-center" richColors />
          <FloatingWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
