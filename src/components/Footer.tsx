export function Footer() {
    return (
        <footer className="bg-foreground text-background py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center opacity-80">
                <div className="mb-4 md:mb-0">
                    <span className="font-serif text-2xl font-bold">Doğal Şifa</span>
                    <p className="text-sm mt-2 opacity-60">Doğadan gelen sağlık, sofranıza lezzet.</p>
                </div>
                <div className="flex gap-6 text-sm">
                    <a href="https://www.instagram.com/songulbuber/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Instagram</a>
                    <a href="https://wa.me/77026379594" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">İletişim</a>
                    <a href="#" className="hover:text-primary transition-colors">Gizlilik</a>
                </div>
            </div>
        </footer>
    );
}
