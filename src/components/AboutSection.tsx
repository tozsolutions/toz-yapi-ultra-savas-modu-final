import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

export default function AboutSection() {
  const items = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Amacımız",
      desc: "İnşaat sektöründe sürdürülebilir, yenilikçi ve kaliteli çözümler sunarak müşteri memnuniyetini en üst düzeyde tutmak.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Vizyonumuz",
      desc: "Her projede mükemmeliyet hedefleyerek sektörde öncü konumumuzu güçlendirmek ve uluslararası arenada söz sahibi olmak.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Neden Biz?",
      desc: "Uzman ekibimiz, yurtdışı deneyimleriyle modern teknoloji ve kaliteyi harmanlayarak Avrupa mühendislik standartlarında hizmet sunuyor.",
    },
  ];

  return (
    <section id="about" className="toz-section bg-toz-cream">
      <div className="toz-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[1rem] md:text-[1.08rem] text-primary font-semibold uppercase tracking-widest">
              Hakkımızda
            </span>
            <h2 className="toz-heading mt-3">
              Biz Kimiz?
            </h2>
            <p className="toz-subheading mx-auto mt-4">
              2008 yılından bu yana yapı teknolojileri sektöründe kaliteli ürünlerimiz ve
              yenilikçi çözümlerimizle müşterilerimizin yanındayız.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm toz-card-hover border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Advantages bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-toz-gradient rounded-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { v: "250 km/s", l: "Kasırga Dayanımı" },
            { v: "%25", l: "Enerji Tasarrufu" },
            { v: "UW 0.9", l: "Süper Yalıtım W/m²K" },
            { v: "CE", l: "Avrupa Sertifikalı" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{s.v}</div>
              <div className="text-sm text-primary-foreground/70 mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}