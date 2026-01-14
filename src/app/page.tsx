import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { SecretHoney } from "@/components/SecretHoney";
import { ProductCard } from "@/components/ProductCard";
import { WhySongul } from "@/components/WhySongul";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  const products = [
    { id: "apple", title: "Elma", price: "4000 ₸", description: "Bozkırın serin rüzgarlarında yetişen, ilaçsız, mumsuz doğal elmalar ve şekersiz bal. Tam 1 yıl fermente edildi.", imageSrc: "/apple-vinegar.png" },
    { id: "pear", title: "Armut", price: "4000 ₸", description: "Yabani armutların kekremsi tadı, balın yumuşaklığıyla buluştu. Böbrek dostu, sindirim uzmanı.", imageSrc: "/pear-vinegar.png" },
    { id: "grape", title: "Üzüm", price: "4000 ₸", description: "Güneşin tadını içine çekmiş siyah üzümlerin antioksidan gücü. Kan yapıcı, enerji veren bir iksir.", imageSrc: "/grape-vinegar.png" },
  ];

  return (
    <main className="bg-[#faf9f6]">
      <Navbar />
      <Hero />
      <WhySongul />

      <section id="products" className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Doğal Seçenekler</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 mt-2">Özel Koleksiyon Doğal Lezzetler</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={`${product.title} Sirkesi`}
              type={product.title as "Elma" | "Armut" | "Üzüm"}
              description={product.description}
              price={product.price}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </section>

      <Story />
      <SecretHoney />
      <FinalCTA />
      <Footer />
    </main>
  );
}
