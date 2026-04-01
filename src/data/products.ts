export interface Product {
  slug: string;
  title: string;
  desc: string;
  image: string;
  heroImage?: string;
  features: string[];
  details: string;
}

export const products: Product[] = [
  {
    slug: "panjur-sistemleri",
    title: "Panjur Sistemleri",
    desc: "Dıştan takma, PVC, alüminyum monoblok, gizli ve lento panjur çeşitleri",
    image: "/images/products/panjur.webp",
    heroImage: "/images/products/monoblok_panjur.webp",
    features: ["Dıştan Takma", "Monoblok", "Gizli Kutulu", "Lento"],
    details: "Toz Yapı olarak sunduğumuz panjur sistemleri; dıştan takma, PVC, alüminyum monoblok, gizli kutulu ve lento panjur çeşitlerinden oluşmaktadır. Isı ve ses yalıtımı sağlayan panjurlarımız, estetik görünüm ve güvenlik sunar. Somfy motorlu otomasyon seçenekleriyle akıllı ev entegrasyonuna uygundur.",
  },
  {
    slug: "kepenk-sistemleri",
    title: "Kepenk Sistemleri",
    desc: "Şeffaf, kayar katlanır, çelik-poliüretan ve alüminyum ekstrüzyon kepenkler",
    image: "/images/products/seffaf_kepenk.webp",
    heroImage: "/images/products/hero_kepenk_transparent_seffaf_seffaf_kepenk_shutter.webp",
    features: ["Şeffaf", "Kayar Katlanır", "Balistik", "Alüminyum"],
    details: "Kepenk sistemlerimiz ticari ve endüstriyel alanlar için maksimum güvenlik sağlar. Şeffaf polikarbon, kayar katlanır, çelik poliüretan dolgulu ve alüminyum ekstrüzyon modelleri ile her projeye uygun çözüm sunarız. Motorlu ve manuel seçenekler mevcuttur.",
  },
  {
    slug: "pergola-tente",
    title: "Pergola & Rolling Roof",
    desc: "Rolling roof, bioklimatik pergola, cam tavan ve tente sistemleri",
    image: "/images/products/bio_climatic.webp",
    heroImage: "/images/products/hero_pergole.webp",
    features: ["Rolling Roof", "BioClimatic", "Cam Tavan", "Tente"],
    details: "Bioklimatik pergola ve rolling roof sistemlerimiz, dış mekan yaşam alanlarınızı dört mevsim kullanılabilir hale getirir. Motorlu lamel sistemleri ile yağmur, rüzgar ve güneş kontrolü sağlar. IoT entegrasyonu ile akıllı telefon ve sesli asistan kontrolü sunar.",
  },
  {
    slug: "otomatik-kapilar",
    title: "Otomatik Kapılar",
    desc: "Fotoselli, döner, hermetik, akustik ve yangın kapıları",
    image: "/images/products/otomatik_kapi.webp",
    heroImage: "/images/products/fotoselkapi.webp",
    features: ["Fotoselli", "Döner", "Hermetik", "Yangın"],
    details: "Otomatik kapı sistemlerimiz EN 16005 güvenlik standartlarına uygundur. Fotoselli kayar kapılar, döner kapılar, hermetik hastane kapıları, akustik kapılar ve yangın kapıları ile her sektöre özel çözüm sunarız. Record ve Dorma marka mekanizmalar kullanılmaktadır.",
  },
  {
    slug: "giyotin-cam-sistemleri",
    title: "Giyotin & Cam Sistemleri",
    desc: "Sürme cam, rüzgar kırıcı ve zip perde sistemleri",
    image: "/images/products/giyotin.webp",
    heroImage: "/images/products/surme_aluminium_glass.webp",
    features: ["Giyotin Cam", "Sürme", "Zip Perde", "Rüzgar Kırıcı"],
    details: "Giyotin cam ve sürme cam sistemlerimiz, balkon ve teras alanlarını dört mevsim kullanılabilir yaşam alanlarına dönüştürür. Isı yalıtımlı ve ısı yalıtımsız seçeneklerimiz mevcuttur. Zip perde ve rüzgar kırıcı sistemleri ile tam koruma sağlanır.",
  },
  {
    slug: "akilli-sistemler",
    title: "Akıllı Cam Uygulamaları",
    desc: "Elektrokromik cam, otomasyon, IoT entegrasyonu ve akıllı ev çözümleri",
    image: "/images/products/akilli_cam.webp",
    heroImage: "/images/products/hero_akillicam.webp",
    features: ["Elektrokromik", "IoT", "Otomasyon", "Akıllı Ev"],
    details: "Akıllı cam teknolojilerimiz ile binaların enerji verimliliğini artırın. Elektrokromik camlar güneş ışığına göre otomatik koyulaşır. IoT sensörleri ve otomasyon entegrasyonu ile uzaktan kontrol imkanı sunar.",
  },
  {
    slug: "kapi-pencere-dograma",
    title: "Kapı, Pencere & Doğrama",
    desc: "Alüminyum, PVC ve ahşap kapı, pencere ve doğrama sistemleri",
    image: "/images/products/aluminyum_sistemler.webp",
    heroImage: "/images/products/urunlerimiz_aluminyum.webp",
    features: ["Alüminyum", "PVC", "Ahşap", "Cephe"],
    details: "Alüminyum, PVC ve ahşap doğrama sistemlerimiz ile pencere, kapı ve cephe çözümleri sunarız. Isı yalıtımlı profil sistemleri, enerji verimliliğini maksimize eder. Alumil marka profil sistemleri kullanılmaktadır.",
  },
  {
    slug: "bahce-cit-sistemleri",
    title: "Bahçe & Çit Sistemleri",
    desc: "Bahçe giriş otomasyonu, çit ve korkuluk sistemleri",
    image: "/images/products/bahce_giris_otomasyon.webp",
    features: ["Bahçe Giriş", "Çit", "Korkuluk", "Otomasyon"],
    details: "Bahçe ve çit sistemlerimiz, villa ve site projelerinde güvenlik ve estetik bir arada sunar. Motorlu sürgülü ve kanatlı bahçe kapıları, panel çit sistemleri ve cam korkuluklar ile tamamlayıcı çözümler sağlarız.",
  },
  {
    slug: "havuz-kapama",
    title: "Havuz Kapama",
    desc: "Havuz üstü kapama ve örtü sistemleri",
    image: "/images/products/havuz_kapama.webp",
    heroImage: "/images/products/havuzkapama.webp",
    features: ["Teleskopik", "Sabit", "Motorlu", "Manuel"],
    details: "Havuz kapama sistemlerimiz, havuzunuzu dört mevsim güvenli ve temiz tutar. Teleskopik ve sabit modellerde, polikarbon veya cam panelli seçenekler sunulmaktadır. Motorlu açılır kapanır modeller ile kolay kullanım sağlanır.",
  },
  {
    slug: "kis-bahcesi",
    title: "Kış Bahçesi",
    desc: "Cam kış bahçesi ve wintergarden çözümleri",
    image: "/images/products/wintergarden.webp",
    heroImage: "/images/products/kis_bahcesi.webp",
    features: ["Cam Tavan", "Isı Yalıtım", "Motorlu", "Modüler"],
    details: "Kış bahçesi sistemlerimiz, evinizin yaşam alanını genişletir. Isı yalıtımlı alüminyum profil ve çift cam ile dört mevsim konforlu bir ortam oluşturulur. Motorlu havalandırma ve güneşlik entegrasyonu mevcuttur.",
  },
  {
    slug: "sundurma-carport",
    title: "Sundurma & Carport",
    desc: "Araç parkı üstü sundurma ve gölgeleme sistemleri",
    image: "/images/products/urunlerimiz_sundurma.webp",
    features: ["Carport", "Sundurma", "Gölgeleme", "Modüler"],
    details: "Sundurma ve carport sistemlerimiz, araçlarınızı ve dış mekan alanlarınızı güneş, yağmur ve kardan korur. Alüminyum ve çelik konstrüksiyon seçenekleri ile dayanıklı ve estetik çözümler sunarız.",
  },
  {
    slug: "bariyer-turnike",
    title: "Bariyer & Turnike",
    desc: "Otopark bariyerleri, turnike ve geçiş kontrol sistemleri",
    image: "/images/products/bariyer_turnike.webp",
    heroImage: "/images/products/hero_bariyer_mercedes_luxury_bariyer.webp",
    features: ["Bariyer", "Turnike", "Geçiş Kontrol", "RFID"],
    details: "Bariyer ve turnike sistemlerimiz ile otopark, bina ve tesis girişlerinde güvenli geçiş kontrolü sağlanır. RFID kart, plaka tanıma ve biyometrik erişim seçenekleri mevcuttur.",
  },
  {
    slug: "sineklik-sistemleri",
    title: "Sineklik Sistemleri",
    desc: "Yerli ve ithal sineklik çözümleri",
    image: "/images/products/hero_sineklik.webp",
    features: ["Plise", "Sürgülü", "Menteşeli", "Stor"],
    details: "Sineklik sistemlerimiz, pencere ve kapılarınıza uyumlu olarak böcek girişini engeller. Plise, sürgülü, menteşeli ve stor sineklik modelleri ile her türlü açıklık için çözüm sunarız.",
  },
  {
    slug: "brisoley-dis-cephe",
    title: "Brisoley - Dış Cephe Jaluzisi",
    desc: "Güneş kırıcı dış cephe jaluzi sistemleri",
    image: "/images/products/brisoley.webp",
    heroImage: "/images/products/hero_brisoley.webp",
    features: ["Motorlu", "Sabit", "Hareketli", "Alüminyum"],
    details: "Brisoley ve dış cephe jaluzisi sistemlerimiz, binalarda güneş kontrolü ve enerji verimliliği sağlar. Motorlu ve sabit lamel seçenekleri ile modern mimariye uyum sağlar. Enerji maliyetlerini %40'a kadar düşürür.",
  },
  {
    slug: "zip-perde-ruzgar-kirici",
    title: "Zip Perde & Rüzgar Kırıcı",
    desc: "Zip perde, rüzgar kırıcı ve sürme sistemleri",
    image: "/images/products/zip_perde.webp",
    heroImage: "/images/products/windbreaker.webp",
    features: ["Zip Perde", "Rüzgar Kırıcı", "Motorlu", "Manuel"],
    details: "Zip perde ve rüzgar kırıcı sistemlerimiz, açık alanları rüzgar, yağmur ve güneşten korur. Motorlu ve manuel seçenekler ile restoran, kafe ve teras alanları için ideal çözümler sunarız.",
  },
  {
    slug: "isitma-sogutma",
    title: "Isıtma & Soğutma",
    desc: "Dış mekan ısıtma ve soğutma çözümleri",
    image: "/images/products/windbreaker.webp",
    features: ["Infrared", "Elektrikli", "Gazlı", "Sisleme"],
    details: "Dış mekan ısıtma ve soğutma sistemlerimiz, teras ve bahçe alanlarında yıl boyu konfor sağlar. Infrared ısıtıcılar, sisleme soğutma sistemleri ile açık alan işletmeleri için ideal çözümlerdir.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
