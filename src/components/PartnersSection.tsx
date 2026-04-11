const partnerLogos = [
  { src: "/images/logos/alumil.webp", name: "Alumil", size: "normal" },
  { src: "/images/logos/nice.webp", name: "Nice", size: "normal" },
  { src: "/images/logos/somfy.webp", name: "Somfy", size: "normal" },
  { src: "/images/logos/powerate.webp", name: "Powerate", size: "normal" },
  { src: "/images/logos/akseki.webp", name: "Akseki Yapı", size: "large" },
  { src: "/images/logos/albert.webp", name: "Albert Genau", size: "normal" },
  { src: "/images/logos/dorma.webp", name: "Dorma", size: "normal" },
  { src: "/images/logos/desi_panjur.webp", name: "Desi Panjur", size: "normal" },
  { src: "/images/logos/str.webp", name: "STR Grup", size: "normal" },
  { src: "/images/logos/record_v3.webp", name: "Record", size: "large" },
  { src: "/images/logos/ferrini.webp", name: "Ferrini", size: "normal" },
  { src: "/images/logos/reynaards.webp", name: "Reynaers Aluminium", size: "normal" },
  { src: "/images/logos/cuppon_v3.webp", name: "Cuppon", size: "large" },
  { src: "/images/logos/alusel.webp", name: "Alusel", size: "normal" },
  { src: "/images/logos/gtr_v3.webp", name: "GTR", size: "normal" },
  { src: "/images/logos/gungor.webp", name: "Güngör Alüminyum", size: "xlarge" },
  { src: "/images/logos/kenan_metal.webp", name: "Kenan Metal", size: "normal" },
  { src: "/images/logos/dayson.webp", name: "Dayson", size: "normal" },
  { src: "/images/logos/designer.webp", name: "Designer", size: "normal" },
  { src: "/images/logos/mosel_v3.webp", name: "Mosel", size: "normal" },
  { src: "/images/logos/becker_v3.webp", name: "Becker", size: "normal" },
  { src: "/images/logos/schueco_v3.webp", name: "Schüco", size: "normal" },
  { src: "/images/logos/kontal_v3.webp", name: "Kontal Elektronik", size: "normal" },
  { src: "/images/logos/kommerling_v3.webp", name: "Kömmerling", size: "normal" },
  { src: "/images/logos/assaabloy_v3.webp", name: "ASSA ABLOY", size: "normal" },
  { src: "/images/logos/asas_v3.webp", name: "ASAŞ", size: "normal" },
];

export default function PartnersSection() {
  const doubled = [...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="toz-section bg-toz-cream overflow-hidden">
      <div className="toz-container">
        <div className="text-center mb-16">
          <div>
            <span className="text-[1rem] md:text-[1.08rem] text-primary font-semibold uppercase tracking-widest">
              İş Ortaklarımız
            </span>
            <h2 className="toz-heading mt-3">
              Güvenilir <span className="text-gradient-purple">Çözüm Ortakları</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Scrolling carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-toz-cream to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-toz-cream to-transparent z-10" />
        
        <div className="flex w-max animate-scroll-partners will-change-transform">
          {doubled.map((logo, i) => {
            const sizeClass = logo.size === "large" ? "scale-108" : logo.size === "xlarge" ? "scale-110" : "scale-100";
            return (
              <div
                key={i}
                className={`flex-shrink-0 mx-4 w-48 h-36 bg-card rounded-2xl border border-border flex items-center justify-center p-6 group hover:border-primary/30 transition-all duration-300 shadow-sm ${sizeClass}`}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain grayscale-[20%] group-hover:grayscale-0 transition-all duration-300 opacity-95 group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                  width="120"
                  height="90"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
