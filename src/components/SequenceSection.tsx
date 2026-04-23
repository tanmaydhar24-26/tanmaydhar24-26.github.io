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
  // Common Data Point Generator
  const dots = [...Array(20)].map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1
  }));

  if (theme === "about" || theme === "graphs") {
    return (
      <div className="absolute inset-0 -z-10 opacity-60 overflow-hidden">
        {/* Left Side: Technical Line Chart */}
        <div className="absolute top-1/4 -left-10 w-1/2 h-1/2 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
            <motion.path
              d="M0,300 L50,280 L100,310 L150,240 L200,270 L250,180 L300,220 L350,140 L400,160"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="4"
              style={{ filter: "drop-shadow(0 0 10px rgba(201,168,76,0.6))" }}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,350 L80,320 L160,340 L240,280 L320,300 L400,240"
              fill="none"
              stroke="#2D6A4F"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "linear", delay: 0.5 }}
            />
          </svg>
        </div>
        {/* Right Side: Analytical Bar Group */}
        <div className="absolute bottom-1/4 -right-10 w-1/3 h-1/3 flex items-end justify-around gap-2 px-10">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-[#C9A84C] via-[#C9A84C]/20 to-transparent rounded-t-lg"
              style={{ filter: "drop-shadow(0 0 8px rgba(201,168,76,0.3))" }}
              initial={{ height: 0 }}
              whileInView={{ height: `${40 + Math.random() * 60}%` }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}
        </div>
        {/* Floating Data Nodes */}
        {dots.slice(0, 10).map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#2D6A4F]"
            style={{ left: `${dot.x}%`, top: `${dot.y}%`, width: dot.size, height: dot.size }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    );
  }

  if (theme === "candle") {
    return (
      <div className="absolute inset-0 -z-10 opacity-50 overflow-hidden">
        {/* Full Screen Candlestick Matrix */}
        <div className="absolute inset-0 flex items-center justify-around px-4">
          {[...Array(18)].map((_, i) => {
            const isUp = Math.random() > 0.4;
            return (
              <div key={i} className="flex flex-col items-center">
                <motion.div className="w-0.5 h-16 bg-gray-700" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} />
                <motion.div 
                  className={`w-4 md:w-10 rounded-sm shadow-lg ${isUp ? 'bg-gradient-to-b from-[#2D6A4F] to-[#1A362D] border border-[#2D6A4F]' : 'bg-gradient-to-b from-[#C9A84C] to-[#8B7333] border border-[#C9A84C]'}`}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${60 + Math.random() * 100}px` }}
                  transition={{ duration: 1.2, delay: i * 0.05 }}
                />
                <motion.div className="w-0.5 h-16 bg-gray-700" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} />
              </div>
            );
          })}
        </div>
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    );
  }

  if (theme === "pie" || theme === "radar") {
    return (
      <div className="absolute inset-0 -z-10 opacity-60 flex items-center justify-center">
        {/* Central Radar / Circular Data */}
        <div className="relative w-[500px] h-[500px]">
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-[#C9A84C]/30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute inset-10 rounded-full border border-[#2D6A4F]/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1/2 bg-gradient-to-t from-transparent to-[#2D6A4F] shadow-[0_0_15px_#2D6A4F]" />
          </motion.div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <motion.circle
              cx="50" cy="50" r="35"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="2"
              strokeDasharray="20 10"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>
        {/* Side Metrics */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          {[...Array(4)].map((_, i) => (
            <motion.div key={i} className="h-1 bg-[#2D6A4F]/40 rounded" initial={{ width: 0 }} whileInView={{ width: 100 + i * 20 }} transition={{ delay: i * 0.2 }} />
          ))}
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 items-end">
          {[...Array(4)].map((_, i) => (
            <motion.div key={i} className="h-1 bg-[#C9A84C]/40 rounded" initial={{ width: 0 }} whileInView={{ width: 80 + i * 30 }} transition={{ delay: i * 0.2 }} />
          ))}
        </div>
      </div>
    );
  }

  if (theme === "histogram" || theme === "stacked") {
    return (
      <div className="absolute inset-0 -z-10 opacity-40 overflow-hidden">
        {/* Left: Stacked Area Visualization */}
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2">
          <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
            <motion.path
              d="M0,300 L0,200 Q150,100 300,200 T600,150 L600,300 Z"
              fill="#2D6A4F"
              fillOpacity="0.2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.path
              d="M0,300 L0,250 Q150,150 300,250 T600,200 L600,300 Z"
              fill="#C9A84C"
              fillOpacity="0.15"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>
        </div>
        {/* Right: Technical Stats Column */}
        <div className="absolute top-1/4 right-20 w-48 h-1/2 flex flex-col justify-between py-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-full space-y-1">
              <div className="flex justify-between text-[8px] text-[#C9A84C] font-mono">
                <span>0{i+1}</span>
                <span>{80 + i * 4}%</span>
              </div>
              <motion.div 
                className="h-1 bg-gray-800 rounded-full overflow-hidden"
              >
                <motion.div 
                  className="h-full bg-[#C9A84C]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${60 + Math.random() * 40}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (theme === "waterfall" || theme === "nodes") {
    return (
      <div className="absolute inset-0 -z-10 opacity-50 overflow-hidden">
        {/* Left-to-Right Data Stream */}
        <svg className="w-full h-full">
          {[...Array(10)].map((_, i) => {
            const y = 20 + i * 8;
            return (
              <motion.path
                key={i}
                d={`M-50,${y}% L110%,${y}%`}
                stroke={i % 2 === 0 ? "#C9A84C" : "#2D6A4F"}
                strokeWidth="0.5"
                strokeDasharray="10 20"
                animate={{ strokeDashoffset: [-30, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
                className="opacity-30"
              />
            );
          })}
        </svg>
        {/* Floating Data Panels */}
        <div className="absolute top-1/3 left-10 w-48 h-32 glass-panel border border-[#2D6A4F]/30 rounded-xl opacity-20" />
        <div className="absolute bottom-1/3 right-10 w-64 h-40 glass-panel border border-[#C9A84C]/30 rounded-xl opacity-20" />
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
