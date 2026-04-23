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
      <>
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,106,79,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.25) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            transform: "perspective(1000px) rotateX(60deg) translateY(20%)",
            transformOrigin: "center",
          }}
          animate={{ backgroundPosition: ["0px 0px", "0px 120px", "0px 0px"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="pointer-events-none absolute left-[10%] top-[30%] -z-10 h-32 w-32 rounded-3xl border border-[#2D6A4F]/30 bg-[#2D6A4F]/10 blur-[2px]"
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute right-[15%] bottom-[20%] -z-10 h-40 w-40 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5 blur-[3px]"
          animate={{ y: [0, 30, 0], x: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </>
    );
  }

  if (theme === "graphs") {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-50">
        <svg className="h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <motion.path
            d="M0,300 Q150,100 300,300 T600,300 T900,300 T1200,300"
            fill="none"
            stroke="#2D6A4F"
            strokeWidth="2"
            strokeDasharray="5 5"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M0,400 Q200,550 400,400 T800,400 T1200,400"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={i}
              cx={200 * i + 100}
              cy={300 + Math.sin(i) * 100}
              r="4"
              fill="#2D6A4F"
              animate={{ r: [4, 7, 4], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (theme === "waterfall") {
    return (
      <div className="absolute inset-0 -z-10 flex h-full items-end justify-around px-10 opacity-30">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-gradient-to-t from-[#2D6A4F] to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: `${30 + Math.random() * 60}%` }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ 
              height: { duration: 1, delay: i * 0.1 },
              opacity: { duration: 3, repeat: Infinity, delay: i * 0.2 }
            }}
          />
        ))}
      </div>
    );
  }

  if (theme === "bar") {
    return (
      <div className="absolute inset-0 -z-10 flex h-full items-center justify-center opacity-20">
        <div className="flex items-end gap-1 h-1/2">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 md:w-4 bg-[#C9A84C]"
              initial={{ height: 0 }}
              whileInView={{ height: `${Math.random() * 100}%` }}
              animate={{ height: [`${Math.random() * 100}%`, `${Math.random() * 100}%`] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (theme === "radar") {
    return (
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <motion.div 
          className="w-[500px] h-[500px] rounded-full border border-[#2D6A4F]/40 flex items-center justify-center relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border border-[#2D6A4F]/20 scale-75" />
          <div className="absolute inset-0 rounded-full border border-[#2D6A4F]/10 scale-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1/2 bg-gradient-to-t from-transparent to-[#2D6A4F]" />
          <motion.div 
            className="absolute w-4 h-4 bg-[#C9A84C] rounded-full blur-sm"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ top: '20%', left: '70%' }}
          />
        </motion.div>
      </div>
    );
  }

  if (theme === "scatter") {
    return (
      <div className="absolute inset-0 -z-10 opacity-30">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#C9A84C]"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px #C9A84C"
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2 + Math.random() * 3, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
          />
        ))}
      </div>
    );
  }

  if (theme === "nodes") {
    return (
      <div className="absolute inset-0 -z-10 opacity-40">
        <svg className="w-full h-full">
          {[...Array(15)].map((_, i) => {
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
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            );
          })}
        </svg>
      </div>
    );
  }

  return (
    <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-40" viewBox="0 0 1200 600" preserveAspectRatio="none">
      <motion.path
        d="M0,450 C120,420 220,500 340,440 C460,380 560,470 690,400 C820,330 930,420 1060,350 C1120,320 1160,335 1200,320"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ pathLength: [0, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

export default function SequenceSection({ id, frame, blur = 12, theme = "tiles", children }: SequenceSectionProps) {
  return (
    <div id={id} className="sequence-section relative isolate">
      {/* Smooth Blurry Transition at top */}
      <div className="absolute top-0 left-0 w-full h-32 z-30 pointer-events-none backdrop-blur-md [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-60" />
      
      {/* Background Frame */}
      {typeof frame === "number" && (
        <motion.div
          initial={{ filter: `blur(${blur + 4}px)`, opacity: 0.5, scale: 1.05 }}
          whileInView={{ filter: `blur(${blur}px)`, opacity: 0.7, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${frameSrc(frame)}')`, backgroundPosition: "center 20%" }}
        />
      )}

      {/* Analytical Theme Layer */}
      <ThemeLayer theme={theme} />

      {/* Overall Overlays for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#090909]/80 via-transparent to-[#090909]/80" />
      
      {/* Section Content */}
      <div className="relative z-10">{children}</div>

      {/* Smooth Blurry Transition at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-30 pointer-events-none backdrop-blur-md [mask-image:linear-gradient(to_top,black,transparent)] opacity-60" />
    </div>
  );
}
