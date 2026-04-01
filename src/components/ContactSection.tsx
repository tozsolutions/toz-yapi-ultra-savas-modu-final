import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Merhaba, ${formState.name || "isim belirtilmedi"}. Bilgi almak istiyorum. ${formState.message || ""}`
    );
    window.open(`https://wa.me/905367731404?text=${msg}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
  };

  return (
    <section id="contact" className="relative toz-section">
      <div className="relative toz-container pt-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              İletişim
            </span>
            <h2 className="toz-heading text-foreground mt-3">
              Bizimle <span className="text-gradient-purple">İletişime Geçin</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-display text-foreground mb-6">
                İletişim Bilgileri
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: "Adres",
                    text: "Timko İş Merkezi\nÇamlıca Mahallesi Anadolu Bulvarı\nĞ Blok, İdil Sokak V8, Kat 1\n06200 Yenimahalle/Ankara",
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    title: "Telefon",
                    text: "+90 536 773 14 04",
                    href: "tel:+905367731404",
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    title: "E-posta",
                    text: "merhaba@tozyapi.com.tr",
                    href: "mailto:merhaba@tozyapi.com.tr",
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: "Çalışma Saatleri",
                    text: "Pzt-Cuma: 10:00 - 17:00\nC.tesi-Pazar: Kapalı",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps - Timko İş Merkezi, Yenimahalle, Ankara */}
            <a
              href="https://www.google.com/maps/search/Timko+%C4%B0%C5%9F+Merkezi+%C3%87aml%C4%B1ca+Mahallesi+Anadolu+Bulvar%C4%B1+Yenimahalle+Ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-border h-52 hover:ring-2 hover:ring-primary/30 transition-all"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.8!2d32.7385!3d39.9334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f0fb42e3c71%3A0x2c9b7d5e3e8b6a0!2sTimko%20%C4%B0%C5%9F%20Merkezi!5e0!3m2!1str!2str!4v1711234567890"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Toz Yapı Konum - Timko İş Merkezi, Yenimahalle/Ankara"
              />
            </a>
            <p className="text-xs text-muted-foreground text-center -mt-4">
              Haritaya tıklayarak Google Maps'te açabilirsiniz
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold font-display text-foreground mb-6">
                Hızlı İletişim Formu
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Adınız Soyadınız
                    </label>
                    <Input
                      placeholder="Ad Soyad"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Telefon
                    </label>
                    <Input
                      placeholder="+90 5XX XXX XX XX"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    E-posta
                  </label>
                  <Input
                    type="email"
                    placeholder="ornek@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Mesajınız
                  </label>
                  <Textarea
                    placeholder="Projeniz hakkında bilgi verin..."
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-toz-purple-light">
                    <Send className="w-4 h-4 mr-2" />
                    WhatsApp ile Gönder
                  </Button>
                  <a href="tel:+905367731404" className="flex-1">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Hemen Arayın
                    </Button>
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
