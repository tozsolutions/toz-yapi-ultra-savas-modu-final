import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LAUNCH_DATE = new Date();
LAUNCH_DATE.setMonth(LAUNCH_DATE.getMonth() + 3);

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function PergoCleanSection() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);

  return (
    <section id="pergoclean" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background - Purple/Green/White gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(270,30%,15%)] via-[hsl(270,25%,25%)] to-[hsl(160,60%,25%)]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, hsl(160 60% 40% / 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, hsl(270 30% 50% / 0.3) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 toz-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <span className="inline-block bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-8">
            Yakında Geliyor
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Pergo<span className="text-[hsl(160,60%,50%)]">Clean</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
            Pergola ve dış mekan yapıları için profesyonel temizlik ve bakım sistemi. Yenilikçi çözümümüz çok yakında sizlerle.
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-4 md:gap-8 mb-12">
            {[
              { val: days, label: "Gün" },
              { val: hours, label: "Saat" },
              { val: minutes, label: "Dakika" },
              { val: seconds, label: "Saniye" },
            ].map((unit, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {String(unit.val).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-white/60 mt-2 font-medium">{unit.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Notification CTA */}
          <p className="text-white/50 text-sm">
            Lansman tarihinde haberdar olmak için{" "}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-[hsl(160,60%,50%)] hover:text-[hsl(160,60%,60%)] underline underline-offset-4 transition-colors"
            >
              iletişime geçin
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
