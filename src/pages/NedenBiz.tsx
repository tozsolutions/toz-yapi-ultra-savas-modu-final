import {
  Shield,
  Clock,
  Phone,
  MapPin,
  FileCheck,
  Users,
  Award,
  Headphones,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Calculator,
} from "lucide-react";

const farkCards = [
  {
    icon: Award,
    title: "18 Yıl Deneyim",
    desc: "2008'den beri Ankara ve çevre illerde sektörde güvenilir çözüm ortağınız.",
    stat: "18+",
    statLabel: "Yıl Tecrübe",
  },
  {
    icon: FileCheck,
    title: "500+ Tamamlanan Proje",
    desc: "Hastane, okul, AVM, otel ve konut projelerinde kanıtlanmış başarı.",
    stat: "500+",
    statLabel: "Proje",
  },
  {
    icon: Shield,
    title: "2 Yıl Garanti",
    desc: "Tüm ürün ve montaj işlemlerimiz 2 yıl garanti kapsamındadır.",
    stat: "2 Yıl",
    statLabel: "Garanti",
  },
  {
    icon: Headphones,
    title: "7/24 Destek",
    desc: "Teknik destek ekibimiz haftanın her günü, her saati yanınızda.",
    stat: "7/24",
    statLabel: "Kesintisiz Destek",
  },
  {
    icon: MapPin,
    title: "Ücretsiz Keşif",
    desc: "Ankara genelinde yerinde ücretsiz keşif ve fiyat teklifi sunuyoruz.",
    stat: "Ücretsiz",
    statLabel: "Keşif Hizmeti",
  },
  {
    icon: Users,
    title: "Ankara Merkez",
    desc: "Başkent merkezli operasyonumuzla hızlı ve yerinde hizmet veriyoruz.",
    stat: "Ankara",
    statLabel: "Merkez Ofis",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Keşif",
    desc: "Uzman ekibimiz sahanıza gelir, ölçü ve ihtiyaç analizi yapar. Tamamen ücretsizdir.",
    duration: "1-2 gün",
  },
  {
    step: 2,
    title: "Teklif",
    desc: "Keşif sonuçlarına göre detaylı fiyat ve ürün teklifi hazırlanır.",
    duration: "1-3 gün",
  },
  {
    step: 3,
    title: "Üretim",
    desc: "Onaylanan teklif doğrultusunda ürünler fabrikamızda özenle üretilir.",
    duration: "5-15 gün",
  },
  {
    step: 4,
    title: "Montaj",
    desc: "Profesyonel montaj ekibimiz ürünleri yerinde, hatasız şekilde monte eder.",
    duration: "1-3 gün",
  },
  {
    step: 5,
    title: "Destek",
    desc: "Montaj sonrası garanti ve teknik destek hizmetimiz başlar.",
    duration: "Sürekli",
  },
];

const trustStats = [
  { value: "%98", label: "Müşteri Memnuniyeti" },
  { value: "500+", label: "Tamamlanan Proje" },
  { value: "18+", label: "Yıllık Deneyim" },
  { value: "24/7", label: "Teknik Destek" },
];

export default function NedenBiz() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="toz-section bg-gradient-to-b from-primary/5 to-transparent">
        <div className="toz-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">
              Güven ve Kalite
            </span>
            <h1 className="toz-heading mt-3">
              Neden Bizi <span className="text-gradient-purple">Tercih Etmelisiniz?</span>
            </h1>
            <p className="toz-subheading mx-auto mt-4">
              18 yılı aşkın deneyimimiz, 500'den fazla tamamlanan projemiz ve müşteri odaklı yaklaşımımızla
              sektörde fark yaratıyoruz. İşte TOZ YAPI'yı özel kılan değerler.
            </p>
          </div>
        </div>
      </section>

      {/* Fark Cards */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {farkCards.map((card, i) => (
              <div
                key={i}
                className="group bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient-purple">{card.stat}</div>
                    <div className="text-xs text-muted-foreground">{card.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="toz-section bg-gradient-to-b from-transparent to-primary/5">
        <div className="toz-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">
              Sürecimiz
            </span>
            <h2 className="toz-heading mt-3">
              Proje Sürecimiz <span className="text-gradient-purple">Nasıl İşler?</span>
            </h2>
            <p className="toz-subheading mx-auto mt-4">
              İlk temasdan teslimata kadar 5 adımlık şeffaf süreçimizle her aşamada yanınızdayız.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden sm:block" />

              <div className="space-y-8">
                {processSteps.map((step, i) => (
                  <div
                    key={i}
                    className={`relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 sm:left-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg -translate-x-1/2 z-10 shadow-lg">
                      {step.step}
                    </div>

                    {/* Content */}
                    <div className={`flex-1 sm:pl-16 ${i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16 sm:text-left"} pl-16`}>
                      <div className="bg-card rounded-2xl border border-border p-5 shadow-sm">
                        <div className="flex items-center gap-2 mb-2 justify-start sm:justify-inherit">
                          <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden sm:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Rakamlarla TOZ YAPI</h2>
              <p className="text-white/80 mt-2">Güvenin ve kalitenin somut göstergeleri</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Checklist */}
      <section className="toz-section bg-gradient-to-b from-transparent to-primary/5">
        <div className="toz-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="toz-heading">
                Bizi Tercih Etmeniz İçin <span className="text-gradient-purple">Daha Fazla Neden</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Fabrikasyon üretim, sahada montaj kalitesi",
                "TSE ve CE sertifikalı ürünler",
                "Şeffaf fiyatlandırma, gizli maliyet yok",
                "Proje bazlı özel çözümler",
                "Hızlı teslimat, zamanında teslim",
                "Garanti sonrası uygun yedek parça desteği",
                "Referans projelerle kanıtlanmış kalite",
                "Uzman kadro, profesyonel hizmet",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-card rounded-xl border border-border p-4">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
            <PhoneCall className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Projelerinizi Birlikte Hayata Geçirelim
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Ücretsiz keşif ve fiyat teklifi için hemen bizimle iletişime geçin.
              Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/teklif-hesapla"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-md"
              >
                <Calculator className="w-5 h-5" />
                Teklif Hesapla
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+905367731404"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-base font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-all"
              >
                <Phone className="w-5 h-5" />
                +90 536 773 14 04
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
