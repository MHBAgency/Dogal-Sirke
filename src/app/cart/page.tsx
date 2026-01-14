"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Trash2, ArrowLeft, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
    const { items, removeFromCart, clearCart, updateQuantity, totalPrice, getWhatsAppUrl } = useCart();

    if (items.length === 0) {
        return (
            <main className="min-h-screen bg-[#fefce8]">
                <Navbar />
                <div className="container mx-auto px-4 min-h-[60vh] flex flex-col items-center justify-center text-center pt-20">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-amber-900/5 relative"
                    >
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-200 animate-spin-slow" />
                        <Trash2 className="w-12 h-12 text-amber-300" />
                    </motion.div>
                    <h1 className="font-serif text-4xl font-bold mb-4 text-amber-950">Sepetiniz Henüz Boş</h1>
                    <p className="text-amber-800/60 mb-8 max-w-md">Doğanın şifalı lezzetlerini keşfetmek için ürünlerimize göz atın.</p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-600/30 hover:-translate-y-1"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Mağazaya Dön
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#faf9f6]">
            <Navbar />

            <div className="container mx-auto px-4 pt-32 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between mb-10"
                >
                    <h1 className="font-serif text-3xl md:text-5xl font-bold text-amber-950">Alışveriş Sepeti</h1>
                    <span className="text-amber-700/60 font-medium hidden md:block">{items.length} Ürün Eklendi</span>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart Items List */}
                    <div className="lg:w-2/3 space-y-6">
                        <AnimatePresence>
                            {items.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="group flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="relative w-full sm:w-32 h-32 rounded-2xl overflow-hidden bg-stone-100 shrink-0">
                                        <Image src={item.imageSrc} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>

                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2 py-1 rounded-md mb-2 inline-block">Doğal Sirke</span>
                                                <h3 className="font-serif text-xl font-bold text-stone-800">{item.title}</h3>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                                                title="Ürünü Sil"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="flex justify-between items-center mt-4 sm:mt-0">
                                            <div className="flex items-center gap-3 bg-stone-50 px-2 py-1 rounded-xl border border-stone-100">
                                                <button
                                                    onClick={() => {
                                                        if (item.quantity > 1) {
                                                            updateQuantity(item.id, -1);
                                                        } else {
                                                            removeFromCart(item.id);
                                                        }
                                                    }}
                                                    className="w-8 h-8 flex items-center justify-center text-stone-500 font-bold hover:bg-stone-200 rounded-lg transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="font-bold text-stone-800 min-w-[1.5rem] text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-8 h-8 flex items-center justify-center text-stone-500 font-bold hover:bg-stone-200 rounded-lg transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <p className="font-bold text-2xl text-amber-600">
                                                {(parseInt(item.price.replace(/[^0-9]/g, "")) * item.quantity).toLocaleString()} ₸
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        <div className="flex justify-end pt-4">
                            <button
                                onClick={clearCart}
                                className="text-sm text-stone-400 hover:text-red-500 flex items-center gap-2 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                                Tümünü Sil
                            </button>
                        </div>
                    </div>

                    {/* Order Summary Card */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/50 sticky top-32">
                            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-8 pb-4 border-b border-stone-100">Sipariş Özeti</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-stone-600">
                                    <span>Ara Toplam</span>
                                    <span>{totalPrice.toLocaleString()} ₸</span>
                                </div>
                                <div className="flex justify-between text-stone-600">
                                    <span>Kargo</span>
                                    <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded text-sm">ÜCRETSİZ</span>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                                    <span className="font-bold text-lg text-stone-800">Toplam Tutar</span>
                                    <span className="font-serif font-bold text-3xl text-amber-600">{totalPrice.toLocaleString()} ₸</span>
                                </div>
                            </div>

                            <a
                                href={getWhatsAppUrl()}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-lg hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-green-500/20 transition-all active:scale-[0.98]"
                            >
                                <MessageCircle className="w-6 h-6 fill-current" />
                                WhatsApp ile Sipariş Ver
                            </a>

                            <p className="text-xs text-center text-stone-400 mt-6 leading-relaxed">
                                Butona tıkladığınızda sipariş detaylarınız otomatik olarak WhatsApp mesajına dönüştürülür.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
