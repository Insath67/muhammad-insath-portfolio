"use client";

import { motion } from "motion/react";
import {
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    description:
      "Technologies and concepts used to build intelligent systems.",
    icon: BrainCircuit,
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "Natural Language Processing",
      "Gemini AI",
      "OCR",
      "Data Analysis",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Modern tools for responsive and user-friendly interfaces.",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Backend technologies used to create APIs and business logic.",
    icon: Server,
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "PHP",
      "REST APIs",
      "JWT Authentication",
      "SMTP",
    ],
  },
  {
    title: "Databases",
    description:
      "Relational and NoSQL databases used in my projects.",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "MariaDB",
      "SQLAlchemy",
      "Mongoose",
      "Database Design",
      "Data Modelling",
    ],
  },
  {
    title: "Tools & Platforms",
    description:
      "Development, testing, collaboration and deployment tools.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "Vercel",
      "XAMPP",
    ],
  },
  {
    title: "Software Development",
    description:
      "Core practices used when developing maintainable applications.",
    icon: Layers3,
    skills: [
      "Responsive Design",
      "API Integration",
      "Role-Based Access",
      "CRUD Operations",
      "Form Validation",
      "Agile Development",
      "Debugging",
      "Problem Solving",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute left-[5%] top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

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
            My technical toolkit
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Technologies, platforms and development practices I use to
            build complete applications.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.06] sm:p-7"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl transition-colors duration-300 group-hover:bg-violet-500/10" />

                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-500">
                    {category.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-blue-400/30 hover:text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
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