import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronRight, Phone } from "lucide-react";

const shopProducts = [
  {
    title: "Kepenk Motoru 60 Nm",
    desc: "Redüktörlü tüp kepenk motoru, yüksek performans",
    image: "/images/products/seffaf_kepenk.webp",
    price: "₺1,250",
    oldPrice: "₺1,450",
    discount: "-14%",
  },
  {
    title: "Panjur Motoru 50 Nm",
    desc: "Düz panjur motoru, sessiz çalışma ve uzun ömür",
    image: "/images/products/monoblok_panjur.webp",
    price: "₺2,500",
    oldPrice: "₺2,850",
    discount: "-12%",
  },
  {
    title: "Otomatik Kapı Kumandası",
    desc: "BFT marka garaj kumandası, 433 MHz",
    image: "/images/products/otomatik_kapi.webp",
    price: "₺185",
    oldPrice: "₺220",
    discount: "-16%",
  },
  {
    title: "Endüstriyel Kepenk Motoru",
    desc: "380V AC endüstriyel kepenk motoru, ağır hizmet",
    image: "/images/products/endustriyelkapi.webp",
    price: "₺5,200",
    oldPrice: "₺5,850",
    discount: "-11%",
  },
];

export default function StoreSection() {
  const handleWhatsApp = (productTitle: string) => {
    const msg = encodeURIComponent(`Merhaba, "${productTitle}" ürünü hakkında bilgi almak ve sipariş vermek istiyorum.`);
    window.open(`https://wa.me/905367731404?text=${msg}`, "_blank");
  };

  return (
    <section id="store" className="toz-section">
      <div className="toz-container">
        <div className="text-center mb-16">
          <div>
            <span className="text-[1rem] md:text-[1.08rem] text-primary font-semibold uppercase tracking-widest">
              Online Mağaza
            </span>
            <h2 className="toz-heading mt-3">
              Öne Çıkan Ürünler
            </h2>
            <p className="toz-subheading mx-auto mt-4">
              Motor, kumanda ve yedek parça ürünlerimizi online sipariş edin.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shopProducts.map((p, i) => (
            <div
              key={i}
            >
              <Card className="toz-card-hover overflow-hidden group h-full border-border product-glow-hover rounded-2xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                    {p.discount}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base leading-snug">{p.title}</CardTitle>
                  <CardDescription className="text-xs">{p.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-primary">{p.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{p.oldPrice}</span>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-[hsl(265_80%_25%)] hover:bg-[hsl(265_80%_30%)] text-white font-bold border-0 shadow-lg"
                    onClick={() => handleWhatsApp(p.title)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Sipariş Ver
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="tel:+905367731404">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="w-5 h-5 mr-2" />
              Tüm Ürünler İçin Arayın
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
