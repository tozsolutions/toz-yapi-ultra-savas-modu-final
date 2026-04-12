import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import {
  MapPin,
  Calendar,
  ArrowRight,
  Phone,
  Calculator,
  PhoneCall,
  Package,
  Building2,
} from "lucide-react";

const sectorLabels: Record<string, string> = {
  tum: "Tüm Projeler",
  hastane: "Hastane",
  ticari: "Ticari",
  avm: "AVM",
  otel: "Otel",
  villa: "Villa",
};

const sectorIcons: Record<string, typeof Building2> = {
  tum: Building2,
  hastane: Building2,
  ticari: Building2,
  avm: Building2,
  otel: Building2,
  villa: Building2,
};

const productLabels: Record<string, string> = {
  "otomatik-kapilar": "Otomatik Kapılar",
  "panjur-sistemleri": "Panjur Sistemleri",
  "seksiyonel-kapi": "Seksiyonel Kapı",
  "kepenk-sistemleri": "Kepenk Sistemleri",
  "pergola-tente": "Pergola & Tente",
  "zip-perde": "Zip Perde",
  "giyotin-cam-sistemleri": "Giyotin Cam",
  "havuz-kapama": "Havuz Kapama",
};

function ProjectCard({ project }: { project: Project }) {
  const SectorIcon = sectorIcons[project.sector] || Building2;

  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Sector Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1.5 rounded-full text-foreground shadow-sm">
            <SectorIcon className="w-3.5 h-3.5" />
            {sectorLabels[project.sector]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2">{project.title}</h3>
        <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {project.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {project.year}
          </span>
        </div>

        {/* Products */}
        <div className="flex flex-wrap gap-1.5">
          {project.products.slice(0, 3).map((prod, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
            >
              <Package className="w-3 h-3" />
              {productLabels[prod] || prod}
            </span>
          ))}
          {project.products.length > 3 && (
            <span className="text-xs text-primary font-medium px-2 py-1">
              +{project.products.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projeler() {
  const [activeSector, setActiveSector] = useState("tum");

  const filteredProjects =
    activeSector === "tum"
      ? projects
      : projects.filter((p) => p.sector === activeSector);

  const sectors = ["tum", ...Object.keys(sectorLabels).filter((s) => s !== "tum")];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="toz-section bg-gradient-to-b from-primary/5 to-transparent">
        <div className="toz-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">
              Referanslarımız
            </span>
            <h1 className="toz-heading mt-3">
              Tamamlanan <span className="text-gradient-purple">Projelerimiz</span>
            </h1>
            <p className="toz-subheading mx-auto mt-4">
              500'den fazla tamamlanan projemizle hastanelerden otellere, AVM'lerden villalara
              kadar geniş bir yelpazede hizmet veriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="toz-section pt-0">
        <div className="toz-container">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {sectors.map((sector) => {
              const Icon = sectorIcons[sector];
              return (
                <button
                  key={sector}
                  onClick={() => setActiveSector(sector)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeSector === sector
                      ? "bg-primary text-white shadow-md"
                      : "bg-card text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {sectorLabels[sector]}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {filteredProjects.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Building2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Bu sektörde henüz proje bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="toz-section bg-gradient-to-b from-transparent to-primary/5">
        <div className="toz-container">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Projelerimizle Gurur Duyuyoruz</h2>
              <p className="text-white/80 mt-2">Her proje, kalitemizin bir yansımasıdır.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "500+", label: "Tamamlanan Proje" },
                { value: "15+", label: "Hizmet Verilen Şehir" },
                { value: "6", label: "Farklı Sektör" },
                { value: "%98", label: "Müşteri Memnuniyeti" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="toz-section">
        <div className="toz-container">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
            <PhoneCall className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Siz de Projenizi Konuşalım
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Referans projelerimizde kullandığımız kaliteyi sizin projenizde de sunmak için hazırız.
              Ücretsiz keşif ve fiyat teklifi için hemen bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/teklif-hesapla"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-md"
              >
                <Calculator className="w-5 h-5" />
                Teklif Hesapla
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+905367731404"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-base font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-all"
              >
                <Phone className="w-5 h-5" />
                +90 536 773 14 04
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
