"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  xOffset: number;
  color: string;
  blur: number;
}

const generateParticles = (): Particle[] => {
  const colors = [
    "rgba(6, 182, 212, {opacity})",
    "rgba(139, 92, 246, {opacity})",
    "rgba(236, 72, 153, {opacity})",
  ];

  return Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 8,
    xOffset: Math.random() * 80 - 40,
    color: colors[Math.floor(Math.random() * colors.length)],
    blur: Math.random() > 0.7 ? Math.random() * 3 : 0,
  }));
};

export default function FloatingParticles() {
  const [particles] = useState<Particle[]>(generateParticles);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            filter: particle.blur > 0 ? `blur(${particle.blur}px)` : 'none',
            backgroundColor: particle.color.replace('{opacity}', '0.15'),
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}