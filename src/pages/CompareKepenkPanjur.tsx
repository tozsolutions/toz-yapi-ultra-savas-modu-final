import {
  CheckCircle2,
  XCircle,
  Shield,
  Thermometer,
  DollarSign,
  Lock,
  Eye,
  Wrench,
  Phone,
  Calculator,
  ArrowRight,
  Building,
  PhoneCall,
  Info,
  VolumeX,
  Wind,
} from "lucide-react";

const comparisonCriteria = [
  {
    criteria: "Güvenlik",
    kepenk: "Cok yüksek (Alüminyum/çelik, kirilmaz)",
    panjur: "Yüksek (Alüminyum palet, dayanikli)",
    winner: "kepenk",
  },
  {
    criteria: "Isi Yalitimi",
    kepenk: "Orta (Tek katman, sinirli yalitim)",
    panjur: "Yüksek (Köpük dolgulu paletler)",
    winner: "panjur",
  },
  {
    criteria: "Fiyat",
    kepenk: "Orta (Kullanilan malzemeye göre)",
    panjur: "Düsük-Orta (Daha ekonomik)",
    winner: "panjur",
  },
  {
    criteria: "Ses Yalitimi",
    kepenk: "Düsük-Orta",
    panjur: "Yüksek (Köpük dolgu ses keser)",
    winner: "panjur",
  },
  {
    criteria: "Estetik",
    kepenk: "Endüstriyel görünüm",
    panjur: "Modern, estetik görünüm",
    winner: "panjur",
  },
  {
    criteria: "Kullanim Alani",
    kepenk: "Ticari, magaza, depo, garaj",
    panjur: "Konut, ofis, is yeri",
    winner: "beraber",
  },
  {
    criteria: "Enerji Verimliligi",
    kepenk: "Düsük (Yalitim zayif)",
    panjur: "Yüksek (%30'a varan tasarruf)",
    winner: "panjur",
  },
  {
    criteria: "Montaj Kolayligi",
    kepenk: "Profesyonel kurulum gerekli",
    panjur: "Standart, hizli montaj",
    winner: "panjur",
  },
];

const kepenkPros = [
  "Üst düzey güvenlik",
  "Kirilmaz, dayanikli yapi",
  "Ticari alanlar için ideal",
  "Uzun ömürlü (15+ yil)",
  "Yangin dayanimi (çelik modeller)",
  "Genis açikliklari kapatabilir",
  "Elektriksiz manuel kullanim",
];

const kepenkCons = [
  "Isi ve ses yalitimi zayif",
  "Endüstriyel görünüm",
  "Agir mekanizma",
  "Daha yüksek maliyet (çelik modeller)",
];

const panjurPros = [
  "Üstün isi yalitimi",
  "Iyi ses yalitimi",
  "Estetik, modern görünüm",
  "Enerji tasarrufu saglar",
  "Uygun fiyatli",
  "Otomatik motorlu seçenekler",
  "Konut için ideal",
  "Hafif ve pratik",
];

const panjurCons = [
  "Kepenke göre daha az güvenlik",
  "Ekstra güvenlik aksesuari gerekebilir",
  "Palet degisimi gerekebilir",
  "Genis açikliklarda sinirli",
];

const useCases = [
  {
    icon: Building,
    title: "Dükkan / Magaza",
    recommendation: "kepenk",
    desc: "Ticari isletmeler için kepenk daha güvenlidir. Gece güvenligi için tam koruma saglar. Elektrikli veya manuel seçenekler mevcuttur.",
  },
  {
    icon: Building,
    title: "Ev / Daire",
    recommendation: "panjur",
    desc: "Konutlarda panjur tercih edilmelidir. Isi ve ses yalitimi saglarken, estetik görünüm sunar. Enerji faturalarini düsürür.",
  },
  {
    icon: Lock,
    title: "Depo / Fabrika",
    recommendation: "kepenk",
    desc: "Genis açikliklar ve üst düzey güvenlik gereken alanlar için çelik kepenk en dogru seçenektir.",
  },
  {
    icon: Eye,
    title: "Ofis / Is Merkezi",
    recommendation: "panjur",
    desc: "Modern ofis binalari için panjur daha uygundur. Estetik görünüm, isi yalitimi ve otomatik kullanim avantajlari sunar.",
  },
];

