"use client";

import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";
import Image from "next/image";

export function SecretHoney() {
    return (
        <section id="secret-honey" className="py-24 bg-amber-500 relative overflow-hidden">
            {/* Decorative Hexagons */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10"><Hexagon className="w-32 h-32 fill-current text-white" /></div>
                <div className="absolute bottom-20 right-20"><Hexagon className="w-48 h-48 fill-current text-white" /></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl skew-y-3 lg:skew-y-0 lg:-skew-x-3 border-4 border-white/20"
                    >
                        <Image
                            src="/honey-detail.png"
                            alt="Saf Petek Balı"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white font-serif italic text-lg drop-shadow-md">
                            %100 Doğal Petek Balı
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 text-white"
                    >
                        <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                            <Hexagon className="w-4 h-4 fill-amber-300 text-amber-300" />
                            <span className="text-sm font-bold tracking-wider uppercase">Gizli Sırrımız</span>
                        </div>

                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                            Şekerle Değil, <br />
                            <span className="text-amber-100 italic">Bal ile</span> Mayalanan Şifa.
                        </h2>

                        <div className="space-y-6 text-lg text-amber-50 leading-relaxed font-light">
                            <p>
                                Bizi diğerlerinden ayıran en önemli fark, mayalanma sürecimizdir. Maliyeti düşürmek için şeker kullanmak yerine, sirkelerimizi yalnızca güvenilir arıcılardan temin ettiğimiz gerçek ve doğal bal ile kuruyoruz.
                            </p>

                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border-l-4 border-amber-200">
                                <p className="font-serif italic text-xl">
                                    "Doğal bal, sirkenin probiyotik değerini ve lezzetini zirveye taşır. Şeker değil, şifa mayalıyoruz."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
