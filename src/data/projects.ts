export interface Project {
  title: string;
  slug: string;
  sector: string;
  location: string;
  description: string;
  image: string;
  products: string[];
  year: number;
}

export const projects: Project[] = [
  {
    title: "Sincan Eğitim Araştırma Hastanesi",
    slug: "sincan-egitim-arastirma-hastanesi",
    sector: "hastane",
    location: "Ankara",
    description: "400 yataklı hastane projesi için kapsamlı otomatik kapı ve panjur sistemleri kurulumu.",
    image: "/images/references/400_yatakli_sincan_egitim_arastirma_hahastanesi.webp",
    products: ["otomatik-kapilar", "panjur-sistemleri", "seksiyonel-kapi"],
    year: 2024,
  },
  {
    title: "Bayburt Devlet Hastanesi",
    slug: "bayburt-devlet-hastanesi",
    sector: "hastane",
    location: "Bayburt",
    description: "Devlet hastanesi projesi için fotoselli kapı ve hijyenik panjur sistemleri.",
    image: "/images/references/bayburt_devlet_hastanesi.webp",
    products: ["otomatik-kapilar", "panjur-sistemleri"],
    year: 2023,
  },
  {
    title: "Bülent Ecevit Üniversitesi",
    slug: "bulent-ecevit-universitesi",
    sector: "ticari",
    location: "Zonguldak",
    description: "Üniversite kampüsü için kapsamlı yapı sistemleri ve otomatik kapı çözümleri.",
    image: "/images/references/bulent_ecevit_universitesi.webp",
    products: ["otomatik-kapilar", "kepenk-sistemleri"],
    year: 2023,
  },
  {
    title: "Dedeman Hotels & Kastamall AVM",
    slug: "dedeman-hotels-kastamall",
    sector: "avm",
    location: "Kastamonu",
    description: "Otel ve AVM projesi için premium pergola, otomatik kapı ve kepenk sistemleri.",
    image: "/images/references/dedeman_hotels_kastamall_avm.webp",
    products: ["pergola-tente", "otomatik-kapilar", "kepenk-sistemleri"],
    year: 2024,
  },
  {
    title: "Erzincan Şehir Stadyumu",
    slug: "erzincan-sehir-stadyumu",
    sector: "ticari",
    location: "Erzincan",
    description: "Şehir stadyumu projesi için kapsamlı yapı sistemleri kurulumu.",
    image: "/images/references/erzincan_sehir_stadyumu.webp",
    products: ["kepenk-sistemleri", "otomatik-kapilar"],
    year: 2023,
  },
  {
    title: "Swissôtel Pergola Projesi",
    slug: "swissotel-pergola",
    sector: "otel",
    location: "Ankara",
    description: "Lüks otel projesi için bioklimatik pergola ve zip perde sistemleri.",
    image: "/images/references/swissotel_valorlu_pergola.webp",
    products: ["pergola-tente", "zip-perde"],
    year: 2024,
  },
  {
    title: "Montenegro Villa Projesi",
    slug: "montenegro-villa",
    sector: "villa",
    location: "Karadağ",
    description: "Lüks villa projesi için pergola, giyotin cam ve havuz kapama sistemleri.",
    image: "/images/references/montenegro.webp",
    products: ["pergola-tente", "giyotin-cam-sistemleri", "havuz-kapama"],
    year: 2024,
  },
  {
    title: "TSE Ankara Merkez Kampüsü",
    slug: "tse-ankara-kampus",
    sector: "ticari",
    location: "Ankara",
    description: "TSE kampüsü için kapsamlı yapı sistemleri ve otomasyon çözümleri.",
    image: "/images/references/tse_ankara_merkez_kampusu.webp",
    products: ["otomatik-kapilar", "kepenk-sistemleri", "panjur-sistemleri"],
    year: 2023,
  },
];
