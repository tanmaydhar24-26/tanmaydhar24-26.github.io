"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type JourneyTheme = "tiles" | "graphs" | "waterfall" | "bar" | "line";

type SequenceSectionProps = {
  id: string;
  frame?: number;
  blur?: number;
  theme?: JourneyTheme;
  children: ReactNode;
};

const frameSrc = (frame: number) => {
  const bounded = Math.max(0, Math.min(119, frame));
  const padded = bounded.toString().padStart(3, "0");
  return `/sequence/frame_${padded}_delay-0.066s.webp`;
};

function ThemeLayer({ theme }: { theme: JourneyTheme }) {
  if (theme === "tiles") {
    return (
      <>
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,106,79,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.25) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            transform: "perspective(900px) rotateX(62deg) translateY(28%)",
            transformOrigin: "center",
            mixBlendMode: "screen",
          }}
          animate={{ backgroundPosition: ["0px 0px", "0px 74px", "0px 0px"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="pointer-events-none absolute left-[12%] top-[24%] -z-10 h-24 w-24 rounded-xl border border-[#2D6A4F]/50 bg-[#2D6A4F]/25"
          animate={{ y: [0, -14, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute right-[14%] top-[20%] -z-10 h-28 w-28 rounded-2xl border border-[#C9A84C]/45 bg-[#C9A84C]/18"
          animate={{ y: [0, 10, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </>
    );
  }

  if (theme === "graphs") {
    return (
      <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <motion.path
          d="M0,470 C130,420 240,520 370,450 C500,390 610,500 760,430 C900,370 1030,430 1200,360"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ pathLength: [0.2, 1, 0.35], opacity: [0.3, 0.75, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,520 C160,470 280,560 450,500 C620,430 760,520 920,460 C1060,410 1130,430 1200,395"
          fill="none"
          stroke="#2D6A4F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="8 10"
          animate={{ strokeDashoffset: [0, -180], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    );
  }

  if (theme === "waterfall") {
    return (
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 flex h-48 items-end gap-2 px-6 opacity-55 md:h-64 md:px-14">
        {[24, 36, 18, 52, 34, 68, 40, 74, 48, 60, 42].map((height, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-[#2D6A4F]/45 to-[#C9A84C]/30"
            initial={{ height: `${height}%` }}
            animate={{ height: [`${height}%`, `${Math.max(10, height - 14)}%`, `${height + 11}%`, `${height}%`] }}
            transition={{ duration: 6.5 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    );
  }

  if (theme === "bar") {
    return (
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 flex h-52 items-end gap-3 px-8 opacity-60 md:h-72 md:px-20">
        {[16, 30, 44, 58, 38, 70, 52, 76, 60].map((height, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-lg border border-[#C9A84C]/35 bg-gradient-to-t from-[#2D6A4F]/55 to-[#C9A84C]/35 shadow-[0_0_24px_rgba(45,106,79,0.25)]"
            initial={{ height: `${height}%` }}
            animate={{ height: [`${height}%`, `${height + 12}%`, `${Math.max(14, height - 10)}%`, `${height}%`] }}
            transition={{ duration: 5.8 + i * 0.18, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    );
  }

  return (
    <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-65" viewBox="0 0 1200 600" preserveAspectRatio="none">
      <motion.path
        d="M0,450 C120,420 220,500 340,440 C460,380 560,470 690,400 C820,330 930,420 1060,350 C1120,320 1160,335 1200,320"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="4"
        strokeLinecap="round"
        animate={{ pathLength: [0.25, 1, 0.35], opacity: [0.3, 0.85, 0.35] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,520 C110,480 220,560 360,500 C500,440 660,540 780,470 C900,400 1020,450 1200,390"
        fill="none"
        stroke="#2D6A4F"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="10 12"
        animate={{ strokeDashoffset: [0, -220], opacity: [0.2, 0.65, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

export default function SequenceSection({ id, frame, blur = 10, theme = "tiles", children }: SequenceSectionProps) {
  return (
    <div id={id} className="sequence-section relative isolate overflow-hidden">
      {typeof frame === "number" && (
        <motion.div
          initial={{ filter: `blur(${blur + 4}px)`, opacity: 0.72, scale: 1.02 }}
          whileInView={{ filter: `blur(${blur}px)`, opacity: 0.82, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${frameSrc(frame)}')`, backgroundPosition: "center 18%" }}
        />
      )}

      <ThemeLayer theme={theme} />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#090909]/44 via-[#101010]/50 to-[#121212]/58" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 -z-10 bg-gradient-to-b from-[#121212]/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 -z-10 bg-gradient-to-t from-[#121212]/60 to-transparent" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
