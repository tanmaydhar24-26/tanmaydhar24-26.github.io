"use client";

import { motion } from "framer-motion";

type BackgroundVariant = "network" | "scatter" | "radar" | "cylinder" | "globe";

export default function AnimatedBackground({ variant = "network" }: { variant?: BackgroundVariant }) {
  if (variant === "network") {
    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40 md:opacity-50">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(20)].map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="#2D6A4F"
              strokeWidth="0.15"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: false }}
              transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
          {[...Array(30)].map((_, i) => (
            <motion.circle
              key={`dot-${i}`}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="0.3"
              fill="#C9A84C"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.6 }}
              viewport={{ once: false }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, repeatType: "reverse", delay: Math.random() * 2 }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "scatter") {
    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40 md:opacity-50">
        <div className="absolute inset-0 flex flex-wrap gap-20 p-20 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-64 h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <line x1="10" y1="90" x2="90" y2="90" stroke="#C9A84C" strokeWidth="1" />
                <line x1="10" y1="10" x2="10" y2="90" stroke="#C9A84C" strokeWidth="1" />
                {[...Array(15)].map((_, j) => (
                  <motion.circle
                    key={j}
                    cx={`${20 + Math.random() * 60}`}
                    cy={`${20 + Math.random() * 60}`}
                    r="1.5"
                    fill="#2D6A4F"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: j * 0.05 }}
                  />
                ))}
              </svg>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "radar") {
    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40 md:opacity-60">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
          <RadarWidget />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 translate-x-1/2 translate-y-1/2">
          <RadarWidget />
        </div>
      </div>
    );
  }

  if (variant === "cylinder") {
    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30 md:opacity-50">
        <div className="absolute inset-0 flex flex-col justify-around py-20">
          {[...Array(4)].map((_, row) => (
            <div key={row} className="flex justify-around items-end h-32 md:h-48 px-10">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`${row}-${i}`}
                  className="w-4 md:w-8 relative"
                  initial={{ height: "0%" }}
                  whileInView={{ height: `${20 + Math.random() * 60}%` }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5, delay: i * 0.1, type: "spring" }}
                >
                  <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#2D6A4F]/20 to-[#2D6A4F]/70 rounded-t-lg border border-[#2D6A4F]/40 shadow-[0_0_15px_rgba(45,106,79,0.3)]" />
                  <div className="absolute top-0 w-full h-2 md:h-4 bg-[#C9A84C]/50 rounded-full transform -translate-y-1/2 border border-[#C9A84C]/70" />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20 md:opacity-30 flex items-center justify-center">
      <motion.div
        className="w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] rounded-full border border-[#2D6A4F]/40 relative"
        initial={{ rotateX: 65, rotateZ: 0 }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={`lat-${i}`}
            className="absolute inset-0 rounded-full border border-[#C9A84C]/20"
            style={{ transform: `rotateX(${i * 15}deg)` }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`long-${i}`}
            className="absolute inset-0 rounded-full border border-[#2D6A4F]/20"
            style={{ transform: `rotateY(${i * 15}deg)` }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function RadarWidget() {
  return (
    <motion.svg 
      className="w-full h-full" 
      viewBox="0 0 100 100"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="50" cy="50" r="40" fill="none" stroke="#2D6A4F" strokeWidth="0.3" strokeDasharray="2 2" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#2D6A4F" strokeWidth="0.3" strokeDasharray="2 2" />
      <circle cx="50" cy="50" r="20" fill="none" stroke="#2D6A4F" strokeWidth="0.3" strokeDasharray="2 2" />
      <line x1="50" y1="10" x2="50" y2="90" stroke="#2D6A4F" strokeWidth="0.3" opacity="0.5" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="#2D6A4F" strokeWidth="0.3" opacity="0.5" />
      <motion.polygon
        points="50,20 75,45 60,80 35,65 20,40"
        fill="rgba(201,168,76,0.25)"
        stroke="#C9A84C"
        strokeWidth="1"
        initial={{ scale: 0.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2.5, type: "spring" }}
      />
      {/* Radar sweep */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent to-[#2D6A4F] origin-left"
        style={{ transform: "translateY(-50%)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  );
}
