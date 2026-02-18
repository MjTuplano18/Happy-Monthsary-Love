import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const lines = [
  "December 19, 2021…",
  "The day everything changed.",
  "Happy 50th Monthsary, My Love ❤️",
];

const CinematicIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (currentLine < lines.length - 1) {
      const timer = setTimeout(() => setCurrentLine((prev) => prev + 1), 2400);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowIntro(false);
        setTimeout(onComplete, 800);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentLine, onComplete]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center romantic-gradient"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
          </div>

          <div className="relative text-center px-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentLine}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`font-display ${
                  currentLine === 2
                    ? "text-3xl md:text-5xl lg:text-6xl text-primary rose-glow"
                    : currentLine === 0
                    ? "text-2xl md:text-4xl lg:text-5xl text-muted-foreground font-serif-alt italic"
                    : "text-xl md:text-3xl lg:text-4xl text-foreground/80"
                }`}
              >
                {lines[currentLine]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
