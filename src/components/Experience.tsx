"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "StarApp Solution",
    date: "May 2025 – Oct 2025",
    location: "Bengaluru",
    bullets: [
      "Built AI-powered web apps using Flask and Django",
      "Integrated ML models into production pipelines",
      "Collaborated cross-functionally on scalability"
    ],
    icon: "📈",
    year: "2025"
  },
  {
    role: "Data Analyst Intern (Remote)",
    company: "Afame Technologies",
    date: "Apr 2024 - Jun 2024",
    location: "",
    bullets: [
      "Created Tableau dashboards from raw data sources",
      "Supported strategic decisions with trend analysis"
    ],
    icon: "🗄️",
    year: "2024"
  },
  {
    role: "Data Analyst Intern (Remote)",
    company: "Abhyaz - MTAB Technology Center",
    date: "Jan 2024 - Mar 2024",
    location: "",
    bullets: [
      "Collected and cleaned large sales & HR datasets",
      "Built dashboards and generated insight reports"
    ],
    icon: "💻",
    year: "Early 2024"
  },
  {
    role: "Production Engineer",
    company: "Landis Gyr Ltd",
    date: "Oct 2019 - Apr 2023",
    location: "Kolkata",
    bullets: [
      "Led daily coordination between production and quality teams",
      "Managed manpower allocation and process planning"
    ],
    icon: "⚙️",
    year: "2019-23"
  }
];


export default function Experience() {
  return (
    <section className="py-24 px-6 md:px-12 bg-transparent relative z-20 isolate overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <p className="text-gradient-gold text-sm font-bold tracking-widest uppercase mb-2">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Professional <span className="text-[#2D6A4F]">Timeline</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Center Line - Left aligned on mobile, centered on desktop */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-white/10" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full pl-20 md:pl-0">
                  
                  {/* Left Side (Desktop only or Mobile unified) */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:order-1 md:pl-12'}`}>
                    {/* On desktop, we only show content here if it's EVEN. On mobile, we ALWAYS show content here and hide the right side. */}
                    <div className={isEven ? 'block' : 'block md:hidden'}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="glass-panel p-6 md:p-8 rounded-3xl relative group hover:border-[#2D6A4F]/50 transition-colors"
                      >
                        <p className="text-[10px] font-bold text-[#C9A84C] tracking-widest uppercase mb-2 md:text-right text-left">{exp.date}</p>
                        <h3 className="text-xl font-bold mb-1 text-white md:text-right text-left">{exp.role}</h3>
                        <p className="text-sm font-bold text-[#2D6A4F] mb-6 flex items-center md:justify-end justify-start gap-1">
                          <span>🏢</span> {exp.company} {exp.location && `• ${exp.location}`}
                        </p>
                        <ul className="space-y-3 text-sm text-gray-300">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start md:justify-end justify-start gap-2 md:text-right text-left">
                              <span className="md:hidden text-[#C9A84C] mt-1 text-xs">↗</span>
                              {bullet} 
                              <span className="hidden md:inline text-[#C9A84C] mt-1 text-xs">↗</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                    {/* Spacer for desktop odd items */}
                    <div className={isEven ? 'hidden' : 'hidden md:flex w-full h-full items-center opacity-0'}>Spacer</div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-[#121212] bg-[#2D6A4F] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(45,106,79,0.5)] mt-6 md:mt-0">
                     <span className="text-white text-xs">{exp.icon}</span>
                     <div className="absolute left-14 md:-left-20 md:auto top-1/2 transform -translate-y-1/2 bg-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap border border-white/5 backdrop-blur-md">
                       {exp.year}
                     </div>
                  </div>

                  {/* Right Side (Desktop only for odd items) */}
                  <div className={`w-full md:w-5/12 hidden md:block ${isEven ? 'md:pl-12 opacity-0' : 'md:order-2 md:pl-12'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="glass-panel p-8 rounded-3xl relative group hover:border-[#2D6A4F]/50 transition-colors"
                      >
                        <p className="text-[10px] font-bold text-[#C9A84C] tracking-widest uppercase mb-2 text-left">{exp.date}</p>
                        <h3 className="text-xl font-bold mb-1 text-left text-white">{exp.role}</h3>
                        <p className="text-sm font-bold text-[#2D6A4F] mb-6 flex items-center justify-start gap-1">
                          <span>🏢</span> {exp.company} {exp.location && `• ${exp.location}`}
                        </p>
                        <ul className="space-y-3 text-sm text-gray-300 text-left">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start justify-start gap-2">
                              <span className="text-[#C9A84C] mt-1 text-xs">↗</span> {bullet}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
