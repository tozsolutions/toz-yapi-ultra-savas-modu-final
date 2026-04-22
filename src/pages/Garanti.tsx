import {
  Shield,
  CheckCircle2,
  XCircle,
  Clock,
  Phone,
  Calculator,
  ArrowRight,
  FileText,
  Wrench,
  PhoneCall,
  AlertCircle,
} from "lucide-react";

const warrantyTable = [
  {
    productType: "Otomatik Kapılar",
    period: "2 Yıl",
    coverage: "Motor, kart, fotosel, mekanik aksam",
    note: "Yıllık bakım önerilir",
  },
  {
    productType: "Panjur Sistemleri",
    period: "2 Yıl",
    coverage: "Motor, palet, kumanda, yay sistemi",
    note: "Yıllık bakım önerilir",
  },
  {
    productType: "Kepenk Sistemleri",
    period: "2 Yıl",
    coverage: "Tüp motor, redüktör, kilit mekanizması",
    note: "Yıllık bakım önerilir",
  },
  {
    productType: "Pergola & Tente",
    period: "2 Yıl",
    coverage: "Motor, mekanizma, yağmur sensörü, kumaş",
    note: "Sezon başı bakım önerilir",
  },
  {
    productType: "Giyotin Cam Sistemleri",
    period: "2 Yıl",
    coverage: "Mekanizma, conta, kilit sistemi",
    note: "Cam kırılması garanti dışıdır",
  },
  {
    productType: "Zip Perde",
    period: "2 Yıl",
    coverage: "Motor, kumaş, ray sistemi",
    note: "Yıllık bakım önerilir",
  },
  {
    productType: "Fotoselli Kapılar",
    period: "2 Yıl",
    coverage: "Sensör, motor, kontrol kartı",
    note: "3 aylık bakım önerilir",
  },
];

const coveredItems = [
  "Üretim hataları ve malzeme kusurları",
  "Motor ve elektronik aksam arızaları",
  "Montaj kaynaklı sorunlar",
  "Mekanik aksam ve bağlantı elemanları",
  "Kumanda ve otomasyon sistemi arızaları",
  "Normal kullanım条件下 oluşan hasarlar",
];

const notCoveredItems = [
  "Kullanıcı hatası veya yanlış kullanım kaynaklı arızalar",
  "Doğal afet (deprem, sel, fırtına) hasarları",
  "Harici fiziksel darbeler ve vandalizm",
  "Yetkisi kişiler tarafından yapılan müdahaleler",
  "Normal aşınma ve yıpranma (conta, boza vb.)",
  "Cam kırılması ve dış etkenle oluşan hasarlar",
  "Garanti belgesi ibraz edilememesi",
];

const extendedWarrantyOptions = [
  {
    title: "Standart Garanti Uzatma",
    period: "+1 Yıl",
    price: "Ürün bedelinin %5'i",
    desc: "Standart 2 yıllık garantiyi 3 yıla çıkarın.",
    features: ["Ek 1 yıl parça garantisi", "Yıllık 1 ücretsiz bakım", "Öncelikli servis hakkı"],
  },
  {
    title: "Premium Garanti Paketi",
    period: "+3 Yıl",
    price: "Ürün bedelinin %10'u",
    desc: "Toplam 5 yıl kesintisiz garanti.",
    features: ["Ek 3 yıl parça ve işçilik garantisi", "Yıllık 2 ücretsiz bakım", "7/24 öncelikli servis", "Yedek parça indirimi"],
    popular: true,
  },
  {
    title: "Kurumsal Garanti",
    period: "Özel Sözleşme",
    price: "Teklif alınız",
    desc: "Büyük projeler için özel garanti sözleşmeleri.",
    features: ["Proje bazlı garanti süresi", "Dedike teknik ekip", "SLA bazlı müdahale süresi", "Toplu bakım planı"],
  },
];

