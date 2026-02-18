import { useMemo } from "react";

const PETAL_PATHS = [
  // Simple 4-petal sakura shape (SVG)
  "M10,2 Q14,0 12,6 Q16,4 14,10 Q12,14 10,10 Q8,14 6,10 Q4,4 8,6 Q6,0 10,2Z",
  // Slightly rounder variant
  "M10,1 Q15,1 13,7 Q17,5 14,11 Q12,15 10,11 Q8,15 6,11 Q3,5 7,7 Q5,1 10,1Z",
];

const COLORS = [
  "#ffb7c5", // classic sakura pink
  "#ffc8d5", // soft pink
  "#ffd6e0", // blush
  "#ff8fab", // deeper pink
  "#ffccd5", // pale pink
];

interface Petal {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
  rotate: number;
  rotateDuration: string;
  swayDuration: string;
  swayDelay: string;
  color: string;
  path: string;
  opacity: number;
}

const SakuraFall = () => {
  const petals = useMemo<Petal[]>(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 105 - 2}%`,
        size: 10 + Math.random() * 14,
        duration: `${8 + Math.random() * 12}s`,
        delay: `${Math.random() * 20}s`,
        rotate: Math.random() * 360,
        rotateDuration: `${3 + Math.random() * 5}s`,
        swayDuration: `${3 + Math.random() * 4}s`,
        swayDelay: `${Math.random() * 4}s`,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        path: PETAL_PATHS[Math.floor(Math.random() * PETAL_PATHS.length)],
        opacity: 0.25 + Math.random() * 0.35,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="sakura-petal absolute"
          style={{
            left: p.left,
            top: "-30px",
            ["--fall-duration" as string]: p.duration,
            ["--fall-delay" as string]: p.delay,
            ["--sway-duration" as string]: p.swayDuration,
            ["--sway-delay" as string]: p.swayDelay,
            ["--spin-duration" as string]: p.rotateDuration,
          }}
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 20 20"
            style={{
              opacity: p.opacity,
              transform: `rotate(${p.rotate}deg)`,
              filter: `drop-shadow(0 1px 2px ${p.color}88)`,
            }}
          >
            <path d={p.path} fill={p.color} />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SakuraFall;
