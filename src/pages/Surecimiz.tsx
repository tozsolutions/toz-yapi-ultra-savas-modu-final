import { useState } from "react";
import {
  Search,
  ClipboardList,
  Factory,
  Truck,
  Wrench,
  Phone,
  Calculator,
  ArrowRight,
  Clock,
  CheckCircle2,
  ChevronDown,
  PhoneCall,
  MapPin,
  Users,
  Settings,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    step: 1,
    title: "Keşif ve İhtiyaç Analizi",
    duration: "1-2 gün",
    description:
      "Uzman ekibimiz proje sahanıza gelir. Mekanınızı ölçer, ihtiyaçlarınızı dinler ve teknik analiz yapar. Bu aşamada hangi ürünlerin uygun olduğuna birlikte karar veririz.",
    whatHappens: [
      "Sahada yerinde ölçüm ve analiz",
      "İhtiyaç ve beklentilerin dinlenmesi",
      "Uygun ürün önerileri",
      "Teknik fizibilite değerlendirmesi",
    ],
    tip: "Keşif hizmetimiz tamamen ücretsizdir.",
  },
  {
    icon: ClipboardList,
    step: 2,
    title: "Teklif ve Sözleşme",
    duration: "1-3 gün",
    description:
      "Keşif sonuçlarına göre detaylı fiyat teklifi hazırlanır. Ürün özellikleri, renk seçenekleri, montaj planı ve ödeme koşulları netleştirilir.",
    whatHappens: [
      "Detaylı fiyat teklifi hazırlanması",
      "Ürün ve renk seçeneklerinin sunulması",
      "Montaj planının oluşturulması",
      "Sözleşme ve ödeme planının belirlenmesi",
    ],
    tip: "Teklifimiz şeffaf ve gizli maliyet içermez.",
  },
  {
    icon: Factory,
    step: 3,
    title: "Üretim ve Hazırlık",
    duration: "5-15 gün",
    description:
      "Onaylanan teklif doğrultusunda ürünler kendi fabrikamızda özenle üretilir. Her aşamada kalite kontrol yapılır ve proje takibi sağlanır.",
    whatHappens: [
      "Fabrikasyon üretim süreci",
      "Kalite kontrol testleri",
      "Sipariş takip bilgilendirmeleri",
      "Montaj öncesi hazırlık",
    ],
    tip: "Üretim süresi ürün tipine ve adedine göre değişebilir.",
  },
  {
    icon: Truck,
    step: 4,
    title: "Teslimat ve Montaj",
    duration: "1-3 gün",
    description:
      "Ürünler profesyonel montaj ekibimiz tarafından sahaya getirilir ve hatasız şekilde monte edilir. Montaj sonrası test ve kontroller yapılır.",
    whatHappens: [
      "Zamanında teslimat",
      "Profesyonel montaj ekibi",
      "Montaj sonrası test ve kontroller",
      "Temiz ve düzenli teslimat",
    ],
    tip: "Montaj ekibimiz deneyimli ve sertifikalıdır.",
  },
  {
    icon: Wrench,
    step: 5,
    title: "Teslim Sonrası Destek",
    duration: "Sürekli",
    description:
      "Montaj sonrası garanti süreniz başlar. 7/24 teknik destek, düzenli bakım hizmetleri ve garanti kapsamındaki tüm arızalar için yanınızdayız.",
    whatHappens: [
      "2 yıl garanti başlangıcı",
      "7/24 teknik destek hattı",
      "Düzenli bakım hizmetleri",
      "Yedek parça desteği",
    ],
    tip: "Garanti süresince tüm arızalar ücretsiz giderilir.",
  },
];

const faqs = [
  {
    question: "Keşif hizmeti gerçekten ücretsiz mi?",
    answer:
      "Evet, Ankara genelinde keşif hizmetimiz tamamen ücretsizdir. Uzman ekibimiz sahanıza gelir, ölçüm yapar ve size detaylı fiyat teklifi sunar. Herhangi bir taahhüt gerektirmez.",
  },
  {
    question: "Üretim süreci ne kadar sürer?",
    answer:
      "Üretim süresi ürün tipine ve projenin büyüklüğüne göre değişir. Standart siparişlerde 5-15 iş günü arasında teslimat sağlanır. Acil projeler için hızlı üretim seçeneğimiz de mevcuttur.",
  },
  {
    question: "Montaj sırasında evde/ofiste olmam gerekir mi?",
    answer:
      "Montaj sırasında bir yetkilinin sahada bulunması önerilir. Ancak önceden görüşmek koşuluyla anahtar teslimi montaj da yapabilmekteyiz.",
  },
  {
    question: "Montaj ne kadar sürer?",
    answer:
      "Montaj süresi ürün tipine ve projenin büyüklüğüne göre değişir. Basit montajlar 1 gün içinde tamamlanır. Büyük projelerde 1-3 gün sürebilir.",
  },
  {
    question: "Garanti süresi ne zaman başlar?",
    answer:
      "Garanti süresi, montajın tamamlanıp teslim tutanağının imzalanmasıyla başlar. 2 yıl boyunca üretim ve montaj kaynaklı tüm sorunlar ücretsiz giderilir.",
  },
  {
    question: "Ankara dışında hizmet veriyor musunuz?",
    answer:
      "Evet, Ankara dışında da çevre illere hizmet vermekteyiz. Detaylar ve bölgesel hizmet koşulları için WhatsApp üzerinden bilgi alabilirsiniz.",
  },
];

export default function Surecimiz() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="toz-section bg-gradient-to-b from-primary/5 to-transparent">
        <div className="toz-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">
              Proje Süreci
            </span>
            <h1 className="toz-heading mt-3">
              Projelerimiz Nasıl <span className="text-gradient-purple">İlerler?</span>
            </h1>
            <p className="toz-subheading mx-auto mt-4">
              İlk temasdan teslimata kadar her aşamada şeffaf ve profesyonel bir süreç yönetiyoruz.
              5 adımda hayalinizdeki projeyi gerçeğe dönüştürüyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Timeline */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden sm:block" />
                )}

                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg">
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-2xl border border-border p-6 shadow-sm">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        ADIM {step.step}
                      </span>
                      <h2 className="text-xl font-bold text-foreground">{step.title}</h2>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                    {/* What Happens */}
                    <div className="bg-muted/50 rounded-xl p-4">
                      <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Bu Aşamada Neler Yapılır?
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.whatHappens.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tip */}
                    <div className="mt-4 flex items-start gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <span className="font-semibold flex-shrink-0">İpucu:</span>
                      <span>{step.tip}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Stats */}
      <section className="toz-section bg-gradient-to-b from-transparent to-primary/5">
        <div className="toz-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Clock, value: "2 saat", label: "Ortalama müdahale süresi" },
              { icon: Users, value: "500+", label: "Mutlu müşteri" },
              { icon: MapPin, value: "Ankara", label: "Merkez ofis" },
              { icon: Settings, value: "18+", label: "Yıllık deneyim" },
            ].map((stat, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-5 text-center shadow-sm">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-xl font-bold text-gradient-purple">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="toz-heading">
              Süreç Hakkında <span className="text-gradient-purple">Sık Sorulan Sorular</span>
            </h2>
            <p className="toz-subheading mx-auto mt-3">
              Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-primary/5 transition-colors"
                >
                  <span className="text-sm font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="toz-section bg-gradient-to-b from-transparent to-primary/5">
        <div className="toz-container">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
            <PhoneCall className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Projenizi Konuşalım
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
