import { motion } from "framer-motion";
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
    <section id="store" className="toz-section bg-[#0d0118]">
      <div className="toz-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#a78bfa] text-sm font-semibold uppercase tracking-widest">
              Online Mağaza
            </span>
            <h2 className="toz-heading text-white mt-3">
              Öne Çıkan <span className="text-[#22d3ee]">Ürünler</span>
            </h2>
            <p className="toz-subheading mx-auto mt-4 text-gray-400">
              Motor, kumanda ve yedek parça ürünlerimizi online sipariş edin.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shopProducts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
                  <CardTitle className="text-base leading-snug text-white">{p.title}</CardTitle>
                  <CardDescription className="text-xs text-gray-400">{p.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-[#22d3ee]">{p.price}</span>
                    <span className="text-sm text-gray-500 line-through">{p.oldPrice}</span>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] hover:from-[#a78bfa] hover:to-[#f472b6] text-white font-bold border-0"
                    onClick={() => handleWhatsApp(p.title)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Sipariş Ver
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
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
