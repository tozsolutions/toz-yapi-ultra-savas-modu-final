import { useState } from "react";
import { Phone, Send, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const timeSlots = ["Sabah 09:00-12:00", "Öğlen 12:00-14:00", "İkindi 14:00-17:00"];
const topics = ["Teklif Al", "Teknik Servis", "Genel Bilgi", "Acil Müdahale"];

export default function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [timeSlot, setTimeSlot] = useState(timeSlots[0]);
  const [topic, setTopic] = useState(topics[0]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const msg = encodeURIComponent(
      `Merhaba, ben ${name}.\n` +
      `Telefon: ${phone}\n` +
      `Konu: ${topic}\n` +
      `Tercih Edilen Saat: ${timeSlot}\n\n` +
      `Beni aramanızı rica ederim.`
    );
    window.open(`https://wa.me/905367731404?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-gradient-gold mb-2">Talebiniz Alındı!</h3>
        <p className="text-muted-foreground">WhatsApp üzerinden yönlendiriliyorsunuz...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="cb-name" className="block text-sm font-medium text-foreground mb-1">
          <User className="w-4 h-4 inline mr-1" /> Adınız Soyadınız
        </label>
        <input
          id="cb-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border border-border focus:ring-2 focus:ring-primary/30 outline-none"
          placeholder="Adınız Soyadınız"
          required
        />
      </div>

      <div>
        <label htmlFor="cb-phone" className="block text-sm font-medium text-foreground mb-1">
          <Phone className="w-4 h-4 inline mr-1" /> Telefon Numaranız
        </label>
        <input
          id="cb-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border border-border focus:ring-2 focus:ring-primary/30 outline-none"
          placeholder="05XX XXX XX XX"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="cb-time" className="block text-sm font-medium text-foreground mb-1">
            <Clock className="w-4 h-4 inline mr-1" /> Tercih Edilen Saat
          </label>
          <select
            id="cb-time"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border border-border outline-none"
          >
            {timeSlots.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cb-topic" className="block text-sm font-medium text-foreground mb-1">
            Konu
          </label>
          <select
            id="cb-topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border border-border outline-none"
          >
            {topics.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-toz-purple-light text-primary-foreground font-bold py-3 rounded-xl"
      >
        <Send className="w-4 h-4 mr-2" />
        Sizi Arayalım
      </Button>
    </form>
  );
}
