"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type JourneyTheme = "tiles" | "graphs" | "waterfall" | "bar" | "line" | "radar" | "scatter" | "nodes" | "about" | "candle" | "pie" | "histogram" | "stacked";

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
      <div className="absolute inset-0 -z-10 opacity-50 overflow-hidden">
        {/* Top-Left: Small Trading Line */}
        <div className="absolute top-20 left-10 w-1/3 h-1/4">
          <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
            <motion.path
              d="M0,150 L50,130 L100,140 L150,110 L200,120 L250,90 L300,100 L350,70 L400,80"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="3"
              style={{ filter: "drop-shadow(0 0 5px rgba(201,168,76,0.4))" }}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </div>
        {/* Bottom-Right: Bar Chart */}
        <div className="absolute bottom-20 right-10 w-1/3 h-1/4 flex items-end justify-around">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 md:w-8 bg-gradient-to-t from-[#C9A84C] to-transparent rounded-t"
              initial={{ height: 0 }}
              whileInView={{ height: `${30 + Math.random() * 70}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (theme === "candle") {
    return (
      <div className="absolute inset-0 -z-10 flex items-center justify-around px-10 opacity-40">
        {[...Array(12)].map((_, i) => {
          const isUp = Math.random() > 0.4;
          const height = 40 + Math.random() * 60;
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <motion.div className={`w-0.5 h-10 ${isUp ? 'bg-[#2D6A4F]' : 'bg-[#C9A84C]'}`} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} />
              <motion.div 
                className={`w-4 md:w-8 rounded-sm ${isUp ? 'bg-[#2D6A4F]/60 border border-[#2D6A4F]' : 'bg-[#C9A84C]/60 border border-[#C9A84C]'}`}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}px` }}
                transition={{ duration: 1, delay: i * 0.05 }}
              />
              <motion.div className={`w-0.5 h-10 ${isUp ? 'bg-[#2D6A4F]' : 'bg-[#C9A84C]'}`} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} />
            </div>
          );
        })}
      </div>
    );
  }

  if (theme === "pie") {
    return (
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-40">
        <svg className="w-80 h-80" viewBox="0 0 100 100">
          <motion.circle
            cx="50" cy="50" r="40"
            fill="transparent"
            stroke="#2D6A4F"
            strokeWidth="10"
            strokeDasharray="251"
            initial={{ strokeDashoffset: 251 }}
            whileInView={{ strokeDashoffset: 100 }}
            transition={{ duration: 2 }}
          />
          <motion.circle
            cx="50" cy="50" r="40"
            fill="transparent"
            stroke="#C9A84C"
            strokeWidth="10"
            strokeDasharray="251"
            initial={{ strokeDashoffset: 251 }}
            whileInView={{ strokeDashoffset: 200 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
      </div>
    );
  }

  if (theme === "histogram") {
    return (
      <div className="absolute inset-0 -z-10 flex items-end opacity-30">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-[#C9A84C] border-r border-black/20"
            initial={{ height: 0 }}
            whileInView={{ height: `${20 + Math.sin(i * 0.5) * 40 + Math.random() * 20}%` }}
            transition={{ duration: 1.5, delay: i * 0.02 }}
          />
        ))}
      </div>
    );
  }

  if (theme === "stacked") {
    return (
      <div className="absolute inset-0 -z-10 flex items-end justify-around px-10 opacity-40">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-8 md:w-16 flex flex-col gap-0.5">
            <motion.div className="bg-[#2D6A4F]" initial={{ height: 0 }} whileInView={{ height: `${Math.random() * 40}px` }} />
            <motion.div className="bg-[#C9A84C]" initial={{ height: 0 }} whileInView={{ height: `${Math.random() * 60}px` }} />
            <motion.div className="bg-gray-600" initial={{ height: 0 }} whileInView={{ height: `${Math.random() * 30}px` }} />
          </div>
        ))}
      </div>
    );
  }

  if (theme === "waterfall") {
    return (
      <div className="absolute inset-0 -z-10 flex flex-col justify-center gap-2 px-20 opacity-40">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="h-8 bg-gradient-to-r from-[#2D6A4F] to-transparent rounded-r"
            initial={{ width: 0 }}
            whileInView={{ width: `${30 + i * 8}%` }}
            transition={{ duration: 1, delay: i * 0.1 }}
            style={{ marginLeft: `${i * 10}%` }}
          />
        ))}
      </div>
    );
  }

  if (theme === "graphs") {
    return (
      <div className="absolute inset-0 -z-10 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <motion.path
            d="M0,600 L100,520 L200,550 L300,480 L400,510 L500,420 L600,450 L700,380 L800,410 L900,320 L1000,350"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="3"
            style={{ filter: "drop-shadow(0 0 8px rgba(201,168,76,0.5))" }}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "linear" }}
          />
          <motion.path
            d="M0,650 L150,600 L300,630 L450,560 L600,590 L750,520 L900,550 L1000,480"
            fill="none"
            stroke="#2D6A4F"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "linear", delay: 0.5 }}
          />
        </svg>
        <div className="absolute bottom-0 left-0 w-full flex items-end justify-around h-1/3 px-10 opacity-30">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 md:w-6 bg-gradient-to-t from-[#C9A84C]/40 to-[#C9A84C]/10"
              initial={{ height: 0 }}
              whileInView={{ height: `${Math.random() * 100}%` }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (theme === "tiles") {
    return (
      <div className="absolute inset-0 -z-10 opacity-40">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(201,168,76,0.4) 1px, transparent 0)",
            backgroundSize: "50px 50px"
          }}
        />
      </div>
    );
  }

  if (theme === "radar") {
    return (
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-50">
        <motion.div 
          className="w-[600px] h-[600px] rounded-full border border-[#C9A84C]/40 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border border-[#C9A84C]/20 scale-75" />
          <div className="absolute inset-0 rounded-full border border-[#C9A84C]/10 scale-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1/2 bg-gradient-to-t from-transparent via-[#C9A84C]/40 to-[#C9A84C] shadow-[0_0_10px_#C9A84C]" />
        </motion.div>
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
                stroke="#C9A84C"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ 
                  pathLength: { duration: 3, delay: i * 0.1 },
                  opacity: { duration: 4, repeat: Infinity, delay: i * 0.2 }
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
      <div className="absolute inset-0 -z-10 opacity-40">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#C9A84C]"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px #C9A84C"
            }}
            animate={{ 
              scale: [0.5, 1.2, 0.5],
              opacity: [0.2, 0.8, 0.2]
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

  if (theme === "waterfall" || theme === "bar") {
    return (
      <div className="absolute inset-0 -z-10 flex h-full items-end justify-around px-10 opacity-40">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 md:w-5 bg-gradient-to-t from-[#C9A84C] via-[#C9A84C]/50 to-transparent rounded-t-lg"
            style={{ filter: "drop-shadow(0 0 10px rgba(201,168,76,0.3))" }}
            initial={{ height: 0 }}
            whileInView={{ height: `${20 + Math.random() * 80}%` }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ 
              height: { duration: 1.2, delay: i * 0.05 },
              opacity: { duration: 3, repeat: Infinity, delay: i * 0.1 }
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10 opacity-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/20 to-transparent" />
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
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#090909]/40 via-transparent to-[#090909]/40" />
      
      {/* Section Content */}
      <div className="relative z-10">{children}</div>

      {/* Smooth Blurry Transition at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 z-30 pointer-events-none backdrop-blur-sm [mask-image:linear-gradient(to_top,black,transparent)] opacity-40" />
    </div>
  );
}
