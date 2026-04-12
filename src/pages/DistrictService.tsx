import { useParams, Link } from "react-router-dom";
import { Phone, MapPin, Shield, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { districts } from "@/data/districts";

const serviceConfig: Record<string, { title: string; desc: string; features: string[]; faq: { q: string; a: string }[] }> = {
  pergola: {
    title: "Pergola",
    desc: "profesyonel montaj ve 4 mevsim konfor",
    features: ["Bioklimatik lamel sistemi", "Motorlu açılır kapanır", "Yağmur ve rüzgar sensörü", "LED aydınlatma entegrasyonu", "Özel RAL renk seçeneği"],
    faq: [
      { q: "Pergola montajı ne kadar sürer?", a: "Ortalama 1-3 gün içinde montaj tamamlanır. Projenin büyüklüğüne göre süre değişebilir." },
      { q: "Pergola için ruhsat gerekir mi?", a: "Bazı belediye sınırlarında ruhsat gerekebilir. Ücretsiz keşif sırasında bilgi veriyoruz." },
      { q: "Garanti süresi nedir?", a: "2 yıl ürün ve montaj garantisi sunuyoruz." },
    ],
  },
  kepenk: {
    title: "Kepenk",
    desc: "güvenilir ve dayanıklı kepenk sistemleri",
    features: ["Şeffaf polikarbon seçenek", "Motorlu ve manuel", "Balistik güvenlik", "Yangına dayanıklı", "Uzaktan kumanda"],
    faq: [
      { q: "Kepenk fiyatları ne kadar?", a: "Kepenk fiyatları ölçü ve malzemeye göre değişir. Ücretsiz keşif ile net fiyat alabilirsiniz." },
      { q: "Arıza durumunda ne kadar sürede müdahale ediyorsunuz?", a: "Ankara genelinde ortalama 2 saat içinde yerinde müdahale." },
      { q: "Garanti süresi nedir?", a: "2 yıl ürün ve montaj garantisi." },
    ],
  },
  panjur: {
    title: "Panjur",
    desc: "ısı ve ses yalıtımı sağlayan panjur sistemleri",
    features: ["Alüminyum monoblok", "PVC seçenek", "Gizli kutulu", "Somfy motor", "Uzaktan kumanda"],
    faq: [
      { q: "Panjur ısı yalıtımı sağlar mı?", a: "Evet, kaliteli panjur sistemleri ısı ve ses yalıtımı sağlar." },
      { q: "Motorlu panjur avantajı nedir?", a: "Konforlu kullanım, akıllı ev entegrasyonu ve zaman programlama." },
      { q: "Garanti süresi nedir?", a: "5 yıl garanti, paslanmaz menteşeler için 20 yıl garanti." },
    ],
  },
  "otomatik-kapi": {
    title: "Otomatik Kapı",
    desc: "fotoselli, kayar ve döner otomatik kapı çözümleri",
    features: ["Fotoselli sensör", "EN 16005 standart", "Record ve Dorma", "Hermetik hastane kapısı", "Güvenlik sensörleri"],
    faq: [
      { q: "Otomatik kapı bakımı nasıl yapılır?", a: "Yılda en az 1 kez profesyonel bakım önerilir. Bakım sözleşmesi sunuyoruz." },
      { q: "Fotoselli kapı güvenlik standartları nelerdir?", a: "EN 16005 standardına uygun üretim ve montaj yapıyoruz." },
      { q: "Garanti süresi nedir?", a: "2 yıl ürün ve montaj garantisi." },
    ],
  },
};

export default function DistrictService() {
  const { district, service } = useParams<{ district: string; service: string }>();
  const districtData = districts.find((d) => d.slug === district);
  const serviceData = serviceConfig[service || ""];
  const relatedProducts = products.slice(0, 3);

  if (!districtData || !serviceData) {
    return (
      <div className="toz-section toz-container text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Sayfa Bulunamadı</h1>
        <p className="text-muted-foreground mb-6">Aradığınız sayfa mevcut değil.</p>
        <Link to="/" className="text-primary hover:underline">
          Ana sayfaya dön
        </Link>
      </div>
    );
  }

  const title = `${serviceData.title} ${districtData.name} | Toz Yapı Ankara`;
  const description = `${districtData.name} ilçesinde ${serviceData.desc}. Toz Yapı olarak ${districtData.name}'de profesyonel ${serviceData.title.toLowerCase()} hizmetleri sunuyoruz. Ücretsiz keşif için arayın.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Toz Yapı ${districtData.name} ${serviceData.title} Hizmetleri`,
    description: description,
    areaServed: {
      "@type": "City",
      name: districtData.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: districtData.name,
      addressRegion: "Ankara",
      addressCountry: "TR",
    },
    telephone: "+905367731404",
    url: `https://www.tozyapi.com.tr/${district}/${service}`,
  };

  return (
    <div className="min-h-screen">
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-toz-dark-deep via-toz-anthracite to-primary/30 text-primary-foreground">
        <div className="toz-container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm uppercase tracking-widest text-primary-foreground/70">{districtData.name}, Ankara</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            {serviceData.title} <span className="text-gradient-gold">{districtData.name}</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-toz-purple-light text-primary-foreground text-lg px-8 py-6" onClick={() => (window.location.href = "/teklif-hesapla")}>
              Ücretsiz Teklif Al
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6" onClick={() => (window.location.href = "tel:+905367731404")}>
              <Phone className="w-5 h-5 mr-2" />
              Hemen Ara
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="toz-section bg-toz-cream">
        <div className="toz-container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">{serviceData.title} Hizmeti Özellikleri</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="toz-section">
        <div className="toz-container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">İlgili Ürünler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.slug} to={`/urunler/${p.slug}`} className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="400" height="300" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="toz-section bg-toz-cream">
        <div className="toz-container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Sıkça Sorulan Sorular</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {serviceData.faq.map((faq, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="toz-section bg-gradient-to-r from-primary/10 to-purple-500/10">
        <div className="toz-container text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4">{districtData.name}'de Güvenilir {serviceData.title} Hizmeti</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">2008'den beri Ankara'nın tüm ilçelerinde profesyonel hizmet sunuyoruz. Ücretsiz keşif ve teklif için hemen iletişime geçin.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-toz-purple-light text-primary-foreground text-lg px-8 py-6" onClick={() => (window.location.href = "/teklif-hesapla")}>
              Teklif Al
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6" onClick={() => (window.location.href = "tel:+905367731404")}>
              <Phone className="w-5 h-5 mr-2" />
              +90 536 773 14 04
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
