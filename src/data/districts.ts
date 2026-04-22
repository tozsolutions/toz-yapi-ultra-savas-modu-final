export interface District {
  name: string;
  slug: string;
  city: string;
  description: string;
}

export const districts: District[] = [
  // Ankara İlçeleri
  { name: "Çankaya", slug: "cankaya", city: "ankara", description: "Ankara'nın merkez ilçesi, plaza ve ofis projeleri için önemli bölge." },
  { name: "Yenimahalle", slug: "yenimahalle", city: "ankara", description: "Toz Yapı'nın merkez lokasyonu, OSTIM'e yakın sanayi bölgesi." },
  { name: "Etimesgut", slug: "etimesgut", city: "ankara", description: "Hızla büyüyen konut ve ticari proje bölgesi." },
  { name: "Sincan", slug: "sincan", city: "ankara", description: "Sanayi ve fabrika projeleri için önemli bölge." },
  { name: "Mamak", slug: "mamak", city: "ankara", description: "Konut ağırlıklı proje bölgesi." },
  { name: "Keçiören", slug: "kecioren", city: "ankara", description: "Yoğun nüfuslu konut bölgesi." },
  { name: "Altındağ", slug: "altindag", city: "ankara", description: "Tarihi doku ve ticari proje bölgesi." },
  { name: "Pursaklar", slug: "pursaklar", city: "ankara", description: "Yeni gelişen konut ve ticari bölge." },
  { name: "Gölbaşı", slug: "golbasi", city: "ankara", description: "Villa ve lüks konut projeleri bölgesi." },
  { name: "Beypazarı", slug: "beypazari", city: "ankara", description: "Tarihi doku restorasyon projeleri." },
  // İstanbul İlçeleri
  { name: "Kadıköy", slug: "kadikoy", city: "istanbul", description: "Anadolu yakası ticaret merkezi." },
  { name: "Beşiktaş", slug: "besiktas", city: "istanbul", description: "Premium ticari ve ofis projeleri." },
  { name: "Beylikdüzü", slug: "beylikduzu", city: "istanbul", description: "Hızla büyüyen konut ve AVM bölgesi." },
  { name: "Esenyurt", slug: "esenyurt", city: "istanbul", description: "Büyük konut projeleri bölgesi." },
];
