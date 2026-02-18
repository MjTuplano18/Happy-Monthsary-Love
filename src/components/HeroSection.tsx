import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import heroImage0 from "@/assets/hero-image.jpg";
import heroImage1 from "@/assets/hero-image1.jpg";
import heroImage2 from "@/assets/hero-image2.jpg";
import heroImage3 from "@/assets/hero-image3.jpg";
import heroImage4 from "@/assets/hero-image4.jpg";

const heroImages = [heroImage0, heroImage1, heroImage2, heroImage3, heroImage4];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={heroImages[current]}
            alt="Romantic moment"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 romantic-gradient opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-4" : "bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full px-10 md:px-20 flex justify-start">
        <div className="max-w-xl text-left">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-alt text-lg md:text-xl text-primary/80 tracking-[0.3em] uppercase mb-4"
        >
          50th Monthsary
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground leading-tight rose-glow"
        >
          A Love That Grows <br />
          <span className="text-primary">With Every Moment</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 font-serif-alt text-lg md:text-xl text-muted-foreground italic max-w-xl"
        >
          December 19, 2021 — the day two hearts started beating as one
        </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
