"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: "ADVANCED", icon: "🐍" },
  { name: "SQL", level: "ADVANCED", icon: "🗄️" },
  { name: "Power BI", level: "ADVANCED", icon: "📊" },
  { name: "Tableau", level: "INTERMEDIATE", icon: "📈" },
  { name: "Machine Learning", level: "INTERMEDIATE", icon: "🤖" },
  { name: "Excel", level: "EXPERT", icon: "📉" },
  { name: "Computer Vision", level: "INTERMEDIATE", icon: "👁️" },
  { name: "NLP", level: "INTERMEDIATE", icon: "🗣️" },
];

import AnimatedBackground from "./AnimatedBackground";

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#121212] relative z-20 isolate overflow-hidden">
      <AnimatedBackground variant="radar" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-gradient-gold text-sm font-bold tracking-widest uppercase mb-2">Technical Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Skills & <span className="text-[#2D6A4F]">Technologies</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 perspective-1000">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="relative w-full h-48 group cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: i * 0.1 }}
              style={{ perspective: "1000px" }}
            >
              <div className="w-full h-full relative transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
                {/* Front */}
                <div className="absolute inset-0 glass-panel rounded-2xl flex flex-col justify-center items-center p-6 [backface-visibility:hidden]">
                  <span className="text-4xl mb-4">{skill.icon}</span>
                  <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                  <p className="text-xs text-[#2D6A4F] mt-1 font-semibold tracking-wider">{skill.level}</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#2D6A4F] text-white rounded-2xl shadow-lg flex flex-col justify-center items-center p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-[#2D6A4F]/50">
                  <h3 className="font-bold text-xl mb-2">{skill.name}</h3>
                  <p className="text-sm text-center text-white/90">
                    Applied in multiple data projects and analytics tasks.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-xs mt-12 tracking-widest uppercase">+ Hover cards to flip</p>
      </div>
    </section>
  );
}
