import { useParams, Link } from "react-router-dom";
import { getProductBySlug, products } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, Phone } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-foreground">Ürün bulunamadı</h1>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Ana Sayfaya Dön
          </Button>
        </Link>
      </div>
    );
  }

  const heroImg = product.heroImage || product.image;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <img src={heroImg} alt={product.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="toz-container">
            <Link to="/#products" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Ürünlere Dön
            </Link>
            <h1
              className="text-3xl md:text-5xl font-bold text-primary-foreground font-display"
            >
              {product.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="toz-container py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{product.desc}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground font-display mb-4">Ürün Hakkında</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{product.details}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground font-display mb-4">Özellikler</h3>
              <div className="flex flex-wrap gap-2">
                {product.features.map((f, i) => (
                  <Badge key={i} variant="secondary" className="text-sm px-4 py-1.5">
                    {f}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Product gallery */}
            <div>
              <h3 className="text-xl font-bold text-foreground font-display mb-4">Galeri</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden product-glow-hover">
                  <img src={product.image} alt={product.title} className="w-full h-48 object-cover" loading="lazy" />
                </div>
                {product.heroImage && (
                  <div className="rounded-xl overflow-hidden product-glow-hover">
                    <img src={product.heroImage} alt={product.title} className="w-full h-48 object-cover" loading="lazy" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-toz-turquoise mb-4">Teklif Alın</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Bu ürün grubu hakkında detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçin.
              </p>
              <div className="space-y-3">
                <a href="tel:+905367731404">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-toz-purple-light">
                    <Phone className="w-4 h-4 mr-2" /> Hemen Arayın
                  </Button>
                </a>
                <a
                  href={`https://wa.me/905367731404?text=${encodeURIComponent(`Merhaba, ${product.title} hakkında bilgi almak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full mt-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    WhatsApp ile Ulaşın
                  </Button>
                </a>
              </div>
            </div>

            {/* Other products */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Diğer Ürünler</h3>
              <div className="space-y-2">
                {products
                  .filter((p) => p.slug !== product.slug)
                  .slice(0, 6)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      to={`/urunler/${p.slug}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <img src={p.image} alt={p.title} className="w-10 h-10 rounded-md object-cover flex-shrink-0" />
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">{p.title}</span>
                      <ChevronRight className="w-3 h-3 ml-auto text-muted-foreground" />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
