import ScrollyCanvas from "@/components/ScrollyCanvas";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Dashboards from "@/components/Dashboards";
import Contact from "@/components/Contact";
import About from "@/components/About";
import SequenceSection from "@/components/SequenceSection";

const Overlay = dynamic(() => import("@/components/Overlay"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-[#121212]">
      <Header />
      
      {/* Dark Section: ScrollyCanvas & Overlay */}
      <div id="home" className="h-[400vh]">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Dark Sections */}
      <div className="relative z-20">
        <SequenceSection id="about" theme="tiles"><About /></SequenceSection>
        <SequenceSection id="skills" theme="graphs"><Skills /></SequenceSection>
        <SequenceSection id="experience" theme="waterfall"><Experience /></SequenceSection>
        <SequenceSection id="education" theme="bar"><Education /></SequenceSection>
        <SequenceSection id="projects" theme="line"><Projects /></SequenceSection>
        <SequenceSection id="dashboards" theme="bar"><Dashboards /></SequenceSection>
        <SequenceSection id="contact" theme="line"><Contact /></SequenceSection>
      </div>
    </main>
  );
}
