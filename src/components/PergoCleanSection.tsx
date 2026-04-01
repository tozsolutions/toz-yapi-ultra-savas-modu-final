import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LAUNCH_DATE = new Date();
LAUNCH_DATE.setDate(LAUNCH_DATE.getDate() + 60);

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

// Each letter rotates independently - never forms readable words
function RotatingCleanText() {
  const numLetters = 5;
  const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!@#$&*";
  
  return (
    <span className="inline-flex">
      {[...Array(numLetters)].map((_, letterIndex) => (
        <IndependentRotatingLetter
          key={letterIndex}
          allChars={allChars}
          delay={letterIndex * 0.15}
        />
      ))}
    </span>
  );
}

function IndependentRotatingLetter({ allChars, delay }: { allChars: string; delay: number }) {
  const [char, setChar] = useState(allChars[Math.floor(Math.random() * allChars.length)]);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const charInterval = setInterval(() => {
      setChar(allChars[Math.floor(Math.random() * allChars.length)]);
    }, 200);

    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 180) % 360);
    }, 400);

    return () => {
      clearInterval(charInterval);
      clearInterval(rotationInterval);
    };
  }, [allChars]);

  return (
    <motion.span
      className="inline-block w-8 md:w-10 text-center"
      animate={{
        rotateY: rotation,
        scale: [1, 1.1, 1],
      }}
      transition={{
        rotateY: { duration: 0.4, ease: "easeInOut" },
        scale: { duration: 0.3, repeat: Infinity, repeatType: "reverse", delay },
      }}
      style={{
        background: "linear-gradient(135deg, #22d3ee, #a78bfa, #f472b6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {char}
    </motion.span>
  );
}

export default function PergoCleanSection() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);

  return (
    <section id="pergoclean" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background - EXACT match to pergoclean1.html */}
      <div className="absolute inset-0 bg-[#0d0118]" />
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[80px] -top-[20%] -left-[10%]"
          animate={{
            x: [0, 50, -30, 40, 0],
            y: [0, -50, 30, 20, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[80px] -bottom-[10%] -right-[10%]"
          animate={{
            x: [0, 50, -30, 40, 0],
            y: [0, -50, 30, 20, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 7 }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[80px] top-[40%] right-[20%]"
          animate={{
            x: [0, 50, -30, 40, 0],
            y: [0, -50, 30, 20, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 14 }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/40 rounded-full"
            style={{ left: `${10 + i * 20}%` }}
            animate={{
              y: ["100vh", "-100px"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 3,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 toz-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/15 border border-purple-600/30 rounded-full text-sm font-bold text-purple-400 tracking-widest uppercase mb-8"
            animate={{
              boxShadow: ["0 0 0 0 rgba(139,92,246,0.4)", "0 0 0 15px rgba(139,92,246,0)", "0 0 0 0 rgba(139,92,246,0)"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀 Yapım Aşamasında
          </motion.span>

          {/* Title with rotating "Clean" */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-white">Pergo</span>
            <RotatingCleanText />
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Pergola, Tente, RollingRoof, BioClimatic ve Zip Perde sistemleri için profesyonel ve ekonomik çalışma için az kaldı.
          </p>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mb-12">
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
                className="bg-purple-600/10 border border-purple-600/20 rounded-2xl p-4 md:p-6 backdrop-blur-sm hover:-translate-y-2 hover:bg-purple-600/15 hover:border-purple-600/40 transition-all"
              >
                <span className="text-3xl md:text-5xl font-black bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent block mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {String(unit.val).padStart(2, "0")}
                </span>
                <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{unit.label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <p className="text-gray-500 text-sm">
            Haberdar olmak için{" "}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
            >
              iletişime geçin
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
