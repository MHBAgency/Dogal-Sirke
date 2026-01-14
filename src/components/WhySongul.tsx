"use client";

import { motion } from "framer-motion";
import { CheckCircle2, User, Leaf, Sprout } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: User,
        title: "Songül Büber İmzası",
        description: "Her bir şişe, Songül Hanım'ın yıllara dayanan tecrübesi ve titizliğiyle hazırlanır."
    },
    {
        icon: Leaf,
        title: "%100 Doğal Fermantasyon",
        description: "Hızlandırıcı yok, kimyasal yok. Sadece meyve, doğal bal ve sabır."
    },
    {
        icon: Sprout,
        title: "Canlı Probiyotik",
        description: "Pastörize edilmediği için içindeki yararlı bakteriler canlılığını korur."
    },
    {
        icon: CheckCircle2,
        title: "Şekersiz Bal ile Üretim",
        description: "Sadece kendi kovanlarımızdan elde ettiğimiz katkısız bal kullanılır."
    }
];

export function WhySongul() {
    return (
        <section id="why-songul" className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-5/12"
                    >
                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-stone-100">
                            <Image
                                src="/songul-buber.png"
                                alt="Songül Büber"
                                fill
                                className="object-cover"
                            />
                            {/* Badge */}
                            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-stone-100 max-w-[200px]">
                                <p className="font-serif italic text-stone-600 text-sm">
                                    "Doğallık, sabır işidir. Aceleye getirmeden, sevgiyle kuruyoruz."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Features Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-7/12"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 mb-6">Neden Songül Büber'in Sirkeleri?</h2>
                        <p className="text-stone-500 text-lg mb-10 leading-relaxed max-w-2xl">
                            Bizi diğerlerinden ayıran en önemli özellik, üretim sürecindeki şeffaflığımız ve anne eli değmiş gibi özenli yaklaşımımızdır.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                                        <feature.icon className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg font-bold text-stone-800 mb-2">{feature.title}</h3>
                                        <p className="text-stone-600 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
