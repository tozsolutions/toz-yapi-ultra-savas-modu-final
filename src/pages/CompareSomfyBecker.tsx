import {
  CheckCircle2,
  XCircle,
  Star,
  Volume2,
  Shield,
  Zap,
  Wrench,
  Phone,
  Calculator,
  ArrowRight,
  ThumbsUp,
  PhoneCall,
  Info,
} from "lucide-react";

const comparisonCriteria = [
  {
    criteria: "Fiyat",
    somfy: "Orta-Yuksek (Premium segment)",
    becker: "Orta (Uygun fiyatli)",
    winner: "becker",
  },
  {
    criteria: "Garanti Suresi",
    somfy: "5 yil (motor), 2 yil (elektronik)",
    becker: "2-5 yil (modele gore)",
    winner: "somfy",
  },
  {
    criteria: "Ses Seviyesi",
    somfy: "35-38 dB (Cok sessiz)",
    becker: "38-42 dB (Sessiz)",
    winner: "somfy",
  },
  {
    criteria: "Akilli Ev Uyumu",
    somfy: "Tuya, Alexa, Google, HomeKit (Genis)",
    becker: "Temel alisveris, Sinirli",
    winner: "somfy",
  },
  {
    criteria: "Dayaniklilik",
    somfy: "Cok yuksek (Paslanmaz, uzun omurlu)",
    becker: "Yuksek (Dayanikli, ekonomik)",
    winner: "somfy",
  },
  {
    criteria: "Motor Gucu",
    somfy: "10Nm - 120Nm (Genis aralik)",
    becker: "10Nm - 100Nm (Standart)",
    winner: "somfy",
  },
  {
    criteria: "Yedek Parca",
    somfy: "Kolay bulunur, global destek",
    becker: "Bolgesel dagitim, sinirli",
    winner: "somfy",
  },
  {
    criteria: "Kurulum Kolayligi",
    somfy: "Profesyonel kurulum onerilir",
    becker: "Basit, hizli montaj",
    winner: "becker",
  },
];

const somfyPros = [
  "Dusuk ses seviyesi (35 dB)",
  "Genis akilli ev entegrasyonu",
  "5 yil motor garantisi",
  "Global yedek parca destegi",
  "Yuksel dayaniklilik ve uzun omur",
  "Genis motor gucu araligi",
];

const somfyCons = [
  "Daha yuksek fiyat",
  "Profesyonel kurulum gerektirir",
  "Yedek parca maliyeti yuksek",
];

const beckerPros = [
  "Uygun fiyatli",
  "Kolay ve hizli kurulum",
  "Dusuk yedek parca maliyeti",
  "Yeterli performans (standart kullanim)",
  "Enerji verimliligi",
];

const beckerCons = [
  "Sinirli akilli ev destegi",
  "Daha yuksek ses seviyesi",
  "Kisa garanti suresi",
  "Bolgesel servis agi",
];

const verdicts = [
  {
    icon: Star,
    title: "Somfy Secin Eger:",
    items: [
      "Sessiz calisma onceliginiz ise",
      "Akilli ev sistemleri ile tam entegrasyon istiyorsaniz",
      "Uzun vadeli yatirim yapiyorsaniz",
      "Premium kalite ve performans onemliyse",
      "Buyuk ve agir sistemler kuracaksaniz",
    ],
    color: "purple",
  },
  {
    icon: ThumbsUp,
    title: "Becker Secin Eger:",
    items: [
      "Butce onceliginiz ise",
      "Standart kullanim yeterliyse",
      "Hizli ve kolay kurulum istiyorsaniz",
      "Dusuk yedek parca maliyeti onemliyse",
      "Kucuk-orta olcekli projeler yapiyorsaniz",
    ],
    color: "blue",
  },
];

