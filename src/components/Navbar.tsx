"use client";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Navbar() {
    const {
        items,
        updateQuantity,
        removeFromCart,
        totalPrice,
        getWhatsAppUrl
    } = useCart();

    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80; // height of sticky header + some breathing room
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-serif text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
                    Doğal Şifa
                </Link>

                <div className="flex items-center gap-6">
                    <Link href="/#why-songul" onClick={(e) => scrollToSection(e, "why-songul")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block">
                        Niçin Biz?
                    </Link>
                    <Link href="/#products" onClick={(e) => scrollToSection(e, "products")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block">
                        Ürünlerimiz
                    </Link>
                    <Link href="/#story" onClick={(e) => scrollToSection(e, "story")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block">
                        Hikayemiz
                    </Link>
                    <Link href="/#secret-honey" onClick={(e) => scrollToSection(e, "secret-honey")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block">
                        Neden Ballı?
                    </Link>
                    <Link href="/#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block">
                        İletişim
                    </Link>
                    <div className="relative group">
                        <Link href="/cart" className="p-2 -mr-2 text-foreground hover:text-primary transition-colors relative block">
                            <ShoppingBasket className="w-6 h-6" />
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                    {itemCount}
                                </span>
                            )}
                        </Link>

                        {/* Hover Preview Dropdown */}
                        <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-96 z-50">
                            <div className="bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden relative">
                                <div className="absolute top-0 right-4 -mt-2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-stone-100"></div>

                                {items.length === 0 ? (
                                    <div className="p-6 text-center text-muted-foreground text-sm">Sepetiniz boş</div>
                                ) : (
                                    <>
                                        <div className="max-h-80 overflow-y-auto p-4 space-y-4">
                                            {items.map((item) => (
                                                <div key={item.id} className="flex gap-4 items-center">
                                                    <div className="w-16 h-16 bg-muted rounded-xl relative overflow-hidden shrink-0 border border-stone-100">
                                                        <img src={item.imageSrc} alt={item.title} className="object-cover w-full h-full" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-sm font-bold truncate text-stone-800">{item.title}</h4>
                                                        <p className="text-xs text-primary font-bold mb-2">{item.price}</p>

                                                        <div className="flex items-center gap-2">
                                                            <div className="flex items-center bg-stone-50 rounded-lg px-1 h-6 border border-stone-200">
                                                                <button
                                                                    onClick={() => item.quantity > 1 ? updateQuantity(item.id, -1) : removeFromCart(item.id)}
                                                                    className="w-6 h-full flex items-center justify-center text-stone-500 hover:text-red-500 hover:bg-stone-200 rounded text-xs font-bold transition-colors"
                                                                >
                                                                    -
                                                                </button>
                                                                <span className="w-6 text-center text-xs font-bold text-stone-800">{item.quantity}</span>
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, 1)}
                                                                    className="w-6 h-full flex items-center justify-center text-stone-500 hover:text-green-600 hover:bg-stone-200 rounded text-xs font-bold transition-colors"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                            <button
                                                                onClick={() => removeFromCart(item.id)}
                                                                className="text-[10px] text-stone-400 hover:text-red-500 underline ml-auto"
                                                            >
                                                                Sil
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-4 bg-stone-50 border-t border-stone-100 space-y-2">
                                            <div className="flex justify-between items-center mb-2 px-1">
                                                <span className="text-sm text-stone-500 font-medium">Toplam</span>
                                                <span className="text-lg font-bold text-primary">{totalPrice.toLocaleString()} ₸</span>
                                            </div>
                                            <Link
                                                href="/cart"
                                                className="block w-full py-2.5 bg-stone-800 text-white text-center rounded-xl font-bold text-sm hover:bg-black transition-colors"
                                            >
                                                Sepete Git
                                            </Link>
                                            <a
                                                href={getWhatsAppUrl()}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] text-white text-center rounded-xl font-bold text-sm hover:bg-[#20bd5a] transition-colors"
                                            >
                                                {/* WhatsApp SVG Icon */}
                                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                </svg>
                                                Sipariş Ver
                                            </a>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
