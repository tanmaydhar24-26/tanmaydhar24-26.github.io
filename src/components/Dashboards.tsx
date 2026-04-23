"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const dashboards = [
  { src: "/dashboards/hr_analytics_dashboard.jpeg", title: "HR Analytics Dashboard" },
  { src: "/dashboards/orderflow_dashboard.jpeg", title: "Order Flow Dashboard" },
  { src: "/dashboards/unemployment_dashboard.jpeg", title: "Unemployment Analysis" },
  { src: "/dashboards/upi_transaction_dashboard.jpeg", title: "UPI Transactions Dashboard" },
  { src: "/dashboards/Dashboard.png", title: "Sales Overview Dashboard" },
  { src: "/dashboards/Dashboard2.png", title: "Revenue Analytics Dashboard" },
];

export default function Dashboards() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % dashboards.length);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + dashboards.length) % dashboards.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % dashboards.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="dashboards" className="py-24 px-6 md:px-12 bg-[#121212] relative z-20 isolate overflow-hidden">
      <AnimatedBackground variant="network" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-gradient-gold text-sm font-bold tracking-widest uppercase mb-2">Data Visualizations</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Interactive <span className="text-[#2D6A4F]">Dashboards</span>
          </h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] flex items-center justify-center perspective-[1200px]">
          <AnimatePresence initial={false}>
            {dashboards.map((dash, i) => {
              // Calculate relative position based on active index
              const diff = i - activeIdx;
              const absDiff = Math.abs(diff);
              
              // Only render items that are close to the active index for performance
              if (absDiff > 2 && !(i === 0 && activeIdx === dashboards.length - 1) && !(i === dashboards.length - 1 && activeIdx === 0)) return null;

              // Determine visual state
              let offset = diff;
              // Handle wrap-around logic for visual continuity
              if (activeIdx === 0 && i === dashboards.length - 1) offset = -1;
              if (activeIdx === dashboards.length - 1 && i === 0) offset = 1;
              
              const isActive = offset === 0;
              const zIndex = 10 - Math.abs(offset);
              const xPos = offset * 250; // pixels to shift left/right
              const rotateY = offset * -35; // degrees to rotate
              const scale = isActive ? 1 : 0.8;
              const opacity = isActive ? 1 : 0.4;
              const blur = isActive ? "blur(0px)" : "blur(4px)";

              return (
                <motion.div
                  key={i}
                  className="absolute w-full max-w-3xl h-full flex flex-col justify-center items-center cursor-pointer"
                  style={{ zIndex }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    x: xPos, 
                    rotateY, 
                    scale, 
                    opacity,
                    filter: blur
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  onClick={() => setActiveIdx(i)}
                >
                  <div className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border ${isActive ? 'border-[#C9A84C]/50' : 'border-white/10'}`}>
                    {/* Dark overlay for inactive slides */}
                    {!isActive && <div className="absolute inset-0 bg-black/40 z-10" />}
                    <img 
                      src={dash.src} 
                      alt={dash.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-8 text-center"
                    >
                      <h3 className="text-2xl font-bold text-white tracking-wide">{dash.title}</h3>
                      <p className="text-[#C9A84C] text-sm mt-2">{i + 1} / {dashboards.length}</p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-20">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/20"
            >
              ←
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-20">
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/20"
            >
              →
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center items-center gap-3 mt-12 overflow-x-auto py-4 px-2">
          {dashboards.map((dash, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`relative h-16 w-24 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${activeIdx === i ? 'ring-2 ring-[#C9A84C] scale-110 opacity-100' : 'opacity-40 hover:opacity-100'}`}
            >
              <img src={dash.src} alt={dash.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
