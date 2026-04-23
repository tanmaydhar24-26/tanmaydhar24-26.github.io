import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="max-w-xl w-full space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100">
            Tanmay Dhar
          </h1>
          <p className="text-lg text-slate-400">
            Software Developer &amp; Computer Science Student
          </p>
        </div>

        <p className="text-slate-300 leading-relaxed">
          Passionate about building elegant solutions to complex problems.
          Interested in full-stack development, machine learning, and open-source
          software.
        </p>

        <div className="flex items-center justify-center gap-6 pt-2">
          <a
            href="https://github.com/tanmaydhar24-26"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-slate-100 transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/tanmaydhar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-slate-100 transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:tanmaydhar24@example.com"
            aria-label="Email"
            className="text-slate-400 hover:text-slate-100 transition-colors"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </main>
  );
}
