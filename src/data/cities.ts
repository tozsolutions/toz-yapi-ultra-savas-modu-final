export interface City {
  name: string;
  slug: string;
  region: string;
  population: string;
  description: string;
}

export const cities: City[] = [
  {
    name: "Ankara",
    slug: "ankara",
    region: "İç Anadolu",
    population: "5.803.482",
    description: "Türkiye'nin başkenti ve ikinci büyük şehri. Toz Yapı'nın merkez lokasyonu.",
  },
  {
    name: "İstanbul",
    slug: "istanbul",
    region: "Marmara",
    population: "15.840.900",
    description: "Türkiye'nin en büyük şehri ve ticaret merkezi.",
  },
  {
    name: "İzmir",
    slug: "izmir",
    region: "Ege",
    population: "4.425.789",
    description: "Ege bölgesinin en büyük şehri, turizm ve ticaret merkezi.",
  },
  {
    name: "Antalya",
    slug: "antalya",
    region: "Akdeniz",
    population: "2.687.487",
    description: "Turizm başkenti, otel ve tatil köyü projeleri için önemli pazar.",
  },
  {
    name: "Bursa",
    slug: "bursa",
    region: "Marmara",
    population: "3.194.720",
    description: "Sanayi şehri, fabrika ve ticari projeler için önemli pazar.",
  },
];