export default function CompareKepenkPanjur() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="toz-section bg-gradient-to-b from-primary/5 to-transparent">
        <div className="toz-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">
              Karsilastirma
            </span>
            <h1 className="toz-heading mt-3">
              Kepenk mi Panjur mu? <span className="text-gradient-purple">Hangisi Daha Iyi?</span>
            </h1>
            <p className="toz-subheading mx-auto mt-4">
              Güvenlik, yalitim ve maliyet açisindan kepenk ve panjur sistemlerini
              detayli olarak karsilastirdik. Dogru seçimi birlikte yapalim.
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
              8 farkli kriterde kepenk ve panjur sistemlerinin karsilastirmasi
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full min-w-[700px] bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left px-5 py-4 text-sm font-semibold text-foreground">Kriter</th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-red-500" />
                      Kepenk
                    </div>
                  </th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-blue-500" />
                      Panjur
                    </div>
                  </th>
                  <th className="text-center px-5 py-4 text-sm font-semibold text-foreground">Avantaj</th>
                </tr>
              </thead>
              <tbody>
                {comparisonCriteria.map((row, i) => (
                  <tr key={i} className="border-t border-border hover:bg-primary/5 transition-colors">
                    <td className="px-5 py-4 text-sm font-medium text-foreground">{row.criteria}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.kepenk}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.panjur}</td>
                    <td className="px-5 py-4 text-center">
                      {row.winner === "beraber" ? (
                        <span className="inline-flex items-center text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                          Beraber
                        </span>
                      ) : (
                        <span
                          className={`inline-flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
                            row.winner === "kepenk"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {row.winner === "kepenk" ? "Kepenk" : "Panjur"}
                        </span>
                      )}
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
            {/* Kepenk */}
            <div className="bg-card rounded-2xl border border-red-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Kepenk</h2>
              </div>

              <h3 className="text-sm font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Avantajlar
              </h3>
              <ul className="space-y-2 mb-6">
                {kepenkPros.map((item, i) => (
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
                {kepenkCons.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Panjur */}
            <div className="bg-card rounded-2xl border border-blue-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Panjur</h2>
              </div>

              <h3 className="text-sm font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Avantajlar
              </h3>
              <ul className="space-y-2 mb-6">
                {panjurPros.map((item, i) => (
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
                {panjurCons.map((item, i) => (
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

      {/* When to Choose Which */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="text-center mb-10">
            <h2 className="toz-heading">
              Ne Zaman <span className="text-gradient-purple">Hangisini Seçmeli?</span>
            </h2>
            <p className="toz-subheading mx-auto mt-3">
              Kullanim amacina göre önerilerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, i) => (
              <div
                key={i}
                className={`bg-card rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md ${
                  useCase.recommendation === "kepenk" ? "border-red-200" : "border-blue-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      useCase.recommendation === "kepenk" ? "bg-red-100" : "bg-blue-100"
                    }`}
                  >
                    <useCase.icon
                      className={`w-5 h-5 ${
                        useCase.recommendation === "kepenk" ? "text-red-600" : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{useCase.title}</h3>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        useCase.recommendation === "kepenk"
                          ? "bg-red-100 text-red-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      Öneri: {useCase.recommendation === "kepenk" ? "Kepenk" : "Panjur"}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Highlight */}
      <section className="toz-section bg-gradient-to-b from-transparent to-primary/5">
        <div className="toz-container">
          <div className="text-center mb-10">
            <h2 className="toz-heading">
              Öne Çikan <span className="text-gradient-purple">Farklar</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Güvenlik</h3>
              <p className="text-sm text-muted-foreground">
                Kepenk, hirsizliga karsi üstün koruma saglar. Çelik modeller ekstra güvenlik
                sunar. Panjur da yeterli koruma saglar ancak kepenk kadar dayanikli degildir.
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm text-center">
              <Thermometer className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Yalitim</h3>
              <p className="text-sm text-muted-foreground">
                Panjur, köpük dolgulu paletleri sayesinde üstün isi ve ses yalitimi sunar.
                Kis ve yaz aylarinda %30'a varan enerji tasarrufu saglar.
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm text-center">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Maliyet</h3>
              <p className="text-sm text-muted-foreground">
                Panjur genel olarak daha ekonomiktir. Kepenk, kullanilan malzemeye göre
                fiyat degisir. Uzun vadede panjur enerji tasarrufu ile maliyetini karsilar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Solution */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-blue-100 rounded-2xl p-6 border border-primary/20">
            <div className="flex items-start gap-3">
              <Wind className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-lg font-bold text-foreground mb-2">Birlikte Kullanim Seçenegi</h2>
                <p className="text-sm text-muted-foreground">
                  Bazi projelerde hem kepenk hem panjur birlikte kullanilabilir. Özellikle
                  ticari binalarin konut bölümlerinde veya magaza vitrinlerinde bu kombinasyon
                  hem güvenligi hem yalitimi bir arada sunar. TOZ YAPI olarak size en uygun
                  kombini öneriyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="toz-section bg-gradient-to-b from-transparent to-primary/5">
        <div className="toz-container">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-purple-100 rounded-2xl p-6 border border-primary/20">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-lg font-bold text-foreground mb-2">Genel Degerlendirme</h2>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Kepenk</strong>, güvenlik açisindan
                  tartisilmaz sekilde üstünken; <strong className="text-foreground">panjur</strong>,
                  yalitim, estetik ve fiyat/performans açisindan öne çikiyor. Ticari alanlar
                  için kepenk, konut için panjur genellikle dogru seçimdir. 8 kriterden 4'ünde
                  panjur, 2'sinde kepenk üstün geldi. Ihtiyaciniza göre TOZ YAPI uzmanlari
                  en dogru çözümü önerecektir.
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
            <VolumeX className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Dogru Sistemi Birlikte Seçelim
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Projeniz için en uygun güvenlik ve yalitim çözümünü birlikte belirleyelim.
              Ucretsiz kesif ve danismanlik hizmetimizden yararlanin.
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
                Ucretsiz kesif
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
