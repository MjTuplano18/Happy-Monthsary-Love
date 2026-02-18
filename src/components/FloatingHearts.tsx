import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 12 + Math.random() * 20,
        duration: `${12 + Math.random() * 18}s`,
        delay: `${Math.random() * 15}s`,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute floating-heart text-primary/[0.06]"
          style={{
            left: h.left,
            fontSize: h.size,
            ["--duration" as string]: h.duration,
            ["--delay" as string]: h.delay,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
