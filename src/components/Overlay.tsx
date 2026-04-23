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
  const isSection1 = scroll >= 0 && scroll < 0.25;
  const isSection2 = scroll >= 0.25 && scroll < 0.55;
  const isSection3 = scroll >= 0.55 && scroll < 0.85;

  return (
    <div className="fixed inset-0 pointer-events-none flex flex-col justify-center items-center z-10 px-6">
      
      {/* Section 1 */}
      <div
        className={`absolute text-center max-w-4xl transition-all duration-700 ease-in-out transform ${
          isSection1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-md">
          Tanmay Dhar
        </h1>
        <p className="text-xl md:text-3xl text-gray-200 font-light drop-shadow-md">
          <span className="text-gradient-gold font-medium">Data Analyst</span> & MBA Business Analytics
        </p>
      </div>

      {/* Section 2 */}
      <div
        className={`absolute text-center max-w-4xl transition-all duration-700 ease-in-out transform ${
          isSection2 ? "opacity-100 translate-y-0" : scroll < 0.25 ? "opacity-0 translate-y-12" : "opacity-0 -translate-y-12"
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
          Turning Data into <span className="text-[#2D6A4F]">Decisions.</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl drop-shadow-md">
          <span className="glass-panel px-6 py-2 rounded-full text-white/90">Python</span>
          <span className="glass-panel px-6 py-2 rounded-full text-white/90">SQL</span>
          <span className="glass-panel px-6 py-2 rounded-full text-white/90">Tableau</span>
          <span className="glass-panel px-6 py-2 rounded-full text-white/90">Power BI</span>
          <span className="glass-panel px-6 py-2 rounded-full text-white/90">Machine Learning</span>
        </div>
      </div>

      {/* Section 3 */}
      <div
        className={`absolute text-center max-w-4xl transition-all duration-700 ease-in-out transform ${
          isSection3 ? "opacity-100 translate-y-0" : scroll < 0.55 ? "opacity-0 translate-y-12" : "opacity-0 -translate-y-12"
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
          Bridging <span className="text-[#2D6A4F]">Electronics</span> <br /> & Data Science.
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">
          Engineering precision applied to complex data challenges. <br />
          <span className="text-gradient-gold font-medium">B.Tech in ECE</span> | <span className="text-[#2D6A4F] font-medium">MBA in Business Analytics</span>
        </p>
      </div>

    </div>
  );
}
