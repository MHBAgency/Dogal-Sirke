"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

export function FinalCTA() {
    return (
        <section id="contact" className="py-24 bg-stone-900 text-white text-center relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Doğallığı Mutfağınıza Taşıyın</h2>
                    <p className="text-stone-400 text-xl max-w-2xl mx-auto mb-10">
                        Stoklarımız mevsimsel üretimle sınırlıdır. Sipariş vermek veya bilgi almak için bize yazın.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/77026379594"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-all hover:scale-105"
                        >
                            <MessageCircle className="w-6 h-6 fill-current" />
                            WhatsApp ile Sipariş Ver
                        </a>
                        <a
                            href="https://www.instagram.com/songulbuber/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105"
                        >
                            <Instagram className="w-6 h-6" />
                            Instagram'dan Takip Et
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
