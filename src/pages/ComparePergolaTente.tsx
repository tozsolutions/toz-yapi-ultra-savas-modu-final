import {
  CheckCircle2,
  XCircle,
  Sun,
  Snowflake,
  Shield,
  DollarSign,
  Palette,
  Wrench,
  Phone,
  Calculator,
  ArrowRight,
  Home,
  PhoneCall,
  Info,
  ThermometerSun,
  Droplets,
} from "lucide-react";

const comparisonCriteria = [
  {
    criteria: "4 Mevsim Kullanim",
    pergola: "Yil boyu kullanilabilir (cam/sabit)",
    tente: "Yaz/ay sicak mevsimler (3-4 ay)",
    winner: "pergola",
  },
  {
    criteria: "Dayaniklilik",
    pergola: "Cok yuksek (15-20 yil omur)",
    tente: "Orta (5-8 yil omur)",
    winner: "pergola",
  },
  {
    criteria: "Maliyet",
    pergola: "Yuksek (Yatirim degeri yuksek)",
    tente: "Dusuk-Orta (Ekonomik)",
    winner: "tente",
  },
  {
    criteria: "Estetik",
    pergola: "Premium, modern görünüm",
    tente: "Sade, fonksiyonel",
    winner: "pergola",
  },
  {
    criteria: "Bakim",
    pergola: "Dusuk (Yilda 1-2 kez temizlik)",
    tente: "Orta (Mekanizma yaglama, kumaş bakimi)",
    winner: "pergola",
  },
  {
    criteria: "Montaj Süresi",
    pergola: "5-15 gün (Proje bazli)",
    tente: "1-3 gün (Hizli montaj)",
    winner: "tente",
  },
  {
    criteria: "Ruzgar Dayanimi",
    pergola: "120 km/s'e kadar (Sistemine göre)",
    tente: "80 km/s (Otomatik kapanma)",
    winner: "pergola",
  },
  {
    criteria: "Güneş Korumasi",
    pergola: "Ayarlanabilir lamel/cam seçenegi",
    tente: "Acilir-kapanir kumas gölgeleme",
    winner: "beraber",
  },
];

const pergolaPros = [
  "Yil boyu kullanim imkani",
  "15-20 yil uzun omur",
  "Premium estetik görünüm",
  "Yuksek ruzgar dayanimi",
  "Dusuk bakim gereksinimi",
  "Mülk degerini artirir",
  "Cam tavan seçenegi ile aydinlik",
  "LED aydinlatma entegrasyonu",
];

const pergolaCons = [
  "Yuksek ilk yatirim maliyeti",
  "Uzun montaj süresi",
  "Imar izni gerektirebilir",
  "Tasimasi/zor degistirilmesi",
];

const tentePros = [
  "Uygun fiyatli",
  "Hizli ve kolay montaj (1-3 gün)",
  "Acilir-kapanir pratik kullanim",
  "Kolay sökülüp takilabilir",
  "Renk ve desen çesitleri",
  "Dusuk yedek parça maliyeti",
];

const tenteCons = [
  "Sinirli mevsim kullanimi (3-4 ay)",
  "Kisa omur (5-8 yil)",
  "Ruzgarda hasar riski",
  "Düzenli bakim gerektirir",
  "Mülk degerine katkisi sinirli",
];

const useCases = [
  {
    icon: Home,
    title: "Ev Terasi / Bahçesi",
    recommendation: "pergola",
    desc: "Yil boyu kullanim icin biyoklimatik pergola idealdir. Cam tavan seçenegi ile kis günesinden de yararlanin.",
  },
  {
    icon: ThermometerSun,
    title: "Yazlik / Plaj",
    recommendation: "tente",
    desc: "Sezonluk kullanim için tente daha ekonomiktir. Yaz ayinda gölge, kis ayinda açik alan saglar.",
  },
  {
    icon: Droplets,
    title: "Kafe / Restoran",
    recommendation: "pergola",
    desc: "Ticari isletmeler icin pergola yatirimi, 4 sezon gelir elde etmeyi saglar. Müsteri memnuniyetini artirir.",
  },
  {
    icon: Sun,
    title: "Pencere Üstü Gölgeleme",
    recommendation: "tente",
    desc: "Sadece yaz aylarinda günes korumasi için pencere tentesi yeterli ve ekonomiktir.",
  },
];

