import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const letterText =
  "From the very first moment, I knew you were different. You weren't just someone who walked into my life — you became my life. Every day with you feels like a gift I never knew I deserved. You are my calm in the chaos, my warmth in the cold, my reason to believe that love stories are real. Thank you for 50 beautiful months. Thank you for choosing me, every single day. I love you — endlessly, deeply, completely.";

const LoveLetter = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedText(letterText.slice(0, i));
      if (i >= letterText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section className="py-24 md:py-32 px-6" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-display text-center mb-16 text-foreground"
      >
        A Letter For You
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto glass-card p-8 md:p-12"
      >
        <p className="font-serif-alt text-lg md:text-xl leading-relaxed text-foreground/85 italic">
          {displayedText}
          {displayedText.length < letterText.length && started && (
            <span className="typewriter-cursor" />
          )}
        </p>
        {displayedText.length >= letterText.length && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 text-right font-display text-primary text-lg"
          >
            — Mj Tuplano and Mochi ♥
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default LoveLetter;
