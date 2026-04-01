import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Panjur sistemleri için garanti süresi nedir?",
    a: "Tüm panjur sistemlerimiz için 5 yıl, paslanmaz menteşeler için 20 yıl garanti sunuyoruz. Garanti kapsamında ücretsiz bakım ve onarım hizmeti verilmektedir.",
  },
  {
    q: "Otomatik kapı sistemleri hangi teknolojileri kullanır?",
    a: "Fotoselli sensörler, akıllı kontrol sistemleri, IoT entegrasyonu ve Avrupa mühendislik standartlarına uygun en son teknoloji ürünlerini kullanıyoruz.",
  },
  {
    q: "Proje danışmanlığı hizmeti veriyor musunuz?",
    a: "Evet, deneyimli mimar ve mühendis kadromuzla ücretsiz proje danışmanlığı hizmeti sunuyoruz. Keşif, proje ve montaj dahil komple çözüm sağlıyoruz.",
  },
  {
    q: "Enerji tasarrufu sağlayan ürünleriniz var mı?",
    a: "6063T6 alüminyum termal kırılımlı profillerimiz UW 0.9 W/m²K süper yalıtım sağlar. Elektrokromik cam ve bioklimatik pergola çözümlerimiz %25'e varan enerji tasarrufu sunar.",
  },
  {
    q: "Hizmet bölgeniz neresidir?",
    a: "Ankara merkezli olarak Türkiye genelinde hizmet vermekteyiz. Büyük projeler için yurtdışı projelendirme desteği de sağlıyoruz.",
  },
  {
    q: "BIM dosyaları ve teknik dokümanlarınız var mı?",
    a: "Evet, tüm ürünlerimiz için Revit (.rfa), IFC, DWG ve STEP formatlarında BIM dosyaları ile teknik datasheetler mevcuttur.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="toz-section">
      <div className="toz-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              S.S.S
            </span>
            <h2 className="toz-heading text-foreground mt-3">
              Sıkça Sorulan <span className="text-gradient-purple">Sorular</span>
            </h2>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5">
                  <span className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-8">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}