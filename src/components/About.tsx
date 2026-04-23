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


export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 bg-transparent relative z-20 isolate overflow-hidden">
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
