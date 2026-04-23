"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const frameSrc = (frame: number) => {
  const bounded = Math.max(0, Math.min(119, frame));
  const padded = bounded.toString().padStart(3, "0");
  return `/sequence/frame_${padded}_delay-0.066s.webp`;
};

const HERO_BACKGROUND_FRAME = 8;

const links = [
  { id: "home", label: "Home", href: "#", frame: HERO_BACKGROUND_FRAME },
  { id: "about", label: "About", href: "#about", frame: HERO_BACKGROUND_FRAME },
  { id: "skills", label: "Skills", href: "#skills", frame: HERO_BACKGROUND_FRAME },
  { id: "experience", label: "Experience", href: "#experience", frame: HERO_BACKGROUND_FRAME },
  { id: "education", label: "Education", href: "#education", frame: HERO_BACKGROUND_FRAME },
  { id: "projects", label: "Projects", href: "#projects", frame: HERO_BACKGROUND_FRAME },
  { id: "dashboards", label: "Dashboards", href: "#dashboards", frame: HERO_BACKGROUND_FRAME },
  { id: "contact", label: "Contact", href: "#contact", frame: HERO_BACKGROUND_FRAME },
];

type NavTabProps = {
  id: string;
  label: string;
  href: string;
  frame: number;
  active: boolean;
  mobile?: boolean;
};

function NavTab({ id, label, href, frame, active, mobile = false }: NavTabProps) {
  return (
    <motion.a
      key={id}
      href={href}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative shrink-0 overflow-hidden rounded-xl transition-colors duration-300 [transform-style:preserve-3d] ${
        mobile
          ? "px-3 py-2 text-[11px]"
          : "px-4 py-2 text-xs tracking-widest uppercase"
      } ${
        active
          ? "text-[#F5D88A]"
          : "text-gray-400 hover:text-white"
      }`}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url('${frameSrc(frame)}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: active ? 0.38 : 0.26,
          transform: "translateZ(-1px)",
        }}
        animate={{ backgroundPosition: ["30% 30%", "60% 40%", "30% 30%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <span className="pointer-events-none absolute inset-0 bg-[#0d0d0d]/60" />
      {active && (
        <motion.span
          layoutId={mobile ? "activeTabMobile" : "activeTabDesktop"}
          className="pointer-events-none absolute inset-0 rounded-xl border border-[#C9A84C]/60"
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        />
      )}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-y-8 -left-10 w-10 rotate-[25deg] bg-white/10 blur-md"
        animate={{ x: [0, 180] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
      />
      <span className="relative z-10 font-bold">{label}</span>
    </motion.a>
  );
}

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "education", "projects", "dashboards", "contact"];
      
      // If we are at the very top, set home
      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is above the middle of the screen
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${frameSrc(HERO_BACKGROUND_FRAME)}')`, opacity: 0.18, filter: "blur(10px)" }}
        animate={{ backgroundPosition: ["40% 35%", "60% 45%", "40% 35%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-16 lg:h-20 flex items-center justify-center relative">
        <nav className="hidden lg:flex items-center gap-4">
          {links.map((link) => (
            <NavTab
              key={link.id}
              id={link.id}
              label={link.label}
              href={link.href} 
              frame={link.frame}
              active={activeSection === link.id}
            />
          ))}
        </nav>

        <nav className="lg:hidden flex-1 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max pr-2">
            {links.map((link) => (
              <NavTab
                key={link.id}
                id={link.id}
                label={link.label}
                href={link.href}
                frame={link.frame}
                active={activeSection === link.id}
                mobile
              />
            ))}
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
