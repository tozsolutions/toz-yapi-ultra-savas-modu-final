export interface Sector {
  name: string;
  slug: string;
  title: string;
  description: string;
  products: string[];
  icon: string;
}

export const sectors: Sector[] = [
  {
    name: "konut",
    slug: "konut",
    title: "Konut Çözümleri",
    description: "Villa, apartman ve site projeleri için kapsamlı yapı sistemleri. Panjur, kepenk, pergola ve otomatik kapı çözümleri ile yaşam alanlarınızı güvence altına alın.",
    products: ["panjur-sistemleri", "pergola-tente", "otomatik-kapilar", "giyotin-cam-sistemleri", "kis-bahcesi", "havuz-kapama"],
    icon: "home",
  },
  {
    name: "ticari",
    slug: "ticari",
    title: "Ticari Çözümler",
    description: "Ofis, plaza ve iş merkezleri için profesyonel yapı sistemleri. Fotoselli kapı, panjur, giyotin cam ve bariyer sistemleri ile kurumsal projelerinizi hayata geçirin.",
    products: ["otomatik-kapilar", "kepenk-sistemleri", "giyotin-cam-sistemleri", "bariyer-turnike", "zip-perde"],
    icon: "building",
  },
  {
    name: "restoran-kafe",
    slug: "restoran-kafe",
    title: "Restoran & Cafe Çözümleri",
    description: "Cafe, restoran ve yemek mekanları için teras kapama, giyotin cam, pergola ve tente sistemleri. Dış mekan oturma alanlarınızı dört mevsim kullanılabilir hale getirin.",
    products: ["giyotin-cam-sistemleri", "pergola-tente", "zip-perde", "cam-tavan"],
    icon: "coffee",
  },
  {
    name: "otel",
    slug: "otel",
    title: "Otel & Resort Çözümleri",
    description: "Otel, resort ve tatil köyleri için premium yapı sistemleri. Bioklimatik pergola, kış bahçesi, havuz kapama ve rüzgar kırıcı sistemleri ile misafirlerinize konforlu alanlar sunun.",
    products: ["pergola-tente", "kis-bahcesi", "havuz-kapama", "ruzgar-kirici", "giyotin-cam-sistemleri"],
    icon: "hotel",
  },
  {
    name: "avm",
    slug: "avm",
    title: "AVM & Plaza Çözümleri",
    description: "Alışveriş merkezi ve plaza projeleri için endüstriyel kapı, fotoselli kapı, bariyer ve panjur sistemleri. Yüksek trafikli alanlar için dayanıklı ve güvenli çözümler.",
    products: ["otomatik-kapilar", "kepenk-sistemleri", "bariyer-turnike", "seksiyonel-kapi", "endustriyel-kapi"],
    icon: "shopping-bag",
  },
  {
    name: "fabrika",
    slug: "fabrika",
    title: "Fabrika & Depo Çözümleri",
    description: "Fabrika, depo ve lojistik merkezleri için endüstriyel kapı, seksiyonel kapı, hızlı PVC kapı ve yüklenme rampası sistemleri. Ağır hizmet koşulları için tasarlanmış profesyonel çözümler.",
    products: ["endustriyel-kapi", "seksiyonel-kapi", "hizli-pvc-kapi", "yukleme-rampasi", "kepenk-sistemleri"],
    icon: "factory",
  },
  {
    name: "villa",
    slug: "villa",
    title: "Villa & Lüks Konut Çözümleri",
    description: "Villa ve lüks konut projeleri için premium yapı sistemleri. Bioklimatik pergola, havuz kapama, kış bahçesi ve akıllı panjur sistemleri ile yaşam kalitenizi artırın.",
    products: ["pergola-tente", "havuz-kapama", "kis-bahcesi", "panjur-sistemleri", "giyotin-cam-sistemleri"],
    icon: "circle-help",
  },
  {
    name: "hastane",
    slug: "hastane",
    title: "Hastane & Sağlık Çözümleri",
    description: "Hastane ve sağlık tesisleri için hermetik kapı, fotoselli kapı ve hijyenik panjur sistemleri. Sağlık standartlarına uygun, güvenli ve konforlu çözümler.",
    products: ["otomatik-kapilar", "seksiyonel-kapi", "panjur-sistemleri", "kepenk-sistemleri"],
    icon: "heart-pulse",
  },
];
