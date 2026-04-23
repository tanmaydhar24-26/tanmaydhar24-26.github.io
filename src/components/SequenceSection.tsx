"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type JourneyTheme = "tiles" | "graphs" | "waterfall" | "bar" | "line" | "radar" | "scatter" | "nodes" | "about";

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
  if (theme === "about") {
    return (
      <div className="absolute inset-0 -z-10 opacity-25 overflow-hidden">
        {/* Background Bars */}
        <div className="absolute bottom-0 left-0 w-full flex items-end justify-around h-1/4 px-10">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 md:w-8 bg-[#2D6A4F]/20"
              initial={{ height: 0 }}
              whileInView={{ height: `${20 + Math.random() * 80}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>
        {/* Trading Line Overlay */}
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <motion.path
            d="M0,600 L100,550 L200,580 L300,520 L400,540 L500,480 L600,510 L700,450 L800,470 L900,420 L1000,440"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "linear" }}
          />
        </svg>
      </div>
    );
  }

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

  if (theme === "radar") {
    return (
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-20">
        <motion.div 
          className="w-[600px] h-[600px] rounded-full border border-[#2D6A4F]/30 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border border-[#2D6A4F]/10 scale-75" />
          <div className="absolute inset-0 rounded-full border border-[#2D6A4F]/5 scale-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1/2 bg-gradient-to-t from-transparent via-[#2D6A4F]/40 to-[#2D6A4F]" />
        </motion.div>
      </div>
    );
  }

  if (theme === "nodes") {
    return (
      <div className="absolute inset-0 -z-10 opacity-30">
        <svg className="w-full h-full">
          {[...Array(12)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = x1 + (Math.random() * 20 - 10);
            const y2 = y1 + (Math.random() * 20 - 10);
            return (
              <motion.line
                key={i}
                x1={`${x1}%`} y1={`${y1}%`}
                x2={`${x2}%`} y2={`${y2}%`}
                stroke="#2D6A4F"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ 
                  pathLength: { duration: 3, delay: i * 0.1 },
                  opacity: { duration: 5, repeat: Infinity, delay: i * 0.2 }
                }}
              />
            );
          })}
        </svg>
      </div>
    );
  }

  if (theme === "scatter") {
    return (
      <div className="absolute inset-0 -z-10 opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#C9A84C]"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              scale: [0.5, 1, 0.5],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{ 
              duration: 3 + Math.random() * 4, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
          />
        ))}
      </div>
    );
  }

  if (theme === "waterfall") {
    return (
      <div className="absolute inset-0 -z-10 flex h-full items-end justify-around px-10 opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 bg-gradient-to-t from-[#2D6A4F] to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: `${20 + Math.random() * 60}%` }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ 
              height: { duration: 1.5, delay: i * 0.1 },
              opacity: { duration: 4, repeat: Infinity, delay: i * 0.2 }
            }}
          />
        ))}
      </div>
    );
  }

  if (theme === "bar") {
    return (
      <div className="absolute inset-0 -z-10 flex h-full items-center justify-center opacity-15">
        <div className="flex items-end gap-2 h-1/3">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 md:w-6 bg-[#C9A84C]"
              initial={{ height: 0 }}
              whileInView={{ height: `${30 + Math.random() * 70}%` }}
              animate={{ height: [`${30 + Math.random() * 70}%`, `${30 + Math.random() * 70}%`] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (theme === "graphs") {
    return (
      <div className="absolute inset-0 -z-10 opacity-25 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          {/* Main trading line */}
          <motion.path
            d="M0,700 L100,650 L200,680 L300,620 L400,640 L500,580 L600,610 L700,550 L800,570 L900,520 L1000,540"
            fill="none"
            stroke="#2D6A4F"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "linear" }}
          />
          {/* Secondary line */}
          <motion.path
            d="M0,750 L150,720 L300,740 L450,700 L600,710 L750,670 L900,690 L1000,650"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 5, ease: "linear", delay: 0.5 }}
          />
          {/* Trading area */}
          <motion.path
            d="M0,1000 L0,700 L100,650 L200,680 L300,620 L400,640 L500,580 L600,610 L700,550 L800,570 L900,520 L1000,540 L1000,1000 Z"
            fill="url(#trading-gradient)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            transition={{ duration: 2, delay: 3 }}
          />
          <defs>
            <linearGradient id="trading-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2D6A4F" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2D6A4F" stopOpacity="0" />
            </linearGradient>
          </defs>
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
