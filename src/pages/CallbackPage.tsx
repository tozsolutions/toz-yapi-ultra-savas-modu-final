import CallbackForm from "@/components/CallbackForm";
import { Phone, Clock, MessageCircle } from "lucide-react";

export default function CallbackPage() {
  return (
    <section className="toz-section bg-toz-cream">
        <div className="toz-container">
          <div className="text-center mb-12">
            <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">
              İletişim
            </span>
            <h2 className="toz-heading mt-3">
              Sizi <span className="text-gradient-purple">Arayalım</span>
            </h2>
            <p className="toz-subheading mx-auto mt-4">
              Formu doldurun, uzman ekibimiz sizi en kısa sürede arasın.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Callback Form */}
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Bilgilerinizi Paylaşın</h3>
              <CallbackForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <Phone className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground text-lg mb-2">Telefon</h3>
                <a href="tel:+905367731404" className="text-primary font-bold text-lg hover:underline">
                  +90 536 773 14 04
                </a>
                <p className="text-sm text-muted-foreground mt-1">Pazartesi-Cuma 10:00-17:00</p>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <MessageCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground text-lg mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/905367731404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  WhatsApp ile Yazın
                </a>
                <p className="text-sm text-muted-foreground mt-1">7/24 mesaj gönderebilirsiniz</p>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground text-lg mb-2">Çalışma Saatleri</h3>
                <p className="text-foreground">Pazartesi - Cuma: 10:00 - 17:00</p>
                <p className="text-muted-foreground text-sm mt-1">Acil durumlar için 7/24 ulaşılabilir</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
