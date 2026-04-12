export interface Brand {
  name: string;
  slug: string;
  description: string;
  logo: string;
  website?: string;
  category: string;
}

export const brands: Brand[] = [
  {
    name: "Somfy",
    slug: "somfy",
    description: "Dünya lideri motor ve otomasyon sistemleri üreticisi. 50'den fazla ülkede faaliyet gösteren Fransız markası.",
    logo: "/images/logos/somfy.webp",
    website: "https://www.somfy.com.tr",
    category: "Motor & Otomasyon",
  },
  {
    name: "Becker",
    slug: "becker",
    description: "Alman mühendislik kalitesiyle kepenk ve panjur motorları üreticisi. Yüksek dayanıklılık ve sessiz çalışma.",
    logo: "/images/logos/becker_v3.webp",
    website: "https://www.becker-antriebe.com",
    category: "Motor & Otomasyon",
  },
  {
    name: "Alumil",
    slug: "alumil",
    description: "Yunanistan merkezli alüminyum profil ve sistem üreticisi. Avrupa standartlarında yapı sistemleri.",
    logo: "/images/logos/alumil.webp",
    website: "https://www.alumil.com",
    category: "Alüminyum Profil",
  },
  {
    name: "Reynaers Aluminium",
    slug: "reynaers",
    description: "Belçika merkezli premium alüminyum profil sistemleri üreticisi. Mimari mükemmellik.",
    logo: "/images/logos/reynaards.webp",
    website: "https://www.reynaers.com",
    category: "Alüminyum Profil",
  },
  {
    name: "Schüco",
    slug: "schueco",
    description: "Alman prestijli pencere, kapı ve cephe sistemleri üreticisi. Enerji verimliliği lideri.",
    logo: "/images/logos/schueco_v3.webp",
    website: "https://www.schueco.com",
    category: "Alüminyum Profil",
  },
  {
    name: "Dormakaba",
    slug: "dormakaba",
    description: "İsviçre merkezli güvenlik ve erişim çözümleri üreticisi. Otomatik kapı sistemlerinde dünya lideri.",
    logo: "/images/logos/dorma.webp",
    website: "https://www.dormakaba.com",
    category: "Otomatik Kapı",
  },
  {
    name: "Record",
    slug: "record",
    description: "İtalyan otomatik kapı ve erişim sistemleri üreticisi. İnovatif çözümler.",
    logo: "/images/logos/record_v3.webp",
    category: "Otomatik Kapı",
  },
  {
    name: "ASSA ABLOY",
    slug: "assaabloy",
    description: "Dünya'nın en büyük kilit ve güvenlik çözümleri üreticisi. İsveç merkezli global marka.",
    logo: "/images/logos/assaabloy_v3.webp",
    website: "https://www.assaabloy.com",
    category: "Güvenlik",
  },
  {
    name: "Nice",
    slug: "nice",
    description: "İtalyan otomasyon sistemleri üreticisi. Garaj kapısı, bariyer ve kepenk motorları.",
    logo: "/images/logos/nice.webp",
    website: "https://www.niceforyou.com",
    category: "Motor & Otomasyon",
  },
  {
    name: "Powerate",
    slug: "powerate",
    description: "Endüstriyel kapı motorları ve otomasyon sistemleri üreticisi.",
    logo: "/images/logos/powerate.webp",
    category: "Motor & Otomasyon",
  },
  {
    name: "Albert Genau",
    slug: "albert-genau",
    description: "Alman kalitesinde cam balkon ve giyotin cam sistemleri üreticisi. Red Dot Design Award sahibi.",
    logo: "/images/logos/albert.webp",
    website: "https://www.albertgenau.com",
    category: "Cam Sistemleri",
  },
  {
    name: "Güngör Alüminyum",
    slug: "gungor",
    description: "Türk alüminyum profil ve sistem üreticisi. Yerli üretim, yüksek kalite.",
    logo: "/images/logos/gungor.webp",
    category: "Alüminyum Profil",
  },
  {
    name: "Desi Panjur",
    slug: "desi-panjur",
    description: "Türkiye'nin önde gelen panjur üreticilerinden. Geniş ürün yelpazesi.",
    logo: "/images/logos/desi_panjur.webp",
    category: "Panjur & Kepenk",
  },
  {
    name: "Akseki Yapı",
    slug: "akseki",
    description: "Türkiye merkezli yapı sistemleri üreticisi. Kaliteli ve uygun fiyatlı çözümler.",
    logo: "/images/logos/akseki.webp",
    category: "Yapı Sistemleri",
  },
];
