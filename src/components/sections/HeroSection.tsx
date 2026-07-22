"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const technologies = [
  "Python",
  "Machine Learning",
  "Next.js",
  "FastAPI",
  "React",
  "PostgreSQL",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute left-[10%] top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-20 right-[5%] h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <Sparkles size={16} />
            Available for internship opportunities
          </div>

          <p className="mb-4 text-lg font-medium text-gray-400">
            Hello, I&apos;m
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Muhammad Insath
          </h1>

          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight text-gray-300 sm:text-4xl lg:text-5xl">
            Aspiring{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              AI/ML Engineer
            </span>
            <br />
            &amp; Full-Stack Developer
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I build intelligent, modern and user-friendly applications
            using artificial intelligence, machine learning and
            full-stack web technologies.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <MapPin size={17} className="text-blue-400" />
              Sri Lanka
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-gray-600 sm:block" />

            <span>
              B.Sc. (Hons) Information Technology Undergraduate
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
            >
              View My Projects

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
            >
              <Mail size={19} />
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <a
              href="https://github.com/insath67"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-insath-20b070282"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-300"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:insathmansoorofficial@gmail.com"
              aria-label="Send email"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-blue-500/15 to-violet-500/15 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Current focus
                </p>

                <h3 className="mt-1 text-xl font-semibold text-white">
                  Building Intelligent Systems
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20">
                <BrainCircuit size={25} />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <span className="ml-3 text-xs text-gray-500">
                  portfolio.ts
                </span>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <p>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-gray-400">=</span>{" "}
                  <span className="text-yellow-300">{"{"}</span>
                </p>

                <p className="pl-5">
                  <span className="text-cyan-300">name</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">
                    &quot;Muhammad Insath&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-cyan-300">role</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">
                    &quot;AI/ML Engineer&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-cyan-300">passion</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">
                    &quot;Solving real problems&quot;
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-yellow-300">{"}"}</span>
                  <span className="text-gray-400">;</span>
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-4 flex items-center gap-2">
                <Code2 size={18} className="text-blue-400" />

                <p className="text-sm font-medium text-gray-300">
                  Technologies I work with
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}