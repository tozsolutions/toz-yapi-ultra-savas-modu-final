const refs = [
  { img: "/images/references/400_yatakli_sincan_egitim_arastirma_hahastanesi.webp", label: "Sincan Eğitim Araştırma Hastanesi" },
  { img: "/images/references/bayburt_devlet_hastanesi.webp", label: "Bayburt Devlet Hastanesi" },
  { img: "/images/references/bio_climatic.webp", label: "Bio Climatic Pergola" },
  { img: "/images/references/brisoley.webp", label: "Brisoley Projesi" },
  { img: "/images/references/bulent_ecevit_universitesi.webp", label: "Bülent Ecevit Üniversitesi" },
  { img: "/images/references/cajun_corner.webp", label: "Cajun Corner" },
  { img: "/images/references/dedeman_hotels_kastamall_avm.webp", label: "Dedeman Hotels & Kastamall AVM" },
  { img: "/images/references/erzincan_sehir_stadyumu.webp", label: "Erzincan Şehir Stadyumu" },
  { img: "/images/references/fiyos_liman.webp", label: "Fiyos Liman" },
  { img: "/images/references/hatay_hassa_devlet_hastanesi.webp", label: "Hatay Hassa Devlet Hastanesi" },
  { img: "/images/references/hirvatistan_residance.webp", label: "Hırvatistan Residance" },
  { img: "/images/references/kocatepe_1917.webp", label: "Kocatepe 1917" },
  { img: "/images/references/montenegro.webp", label: "Montenegro Projesi" },
  { img: "/images/references/mugla_afad.webp", label: "Muğla AFAD" },
  { img: "/images/references/swissotel_valorlu_pergola.webp", label: "Swissôtel Pergola" },
  { img: "/images/references/tse_ankara_merkez_kampusu.webp", label: "TSE Ankara Merkez Kampüsü" },
];

export default function ReferencesSection() {
  return (
    <section id="references" className="toz-section bg-toz-cream">
      <div className="toz-container">
        <div className="text-center mb-16">
          <div>
            <span className="text-[1rem] md:text-[1.08rem] text-primary font-semibold uppercase tracking-widest">
              Projelerimiz
            </span>
            <h2 className="toz-heading mt-3">
              Referanslarımız
            </h2>
            <p className="toz-subheading mx-auto mt-4">
              Tecrübemizle hayata geçirdiğimiz projelerden örnekler.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {refs.map((r, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer product-glow-hover"
            >
              <img
                src={r.img}
                alt={r.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-end p-3">
                <span className="text-primary-foreground text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/50 backdrop-blur-sm rounded-lg px-2 py-1">
                  {r.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
