"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, HeartPulse } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { BenefitsModal } from "./BenefitsModal";

interface ProductCardProps {
    title: string;
    description: string;
    price: string;
    imageSrc: string;
    type: string;
    benefits: string[];
}

export function ProductCard({ title, description, price, imageSrc, type, benefits }: ProductCardProps) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = React.useState(1);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleAddToCart = () => {
        addToCart({
            id: type,
            title,
            price,
            imageSrc,
            quantity,
        });
        setQuantity(1);
    };

    return (
        <>
            <motion.div
                whileHover={{ y: -10 }}
                className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300"
            >
                <div className="h-80 relative flex items-center justify-center overflow-hidden bg-muted/20">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Benefits Trigger Button */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur text-amber-600 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-amber-500 hover:text-white z-10"
                        title="Faydaları Görüntüle"
                    >
                        <HeartPulse className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">{type} Sirkesi</span>
                            <h3 className="font-serif text-2xl font-bold text-foreground mt-1">{title}</h3>
                        </div>
                        <span className="font-bold text-lg text-primary">{price}</span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* Quantity controls and Add to Cart button */}
                    <div className="flex gap-3">
                        <div className="flex items-center bg-secondary/10 rounded-xl px-2">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-8 h-full flex items-center justify-center text-primary font-bold hover:bg-secondary/20 rounded-lg transition-colors"
                            >
                                -
                            </button>
                            <span className="w-8 text-center font-bold text-foreground">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-8 h-full flex items-center justify-center text-primary font-bold hover:bg-secondary/20 rounded-lg transition-colors"
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-secondary/90 active:scale-95 transition-all"
                        >
                            <Plus className="w-4 h-4" />
                            Sepete Ekle
                        </button>
                    </div>
                </div>
            </motion.div>

            <BenefitsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={title}
                benefits={benefits}
            />
        </>
    );
}
