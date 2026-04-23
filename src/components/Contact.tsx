"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#121212] relative z-20 isolate overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column */}
          <div>
            <p className="text-gradient-gold text-sm font-bold tracking-widest uppercase mb-2">Say Hello</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Get in <span className="text-[#2D6A4F] italic">Touch</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Open to Data Analyst roles, internships, freelance work, or research collaborations. Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              <a href="mailto:tanmaydhar36@icloud.com" className="flex items-center gap-4 glass-panel p-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 bg-[#2D6A4F]/20 text-[#2D6A4F] rounded-full flex items-center justify-center border border-[#2D6A4F]/30 text-xl"><FaEnvelope /></div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Email</div>
                  <div className="font-bold text-white">tanmaydhar36@icloud.com</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/TanmayDhar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass-panel p-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 bg-[#2D6A4F]/20 text-[#2D6A4F] rounded-full flex items-center justify-center border border-[#2D6A4F]/30 text-xl"><FaLinkedin /></div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">LinkedIn</div>
                  <div className="font-bold text-white">Tanmay Dhar</div>
                </div>
              </a>
              <a href="https://github.com/TanmayDhar36" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass-panel p-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 bg-[#2D6A4F]/20 text-[#2D6A4F] rounded-full flex items-center justify-center border border-[#2D6A4F]/30 text-xl"><FaGithub /></div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">GitHub</div>
                  <div className="font-bold text-white">TanmayDhar36</div>
                </div>
              </a>
            </div>

            <a href="/TanmayDhar.pdf" download className="inline-flex items-center gap-4 bg-[#2D6A4F] text-white p-4 rounded-2xl hover:bg-[#1A362D] border border-[#2D6A4F]/50 transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(45,106,79,0.2)]">
              <div>
                <div className="text-[10px] font-bold tracking-widest text-white/70 uppercase">Download</div>
                <div className="font-bold">My Resume / CV</div>
              </div>
              <span className="ml-auto bg-white/20 p-3 rounded-full text-sm"><FaFileDownload /></span>
            </a>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#2D6A4F] text-white transition-colors" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#2D6A4F] text-white transition-colors" />
                </div>
              </div>
              <div>
                <input type="text" placeholder="Subject" className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#2D6A4F] text-white transition-colors" />
              </div>
              <div>
                <textarea rows={5} placeholder="Tell me about your project or opportunity..." className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#2D6A4F] text-white transition-colors resize-none"></textarea>
              </div>
              <button type="button" className="bg-gradient-to-r from-[#2D6A4F] to-[#1A362D] text-white font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-3 border border-[#2D6A4F]/50 shadow-[0_0_15px_rgba(45,106,79,0.3)]">
                SEND MESSAGE <FaPaperPlane />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
