import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CinematicIntro from "@/components/CinematicIntro";
import HeroSection from "@/components/HeroSection";
import StoryTimeline from "@/components/StoryTimeline";
import MemoryGallery from "@/components/MemoryGallery";
import LoveLetter from "@/components/LoveLetter";
import FinalSection from "@/components/FinalSection";
import FloatingHearts from "@/components/FloatingHearts";
import MusicToggle, { startMusicOnGesture } from "@/components/MusicToggle";

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  const handleSplash = () => {
    startMusicOnGesture();
    setSplashDone(true);
  };

  return (
    <div className="romantic-gradient min-h-screen">
      {/* Splash screen — required for audio on iOS/Android */}
      <AnimatePresence>
        {!splashDone && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center romantic-gradient cursor-pointer select-none"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            onClick={handleSplash}
            onTouchStart={handleSplash}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] animate-glow-pulse" />
            </div>
            <motion.div
              className="relative text-center px-8 flex flex-col items-center gap-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-5xl">❤️</p>
              <p className="font-display text-3xl md:text-5xl text-primary rose-glow">
                For My Love
              </p>
              <p className="text-foreground/50 text-sm md:text-base font-serif-alt italic">
                Tap anywhere to begin
              </p>
              <motion.div
                className="w-14 h-14 rounded-full border border-primary/40 flex items-center justify-center"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
              >
                <span className="text-2xl">▶</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {splashDone && <CinematicIntro onComplete={handleIntroComplete} />}
      <FloatingHearts />
      <MusicToggle />

      {introComplete && (
        <main>
          <HeroSection />
          <StoryTimeline />
          <MemoryGallery />
          <LoveLetter />
          <FinalSection />
        </main>
      )}
    </div>
  );
};

export default Index;
