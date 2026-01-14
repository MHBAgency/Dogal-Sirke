"use client";

import { CheckCircle2, FlaskRound, Heart, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Leaf,
        title: "%100 Doğal",
        description: "Hiçbir katkı maddesi veya koruyucu içermez. Sadece meyve ve bal."
    },
    {
        icon: FlaskRound,
        title: "Şekersiz Fermantasyon",
        description: "Beyaz şeker yerine doğal bal kullanılarak fermente edilir, daha sağlıklıdır."
    },
    {
        icon: Heart,
        title: "Şifa Kaynağı",
        description: "Probiyotik açısından zengin, sindirimi destekleyen doğal bir içecektir."
    }
];

export function WhyHoney() {
    return (
        <section id="why-honey" className="py-24 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Neden Ballı Sirke?</h2>
                    <p className="text-muted-foreground">
                        Sıradan sirkelerden farklı olarak, bizim sirkelerimiz yapay asit veya şeker içermez.
                        Fermantasyon süreci tamamen doğal bal ile başlatılır.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-card p-8 rounded-3xl border border-border/30 hover:border-primary/30 transition-colors"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
