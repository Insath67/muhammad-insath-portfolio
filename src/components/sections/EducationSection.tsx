"use client";

import { motion } from "motion/react";
import {
  BookOpenCheck,
  CalendarDays,
  GraduationCap,
  School,
  Sparkles,
} from "lucide-react";

const education = [
  {
  id: 1,
  qualification: "B.Sc. (Hons) in Information Technology",
  institution:
    "Sri Lanka Institute of Information Technology — SLIIT",
  period: "Present",
  status: "Undergraduate",
  icon: GraduationCap,
  description:
    "Currently studying for a B.Sc. (Hons) in Information Technology at SLIIT.",
  details: [
    "Current Level: 3rd Year, 2nd Semester",
    "Main Interest: Artificial Intelligence and Machine Learning",
    "Focus: AI/ML Engineering and Full-Stack Application Development",
  ],
},

  {
    id: 2,
    qualification: "G.C.E. Advanced Level Examination",
    institution: "Sri Lanka",
    period: "2022",
    status: "Completed",
    icon: BookOpenCheck,
    description:
      "Completed the G.C.E. Advanced Level Examination in the Physical Science stream, passing all subjects in one sitting.",
    details: [
      "Stream: Physical Science",
      "Combined Mathematics: B",
      "Physics: C",
      "Chemistry: C",
      "Z-Score: 1.0708",
    ],
  },
  {
    id: 3,
    qualification: "G.C.E. Ordinary Level Examination",
    institution: "Sri Lanka",
    period: "2017",
    status: "Completed",
    icon: School,
    description:
      "Completed the G.C.E. Ordinary Level Examination by passing all subjects in one sitting with credit passes.",
    details: [
      "Passed all subjects in one sitting",
      "Completed with credit passes",
    ],
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute bottom-20 right-[7%] h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute left-[5%] top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            <Sparkles size={16} />
            My academic journey
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Education{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Background
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
            My educational background and academic qualifications in
            information technology, mathematics and physical science.
          </p>
        </motion.div>

        <div className="space-y-7">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.06] sm:p-8"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl transition-colors duration-300 group-hover:bg-blue-500/10" />

                <div className="relative grid gap-7 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                  <div>
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300 transition-transform duration-300 group-hover:scale-110">
                          <Icon size={26} />
                        </div>

                        <div>
                          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                            {item.status}
                          </span>

                          <h3 className="mt-3 text-xl font-semibold leading-7 text-white sm:text-2xl">
                            {item.qualification}
                          </h3>
                        </div>
                      </div>

                      <div className="flex w-fit shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-gray-400">
                        <CalendarDays size={16} />
                        {item.period}
                      </div>
                    </div>

                    <p className="mt-6 font-medium text-violet-300">
                      {item.institution}
                    </p>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                    <p className="mb-4 text-sm font-semibold text-gray-300">
                      Academic details
                    </p>

                    <div className="space-y-4">
                      {item.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

                          <p className="text-sm leading-6 text-gray-300">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}