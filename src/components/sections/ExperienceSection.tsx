"use client";

import { motion } from "motion/react";
import {
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Sparkles,
  UsersRound,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "AI & Full-Stack Project Developer",
    organization: "Personal and Academic Projects",
    period: "Ongoing",
    type: "Project Experience",
    icon: BrainCircuit,
    description:
      "Designed and developed complete AI-powered and full-stack applications involving frontend interfaces, backend APIs, databases, authentication and role-based workflows.",
    responsibilities: [
      "Built MedInsight AI using Next.js, FastAPI and PostgreSQL",
      "Integrated AI-based medical report analysis and summaries",
      "Implemented JWT authentication and role-based access control",
      "Created REST APIs and database-driven application modules",
      "Developed responsive dashboards, forms and management pages",
      "Worked with React, Next.js, Python, MongoDB and PostgreSQL",
    ],
  },
  {
    id: 2,
    role: "Client Web Application Developer",
    organization: "Freelance and Client Projects",
    period: "Project-Based",
    type: "Client Work",
    icon: BriefcaseBusiness,
    description:
      "Developed practical business applications based on client requirements, including customer management, invoicing, quotations, payments and branded document generation.",
    responsibilities: [
      "Collected and understood client business requirements",
      "Designed clean and responsive business interfaces",
      "Developed customer, item and service management modules",
      "Created quotation, invoice and payment workflows",
      "Generated professionally branded PDF documents",
      "Deployed frontend and backend applications using Vercel",
    ],
  },
  {
    id: 3,
    role: "Full-Stack Team Project Developer",
    organization: "University Development Projects",
    period: "Academic Experience",
    type: "Team Projects",
    icon: UsersRound,
    description:
      "Contributed to university software projects by developing frontend components, integrating APIs and implementing role-based application features within a team environment.",
    responsibilities: [
      "Developed features for the Uni-Bond networking platform",
      "Created reusable React and TypeScript components",
      "Integrated frontend pages with backend REST APIs",
      "Implemented CRUD operations and form validation",
      "Used Git and GitHub for team collaboration",
      "Tested and fixed frontend and API integration issues",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute left-[5%] top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <Sparkles size={16} />
            Practical development experience
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Project &amp;{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Practical Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
            Hands-on experience gained through personal, academic,
            team-based and client software development projects.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[27px] top-4 hidden h-[calc(100%-32px)] w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.id}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                  }}
                  className="relative md:pl-20"
                >
                  <div className="absolute left-0 top-7 z-10 hidden h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-[#111827] text-blue-300 shadow-lg shadow-blue-500/10 md:flex">
                    <Icon size={24} />
                  </div>

                  <div className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.06] sm:p-8">
                    <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                      <div>
                        <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-300">
                          {experience.type}
                        </span>

                        <h3 className="mt-4 text-2xl font-semibold text-white">
                          {experience.role}
                        </h3>

                        <p className="mt-2 font-medium text-blue-300">
                          {experience.organization}
                        </p>
                      </div>

                      <span className="w-fit rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-gray-400">
                        {experience.period}
                      </span>
                    </div>

                    <p className="mt-6 max-w-4xl text-sm leading-7 text-gray-400 sm:text-base">
                      {experience.description}
                    </p>

                    <div className="mt-7 grid gap-4 md:grid-cols-2">
                      {experience.responsibilities.map(
                        (responsibility) => (
                          <div
                            key={responsibility}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-0.5 shrink-0 text-blue-400"
                            />

                            <p className="text-sm leading-6 text-gray-300">
                              {responsibility}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-gray-400">
            <Code2 size={19} className="text-blue-400" />
            Currently seeking my first AI/ML internship opportunity.
          </div>
        </motion.div>
      </div>
    </section>
  );
}