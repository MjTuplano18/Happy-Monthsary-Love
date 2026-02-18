import { useState, useCallback } from "react";
import CinematicIntro from "@/components/CinematicIntro";
import HeroSection from "@/components/HeroSection";
import StoryTimeline from "@/components/StoryTimeline";
import MemoryGallery from "@/components/MemoryGallery";
import LoveLetter from "@/components/LoveLetter";
import FinalSection from "@/components/FinalSection";
import FloatingHearts from "@/components/FloatingHearts";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <div className="romantic-gradient min-h-screen">
      <CinematicIntro onComplete={handleIntroComplete} />
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
