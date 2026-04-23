"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type JourneyTheme = "tiles" | "graphs" | "waterfall" | "bar" | "line" | "radar" | "scatter" | "nodes";

type SequenceSectionProps = {
  id: string;
  frame?: number;
  blur?: number;
  theme?: JourneyTheme;
  children: ReactNode;
};

const frameSrc = (frame: number) => {
  const bounded = Math.max(0, Math.min(119, frame));
  const padded = bounded.toString().padStart(3, "0");
  return `/sequence/frame_${padded}_delay-0.066s.webp`;
};

function ThemeLayer({ theme }: { theme: JourneyTheme }) {
  if (theme === "tiles") {
    return (
      <div className="absolute inset-0 -z-10 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(45,106,79,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>
    );
  }

  if (theme === "graphs") {
    return (
      <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <motion.path
            d="M0,800 Q250,600 500,800 T1000,800"
            fill="none"
            stroke="#2D6A4F"
            strokeWidth="1"
            animate={{ d: ["M0,800 Q250,600 500,800 T1000,800", "M0,800 Q250,900 500,800 T1000,800", "M0,800 Q250,600 500,800 T1000,800"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10 opacity-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D6A4F]/20 to-transparent" />
    </div>
  );
}

export default function SequenceSection({ id, frame, blur = 12, theme = "tiles", children }: SequenceSectionProps) {
  return (
    <div id={id} className="sequence-section relative isolate">
      {/* Smooth Blurry Transition at top */}
      <div className="absolute top-0 left-0 w-full h-24 z-30 pointer-events-none backdrop-blur-sm [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-40" />
      
      {/* Background Frame */}
      {typeof frame === "number" && (
        <motion.div
          initial={{ filter: `blur(${blur + 4}px)`, opacity: 0.5, scale: 1.05 }}
          whileInView={{ filter: `blur(${blur}px)`, opacity: 0.6, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${frameSrc(frame)}')`, backgroundPosition: "center 20%" }}
        />
      )}

      {/* Analytical Theme Layer */}
      <ThemeLayer theme={theme} />

      {/* Overall Overlays for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#090909]/60 via-transparent to-[#090909]/60" />
      
      {/* Section Content */}
      <div className="relative z-10">{children}</div>

      {/* Smooth Blurry Transition at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 z-30 pointer-events-none backdrop-blur-sm [mask-image:linear-gradient(to_top,black,transparent)] opacity-40" />
    </div>
  );
}
