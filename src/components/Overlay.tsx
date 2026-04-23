"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Overlay() {
  const { scrollYProgress } = useScroll();
  const [scroll, setScroll] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest);
  });

  // Calculate active sections based on exact scroll percentages
  const isSection1 = scroll >= 0 && scroll < 0.15;
  const isSection2 = scroll >= 0.15 && scroll < 0.50;
  const isSection3 = scroll >= 0.50 && scroll < 0.85;

  return (
    <div className="fixed inset-0 pointer-events-none flex flex-col justify-center items-center z-10 px-4 md:px-6">
      
      {/* Section 1 */}
      <div
        className={`absolute text-center max-w-4xl transition-all duration-700 ease-in-out transform ${
          isSection1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
        }`}
      >
        <h1 className="text-4xl md:text-7xl font-bold mb-3 md:mb-4 tracking-tight text-white drop-shadow-md">
          Tanmay Dhar
        </h1>
        <p className="text-lg md:text-3xl text-gray-200 font-light drop-shadow-md leading-snug">
          <span className="text-gradient-gold font-medium">Data Analyst</span> <br className="md:hidden" /> & MBA Business Analytics
        </p>
      </div>

      {/* Section 2 */}
      <div
        className={`absolute w-full px-4 text-center max-w-4xl transition-all duration-700 ease-in-out transform ${
          isSection2 ? "opacity-100 translate-y-0" : scroll < 0.15 ? "opacity-0 translate-y-12" : "opacity-0 -translate-y-12"
        }`}
      >
        <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-white drop-shadow-md">
          Turning Data into <br className="md:hidden" /><span className="text-[#2D6A4F]">Decisions.</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm md:text-xl drop-shadow-md">
          <span className="glass-panel px-4 md:px-6 py-1.5 md:py-2 rounded-full text-white/90">Python</span>
          <span className="glass-panel px-4 md:px-6 py-1.5 md:py-2 rounded-full text-white/90">SQL</span>
          <span className="glass-panel px-4 md:px-6 py-1.5 md:py-2 rounded-full text-white/90">Tableau</span>
          <span className="glass-panel px-4 md:px-6 py-1.5 md:py-2 rounded-full text-white/90">Power BI</span>
          <span className="glass-panel px-4 md:px-6 py-1.5 md:py-2 rounded-full text-white/90">Machine Learning</span>
        </div>
      </div>

      {/* Section 3 */}
      <div
        className={`absolute w-full px-4 text-center max-w-4xl transition-all duration-700 ease-in-out transform ${
          isSection3 ? "opacity-100 translate-y-0" : scroll < 0.50 ? "opacity-0 translate-y-12" : "opacity-0 -translate-y-12"
        }`}
      >
        <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-white drop-shadow-md">
          Bridging <span className="text-[#2D6A4F]">Electronics</span> <br /> & Data Science.
        </h2>
        <p className="text-base md:text-2xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md leading-snug">
          Engineering precision applied to complex data challenges. <br className="hidden md:block" />
          <span className="text-gradient-gold font-medium mt-2 md:mt-0 block md:inline">B.Tech in ECE</span> <span className="hidden md:inline">|</span> <span className="text-[#2D6A4F] font-medium block md:inline mt-1 md:mt-0">MBA in Business Analytics</span>
        </p>
      </div>

    </div>
  );
}
