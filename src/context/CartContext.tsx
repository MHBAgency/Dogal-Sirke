"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

export type CartItem = {
    id: string; // unique id (e.g. product type)
    title: string;
    price: string;
    imageSrc: string;
    quantity: number;
};

interface CartContextType {
    items: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
    updateQuantity: (id: string, delta: number) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    totalPrice: number;
    getWhatsAppUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem("cart-items");
        if (saved) {
            try {
                setItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse cart items", e);
            }
        }
    }, []);

    // Save to local storage whenever items change
    useEffect(() => {
        localStorage.setItem("cart-items", JSON.stringify(items));
    }, [items]);

    const addToCart = (product: Omit<CartItem, "quantity"> & { quantity?: number }) => {
        const qtyToAdd = product.quantity || 1;
        setItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                toast.success(`${product.title} sepette güncellendi`);
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + qtyToAdd } : item
                );
            }
            toast.success(`${product.title} sepete eklendi`);
            return [...prev, { ...product, quantity: qtyToAdd }];
        });
    };

    const updateQuantity = (id: string, delta: number) => {
        setItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQuantity = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const removeFromCart = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
        toast.info("Ürün sepetten çıkarıldı");
    };

    const clearCart = () => {
        setItems([]);
        toast.info("Sepet temizlendi");
    };

    const totalPrice = items.reduce((acc, item) => {
        // Basic parsing for "4000 ₸" string to number
        const priceNum = parseInt(item.price.replace(/[^0-9]/g, "")) || 0;
        return acc + priceNum * item.quantity;
    }, 0);

    const getWhatsAppUrl = () => {
        const phoneNumber = "77026379594"; // +7 702 637 9594
        let message = "Merhaba, doğal sirke siparişi vermek istiyorum! 🌿\n\nSepetim:\n";

        items.forEach(item => {
            message += `- ${item.title} (${item.quantity} Adet) \n`;
        });

        // Calculate total with the same logic as totalPrice
        const total = items.reduce((acc, item) => {
            const priceNum = parseInt(item.price.replace(/[^0-9]/g, "")) || 0;
            return acc + priceNum * item.quantity;
        }, 0);

        message += `\nToplam Tutar: *${total.toLocaleString()} ₸*`;
        message += "\n\nAdres ve teslimat bilgisi için yardımcı olur musunuz?";

        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    };

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice, getWhatsAppUrl }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
