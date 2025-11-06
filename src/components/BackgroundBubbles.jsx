import React from "react";

export default function BackgroundBubbles({ count = 24 }) {
  const bubbles = Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100;
    const size = 8 + Math.random() * 24;
    const delay = Math.random() * 10;
    const duration = 12 + Math.random() * 18;
    const opacity = 0.04 + Math.random() * 0.1;
    return { left, size, delay, duration, opacity, i };
  });
  return (
    <div className="bubbles">
      {bubbles.map(b => (
        <span
          key={b.i}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            background: `rgba(255,255,255,${b.opacity})`
          }}
        />
      ))}
    </div>
  );
}