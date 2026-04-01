import { motion } from "framer-motion";
import { Shield, Building, Home, Zap, Layers, Cpu, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { products as allProducts } from "@/data/products";

const iconMap: Record<string, React.ReactNode> = {
  "panjur-sistemleri": <Shield className="w-7 h-7" />,
  "kepenk-sistemleri": <Building className="w-7 h-7" />,
  "pergola-tente": <Home className="w-7 h-7" />,
  "otomatik-kapilar": <Zap className="w-7 h-7" />,
  "giyotin-cam-sistemleri": <Layers className="w-7 h-7" />,
  "akilli-sistemler": <Cpu className="w-7 h-7" />,
};

const mainProducts = allProducts.slice(0, 6);
const extraProducts = allProducts.slice(6);

export default function ProductsSection() {
  return (
    <section id="products" className="toz-section">
      <div className="toz-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[0.86rem] md:text-[0.92rem] text-primary font-semibold uppercase tracking-widest">
              Ürünlerimiz
            </span>
            <h2 className="toz-heading mt-3">
              Ürün Gruplarımız
            </h2>
            <p className="toz-subheading mx-auto mt-4">
              Kapsamlı ürün yelpazemizle tüm yapı projelerinde yanınızdayız.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainProducts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/urunler/${p.slug}`}>
                <Card className="overflow-hidden toz-card-hover group cursor-pointer border-border h-full product-glow-hover rounded-2xl">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                      {p.features.map((f, fi) => (
                        <Badge
                          key={fi}
                          variant="secondary"
                          className="bg-background/80 backdrop-blur-sm text-foreground text-xs"
                        >
                          {f}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        {iconMap[p.slug] || <Shield className="w-7 h-7" />}
                      </div>
                      <h3 className="text-lg font-bold font-display text-foreground">{p.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Detayları Gör <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Extra product categories grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {extraProducts.map((item, i) => (
            <Link key={i} to={`/urunler/${item.slug}`}>
              <div className="group relative h-44 rounded-xl overflow-hidden cursor-pointer product-glow-hover">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex items-end p-4">
                  <span className="text-primary-foreground font-semibold text-sm">{item.title}</span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