export default function CompareSomfyBecker() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="toz-section bg-gradient-to-b from-primary/5 to-transparent">
        <div className="toz-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">
              Motor Karsilastirma
            </span>
            <h1 className="toz-heading mt-3">
              Somfy vs Becker: <span className="text-gradient-purple">Hangi Motor Daha Iyi?</span>
            </h1>
            <p className="toz-subheading mx-auto mt-4">
              Otomatik panjur ve kepenk sistemlerinde dunyanin en bilinen iki motor markasini
              karsilastirdik. Kararlilik, fiyat, ses seviyesi ve daha fazlasi icin dogru adrestesiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="text-center mb-10">
            <h2 className="toz-heading">
              Detayli <span className="text-gradient-purple">Karsilastirma Tablosu</span>
            </h2>
            <p className="toz-subheading mx-auto mt-3">
              8 farkli kriterde Somfy ve Becker motorlarinin karsilastirmasi
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full min-w-[700px] bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left px-5 py-4 text-sm font-semibold text-foreground">Kriter</th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                      Somfy
                    </div>
                  </th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      Becker
                    </div>
                  </th>
                  <th className="text-center px-5 py-4 text-sm font-semibold text-foreground">Avantaj</th>
                </tr>
              </thead>
              <tbody>
                {comparisonCriteria.map((row, i) => (
                  <tr key={i} className="border-t border-border hover:bg-primary/5 transition-colors">
                    <td className="px-5 py-4 text-sm font-medium text-foreground">{row.criteria}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.somfy}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.becker}</td>
                    <td className="px-5 py-4 text-center">
                      <span
                        className={`inline-flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
                          row.winner === "somfy"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {row.winner === "somfy" ? "Somfy" : "Becker"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="toz-section bg-gradient-to-b from-transparent to-primary/5">
        <div className="toz-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Somfy */}
            <div className="bg-card rounded-2xl border border-purple-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Somfy</h2>
              </div>

              <h3 className="text-sm font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Avantajlar
              </h3>
              <ul className="space-y-2 mb-6">
                {somfyPros.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold text-red-700 mb-3 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                Dezavantajlar
              </h3>
              <ul className="space-y-2">
                {somfyCons.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Becker */}
            <div className="bg-card rounded-2xl border border-blue-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Becker</h2>
              </div>

              <h3 className="text-sm font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Avantajlar
              </h3>
              <ul className="space-y-2 mb-6">
                {beckerPros.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold text-red-700 mb-3 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                Dezavantajlar
              </h3>
              <ul className="space-y-2">
                {beckerCons.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Highlight */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="text-center mb-10">
            <h2 className="toz-heading">
              Ozel <span className="text-gradient-purple">Ozellikler</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm text-center">
              <Volume2 className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Ses Seviyesi</h3>
              <p className="text-sm text-muted-foreground">
                Somfy 35 dB ile rakipsiz. Becker 38-42 dB arasinda. Ikisi de sessiz calisir,
                ancak Somfy yatak odasi gibi hassas alanlar icin daha uygundur.
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Akilli Ev</h3>
              <p className="text-sm text-muted-foreground">
                Somfy; Tuya, Alexa, Google Home ve HomeKit ile calisir. Becker temel
                fonksiyonlar sunar. Tam otomasyon icin Somfy one cikiyor.
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Garanti</h3>
              <p className="text-sm text-muted-foreground">
                Somfy 5 yil motor garantisi verirken, Becker 2-5 yil arasinda degisir.
                Uzun vadeli guvenlik icin Somfy avantajli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="toz-section bg-gradient-to-b from-transparent to-primary/5">
        <div className="toz-container">
          <div className="text-center mb-10">
            <h2 className="toz-heading">
              Hangisi <span className="text-gradient-purple">Sizin Icin Uygun?</span>
            </h2>
            <p className="toz-subheading mx-auto mt-3">
              Ihtiyaciniza ve butcenize gore dogru secimi yapin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {verdicts.map((verdict, i) => (
              <div
                key={i}
                className={`bg-card rounded-2xl border p-6 shadow-sm ${
                  verdict.color === "purple" ? "border-purple-200" : "border-blue-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      verdict.color === "purple" ? "bg-purple-100" : "bg-blue-100"
                    }`}
                  >
                    <verdict.icon
                      className={`w-5 h-5 ${
                        verdict.color === "purple" ? "text-purple-600" : "text-blue-600"
                      }`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{verdict.title}</h3>
                </div>
                <ul className="space-y-2">
                  {verdict.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Overall Verdict */}
          <div className="max-w-3xl mx-auto mt-8 bg-gradient-to-r from-primary/10 to-purple-100 rounded-2xl p-6 border border-primary/20">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Genel Degerlendirme</h3>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Somfy</strong>, 8 kriterden 6'sinda ustunluk
                  sagladi. Ancak bu, Becker'in kotu oldugu anlami gelmez. Becker, fiyat/performans
                  oraninda oldukca basarili. Butceniz sinirliysa Becker, uzun vadeli ve premium
                  cozum ariyorsaniz Somfy tercih edin. Her iki marka da TOZ YAPI garantisiyle
                  satin alinabilir.
                </p>
              </div>
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
              Dogru Motoru Birlikte Secelim
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Projenize en uygun motor secimi icin uzman ekibimizden ucretsiz danismanlik alin.
              Butcenize ve ihtiyaciniza gore en dogru cozumu sunalim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/teklif-hesapla"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-md"
              >
                <Calculator className="w-5 h-5" />
                Teklif Alin
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
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <PhoneCall className="w-4 h-4" />
                Ucretsiz danismanlik
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                2 yil garanti
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
