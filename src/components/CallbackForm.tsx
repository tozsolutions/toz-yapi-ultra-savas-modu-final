import { useState } from "react";
import { Phone, Send, Clock, User, Mail, Calendar, CheckCircle, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const timeSlots = ["Sabah 09:00-12:00", "Oğlen 12:00-14:00", "İkindi 14:00-17:00"];
const topics = ["Teklif Al", "Teknik Servis", "Genel Bilgi", "Acil Müdahale"];

export default function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [timeSlot, setTimeSlot] = useState(timeSlots[0]);
  const [topic, setTopic] = useState(topics[0]);
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const [kvkkError, setKvkkError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/\s/g, "");
    return /^(\+90|0)?5\d{9}$/.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    if (!validatePhone(phone)) return;
    if (!kvkkAccepted) {
      setKvkkError("KVKK aydınlatma metnini onaylamanız gerekmektedir");
      return;
    }
    setKvkkError("");

    const dateStr = preferredDate
      ? new Date(preferredDate).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })
      : "Belirtilmedi";

    const msg = encodeURIComponent(
      `Merhaba, geri arama talebinde bulunuyorum.\n\n` +
      `--- İletişim Bilgileri ---\n` +
      `- Ad Soyad: ${name}\n` +
      `- Telefon: ${phone}\n` +
      (email ? `- E-posta: ${email}\n` : "") +
      `\n--- Talep Detayları ---\n` +
      `- Konu: ${topic}\n` +
      `- Tercih Edilen Tarih: ${dateStr}\n` +
      `- Tercih Edilen Saat: ${timeSlot}\n\n` +
      `Beni aramanızı rica ederim.\n\n` +
      `[KVKK onayı alındı]`
    );
    window.open(`https://wa.me/905367731404?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      setEmail("");
      setPreferredDate("");
      setTimeSlot(timeSlots[0]);
      setTopic(topics[0]);
      setKvkkAccepted(false);
    }, 5000);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gradient-gold mb-2">Talebiniz Alındı!</h3>
        <p className="text-muted-foreground mb-4">
          WhatsApp üzerinden detaylar gönderildi. Uzman ekibimiz sizi en kısa sürede arayacaktır.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/905367731404"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp ile Devam Et
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-border text-foreground hover:bg-accent/5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Yeni Talep Oluştur
          </button>
        </div>
      </div>
    );
  }

  // Get tomorrow's date as min for the date picker
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="cb-name" className="block text-sm font-medium text-foreground mb-1">
          <User className="w-4 h-4 inline mr-1" /> Adınız Soyadınız <span className="text-red-500">*</span>
        </label>
        <input
          id="cb-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border border-border focus:ring-2 focus:ring-primary/30 outline-none transition-all"
          placeholder="Adınız Soyadınız"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="cb-phone" className="block text-sm font-medium text-foreground mb-1">
          <Phone className="w-4 h-4 inline mr-1" /> Telefon Numaranız <span className="text-red-500">*</span>
        </label>
        <input
          id="cb-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border border-border focus:ring-2 focus:ring-primary/30 outline-none transition-all"
          placeholder="05XX XXX XX XX"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cb-email" className="block text-sm font-medium text-foreground mb-1">
          <Mail className="w-4 h-4 inline mr-1" /> E-posta <span className="text-muted-foreground text-xs">(opsiyonel)</span>
        </label>
        <input
          id="cb-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border border-border focus:ring-2 focus:ring-primary/30 outline-none transition-all"
          placeholder="ornek@email.com"
        />
      </div>

      {/* Preferred Date & Time */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="cb-date" className="block text-sm font-medium text-foreground mb-1">
            <Calendar className="w-4 h-4 inline mr-1" /> Tercih Edilen Tarih
          </label>
          <input
            id="cb-date"
            type="date"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            min={minDate}
            className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border border-border focus:ring-2 focus:ring-primary/30 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="cb-time" className="block text-sm font-medium text-foreground mb-1">
            <Clock className="w-4 h-4 inline mr-1" /> Saat Aralığı
          </label>
          <select
            id="cb-time"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border border-border outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          >
            {timeSlots.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Topic */}
      <div>
        <label htmlFor="cb-topic" className="block text-sm font-medium text-foreground mb-1">
          Konu
        </label>
        <select
          id="cb-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border border-border outline-none focus:ring-2 focus:ring-primary/30 transition-all"
        >
          {topics.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* KVKK Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={kvkkAccepted}
            onChange={(e) => {
              setKvkkAccepted(e.target.checked);
              if (e.target.checked) setKvkkError("");
            }}
            className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/30"
          />
          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            <a href="/kvkk" target="_blank" className="text-primary underline hover:text-primary/80">KVKK aydınlatma metnini</a> okudum,
            kişisel verilerimin işlenmesini kabul ediyorum. <span className="text-red-500">*</span>
          </span>
        </label>
        {kvkkError && <p className="text-red-500 text-xs mt-1">{kvkkError}</p>}
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
