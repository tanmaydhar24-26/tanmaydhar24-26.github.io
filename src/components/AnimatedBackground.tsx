"use client";

import { motion } from "framer-motion";

type BackgroundVariant = "network" | "scatter" | "radar" | "cylinder" | "globe";

export default function AnimatedBackground({ variant = "network" }: { variant?: BackgroundVariant }) {
  if (variant === "network") {
    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20 md:opacity-30">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(10)].map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1={`${10 + Math.random() * 80}%`}
              y1={`${10 + Math.random() * 80}%`}
              x2={`${10 + Math.random() * 80}%`}
              y2={`${10 + Math.random() * 80}%`}
              stroke="#2D6A4F"
              strokeWidth="0.2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.circle
              key={`dot-${i}`}
              cx={`${10 + Math.random() * 80}%`}
              cy={`${10 + Math.random() * 80}%`}
              r="0.4"
              fill="#C9A84C"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.8 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5 + Math.random(), repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "scatter") {
    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20 md:opacity-30">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Axes */}
          <line x1="10%" y1="90%" x2="90%" y2="90%" stroke="#C9A84C" strokeWidth="0.5" />
          <line x1="10%" y1="10%" x2="10%" y2="90%" stroke="#C9A84C" strokeWidth="0.5" />
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={`scatter-${i}`}
              cx={`${15 + Math.random() * 75}%`}
              cy={`${15 + Math.random() * 70}%`}
              r="0.5"
              fill="#2D6A4F"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 + Math.random() * 2, delay: Math.random() * 0.5 }}
            />
          ))}
          {/* Trend line */}
          <motion.line
            x1="10%"
            y1="85%"
            x2="85%"
            y2="15%"
            stroke="#2D6A4F"
            strokeWidth="0.8"
            strokeDasharray="2 2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
      </div>
    );
  }

  if (variant === "radar") {
    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20 md:opacity-30 flex items-center justify-center">
        <motion.svg 
          className="w-[150%] h-[150%] max-w-[800px] max-h-[800px]" 
          viewBox="0 0 100 100"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="#2D6A4F" strokeWidth="0.2" strokeDasharray="1 1" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#2D6A4F" strokeWidth="0.2" strokeDasharray="1 1" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#2D6A4F" strokeWidth="0.2" strokeDasharray="1 1" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="#2D6A4F" strokeWidth="0.2" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#2D6A4F" strokeWidth="0.2" />
          <motion.polygon
            points="50,20 70,40 60,70 30,60 25,40"
            fill="rgba(201,168,76,0.2)"
            stroke="#C9A84C"
            strokeWidth="0.5"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 2, type: "spring" }}
          />
        </motion.svg>
      </div>
    );
  }

  if (variant === "cylinder") {
    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20 md:opacity-30">
        <div className="absolute inset-0 flex justify-around items-end px-10 pb-20">
          {[40, 60, 30, 80, 50, 70, 45].map((h, i) => (
            <motion.div
              key={i}
              className="w-8 md:w-16 relative"
              initial={{ height: "0%" }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, delay: i * 0.1, type: "spring" }}
            >
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#2D6A4F]/10 to-[#2D6A4F]/60 rounded-t-full border border-[#2D6A4F]/30" />
              <div className="absolute top-0 w-full h-4 md:h-8 bg-[#C9A84C]/40 rounded-full transform -translate-y-1/2 border border-[#C9A84C]/60" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Globe
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-10 md:opacity-20 flex items-center justify-center">
      <motion.div
        className="w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] rounded-full border border-[#2D6A4F] relative"
        initial={{ rotateX: 60, rotateZ: 0 }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={`lat-${i}`}
            className="absolute inset-0 rounded-full border border-[#C9A84C]/30"
            style={{ transform: `rotateX(${i * 30}deg)` }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`long-${i}`}
            className="absolute inset-0 rounded-full border border-[#2D6A4F]/30"
            style={{ transform: `rotateY(${i * 30}deg)` }}
          />
        ))}
      </motion.div>
    </div>
  );
}
