import CatalogDownload from "@/components/CatalogDownload";

export default function Katalog() {
  return (
    <section className="toz-section bg-toz-cream">
      <div className="toz-container">
        <div className="text-center mb-12">
          <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">
            E-Katalog
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Ürün <span className="text-gradient-purple">Kataloğu</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Toz Yapı Teknolojileri ürün gruplarını detaylı teknik özellikleriyle inceleyin. 12 farklı dilde PDF katalog indirebilirsiniz.
          </p>
        </div>
        <CatalogDownload />
      </div>
    </section>
  );
}
