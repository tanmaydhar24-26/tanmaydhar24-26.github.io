"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

const TiltImage = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    setRotateX(yPct * -20); // Max 20deg rotation
    setRotateY(xPct * 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.4, duration: 1 }}
      style={{ perspective: 1000 }}
      className="relative flex justify-center lg:justify-end cursor-pointer"
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-64 h-64 md:w-80 md:h-80 transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 border-2 border-[#2D6A4F] rounded-full transform translate-x-4 translate-y-4" style={{ transform: "translateZ(-20px) translateX(1rem) translateY(1rem)" }} />
        <div className="absolute inset-0 border border-[#C9A84C] rounded-full transform -translate-x-4 -translate-y-4" style={{ transform: "translateZ(-40px) translateX(-1rem) translateY(-1rem)" }} />
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#121212] shadow-[0_0_50px_rgba(45,106,79,0.5)]" style={{ transform: "translateZ(30px)" }}>
          <img 
            src="/profile.jpg" 
            alt="Tanmay Dhar" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400.png?text=Tanmay+Dhar';
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const BackgroundAnalytics = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30 md:opacity-40">
      {/* Left side: Animated Growth Arrow / Line Graph */}
      <motion.svg 
        className="absolute -left-10 md:left-10 top-20 w-64 h-64 md:w-96 md:h-96"
        viewBox="0 0 200 200"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <motion.path
          d="M 20 180 Q 80 160 120 100 T 180 20"
          fill="transparent"
          stroke="#2D6A4F"
          strokeWidth="4"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 8px rgba(45,106,79,0.5))" }}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        {/* Arrow head */}
        <motion.polygon
          points="180,20 160,30 175,45"
          fill="#2D6A4F"
          style={{ filter: "drop-shadow(0 0 8px rgba(45,106,79,0.5))" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 0.5 }}
        />
        {/* Decorative Grid & Axes */}
        <path d="M 20 20 v 160 h 160" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <path d="M 20 60 h 160 M 20 100 h 160 M 20 140 h 160" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 60 20 v 160 M 100 20 v 160 M 140 20 v 160" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
      </motion.svg>

      {/* Right side: 3D-ish Bar Chart */}
      <motion.div 
        className="absolute -right-4 md:right-10 bottom-10 flex items-end gap-3 w-56 h-48 md:w-80 md:h-64"
        initial={{ opacity: 0, rotateY: 30, rotateX: 20 }}
        whileInView={{ opacity: 1, rotateY: -15, rotateX: 10 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      >
        {[40, 75, 50, 95, 65].map((height, i) => (
          <div key={i} className="flex-1 relative group" style={{ height: "100%", transformStyle: "preserve-3d" }}>
            <motion.div
              className="absolute bottom-0 w-full bg-gradient-to-t from-[#C9A84C]/10 to-[#C9A84C]/50 border border-[#C9A84C]/30 shadow-[0_0_15px_rgba(201,168,76,0.2)]"
              style={{ transform: "translateZ(20px)" }}
              initial={{ height: "0%" }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: i * 0.2, type: "spring", bounce: 0.2 }}
            >
              {/* Top face of the 3D bar for that extra dimension */}
              <div className="absolute top-0 left-0 w-full h-4 bg-[#C9A84C]/60 transform -translate-y-full origin-bottom rotate-x-90 skew-x-[45deg]" />
              {/* Right face of the 3D bar */}
              <div className="absolute top-0 right-0 w-4 h-full bg-[#C9A84C]/30 transform translate-x-full origin-left rotate-y-90 skew-y-[45deg]" />
            </motion.div>
          </div>
        ))}
      </motion.div>
      
      {/* Floating data nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#2D6A4F]/60 shadow-[0_0_8px_rgba(45,106,79,0.8)]"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#121212] relative z-20 isolate overflow-hidden">
      <BackgroundAnalytics />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <TiltImage />

          {/* Right: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="text-gradient-gold text-sm font-bold tracking-widest uppercase mb-2">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Data Enthusiast & <span className="text-[#2D6A4F]">Strategist</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                I am a Data Enthusiast currently pursuing an MBA in Business Analytics & Data Science, blending engineering precision with strategic business intelligence.
              </p>
              <p className="border-l-4 border-[#C9A84C] pl-6 py-2 my-6 font-light text-xl text-white/90 italic bg-white/5 rounded-r-lg">
                &quot;Strong ownership, communication, and structured thinking with the ability to support leadership through insights, reporting, and the end-to-end execution of strategic tasks.&quot;
              </p>
              <p>
                With hands-on experience in machine learning, KPI tracking, and cross-functional coordination, my goal is to transform raw data into actionable insights that drive real-world business decisions.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-[#2D6A4F] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1A362D] transition-colors shadow-[0_0_15px_rgba(45,106,79,0.4)]">
                Let&apos;s Talk
              </a>
              <a href="/TanmayDhar.pdf" download className="glass-panel text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors border border-white/10">
                Download CV
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
