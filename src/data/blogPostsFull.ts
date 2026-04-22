export interface BlogPostFull {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  keywords: string[];
  sections: { heading: string; content: string }[];
}

export const blogPostsFull: BlogPostFull[] = [
  {
    slug: "gunes-kirici-sistemlerde-surdurulebilirlik-2026",
    title: "Güneş Kırıcı Sistemlerde Sürdürülebilirlik",
    subtitle: "Geleceğin Yeşil Binaları İçin Akıllı Çözümler",
    excerpt: "Güneş kırıcı sistemlerin enerji tasarrufu potansiyeli, LEED/BREEAM sertifikasyonlarına katkısı ve karbon ayak izi azaltımı hakkında kapsamlı rehber.",
    category: "surdurulebilirlik",
    date: "Mart 2026",
    readTime: "8 dk",
    keywords: ["güneş kırıcı", "sürdürülebilir mimari", "enerji verimliliği", "yeşil bina", "LEED", "BREEAM", "pasif ev", "dış gölgeleme"],
    sections: [
      {
        heading: "Güneş Kırıcı Nedir ve Nasıl Çalışır?",
        content: `Güneş kırıcı sistemler, bina cephelerine entegre edilen ve doğrudan güneş ışınlarını kontrol ederek iç mekan sıcaklığını düzenleyen mimari elemanlardır. Temel çalışma prensibi, yaz aylarında güneşin yüksek açılı ışınlarını bloke ederken, kış aylarında düşük açılı güneş ışığının içeri girmesine izin vermektir.

**Ana Bileşenler:**
- Yatay veya dikey lameller
- Ayarlanabilir açılı paneller
- Sabit veya hareketli sistemler
- Alüminyum, ahşap veya kompozit malzemeler

**Çalışma Mekanizması:**
1. Yaz Dönemi: Güneş tepede, lameller dik açıyla ışınları keser
2. Kış Dönemi: Güneş alçakta, lameller ışığı içeri yönlendirir
3. Geçiş Dönemleri: Ayarlanabilir sistemler optimum konuma gelir`,
      },
      {
        heading: "Enerji Tasarrufu Potansiyeli",
        content: `Avrupa'da yapılan bağımsız araştırmalar, doğru tasarlanmış güneş kırıcı sistemlerin ciddi enerji tasarrufu sağladığını gösteriyor:

**Soğutma Maliyetlerinde:**
- %40-60 azalma (sıcak iklimlerde)
- %25-35 azalma (ılıman iklimlerde)
- Pik yük talebinde %30'a varan düşüş

**Isıtma Maliyetlerinde:**
- Kışın pasif güneş kazancı ile %10-15 tasarruf
- Rüzgar perdeleri etkisi ile ısı kaybı azalması

**Aydınlatma Maliyetlerinde:**
- Gün ışığı optimizasyonu ile %20-40 elektrik tasarrufu
- Göz kamaştırma kontrolü ile konfor artışı

**Toplam Enerji Tasarrufu:** Yıllık bazda %25-45 arası toplam enerji tüketimi azalması`,
      },
      {
        heading: "Yeşil Bina Sertifikasyonlarına Katkı",
        content: `**LEED (Leadership in Energy and Environmental Design):**

Güneş kırıcı sistemler aşağıdaki LEED kredi kategorilerine katkı sağlar:

- **EA Credit 1: Optimize Energy Performance** - Enerji modelleme puanları, performans iyileştirme kredileri
- **IEQ Credit 8.1: Daylight and Views** - Gün ışığı kullanımı, dış mekan görüşü
- **MR Credit: Materials and Resources** - Geri dönüştürülmüş içerik, bölgesel malzeme temini

Beklenen LEED puanı: 3-8 kredi puanı

**BREEAM (Building Research Establishment Environmental Assessment Method):**

- **Hea 01: Visual Comfort** - Gün ışığı performansı, göz kamaştırma önleme
- **Ene 01: Reduction of Energy Use and Carbon Emissions** - Enerji tüketimi azaltma, karbon ayak izi düşüşü

Beklenen BREEAM puanı: İyi - Mükemmel seviye yükselişi

**Passivhaus (Pasif Ev Standardı):**

Güneş kırıcı sistemler, pasif ev standardının kritik gereksinimlerini karşılamaya yardımcı olur:
- Yıllık ısıtma talebi: ≤15 kWh/m² yıl
- Yıllık soğutma talebi: ≤15 kWh/m² yıl (ılıman iklimlerde)
- Primer enerji talebi: ≤120 kWh/m² yıl
- Hava sızdırmazlığı: n50 ≤ 0.6 h⁻¹`,
      },
      {
        heading: "Karbon Ayak İzi Azaltımı",
        content: `Bir güneş kırıcı sisteminin 50 yıllık yaşam döngüsünde karbon etkisi:

**Malzeme Aşaması:**
- Alüminyum: 8-12 kg CO₂/m² (geri dönüştürülmüş içerik ile %60 azalma)
- Çelik: 5-8 kg CO₂/m²
- Ahşap: -3 ila -5 kg CO₂/m² (karbon depolama)

**Kullanım Aşaması:**
- Enerji tasarrufu: 150-250 kg CO₂/m²/yıl
- 50 yılda: 7.500-12.500 kg CO₂/m² tasarruf

**Bakım Aşaması:**
- Düşük bakım gereksinimi: 2-5 kg CO₂/m²/yıl

**Net Karbon Farkı:** 50 yılda 7.000+ kg CO₂/m² pozitif etki`,
      },
      {
        heading: "Maliyet-Fayda Analizi",
        content: `**Yatırım Maliyeti (2026 Türkiye Piyasası):**

Sabit Güneş Kırıcı:
- Alüminyum: 1.500-2.500 TL/m²
- Çelik: 1.200-2.000 TL/m²
- Ahşap: 2.000-3.500 TL/m²

Hareketli/Dinamik Sistem:
- Motorlu lamel: 3.500-6.000 TL/m²
- Otomasyon dahil: 5.000-8.000 TL/m²

**Geri Dönüş Süresi (ROI):**
- Basit sistemler: 4-7 yıl
- Orta seviye otomasyon: 6-9 yıl
- İleri otomasyon: 8-12 yıl

**Diğer Faydalar:**
- Mülk değerinde artış: %5-10
- Kiralanabilirlik artışı: %15-20
- Bakım maliyeti azalması: %20-30
- HVAC ekipman ömrü uzaması: 3-5 yıl`,
      },
      {
        heading: "Vaka Analizleri",
        content: `**Vaka 1: Ofis Binası - Ankara**

Proje: 5.000 m² ofis binası
Sistem: Dikey alüminyum güneş kırıcı
Yatırım: 8.5 milyon TL
Yıllık Enerji Tasarrufu: 1.4 milyon TL
Geri Dönüş: 6.1 yıl
CO₂ Azaltımı: 180 ton/yıl
LEED Puanı: +6 kredi

*"Güneş kırıcı sistemi, beklenenden %15 daha fazla tasarruf sağladı. Ofis çalışanlarının konfor memnuniyeti %40 arttı."* - Proje Müdürü

---

**Vaka 2: Alışveriş Merkezi - İzmir**

Proje: 25.000 m² AVM cephe
Sistem: Dinamik yatay lamel + sensör
Yatırım: 42 milyon TL
Yıllık Enerji Tasarrufu: 8.2 milyon TL
Geri Dönüş: 5.1 yıl
Soğutma Yükü Azalması: %52

*"HVAC sistem kapasitesini %30 küçültebildik. İlk yatırım maliyeti kendini 5 yılda amorti etti."* - Mekanik Mühendis

---

**Vaka 3: Hastane - Antalya**

Proje: 12.000 m² hasta odaları
Sistem: Motorlu dış jaluzi
Yatırım: 18 milyon TL
Yıllık Enerji Tasarrufu: 2.8 milyon TL
Geri Dönüş: 6.4 yıl
Hasta Konforu: %45 iyileşme

*"Yoğun bakım ve hasta odalarında göz kamaştırma şikayetleri %70 azaldı. Hemşirelik personeli memnuniyeti arttı."* - Başhekim`,
      },
      {
        heading: "Doğru Sistem Seçimi İçin Kriterler",
        content: `**İklim Tipine Göre:**

Sıcak İklim (Akdeniz, Güneydoğu Anadolu):
- Yatay sabit lameller (yüksek güneş açısı)
- Açık renkli yüzeyler (yansıtma)
- Yoğun gölgeleme (%80-90)

Ilıman İklim (Ege, Marmara):
- Ayarlanabilir sistemler
- Mevsimsel optimizasyon
- Orta yoğunlukta gölgeleme (%60-70)

Soğuk İklim (Doğu Anadolu, İç Anadolu):
- Kışın güneş kazancına izin veren tasarım
- Hareketli sistemler (optimum kontrol)
- Düşük emisyon kaplamalar

**Bina Yönüne Göre:**

Güney Cephe: En kritik yön, yatay lameller öncelikli, yıl boyu dengeli performans.

Doğu/Batı Cephe: Düşük güneş açısı sorunu, dikey lameller daha etkili, dinamik sistemler önerilir.

Kuzey Cephe: Dolaylı ışık kontrolü, hafif gölgeleme yeterli, estetik odaklı tasarım.`,
      },
      {
        heading: "Gelecek Trendleri ve İnovasyonlar",
        content: `**Akıllı Sistemler:**

IoT Entegrasyonu: Gerçek zamanlı hava durumu verisi, bulut tabanlı optimizasyon, uzaktan mobil kontrol.

Yapay Zeka: Kullanıcı davranışı öğrenme, otomatik ayar optimizasyonu, tahmine dayalı enerji yönetimi.

Sensör Füzyonu: Güneş ışınımı sensörü, rüzgar hızı ölçümü, sıcaklık ve nem takibi, occupancy detection (varlık algılama).

**Entegre Çözümler:**

BIPV (Building Integrated Photovoltaics): Güneş kırıcı + güneş paneli, kendi enerjisini üretir, şebeke bağlantısı.

Yeşil Cephe Entegrasyonu: Dikey bahçe + güneş kırıcı, biyoiklimsel tasarım, hava kalitesi iyileştirme.

Termoelektrik Jeneratör: Sıcaklık farkından elektrik, kendi kendine yeten sistem, bakım gerektirmeyen operasyon.`,
      },
    ],
    content: `İklim değişikliği ve enerji maliyetlerinin artışı, mimarlar ve inşaat sektörü profesyonellerini daha sürdürülebilir yapı çözümleri aramaya yönlendiriyor. Bu noktada, güneş kırıcı (brise soleil) sistemleri, modern mimarinin en önemli bileşenlerinden biri haline geliyor.

Bu kapsamlı rehberde, güneş kırıcı sistemlerin sürdürülebilirlik açısından sunduğu avantajları, enerji tasarrufu potansiyelini ve yeşil bina sertifikasyonlarına (LEED, BREEAM, Passivhaus) katkılarını detaylıca inceleyeceğiz.

Güneş kırıcı sistemler, doğru tasarım ve uygulama ile %25-45 enerji tasarrufu, 5-9 yıl geri dönüş süresi, LEED/BREEAM puan artışı, %70 karbon ayak izi azaltımı, artan kullanıcı konforu ve yükselen mülk değeri sağlar.

TOZ Yapı Teknolojileri olarak size özel güneş kırıcı çözümleri sunuyoruz: ücretsiz keşif ve enerji analizi, BIM uyumlu teknik çizimler, LEED danışmanlık desteği, 10 yıl garanti ve satış sonrası servis.`,
  },
  {
    slug: "mimari-tasarimda-brise-soleil-2026",
    title: "Mimari Tasarımda Brise Soleil",
    subtitle: "Estetik ve Fonksiyonun Mükemmel Uyumu",
    excerpt: "Le Corbusier'den günümüze brise soleil sistemlerinin tarihsel gelişimi, tasarım prensipleri, malzeme seçenekleri ve dünyadan ikonik uygulama örnekleri.",
    category: "mimari",
    date: "Mart 2026",
    readTime: "10 dk",
    keywords: ["brise soleil", "mimari güneş kırıcı", "cephe tasarımı", "dış gölgeleme", "alüminyum cephe", "mimari estetik", "bina kabuğu"],
    sections: [
      {
        heading: "Tarihsel Gelişim ve Evrim",
        content: `**Erken Dönem (1930-1950):**

Le Corbusier'in Öncü Projeleri:
- Villa Savoye (1929) - İlk modern güneş kırıcı uygulamaları
- Cité de Refuge, Paris (1933) - Büyük ölçekli brise soleil
- Ministry of Education, Rio (1936) - Tropikal iklim adaptasyonu

Özellikler: Betonarme lameller, sabit açılı tasarım, brutalist estetik, iklim odaklı yaklaşım.

---

**Modern Dönem (1950-1980):**

Alüminyum Devrimi:
- Hafiflik ve dayanıklılık
- Ekstrüzyon teknolojisi
- Anodize yüzeyler
- Modüler sistemler

Öne Çıkan Projeler:
- UN Headquarters, New York (1952)
- Marina City, Chicago (1964)
- Sydney Opera House (1973)

---

**Çağdaş Dönem (1980-Günümüz):**

Teknoloji Entegrasyonu:
- Hareketli/dinamik sistemler
- Akıllı otomasyon
- Parametrik tasarım
- Sürdürülebilir malzemeler

Dijital Çağ: BIM entegrasyonu, performans simülasyonu, özelleştirilmiş üretim, IoT bağlantısı.`,
      },
      {
        heading: "Tasarım Prensipleri ve Metodoloji",
        content: `**Temel Tasarım Hedefleri:**

1. **Güneş Kontrolü:** Yazın aşırı ısınmayı önle, kışın pasif kazanç sağla, göz kamaştırmayı minimize et, gün ışığını optimize et.

2. **Enerji Performansı:** Soğutma yükünü azalt, ısıtma ihtiyacını düşür, aydınlatma enerjisini kıs, toplam enerji tüketimini minimize et.

3. **Estetik Kimlik:** Bina karakterini yansıt, çevre ile uyum sağla, ölçek ve orantıyı koru, malzeme dokusunu vurgula.

4. **Fonksiyonel Gereksinimler:** Görüş konforu, doğal havalandırma, yağmur suyu yönetimi, bakım erişilebilirliği.

**Tasarım Süreci Adım Adım:**

1. **İklim Analizi:** Güneş yolu diyagramı, sıcaklık profilleri, rüzgar yönü ve hızı, yağış verileri.
2. **Bina Oryantasyonu:** Cephe yönleri belirleme, kritik güneş saatleri, mevsimsel değişimler.
3. **Lamel Geometrisi:** Yatay vs. dikey karar, lamel genişliği ve kalınlığı, aralıkların optimizasyonu.
4. **Malzeme Seçimi:** Alüminyum (hafif, dayanıklı), çelik (güçlü, endüstriyel), ahşap (sıcak, doğal), kompozit (özel efektler).
5. **Detay Mühendisliği:** Bağlantı detayları, termal köprü analizi, su tahliye sistemi, rüzgar yükü hesapları.
6. **Performans Simülasyonu:** Güneş ışınımı analizi, enerji modelleme, gün ışığı simülasyonu, CFD.`,
      },
      {
        heading: "Sistem Tipleri ve Karakteristikleri",
        content: `**Tip 1: Yatay Lamelli Sistemler**

Uygun Olduğu Yönler: Güney cepheler (yüksek güneş açısı), ekvatora yakın bölgeler.

Avantajlar: Basit ve ekonomik, düşük bakım, yüksek gölgeleme performansı, kolay temizlik.
Dezavantajlar: Doğu/batı için daha az etkili, görüşü kısmen engeller, rüzgar yüküne duyarlı.

Teknik Spesifikasyon: Lamel genişliği 100-300 mm, aralık 150-400 mm, maksimum açıklık 6-8 m.

---

**Tip 2: Dikey Lamelli Sistemler**

Uygun Olduğu Yönler: Doğu ve batı cepheler, düşük güneş açısı problemleri.

Avantajlar: Düşük açı güneş kontrolü, panoramik görüş korunur, dinamik gölge oyunları, modern estetik.
Dezavantajlar: Yatay sistemlere göre daha pahalı, daha fazla bağlantı noktası.

Teknik Spesifikasyon: Lamel genişliği 80-200 mm, rotasyon 0-135 derece, motor opsiyonu mevcut.

---

**Tip 3: Egg-Crate (Yumurta Kolisi) Sistem**

Uygun Olduğu Yönler: Tüm yönler, yüksek performans gereksinimi, ikonik mimari.

Avantajlar: 3 boyutlu güneş kontrolü, derinlik ve doku, çok yönlü gölgeleme, heykelsi görünüm.
Dezavantajlar: En pahalı sistem, karmaşık detaylar, uzun imalat süresi.

Teknik Spesifikasyon: Grid boyutu 600x600 - 1200x1200 mm, derinlik 200-600 mm, ağırlık 25-40 kg/m².

---

**Tip 4: Dinamik/Hareketli Sistemler**

Uygun Olduğu Yönler: Premium projeler, değişken iklim koşulları, akıllı binalar.

Avantajlar: Optimum yıl boyu performans, kullanıcı kontrolü, gerçek zamanlı optimizasyon, maksimum enerji tasarrufu.
Dezavantajlar: Yüksek ilk yatırım, mekanik bakım gereksinimi, elektrik altyapısı şart.

Teknik Spesifikasyon: Aktüatör tipi lineer motor, kontrol DALI/KNX/BACnet, güç tüketimi 0.5-2 W/m².`,
      },
      {
        heading: "Malzeme Karşılaştırması",
        content: `**Alüminyum:**
Yoğunluk: 2.7 g/cm³ (hafif). Korozyon direnci: Mükemmel. Geri dönüşüm: %95+ mümkün.
Yüzey İşlemleri: Anodizasyon (15-25 mikron), toz boya (60-80 mikron), PVDF kaplama.
Maliyet: Orta-Yüksek. Ömür: 40-50 yıl. Bakım: Düşük.

---

**Paslanmaz Çelik:**
Yoğunluk: 8.0 g/cm³ (ağır). Dayanım: 500-900 MPa (çok güçlü).
Yüzey İşlemleri: Parlak polisaj, mat fırçalama, PVD kaplama (renkli).
Maliyet: Yüksek. Ömür: 50-60 yıl. Bakım: Orta.

---

**Ahşap:**
Doğal izolator, biyobozunur. Ahşap türleri: Tik, meşe, bambu, termal işlemeli ahşap.
Maliyet: Orta-Yüksek. Ömür: 20-30 yıl (bakımla 40+). Bakım: Yüksek (yıllık yağ/vernik).

---

**Kompozitler:**
CFRP (Carbon Fiber): Ultra hafif, ultra güçlü. GFRP (Glass Fiber): Ekonomik alternatif. WPC (Wood-Plastic): Ahşap görünümlü plastik.
Avantajlar: Özelleştirilmiş özellikler, kompleks formlar, renk penetrasyonu, korozyonsuz.
Maliyet: Yüksek. Ömür: 30-40 yıl. Bakım: Düşük.`,
      },
      {
        heading: "Dünyadan İkonik Örnekler",
        content: `**Institut du Monde Arabe, Paris (1987)** - Jean Nouvel
Fotoelektrikli metal panjurlar, Arap geometrik desenleri, otomatik açılır-kapanır. High-tech mimarinin dönüm noktası.

---

**One Angel Square, Manchester (2013)** - 3XN
Çift cepheli brise soleil, BREEAM Outstanding sertifikası, %75 enerji azaltımı.

---

**The Shard, Londra (2012)** - Renzo Piano
Eğimli cam + seramik frit, Londra silüetine uyum, kristal benzeri parlama.

---

**Louvre Abu Dhabi (2017)** - Jean Nouvel
Dev kubbe + karmaşık geometri, "ışık yağmuru" efekti, 180 m çap, 7.500 ton.

---

**Copenhagen International School (2017)** - CF Møller
12.000 m² cam cephe + güneş kırıcı, Danimarka'nın en büyük güneş enerjili cephesi, net-zero hedefi.`,
      },
      {
        heading: "Türkiye'den Başarılı Uygulamalar",
        content: `**SAP Türkiye Plaza, İstanbul** - Tabanlıoğlu Mimarlık
Dikey alüminyum lameller, batı cephesi (kritik güneş), LEED Gold sertifikası.

---

**Antalya Havalimanı Dış Hatlar** - Grimshaw Architects
Dalga formunda güneş kırıcı, bölgesel iklim yanıtı, %40 soğutma tasarrufu.

---

**Odunpazarı Modern Müze, Eskişehir** - Kengo Kuma
Ahşap kutu üst üste + gölgeleme, geleneksel-meets-modern, International Architecture Award.`,
      },
      {
        heading: "Detay Çözümleri ve En İyi Uygulamalar",
        content: `**Konsol Bağlantısı:**
Kritik noktalar: Termal köprü kırma, paslanmaz bağlantı elemanları, su tahliye kanalı, montaj toleransı (±3 mm).

---

**Lamel Profil Optimizasyonu:**
Aerodinamik form: Damla profili (rüzgar direnci düşük), aerofoil kesit, perforasyon (görüş + rüzgar).

---

**Köşe Birleşimleri:**
Seçenekler: Mitre cut (45° birleştirme), kaynaklı köşe (sürekli görünüm), mekanik bağlantı (sökülebilir).

---

**Temizlik Erişimi:**
Tasarım ilkeleri: Lameller arası minimum 80 cm, güvenlik ankraj noktaları, vinç erişim zone'ları, walking beam sistemleri (premium).`,
      },
    ],
    content: `Le Corbusier tarafından 1930'larda popüler hale getirilen "brise soleil" (Fransızca: güneş kırıcı), modern mimarinin en ikonik ve işlevsel unsurlarından biri olmuştur. Bugün, 21. yüzyılın teknolojik imkanları ile birleşen bu sistem, sadece güneş kontrolü değil, aynı zamanda bina kimliği oluşturan estetik bir ifade aracıdır.

Bu makalede, brise soleil sistemlerinin tarihsel gelişimini, tasarım prensiplerini, malzeme seçeneklerini ve dünyadan başarılı uygulama örneklerini inceleyeceğiz.

Brise soleil sistemleri, çağdaş mimarinin hem estetik hem de fonksiyonel gereksinimlerini karşılayan çok yönlü çözümlerdir. Doğru tasarım ile ikonik bina kimliği, %40-60 enerji tasarrufu, kullanıcı konforu maksimizasyonu, sürdürülebilirlik hedefleri ve uzun ömürlü performans sağlanır.

TOZ Yapı Teknolojileri olarak ücretsiz konsept tasarım, güneş analizi, 3D görselleştirme, teknik danışmanlık, anahtar teslim uygulama ve 10 yıl garanti sunuyoruz.`,
  },
  {
    slug: "moduler-insaat-teknolojileri-2026",
    title: "Modüler İnşaat Teknolojileri",
    subtitle: "Geleceğin Yapı Sistemleri Bugün",
    excerpt: "Modüler inşaatın temel prensipleri, geleneksel yöntemlere göre avantajları ve TOZ Yapı'nın modüler güneş kırıcı ve cephe sistemlerindeki yenilikçi yaklaşımı.",
    category: "teknoloji",
    date: "Mart 2026",
    readTime: "9 dk",
    keywords: ["modüler inşaat", "prefabrik sistemler", "off-site construction", "BIM", "lean construction", "sürdürülebilir yapı", "endüstriyel inşaat"],
    sections: [
      {
        heading: "Modüler İnşaat Nedir?",
        content: `Modüler inşaat, yapı bileşenlerinin kontrollü fabrika ortamında üretilip sahada hızlıca monte edilmesini esas alan bir yapı yöntemidir. Bu yaklaşım, inşaat sektöründe verimliliği ve kaliteyi önemli ölçüde artırır.

Temel prensip, yapının modüler parçalara ayrılması ve bu parçaların fabrikada hassas bir şekilde üretilmesidir. Üretilen modüller daha sonra sahada birleştirilerek tam bir yapı oluşturur.

**Süreç:**
1. Tasarım ve mühendislik (BIM ile 3D modelleme)
2. Fabrika üretimi (CNC kontrollü hassas üretim)
3. Kalite kontrol (her modül ayrı test edilir)
4. Sevkiyat (modüller sahaya taşınır)
5. Saha montajı (hızlı birleştirme ve bağlantılar)
6. Devreye alma (sistem testleri ve komisyoning)`,
      },
      {
        heading: "Geleneksel vs. Modüler Karşılaştırması",
        content: `**Hız:**
Fabrika üretimi ve paralel saha çalışmaları ile proje süresi %40-60 kısalır. Temel hazırlığı sahada devam ederken modüller fabrikada üretilir.

**Kalite:**
Kontrollü fabrika ortamında hassas üretim. CNC tezgahları ile ±1 mm tolerans. Her modül fabrikada test edilir. Tutkal ve bağlantı elemanları ideal koşullarda uygulanır.

**Atık:**
İnşaat atığında %70-80 azalma. Fabrika artıkları geri dönüştürülür. Malzeme optimizasyonu ile minimum fire. Sürdürülebilirlik hedeflerine doğrudan katkı.

**Maliyet:**
Toplu üretim ve işçilik optimizasyonu ile %15-25 maliyet avantajı. Öngörülebilir bütçe, sürpriz maliyetler yok. İşçilik maliyetinde %30-40 azalma.

**Güvenlik:**
Sahada daha az işçi, daha az kaza riski. Fabrika ortamında standart İSG prosedürleri.`,
      },
      {
        heading: "Avantajlar ve Dezavantajlar",
        content: `**Avantajlar:**
- Hızlı teslimat süreleri
- Yüksek kalite standardı
- Düşük atık oranı
- Maliyet öngörülebilirliği
- Mevsim bağımsız üretim
- Ölçeklenebilir yapı
- Kolay genişletilebilir
- Geri dönüştürülebilir

**Dezavantajlar:**
- Taşıma sınırlamaları (modül boyutları)
- İlk yatırım (fabrika altyapısı)
- Standart dışı tasarımlarda zorluk
- Saha erişim gereksinimleri
- Modüler tasarıma uygunluk kontrolü`,
      },
      {
        heading: "Uygulama Alanları",
        content: `- **Konut projeleri:** Modüler apartmanlar, villa kompleksleri, toplu konut
- **Ticari binalar:** Ofis modülleri, showroom, plaza katları
- **Eğitim yapıları:** Sınıf modülleri, laboratuvar, yemekhane
- **Sağlık yapıları:** Poliklinik modülleri, saha hastaneleri
- **Endüstriyel tesisler:** Depo, üretim alanları, soğuk hava depoları
- **Turizm:** Modüler otel odaları, bungalov, glamping`,
      },
      {
        heading: "TOZ Yapı Modüler Sistemleri",
        content: `**Pergola Sistemleri:**
Modüler alüminyum profil sistemi ile sahada hızlı montaj. Standart ve özel ölçülerde üretim, genişletilebilir yapı. Tüm bağlantı elemanları önceden hazırlanır.

**Güneş Kırıcı Sistemleri:**
Fabrika öncesi hazırlanmış lamel modülleri, sahada minimum montaj süresi. BIM entegrasyonu ile proje koordinasyonu. Her modül bağımsız monte edilebilir.

**Kış Bahçesi:**
Fabrikada kesilmiş ve işlenmiş profiller, sahada birleştirilerek kısa sürede tamamlanır. Cam ve yalıtım elemanları önceden monte edilir.

**Sundurma & Carport:**
Standart modüller ile farklı boyutlarda kombinasyon imkanı. Genişletilebilir yapı. Temel üzerine oturtma sistem.`,
      },
      {
        heading: "Gelecek Trendleri",
        content: `**3D Baskı:**
Beton ve polimer bazlı yapı elemanları. Karmaşık geometriler, düşük kalıp maliyeti. Özelleştirilmiş üretim.

**Robotik Montaj:**
Otonom montaj sistemleri. Yüksek hassasiyet, tekrarlanabilir kalite. İnsan-makine işbirliği.

**Dijital İkiz:**
BIM entegrasyonu ile sanul model ve performans simülasyonu. Gerçek zamanlı izleme. Tahmine dayalı bakım.

**Sürdürülebilir Malzemeler:**
Geri dönüşümlü ve bio-bazlı malzemeler. Düşük karbon ayak izi. Döngüsel ekonomi prensipleri.`,
      },
    ],
    content: `İnşaat sektörü, geleneksel yöntemlerin yol açtığı zaman aşımı, maliyet artışı ve kalite kontrol sorunlarına alternatif olarak modüler inşaata yöneliyor. TOZ Yapı Teknolojileri olarak, güneş kırıcı ve cephe sistemlerimizde modüler prensipleri uygulayarak müşterilerimize daha hızlı, ekonomik ve güvenilir çözümler sunuyoruz.

Bu makalede, modüler inşaatın temel prensiplerini, avantajlarını, uygulama alanlarını ve TOZ Yapı'nın bu alandaki yenilikçi yaklaşımlarını inceleyeceğiz.

Modüler inşaat teknolojileri ile fabrika ortamında hassas üretim, sahada hızlı montaj, düşük atık ve maliyet avantajı sağlanır. TOZ Yapı'nın modüler pergola, güneş kırıcı ve kış bahçesi sistemleri bu prensiplerle tasarlanmıştır.`,
  },
  {
    slug: "akilli-golgeleme-enerji-maliyetleri",
    title: "Akıllı Gölgeleme ile Enerji Maliyetlerini Nasıl Düşürürsünüz?",
    subtitle: "Veri Odaklı Bir Yaklaşım",
    excerpt: "Akıllı gölgeleme teknolojilerinin çalışma prensipleri, enerji tasarrufu mekanizmaları, gerçek proje verileri ve yatırım geri dönüş hesaplamaları.",
    category: "enerji",
    date: "Mart 2026",
    readTime: "8 dk",
    keywords: ["akıllı gölgeleme", "enerji tasarrufu", "bina otomasyonu", "HVAC optimizasyonu", "güneş kontrolü", "akıllı bina", "IoT"],
    sections: [
      {
        heading: "Akıllı Gölgeleme Nedir?",
        content: `Akıllı gölgeleme, geleneksel sabit gölgeleme sistemlerinin aksine, sensörler ve otomasyon teknolojileri kullanarak gerçek zamanlı olarak ortam koşullarına uyum sağlayan dinamik bir sistemdir.

Sistem, dış ve iç ortam parametrelerini sürekli izler ve gölgeleme elemanlarını otomatik olarak optimum konuma getirir. Bu sayede yılın her günü, günün her saati en uygun gölgeleme performansı sağlanır.

**Temel Bileşenler:**
- Motorlu gölgeleme elemanları (lameller, panjurlar, perdeler)
- Sensör ağı (güneş, sıcaklık, rüzgar, nem, varlık)
- Kontrol ünitesi (lojik işlemci ve iletişim modülü)
- Kullanıcı arayüzü (mobil uygulama, panel, sesli kontrol)
- Bina otomasyon entegrasyonu (KNX, BACnet, DALI)`,
      },
      {
        heading: "Geleneksel Sistemlerden Farkı",
        content: `| Özellik | Geleneksel | Akıllı |
|---|---|---|
| Kontrol | Manuel | Otomatik |
| Enerji tasarrufu | %15-25 | %30-50 |
| Kullanıcı konforu | Sabit | Dinamik |
| Bakım | Düşük | Orta |
| Yatırım maliyeti | Düşük | Orta-Yüksek |
| Geri dönüş süresi | 7-12 yıl | 4-8 yıl |

Akıllı sistemler, geleneksel sistemlere göre %50-100 daha fazla enerji tasarrufu sağlar. Bunun temel nedeni, sistem sürekli olarak değişen koşullara otomatik uyum sağlar.`,
      },
      {
        heading: "Enerji Tasarrufu Mekanizmaları",
        content: `**1. Güneş Isı Kazancı Kontrolü:**
Yaz aylarında güneş ışınları bloke edilir, iç mekan ısınması önlenir. Kışın düşük açılı güneş ışığı içeri yönlendirilir, pasif ısıtma sağlanır.

**2. Doğal Havalandırma Optimizasyonu:**
Rüzgar yönü ve hızına göre otomatik konumlanma. Çapraz havalandırma için optimum açıklıklar. İç-dış hava değişimi kontrolü.

**3. Gün Işığı Yönlendirme:**
Yapay aydınlatma ihtiyacını azaltan akıllı ışık yönetimi. Işık rafı (light shelf) etkisi. Göz kamaştırma önleyici dağıtım.

**4. HVAC Entegrasyonu:**
Bina otomasyon sistemi ile koordineli çalışma. HVAC sistemi yüküne göre gölgeleme optimizasyonu. Pik yük talebi azaltımı.`,
      },
      {
        heading: "Sensör ve Otomasyon Sistemleri",
        content: `- **Güneş ışınımı sensörü:** Işık yoğunluğuna ve açısına göre otomatik ayarlama
- **Sıcaklık ve nem sensörü:** İç/dış ortam koşullarını sürekli izleme
- **Rüzgar sensörü:** Şiddetli rüzgarda koruma pozisyonu (emniyet)
- **Yağmur dedektörü:** Yağmur başladığında otomatik kapanma
- **Occupancy detection:** Kullanıcı varlığına göre optimizasyon
- **Zaman saati:** Güneş pozisyonu önceden hesaplama

**Bina Otomasyon Protokolleri:**
- KNX: Avrupa standardı, yaygın destek
- BACnet: HVAC odaklı, ticari binalarda
- DALI: Aydınlatma entegrasyonu
- Modbus: Endüstriyel uygulamalar`,
      },
      {
        heading: "Gerçek Proje Verileri",
        content: `**Alışveriş Merkezi - İzmir:**
25.000 m² cephe, dinamik yatay lamel + sensör sistemi.
- Yatırım: 42 milyon TL
- Yıllık enerji tasarrufu: 8.2 milyon TL
- Geri dönüş: 5.1 yıl
- Soğutma yükü azalması: %52

*"HVAC sistem kapasitesini %30 küçültebildik. İlk yatırım maliyeti kendini 5 yılda amorti etti."* - Mekanik Mühendis

---

**Hastane - Antalya:**
12.000 m² hasta odaları, motorlu dış jaluzi.
- Yatırım: 18 milyon TL
- Yıllık enerji tasarrufu: 2.8 milyon TL
- Geri dönüş: 6.4 yıl
- Hasta konforu: %45 iyileşme
- Göz kamaştırma şikayetleri: %70 azalma

*"Yoğun bakım ve hasta odalarında göz kamaştırma şikayetleri %70 azaldı. Hemşirelik personeli memnuniyeti arttı."* - Başhekim`,
      },
      {
        heading: "ROI Hesaplama Aracı",
        content: `**Yatırım Geri Dönüş Hesaplaması:**

Tipik bir ticari bina projesi için:

- **Basit sistemler:** 4-7 yıl geri dönüş
  (Sensörlü motorlu lameller, temel otomasyon)

- **Orta seviye otomasyon:** 6-9 yıl geri dönüş
  (Çoklu sensör füzyonu, BMS entegrasyonu)

- **İleri otomasyon:** 8-12 yıl geri dönüş
  (AI optimizasyonu, bulut bağlantısı, tam entegrasyon)

**Ek Faydalar:**
- Mülk değerinde %5-10 artış
- Kiralanabilirlik artışı: %15-20
- HVAC ekipman ömründe 3-5 yıl uzama
- Bakım maliyetinde %20-30 azalma`,
      },
      {
        heading: "Uygulama En İyi Pratikleri",
        content: `**Tasarım Aşaması:**
- Proje başında gölgeleme danışmanlığı alın
- Güneş analizi ve enerji modelleme yapın
- Cephe yönüne göre doğru sistem tipini seçin
- Gelecek genişletme ihtiyaçlarını planlayın

**Montaj Aşaması:**
- Yetkili uygulayıcı ile çalışın
- Sensör konumlarını optimize edin
- BMS entegrasyonunu test edin
- Kullanıcı eğitimini eksiksiz yapın

**İşletme Aşaması:**
- Periyodik bakım programı uygulayın
- Enerji tüketimini sürekli izleyin
- Senaryo parametrelerini optimize edin
- Yazılım güncellemelerini takip edin`,
      },
    ],
    content: `Enerji maliyetleri tüm dünyada artarken, bina sahipleri ve işletmeciler operasyonel giderleri düşürmenin yollarını arıyor. İşte tam bu noktada, akıllı gölgeleme sistemleri %30-50'ye varan soğutma maliyeti azaltımı sunarak hızlı ROI (Return on Investment) sağlıyor.

Bu rehberde, akıllı gölgeleme teknolojilerinin çalışma prensiplerini, enerji tasarrufu mekanizmalarını, gerçek proje verilerini ve yatırım geri dönüş hesaplamalarını detaylıca ele alacağız.

Akıllı gölgeleme, sensörler ve otomasyon teknolojileri sayesinde geleneksel sistemlere göre %50-100 daha fazla enerji tasarrufu sağlar. Geri dönüş süreleri 4-8 yıl arasında değişmekte olup, sistem ömrü boyunca katlanılan yatırımın birkaç katı tasarruf sağlamaktadır.`,
  },
  {
    slug: "pergola-sistemlerinde-son-teknolojiler-2026",
    title: "Pergola Sistemlerinde Son Teknolojiler",
    subtitle: "Bioclimatic'ten Akıllı Otomasyona",
    excerpt: "2026 yılı pergola teknolojilerindeki son yenilikler, bioclimatic sistemler, güneş enerjisi entegrasyonu, IoT kontrol ve TOZ Yapı'nın yeni nesil ürün gamı.",
    category: "urun-rehberi",
    date: "Mart 2026",
    readTime: "7 dk",
    keywords: ["bioclimatic pergola", "akıllı pergola", "motorlu pergola", "güneş enerjili pergola", "IoT pergola", "outdoor living", "pergola otomasyonu"],
    sections: [
      {
        heading: "Pergola Evrimi: Dünden Bugüne",
        content: `**Geleneksel Pergola:**
Ahşap kirişler, sabit yapı, temel gölgeleme. Dekoratif amaçlı, mevsimsel kullanım.

**Modern Pergola:**
Alüminyum profiller, motorlu lameller, entegre aydınlatma. Dört mevsim kullanım, estetik ve fonksiyonel.

**Bioclimatic Pergola:**
İklim yanıtı veren, sensör destekli, akıllı sistemler. Otomatik lamel kontrolü, yağmur/rüzgar koruması.

**AI Pergola (2026):**
Yapay zeka optimizasyonu, enerji üretimi, bulut bağlantılı. Kullanıcı alışkanlıklarını öğrenen, kendi enerjisini üreten sistemler.`,
      },
      {
        heading: "Bioclimatic Sistemler",
        content: `Bioclimatic pergola, dış ortam koşullarına otomatik uyum sağlayan akıllı bir dış mekan yapısıdır:

- **Hareketli alüminyum lameller:** 0-135 derece rotasyon, hassas güneş kontrolü
- **Entegre yağmur ve rüzgar sensörleri:** Otomatik koruma devreye girer
- **Otomatik sıcaklık ve nem regülasyonu:** Konforlu ortam yaratır
- **Dahili LED aydınlatma sistemi:** Atmosferik ve fonksiyonel aydınlatma

**Avantajlar:**
- Yıl boyu dış mekan kullanımı
- Enerji tasarrufu (iç mekan soğutma ihtiyacını azaltır)
- Yağmur ve rüzgar koruması
- Özelleştirilebilir tasarım
- Düşük bakım gereksinimi`,
      },
      {
        heading: "Akıllı Otomasyon Özellikleri",
        content: `- **Güneş takibi:** Güneş açısına göre lameller otomatik optimize edilir
- **Yağmur koruması:** Yağmur algılandığında lameller anında kapanır
- **Rüzgar güvenliği:** Belirli rüzgar hızında otomatik emniyet pozisyonu
- **Program modu:** Günlük/haftalık zamanlama senaryoları
- **Uzaktan erişim:** Mobil uygulama ile her yerden kontrol
- **Sesli kontrol:** Google Home, Alexa, Siri uyumu
- **Enerji raporu:** Aylık tasarruf analizi ve tüketim takibi`,
      },
      {
        heading: "Güneş Enerjisi Entegrasyonu",
        content: `Güneş paneli entegrasyonlu pergola modelleri ile hem gölgeleme yapın hem de elektrik üretin:

- **Lamel üstüne monte BIPV** (Building Integrated Photovoltaics)
- **20 m² pergola alanı ile yıllık 3.000 kWh enerji üretimi**
- Akü depolama veya şebeke bağlantısı seçeneği
- Kendi kendine yeten sistem (şebeke bağımsız)
- Üretilen enerji ile pergola otomasyonu beslenebilir
- Fazla enerji şebekeye satılabilir (lisans düzenlemelerine bağlı)

**Ekonomik Analiz:**
- Güneş paneli ek maliyeti: ₺25.000-40.000
- Yıllık enerji üretimi değeri: ₺6.000-9.000
- Geri dönüş: 4-6 yıl
- Sistem ömrü: 25+ yıl (paneller)`,
      },
      {
        heading: "Hava Sensörü Sistemleri",
        content: `- **Güneş ışınımı sensörü:** Işık yoğunluğunu ölçer, lamel açısını optimize eder
- **Dış sıcaklık sensörü:** Ortam sıcaklığını izler, konfor parametrelerini ayarlar
- **Rüzgar hızı ve yönü ölçümü:** Şiddetli rüzgarda emniyet pozisyonuna geçer
- **Yağmur dedektörü:** Yağmur başladığında lamelleri kapatır
- **Nem sensörü:** Nem seviyesine göre havalandırma optimizasyonu

Tüm sensör verileri merkez kontrol ünitesinde değerlendirilir ve lamel pozisyonları gerçek zamanlı olarak ayarlanır.`,
      },
      {
        heading: "Mobil Uygulama Kontrolü",
        content: `**Uygulama Özellikleri:**
- Gerçek zamanlı durum izleme
- Manuel lamel kontrolü (0-135 derece)
- Senaryo oluşturma (Sabah, Öğlen, Akşam, Gece)
- Hava durumu entegrasyonu
- Enerji üretim ve tüketim raporları
- Arıza bildirim ve teşhis
- Çoklu pergola yönetimi
- Kullanıcı yetkilendirme

**Platform Desteği:**
- iOS ve Android
- Web arayüzü
- Tablet optimizasyonu`,
      },
      {
        heading: "TOZ Yapı Yeni Nesil Pergolalar",
        content: `TOZ Yapı olarak Somfy motorlu otomasyon sistemleri ve Alumil profilleri kullanarak premium kalitede bioclimatic pergola ve rolling roof sistemleri kuruyoruz.

**Ürün Gamımız:**
- Bioclimatic pergola (motorlu lamel)
- Rolling roof (branda sistemli)
- Cam kapatma sistemleri
- Güneş enerjili pergola
- Özel ölçü ve tasarım pergolalar

**Hizmetlerimiz:**
- Ücretsiz keşif ve proje çizimi
- BIM uyumlu teknik planlama
- 3D görselleştirme
- 10 yıl garanti
- Satış sonrası teknik servis desteği

**İletişim:**
- Telefon: +90 536 773 14 04
- E-posta: merhaba@tozyapi.com.tr
- Web: www.tozyapi.com.tr`,
      },
    ],
    content: `Pergola sistemleri son 10 yılda dramatik bir evrim geçirdi. Basit ahşap yapılardan, bugün AI destekli, kendi enerjisini üreten, hava koşullarına otomatik uyum sağlayan high-tech yaşam alanlarına dönüştü.

Bu makalede, 2026 yılı pergola teknolojilerindeki son yenilikleri, akıllı özellikleri, enerji üretimi seçeneklerini ve TOZ Yapı'nın yeni nesil ürün gamını tanıtıyoruz.

Bioclimatic pergolalar, hareketli alüminyum lamelleri ile güneş, yağmur ve rüzgarı otomatik olarak kontrol eder. IoT sensörleri ve yapay zeka optimizasyonu ile yıl boyu konforlu dış mekan yaşam alanları sunar. Güneş enerjisi entegrasyonu ile kendi elektriğini üretebilen pergolalar, sürdürülebilir yaşamın önemli bir parçası haline gelmiştir.`,
  },
];

export function getFullBlogBySlug(slug: string): BlogPostFull | undefined {
  return blogPostsFull.find((p) => p.slug === slug);
}