export default function Garanti() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="toz-section bg-gradient-to-b from-primary/5 to-transparent">
        <div className="toz-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">
              Garanti Politikamız
            </span>
            <h1 className="toz-heading mt-3">
              Garanti ve Garanti Dışı <span className="text-gradient-purple">Hizmetler</span>
            </h1>
            <p className="toz-subheading mx-auto mt-4">
              TOZ YAPI olarak tüm ürünlerimiz 2 yıl garanti kapsamındadır. Garanti koşullarını,
              kapsamdaki ve dışındaki hizmetleri aşağıda bulabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Warranty Table */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="text-center mb-10">
            <h2 className="toz-heading">
              Ürün Bazlı <span className="text-gradient-purple">Garanti Süreleri</span>
            </h2>
            <p className="toz-subheading mx-auto mt-3">
              Her ürün grubu için garanti süresi ve kapsam detayları
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full min-w-[700px] bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left px-5 py-4 text-sm font-semibold text-foreground">Ürün Tipi</th>
                  <th className="text-center px-5 py-4 text-sm font-semibold text-foreground">Garanti Süresi</th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-foreground">Kapsam</th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-foreground">Not</th>
                </tr>
              </thead>
              <tbody>
                {warrantyTable.map((row, i) => (
                  <tr key={i} className="border-t border-border hover:bg-primary/5 transition-colors">
                    <td className="px-5 py-4 text-sm font-medium text-foreground">{row.productType}</td>
                    <td className="px-5 py-4 text-center">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        <Shield className="w-3.5 h-3.5" />
                        {row.period}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.coverage}</td>
                    <td className="px-5 py-4 text-xs text-muted-foreground">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Covered vs Not Covered */}
      <section className="toz-section bg-gradient-to-b from-transparent to-primary/5">
        <div className="toz-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Covered */}
            <div className="bg-card rounded-2xl border border-green-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Garanti Kapsamındakiler</h2>
              </div>
              <ul className="space-y-3">
                {coveredItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Covered */}
            <div className="bg-card rounded-2xl border border-red-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Garanti Dışı Hizmetler</h2>
              </div>
              <ul className="space-y-3">
                {notCoveredItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Note */}
          <div className="max-w-5xl mx-auto mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800">Önemli Not</p>
              <p className="text-xs text-amber-700 mt-1">
                Garanti dışı arızalar için uygun fiyatlı ücretli teknik servis hizmeti sunulmaktadır.
                Detaylar için <a href="/teknik-destek" className="underline font-medium">Teknik Destek</a> sayfamızı ziyaret edin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Warranty */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="text-center mb-10">
            <h2 className="toz-heading">
              Garanti Süresini <span className="text-gradient-purple">Uzatın</span>
            </h2>
            <p className="toz-subheading mx-auto mt-3">
              Standart garanti sürenizi ihtiyaçlarınıza göre uzatabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {extendedWarrantyOptions.map((option, i) => (
              <div
                key={i}
                className={`relative bg-card rounded-2xl border p-6 shadow-sm transition-all hover:shadow-lg ${
                  option.popular ? "border-primary shadow-md ring-2 ring-primary/20" : "border-border"
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      En Popüler
                    </span>
                  </div>
                )}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-foreground">{option.title}</h3>
                  <div className="text-2xl font-bold text-gradient-purple mt-2">{option.period}</div>
                  <p className="text-xs text-muted-foreground mt-1">{option.price}</p>
                </div>
                <p className="text-sm text-muted-foreground text-center mb-4">{option.desc}</p>
                <ul className="space-y-2">
                  {option.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="toz-section bg-gradient-to-b from-transparent to-primary/5">
        <div className="toz-container">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-8 shadow-sm">
            <div className="text-center mb-6">
              <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
              <h2 className="text-xl font-bold text-foreground">Garanti Talebi Nasıl Oluşturulur?</h2>
            </div>
            <div className="space-y-4">
              {[
                { step: "1", title: "Bizi Arayın", desc: "Telefon veya WhatsApp üzerinden arıza bildiriminde bulunun." },
                { step: "2", title: "Garanti Kontrolü", desc: "Garanti belgeniz ve seri numaranız ile garanti durumu kontrol edilir." },
                { step: "3", title: "Yerinde Müdahale", desc: "Teknisyenimiz sahanıza gelerek arızayı tespit eder ve giderir." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
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
            <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Garanti Desteği mi Lazım?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Garanti talepleriniz veya teknik destek ihtiyaçlarınız için hemen bizimle iletişime geçin.
              En kısa sürede yerinde müdahale sağlıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905367731404"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-md"
              >
                <Phone className="w-5 h-5" />
                Hemen Arayın
              </a>
              <a
                href="/teklif-hesapla"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-base font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-all"
              >
                <Calculator className="w-5 h-5" />
                Teklif Alın
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Ortalama 2 saat müdahale
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                2 yıl garanti
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
