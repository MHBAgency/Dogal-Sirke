"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, HeartPulse, Check } from "lucide-react";

interface BenefitsModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    benefits: string[];
}

export function BenefitsModal({ isOpen, onClose, title, benefits }: BenefitsModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-colors"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-[#faf9f6] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative border border-white/50"
                        >
                            {/* Header */}
                            <div className="bg-amber-500/10 p-6 flex items-center justify-between border-b border-amber-100">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-amber-100/50 rounded-full">
                                        <HeartPulse className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-stone-800">
                                        {title} Faydaları
                                    </h3>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-black/5 rounded-full transition-colors text-stone-500 hover:text-stone-800"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <p className="text-stone-500 mb-6 text-sm">
                                    Bu bilgiler geleneksel kullanıma dayanmaktadır, tıbbi tavsiye değildir.
                                </p>
                                <ul className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="mt-1 min-w-5">
                                                <Check className="w-5 h-5 text-green-600" />
                                            </div>
                                            <span className="text-stone-700 font-medium leading-relaxed">
                                                {benefit}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Footer */}
                            <div className="p-6 bg-stone-50 border-t border-stone-200/50 flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2.5 bg-stone-800 text-white rounded-xl font-medium hover:bg-stone-700 transition-colors shadow-lg shadow-stone-200"
                                >
                                    Anladım
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
