"use client";

import { motion } from "motion/react";
import {
  BrainCircuit,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
  UserRound,
} from "lucide-react";

const personalDetails = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Sc. (Hons) in Information Technology",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sri Lanka",
  },
  {
    icon: BrainCircuit,
    label: "Main Focus",
    value: "Artificial Intelligence & Machine Learning",
  },
  {
    icon: Code2,
    label: "Development",
    value: "Full-Stack Web Application Development",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute right-[8%] top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <UserRound size={16} />
            Get to know me
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            A passionate technology undergraduate focused on building
            intelligent and useful digital solutions.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-blue-500/15 to-violet-500/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-xl sm:p-9">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Professional profile
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    Muhammad Insath
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/20">
                  <Sparkles size={27} className="text-white" />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <p className="text-base leading-8 text-gray-300">
                  I am an undergraduate pursuing a{" "}
                  <span className="font-semibold text-white">
                    B.Sc. (Hons) in Information Technology at SLIIT
                  </span>
                  . I am passionate about artificial intelligence,
                  machine learning and full-stack web development.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-400">
                  I enjoy building intelligent systems that solve
                  real-world problems, including healthcare platforms,
                  business management systems and modern web
                  applications.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                  AI Enthusiast
                </span>

                <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                  Problem Solver
                </span>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                  Full-Stack Developer
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-semibold text-white">
              Building technology with purpose
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400">
              My goal is to begin my career in AI and machine learning
              while continuing to strengthen my software engineering
              and full-stack development skills.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-400">
              I have practical experience developing frontend
              interfaces, backend APIs, database-driven systems and
              AI-powered applications using modern technologies.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {personalDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300">
                      <Icon size={21} />
                    </div>

                    <p className="text-sm text-gray-500">
                      {detail.label}
                    </p>

                    <p className="mt-1 font-medium leading-6 text-gray-200">
                      {detail.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}