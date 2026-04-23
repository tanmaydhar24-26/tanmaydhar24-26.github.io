"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, bounce: 0.4, duration: 0.8 } }
};


export default function Education() {
  return (
    <section className="py-24 px-6 md:px-12 bg-transparent relative z-20 isolate overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gradient-gold text-sm font-bold tracking-widest uppercase mb-2">Academic Path</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            My <span className="text-[#2D6A4F]">Education</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {/* MBA Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(45,106,79,0.2)" }}
            className="glass-panel rounded-3xl overflow-hidden flex flex-col relative group border border-white/5 hover:border-[#2D6A4F]/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D6A4F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-[#2D6A4F]/20 border-b border-[#2D6A4F]/30 p-8 text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 border-[20px] border-[#2D6A4F]/20 rounded-full group-hover:scale-110 transition-transform duration-700" />
              <motion.span 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="text-4xl mb-4 block"
              >🎓</motion.span>
              <h3 className="text-xl font-bold mb-2">MBA in Business Analytics & Data Science</h3>
              <p className="text-gray-300 text-sm">PGPBA & DS</p>
            </div>
            <div className="p-8 flex-grow flex flex-col relative z-10">
              <div className="flex items-center gap-2 text-white font-bold mb-2 text-sm">
                <span>🏛️</span> Bengal Institute Of Business Studies
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 rounded-md border border-[#C9A84C]/20">
                  2024 — Present
                </span>
                <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-md border border-white/20">
                  79%
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-auto leading-relaxed">
                Advanced studies in data science, predictive modeling, and strategic business intelligence.
              </p>
            </div>
          </motion.div>

          {/* B.Tech Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(201,168,76,0.15)" }}
            className="glass-panel rounded-3xl overflow-hidden flex flex-col relative group border border-white/5 hover:border-[#C9A84C]/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-[#C9A84C]/10 border-b border-[#C9A84C]/20 p-8 text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 border-[20px] border-[#C9A84C]/10 rounded-full group-hover:scale-110 transition-transform duration-700" />
              <motion.span 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.2 }}
                className="text-4xl mb-4 block"
              >⚡</motion.span>
              <h3 className="text-xl font-bold mb-2">B.Tech in Electronics & Comm. Engineering</h3>
              <p className="text-gray-300 text-sm">Undergraduate Degree</p>
            </div>
            <div className="p-8 flex-grow flex flex-col relative z-10">
              <div className="flex items-center gap-2 text-white font-bold mb-2 text-sm">
                <span>🏛️</span> Gargi Memorial Institute Of Technology
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold text-[#2D6A4F] bg-[#2D6A4F]/10 px-3 py-1 rounded-md border border-[#2D6A4F]/20">
                  2020 — 2023
                </span>
                <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-md border border-white/20">
                  82%
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-auto leading-relaxed">
                Focus on signal processing, embedded systems, and core electronics engineering.
              </p>
            </div>
          </motion.div>

          {/* Diploma Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(255,255,255,0.05)" }}
            className="glass-panel rounded-3xl overflow-hidden flex flex-col relative group border border-white/5 hover:border-white/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-white/5 border-b border-white/10 p-8 text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 border-[20px] border-white/5 rounded-full group-hover:scale-110 transition-transform duration-700" />
              <motion.span 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.4 }}
                className="text-4xl mb-4 block"
              >⚙️</motion.span>
              <h3 className="text-xl font-bold mb-2">Diploma in Electronics & Tele-Comm.</h3>
              <p className="text-gray-300 text-sm">Polytechnic Diploma</p>
            </div>
            <div className="p-8 flex-grow flex flex-col relative z-10">
              <div className="flex items-center gap-2 text-white font-bold mb-2 text-sm">
                <span>🏛️</span> Jnnan Chandra Ghosh Polytechnic
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold text-gray-300 bg-white/10 px-3 py-1 rounded-md border border-white/20">
                  2016 — 2019
                </span>
                <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-md border border-white/20">
                  74%
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-auto leading-relaxed">
                Foundational engineering concepts, circuit design, and telecommunications.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-2xl font-bold mb-8 text-white text-center">Certifications & <span className="text-[#C9A84C]">Specializations</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Business Analytics & Data Science", 
                org: "IBM", 
                date: "Certification",
                icon: "IBM",
                color: "from-blue-900/40 to-black/40",
                link: "https://bibs.skillsnetwork.site/certificates/bf178d06-6501-4c62-b7d9-561cb9152dae"
              },
              { 
                title: "Machine Learning with Python", 
                org: "IIT Kanpur", 
                date: "Dec 2024",
                icon: "🏛️",
                color: "from-[#C9A84C]/20 to-black/40",
                link: "https://verify.eicta.digitalcredentials.in/fa37245d-31b3-46d4-a09b-ff55b476fcd1?utm_source=direct_link&utm_medium=portal"
              },
              { 
                title: "Full Stack Data Science Program", 
                org: "AlmaBetter", 
                date: "Jul 2023 - Dec 2023",
                icon: "💻",
                color: "from-[#2D6A4F]/20 to-black/40",
                link: "https://verified.sertifier.com/en/verify/95034435667164/"
              }
            ].map((cert, i) => (
              <motion.a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`group glass-panel p-6 rounded-2xl flex items-center gap-5 border border-white/10 hover:border-white/30 transition-all cursor-pointer relative overflow-hidden bg-gradient-to-r ${cert.color}`}
              >
                <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-sm font-bold text-white shadow-inner z-10">
                  {cert.icon}
                </div>
                <div className="z-10">
                  <h4 className="font-bold text-sm text-white mb-1 leading-tight">{cert.title}</h4>
                  <p className="text-xs text-gray-400">{cert.org} <span className="text-gray-600 ml-1">| {cert.date}</span></p>
                </div>
                {/* Decorative background glow */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                
                {/* External link icon */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white/30">↗</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
