import { Phone, Wrench, Settings, DoorOpen, Home, Eye, AlertTriangle, Clock, Shield, MapPin } from "lucide-react";

const services = [
  { icon: Wrench, title: "Panjur Arızaları", desc: "Motor, palet, kumanda arızaları ve genel bakım", phone: "+905367731404" },
  { icon: Settings, title: "Kepenk Motor Arızası", desc: "Tüp motor, redüktör, kart arızası onarımı", phone: "+905367731404" },
  { icon: DoorOpen, title: "Otomatik Kapı Sorunları", desc: "Fotosel, motor, sensör tamiri", phone: "+905367731404" },
  { icon: Home, title: "Pergola Bakım", desc: "Mekanizma, motor, yağmur sensörü bakımı", phone: "+905367731404" },
  { icon: Eye, title: "Fotoselli Kapı Tamiri", desc: "Sensör kalibrasyonu, motor değişimi", phone: "+905367731404" },
  { icon: AlertTriangle, title: "Acil Müdahale", desc: "7/24 acil teknik servis hizmeti", phone: "+905367731404" },
];

export default function TeknikDestek() {
  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="toz-container flex flex-col md:flex-row items-center justify-center gap-3 text-center">
          <AlertTriangle className="w-6 h-6 animate-pulse" />
          <span className="text-lg font-bold">Acil Durum? Hemen Arayın:</span>
          <a href="tel:+905367731404" className="text-xl font-black underline">
            +90 536 773 14 04
          </a>
        </div>
      </div>

      <section className="toz-section">
        <div className="toz-container">
          <div className="text-center mb-12">
            <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">
              Teknik Servis
            </span>
            <h2 className="toz-heading mt-3">
              7/24 Teknik <span className="text-gradient-purple">Destek</span>
            </h2>
            <p className="toz-subheading mx-auto mt-4">
              Ankara genelinde ortalama 2 saat içinde yerinde müdahale. Tüm tamir ve bakım işlemlerimiz 1 yıl garantilidir.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((s, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <a
                  href={`tel:${s.phone}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  Hemen Ara
                </a>
              </div>
            ))}
          </div>

          {/* Trust Signals */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary/5 rounded-xl">
              <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground text-lg">2 Saat Müdahale</h3>
              <p className="text-sm text-muted-foreground mt-1">Ankara genelinde ortalama varış süresi</p>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-xl">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground text-lg">1 Yıl Garanti</h3>
              <p className="text-sm text-muted-foreground mt-1">Tüm tamir ve bakım işlemleri garantili</p>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-xl">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground text-lg">Yerinde Servis</h3>
              <p className="text-sm text-muted-foreground mt-1">Adresinize gelerek müdahale ediyoruz</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
