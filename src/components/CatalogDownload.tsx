import { Download, Globe, FileText } from "lucide-react";

const catalogs = [
  { lang: "Türkçe", code: "TR", flag: "🇹🇷", file: "/katalog/toz-katalog-tr.pdf" },
  { lang: "English", code: "EN", flag: "🇬🇧", file: "/katalog/toz-catalog-en.pdf" },
  { lang: "Deutsch", code: "DE", flag: "🇩🇪", file: "/katalog/toz-katalog-de.pdf" },
  { lang: "Français", code: "FR", flag: "🇫🇷", file: "/katalog/toz-catalog-fr.pdf" },
  { lang: "Español", code: "ES", flag: "🇪🇸", file: "/katalog/toz-catalog-es.pdf" },
  { lang: "Português", code: "PT", flag: "🇵🇹", file: "/katalog/toz-catalog-pt.pdf" },
  { lang: "Italiano", code: "IT", flag: "🇮🇹", file: "/katalog/toz-catalog-it.pdf" },
  { lang: "Русский", code: "RU", flag: "🇷🇺", file: "/katalog/toz-catalog-ru.pdf" },
  { lang: "Hrvatski", code: "HR", flag: "🇭🇷", file: "/katalog/toz-catalog-hr.pdf" },
  { lang: "Bosanski", code: "BS", flag: "🇧🇦", file: "/katalog/toz-catalog-bs.pdf" },
  { lang: "Српски", code: "SR", flag: "🇷🇸", file: "/katalog/toz-catalog-sr.pdf" },
  { lang: "עברית", code: "HE", flag: "🇮🇱", file: "/katalog/toz-catalog-he.pdf" },
];

export default function CatalogDownload() {
  return (
    <section id="catalog" className="toz-section bg-toz-cream">
      <div className="toz-container">
        <div className="text-center mb-12">
          <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">
            E-Katalog
          </span>
          <h2 className="toz-heading mt-3">
            Ürün <span className="text-gradient-purple">Kataloğu</span>
          </h2>
          <p className="toz-subheading mx-auto mt-4">
            Tüm ürün gruplarımızı detaylı teknik özellikleriyle inceleyin. 12 farklı dilde PDF katalog indirebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {catalogs.map((cat) => (
            <a
              key={cat.code}
              href={cat.file}
              download
              className="group flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-4xl mb-3">{cat.flag}</span>
              <span className="font-bold text-foreground text-sm mb-1">{cat.lang}</span>
              <span className="text-xs text-muted-foreground mb-3">PDF Katalog</span>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:underline">
                <Download className="w-4 h-4" />
                İndir
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          <FileText className="w-4 h-4 inline mr-1" />
          Toplam 12 dilde katalog mevcuttur
        </div>
      </div>
    </section>
  );
}
