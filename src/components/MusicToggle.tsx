import { useState, useRef, useEffect } from "react";
import { Music, VolumeX } from "lucide-react";
import bgMusic from "../assets/Palagi - Tj Monterde  Violin Cover.mp3";

// Shared audio instance so Index.tsx can trigger play on user gesture
let sharedAudio: HTMLAudioElement | null = null;

export const startMusicOnGesture = () => {
  if (sharedAudio && sharedAudio.paused) {
    sharedAudio.play().catch(() => {});
  }
};

const MusicToggle = () => {
  const [playing, setPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(bgMusic);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    sharedAudio = audio;

    // Fallback: manually restart if loop is ignored by the browser
    const onEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };
    audio.addEventListener("ended", onEnded);

    // Attempt autoplay (works on desktop when allowed)
    audio.play().catch(() => {
      // Blocked — startMusicOnGesture() will be called from the splash screen tap
    });

    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.pause();
      audio.src = "";
      sharedAudio = null;
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
      fadeAudio(audio, 0, 800);
      setTimeout(() => audio.pause(), 850);
      setPlaying(false);
    } else {
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
