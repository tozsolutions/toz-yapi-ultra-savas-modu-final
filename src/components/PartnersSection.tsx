import { motion } from "framer-motion";

const partnerLogos = [
  { src: "/images/logos/alumil.webp", name: "Alumil" },
  { src: "/images/logos/nice.webp", name: "Nice" },
  { src: "/images/logos/somfy.webp", name: "Somfy" },
  { src: "/images/logos/powerate.webp", name: "Powerate" },
  { src: "/images/logos/akseki.webp", name: "Akseki Yapı" },
  { src: "/images/logos/albert.webp", name: "Albert Genau" },
  { src: "/images/logos/dorma.webp", name: "Dorma" },
  { src: "/images/logos/desi_panjur.webp", name: "Desi Panjur" },
  { src: "/images/logos/str.webp", name: "STR Grup" },
  { src: "/images/logos/record_v3.webp", name: "Record" },
  { src: "/images/logos/ferrini.webp", name: "Ferrini" },
  { src: "/images/logos/reynaards.webp", name: "Reynaers Aluminium" },
  { src: "/images/logos/cuppon_v3.webp", name: "Cuppon" },
  { src: "/images/logos/alusel.webp", name: "Alusel" },
  { src: "/images/logos/gtr_v3.webp", name: "GTR" },
  { src: "/images/logos/gungor.webp", name: "Güngör Alüminyum" },
  { src: "/images/logos/kenan_metal.webp", name: "Kenan Metal" },
  { src: "/images/logos/dayson.webp", name: "Dayson" },
  { src: "/images/logos/designer.webp", name: "Designer" },
  { src: "/images/logos/mosel_v3.webp", name: "Mosel" },
  { src: "/images/logos/becker_v3.webp", name: "Becker" },
  { src: "/images/logos/schueco_v3.webp", name: "Schüco" },
  { src: "/images/logos/kontal_v3.webp", name: "Kontal Elektronik" },
  { src: "/images/logos/kommerling_v3.webp", name: "Kömmerling" },
  { src: "/images/logos/assaabloy_v3.webp", name: "ASSA ABLOY" },
  { src: "/images/logos/asas_v3.webp", name: "ASAŞ" },
];

export default function PartnersSection() {
  const doubled = [...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="toz-section bg-toz-cream overflow-hidden">
      <div className="toz-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              İş Ortaklarımız
            </span>
            <h2 className="toz-heading text-foreground mt-3">
              Güvenilir <span className="text-gradient-purple">Çözüm Ortakları</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Scrolling carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-toz-cream to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-toz-cream to-transparent z-10" />
        
        <div className="flex w-max animate-scroll-partners will-change-transform">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 w-48 h-36 bg-card rounded-2xl border border-border flex items-center justify-center p-6 group hover:border-primary/30 transition-all duration-300 shadow-sm"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain grayscale-[20%] group-hover:grayscale-0 transition-all duration-300 opacity-95 group-hover:opacity-100"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
