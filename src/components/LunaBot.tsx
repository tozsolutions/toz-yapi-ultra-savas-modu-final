import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCT_GROUPS = [
  "Panjur Sistemleri", "Kepenk Sistemleri", "Pergola & Tente & Rolling Roof",
  "Otomatik Kapılar", "Giyotin & Cam Sistemleri", "Akıllı Cam Uygulamaları",
  "Kapı, Pencere, Doğrama & Cephe", "Bahçe & Çit Sistemleri",
  "Havuz Kapama", "Kış Bahçesi", "Sundurma & Carport",
  "Bariyer & Turnike", "Sineklik Sistemleri", "Dış Cephe Jaluzisi - Brisoley",
  "Isıtma & Soğutma Sistemleri", "Açık Hava Mutfakları",
];

type Msg = { role: "bot" | "user"; text: string };

export default function LunaBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Merhaba! Ben Luna, Toz Yapı Teknolojileri'nin dijital asistanıyım. 🌙\n\nSize nasıl yardımcı olabilirim?\n\n1️⃣ Ürün bilgisi\n2️⃣ Teknik destek\n3️⃣ Fiyat teklifi\n4️⃣ Diğer konular",
    },
  ]);
  const [input, setInput] = useState("");
  const [awaitingStep, setAwaitingStep] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBot = (text: string, step?: string) => {
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text }]);
      setAwaitingStep(step || null);
    }, 600);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    // Flow routing
    if (awaitingStep === "product_select") {
      addBot(
        `"${userMsg}" hakkında detaylı bilgi için ürünler bölümümüze göz atabilirsiniz.\n\nProje ölçeğiniz nedir?\n• Küçük (konut)\n• Orta (ticari)\n• Büyük (endüstriyel)`,
        "project_scale"
      );
      return;
    }
    if (awaitingStep === "project_scale") {
      addBot(
        "Harika! Teknik gereksinimlerinizi belirleyip size en uygun ürünü önerelim.\n\nWhatsApp üzerinden detaylı bilgi alabilirsiniz:\n📱 +90 536 773 14 04\n\nVeya iletişim formumuzu doldurabilirsiniz.",
      );
      return;
    }
    if (awaitingStep === "quote_name") {
      addBot("Hangi ürün/hizmet için teklif almak istiyorsunuz ve teslimat lokasyonunuz nerede?", "quote_detail");
      return;
    }
    if (awaitingStep === "quote_detail") {
      addBot(
        "Bilgilerinizi aldım! Satış ekibimiz en kısa sürede sizinle iletişime geçecektir.\n\nAcil durumlar için WhatsApp:\n📱 +90 536 773 14 04"
      );
      return;
    }

    // Main menu
    if (userMsg.includes("1") || userMsg.toLowerCase().includes("ürün")) {
      const list = PRODUCT_GROUPS.map((p, i) => `${i + 1}. ${p}`).join("\n");
      addBot(`Ürün gruplarımız:\n\n${list}\n\nHangi ürün grubu hakkında bilgi almak istersiniz?`, "product_select");
    } else if (userMsg.includes("2") || userMsg.toLowerCase().includes("destek")) {
      addBot(
        "Teknik destek ekibimize ulaşmak için:\n\n📞 +90 536 773 14 04\n📧 destek@tozyapi.com.tr\n\nYa da WhatsApp üzerinden yazabilirsiniz:\nhttps://wa.me/905367731404"
      );
    } else if (userMsg.includes("3") || userMsg.toLowerCase().includes("teklif") || userMsg.toLowerCase().includes("fiyat")) {
      addBot("Fiyat teklifi için lütfen adınızı ve firma bilginizi paylaşır mısınız?", "quote_name");
    } else if (userMsg.includes("4") || userMsg.toLowerCase().includes("diğer")) {
      addBot(
        "Diğer konularda bize şu kanallardan ulaşabilirsiniz:\n\n📞 +90 536 773 14 04\n📧 merhaba@tozyapi.com.tr\n📍 Timko İş Merkezi, Yenimahalle/Ankara\n⏰ Pzt-Cuma 10:00-17:00"
      );
    } else {
      addBot(
        "Talebinizi aldım! Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.\n\nWhatsApp: +90 536 773 14 04\n\nAna menüye dönmek için herhangi bir numara yazabilirsiniz:\n1️⃣ Ürün bilgisi\n2️⃣ Teknik destek\n3️⃣ Fiyat teklifi\n4️⃣ Diğer"
      );
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center luna-pulse overflow-hidden border-2 border-toz-turquoise/50"
        aria-label="Luna AI Asistan"
      >
        {isOpen ? (
          <div className="w-full h-full bg-primary flex items-center justify-center">
            <X className="w-6 h-6 text-primary-foreground" />
          </div>
        ) : (
          <img
            src="/images/logos/Luna.png"
            alt="Luna AI"
            className="w-full h-full rounded-full object-cover"
          />
        )}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[30rem] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
              <img
                src="/images/logos/Luna.png"
                alt="Luna"
                className="w-10 h-10 rounded-full object-cover border-2 border-primary-foreground/30"
              />
              <div className="flex-1">
                <h4 className="font-bold text-sm">Luna AI Asistan</h4>
                <span className="text-xs text-primary-foreground/70 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  Çevrimiçi
                </span>
              </div>
              <a
                href="https://wa.me/905367731404"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-primary-foreground/20 hover:bg-primary-foreground/30 px-3 py-1.5 rounded-full transition-colors"
              >
                WhatsApp
              </a>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-3 flex gap-2">
              <input
                type="text"
                className="flex-1 bg-muted rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Mesajınızı yazın..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button
                size="icon"
                className="bg-primary text-primary-foreground rounded-xl"
                onClick={handleSend}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
