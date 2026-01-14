"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Story() {
    return (
        <section id="story" className="py-24 bg-[#faf9f6]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Using the same orchard image for now, or a solid color placeholder if preferred */}
                        <Image
                            src="/hero-bg.png"
                            alt="Doğal Üretim Süreci"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Bizim Hikayemiz</span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 mt-2 mb-6">
                            Dalından Şişeye <br />El Değmeden...
                        </h2>
                        <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
                            <p>
                                Her şey, doğaya duyduğumuz saygı ve gerçek lezzete olan özlemimizle başladı. Songül Büber'in mutfağında filizlenen bu hikaye, bugün en seçkin bahçelerden toplanan meyvelerin şişelere dolan yolculuğuna dönüştü.
                            </p>
                            <p>
                                Endüstriyel üretimden uzak, tamamen geleneksel yöntemlerle çalışıyoruz. Acelemiz yok; çünkü biliyoruz ki gerçek şifa, sabırla mayalanır. Hiçbir katkı maddesi kullanmadan, doğanın bize sunduğu zaman döngüsüne saygı duyarak üretim yapıyoruz.
                            </p>
                            <p className="font-medium text-stone-800 italic">
                                "Bizim için sirke sadece bir sos değil, doğanın bilgeliğini sofranıza taşıyan bir şifa aracıdır."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
