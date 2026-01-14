"use client";

import { motion } from "framer-motion";
import { ArrowDown, BadgeCheck } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Elma Bahçesi"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <div className="container relative z-10 px-4 text-center pt-24">
                {/* Certification Badge */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                    className="absolute top-0 right-4 md:right-20 md:top-20 z-20 hidden md:flex flex-col items-center justify-center w-32 h-32 bg-amber-400 rounded-full shadow-xl border-4 border-white/30 rotate-12"
                >
                    <BadgeCheck className="w-8 h-8 text-white mb-1" />
                    <span className="text-center text-xs font-bold text-amber-900 leading-tight px-2">
                        Sadece<br />Şekersiz Bal<br />ile Mayalanır
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="inline-block py-2 px-6 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-200 text-sm md:text-base font-medium mb-6 tracking-widest border border-amber-500/30 uppercase">
                        Songül Büber'in Mutfağından
                    </span>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl max-w-5xl mx-auto">
                        Doğanın Sabrıyla Mayalanan <br />
                        <span className="italic text-amber-400">Şifa Kaynağı Sirkeler</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md">
                        En seçkin bahçelerden toplanan meyveler ve kendi kovanlarımızın <span className="font-semibold text-amber-300">şekersiz balıyla</span>, geleneksel yöntemlerle kuruldu. Koruyucu yok, acele yok, sadece saf lezzet.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        {/* Mobile-only Badge for visibility */}
                        <div className="flex md:hidden items-center gap-2 bg-amber-500/10 backdrop-blur border border-amber-500/30 p-2 rounded-lg mb-2">
                            <BadgeCheck className="w-5 h-5 text-amber-400" />
                            <span className="text-xs font-bold text-amber-100">Sadece Şekersiz Bal ile Mayalanır</span>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="#products"
                                className="px-10 py-4 bg-amber-500 text-white rounded-full font-bold text-lg hover:bg-amber-400 transition-all hover:scale-105 shadow-xl shadow-amber-900/40"
                            >
                                Lezzetleri Keşfet
                            </a>
                            <a
                                href="#story"
                                className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                            >
                                Hikayemiz
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ArrowDown className="w-8 h-8" />
            </motion.div>
        </section>
    );
}