export default function ComparePergolaTente() {
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
              Pergola mi Tente mi? <span className="text-gradient-purple">Hangisi Daha Iyi?</span>
            </h1>
            <p className="toz-subheading mx-auto mt-4">
              Dis mekan gölgeleme çözümlerinde en popüler iki seçenegi detayli olarak
              karsilastirdik. Ihtiyaciniza en uygun çözümü birlikte bulalim.
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
              8 farkli kriterde pergola ve tente sistemlerinin karsilastirmasi
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full min-w-[700px] bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left px-5 py-4 text-sm font-semibold text-foreground">Kriter</th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-purple-500" />
                      Pergola
                    </div>
                  </th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <Sun className="w-4 h-4 text-orange-500" />
                      Tente
                    </div>
                  </th>
                  <th className="text-center px-5 py-4 text-sm font-semibold text-foreground">Avantaj</th>
                </tr>
              </thead>
              <tbody>
                {comparisonCriteria.map((row, i) => (
                  <tr key={i} className="border-t border-border hover:bg-primary/5 transition-colors">
                    <td className="px-5 py-4 text-sm font-medium text-foreground">{row.criteria}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.pergola}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.tente}</td>
                    <td className="px-5 py-4 text-center">
                      {row.winner === "beraber" ? (
                        <span className="inline-flex items-center text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                          Beraber
                        </span>
                      ) : (
                        <span
                          className={`inline-flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
                            row.winner === "pergola"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {row.winner === "pergola" ? "Pergola" : "Tente"}
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
            {/* Pergola */}
            <div className="bg-card rounded-2xl border border-purple-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Home className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Pergola</h2>
              </div>

              <h3 className="text-sm font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Avantajlar
              </h3>
              <ul className="space-y-2 mb-6">
                {pergolaPros.map((item, i) => (
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
                {pergolaCons.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tente */}
            <div className="bg-card rounded-2xl border border-orange-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Sun className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Tente</h2>
              </div>

              <h3 className="text-sm font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Avantajlar
              </h3>
              <ul className="space-y-2 mb-6">
                {tentePros.map((item, i) => (
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
                {tenteCons.map((item, i) => (
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

      {/* Use Case Recommendations */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="text-center mb-10">
            <h2 className="toz-heading">
              Hangi Durumda <span className="text-gradient-purple">Hangisi?</span>
            </h2>
            <p className="toz-subheading mx-auto mt-3">
              Kullanim alanina göre önerilerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, i) => (
              <div
                key={i}
                className={`bg-card rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md ${
                  useCase.recommendation === "pergola" ? "border-purple-200" : "border-orange-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      useCase.recommendation === "pergola" ? "bg-purple-100" : "bg-orange-100"
                    }`}
                  >
                    <useCase.icon
                      className={`w-5 h-5 ${
                        useCase.recommendation === "pergola" ? "text-purple-600" : "text-orange-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{useCase.title}</h3>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        useCase.recommendation === "pergola"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      Öneri: {useCase.recommendation === "pergola" ? "Pergola" : "Tente"}
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
              <Snowflake className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">4 Mevsim</h3>
              <p className="text-sm text-muted-foreground">
                Pergola yil boyu kullanim saglarken, tente sadece sicak mevsimlerde
                kullanilabilir. Kis günlerinizde pergola ile dis mekan keyfini sürdürün.
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Dayaniklilik</h3>
              <p className="text-sm text-muted-foreground">
                Pergola 15-20 yil, tente 5-8 yil omre sahiptir. Uzun vadede pergola
                daha ekonomik olabilir. TOZ YAPI her ikisi için 2 yil garanti verir.
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm text-center">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Maliyet</h3>
              <p className="text-sm text-muted-foreground">
                Tente ilk yatirimda daha uygun olsa da, pergola uzun vadeli deger sunar.
                Mülk degerini artirir ve 4 sezon gelir elde etmenizi saglar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-purple-100 rounded-2xl p-6 border border-primary/20">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-lg font-bold text-foreground mb-2">Genel Degerlendirme</h2>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Pergola</strong>, 8 kriterden 5'inde ustunluk
                  sagladi. Ancak tente de kendi alaninda (fiyat, hizli montaj, sezonluk kullanim)
                  oldukca basarili. Yil boyu kullanim ve uzun vadeli yatirim icin pergola;
                  ekonomik ve sezonluk çözüm icin tente tercih edin. Her iki sistem de
                  TOZ YAPI kalitesi ve garantisiyle satin alinabilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="toz-section bg-gradient-to-b from-transparent to-primary/5">
        <div className="toz-container">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
            <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Size En Uygun Çözümü Birlikte Bulalim
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Ucretsiz kesif hizmetimizle alaninizi yerinde inceleyelim. Pergola mi tente mi
              karar vermenize yardimci olalim. Butcenize en uygun seçenegi sunalim.
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
