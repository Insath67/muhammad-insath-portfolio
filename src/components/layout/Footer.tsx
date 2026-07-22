import { ArrowUp, Heart, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

const portfolioEmail = "insathmansoorofficial@gmail.com";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/20 px-5 pb-8 pt-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-3">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20">
                <Sparkles size={21} />
              </span>

              <span className="text-xl font-bold tracking-tight text-white">
                Muhammad
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  .Insath
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              Aspiring AI/ML Engineer and Full-Stack Developer building
              intelligent and user-friendly applications.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Connect</h3>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Open to AI/ML internships, development projects and
              professional collaborations.
            </p>

            <a
              href={`mailto:${portfolioEmail}`}
              className="mt-4 inline-block text-sm font-medium text-blue-300 transition-colors hover:text-blue-200"
            >
              {portfolioEmail}
            </a>

            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com/insath67"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:text-blue-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-insath-20b070282"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:text-blue-300"
              >
                <FaLinkedinIn size={19} />
              </a>

              <a
                href={`mailto:${portfolioEmail}`}
                aria-label="Send email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:text-blue-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-8 sm:flex-row">
          <p className="flex flex-wrap items-center justify-center gap-1 text-center text-sm text-gray-600 sm:justify-start">
            © {new Date().getFullYear()} Muhammad Insath. Built with
            <Heart size={14} className="mx-1 text-violet-400" />
            using Next.js.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:text-blue-300"
          >
            Back to top
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}