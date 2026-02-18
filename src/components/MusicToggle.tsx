import { useState, useRef, useEffect } from "react";
import { Music, VolumeX } from "lucide-react";
import bgMusic from "../assets/Palagi - Tj Monterde  Violin Cover.mp3";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(bgMusic);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    // Fallback: manually restart if loop is ignored by the browser
    const onEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };
    audio.addEventListener("ended", onEnded);

    const startAudio = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      audio.play().catch(() => {});
    };

    // Attempt autoplay immediately
    audio.play()
      .then(() => { startedRef.current = true; })
      .catch(() => {
        // Browser blocked autoplay — wait for first user interaction
        const onInteraction = () => {
          startAudio();
          window.removeEventListener("click", onInteraction);
          window.removeEventListener("keydown", onInteraction);
          window.removeEventListener("touchstart", onInteraction);
        };
        window.addEventListener("click", onInteraction);
        window.addEventListener("keydown", onInteraction);
        window.addEventListener("touchstart", onInteraction);
      });

    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const fadeAudio = (audio: HTMLAudioElement, targetVol: number, duration = 1000) => {
    const steps = 20;
    const stepTime = duration / steps;
    const volStep = (targetVol - audio.volume) / steps;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      audio.volume = Math.max(0, Math.min(1, audio.volume + volStep));
      if (step >= steps) clearInterval(interval);
    }, stepTime);
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      // Only pause if audio has actually started
      if (startedRef.current) {
        fadeAudio(audio, 0, 800);
        setTimeout(() => audio.pause(), 850);
      }
      setPlaying(false);
    } else {
      startedRef.current = true;
      audio.volume = 0;
      audio.play().then(() => {
        fadeAudio(audio, 0.35, 1000);
        setPlaying(true);
      }).catch(() => {});
    }
  };

  return (
    <button
      onClick={toggle}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass-card flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer ${
        playing ? "music-pulse border-primary/30" : "border-foreground/10"
      }`}
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? (
        <Music className="w-5 h-5 text-primary" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
  );
};

export default MusicToggle;
