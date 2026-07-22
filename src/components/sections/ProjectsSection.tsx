"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  HeartPulse,
  ReceiptText,
  ShoppingBag,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: typeof HeartPulse;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: string;
  gradient: string;
  iconGradient: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "MedInsight AI",
    category: "AI-Powered Healthcare Platform",
    description:
      "A full-stack AI-powered healthcare platform that helps patients understand medical reports, receive AI-generated insights, request doctor consultations and manage health updates securely.",
    icon: HeartPulse,
    technologies: [
      "Next.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Gemini AI",
      "SQLAlchemy",
      "JWT",
      "OCR",
    ],
    features: [
      "AI-generated report summaries and key findings",
      "Suggested questions for doctor consultations",
      "Patient, doctor and admin role-based workflows",
      "Doctor approval and consultation management",
      "AI Doctor chat and report comparison",
      "Email verification and secure authentication",
    ],
    githubUrl: "https://lnkd.in/gJWxiHTY",
    liveUrl: "https://lnkd.in/gnxi2uGV",
    featured: true,
    status: "Live",
    gradient:
      "from-rose-500/25 via-blue-500/15 to-violet-500/25",
    iconGradient: "from-rose-500 to-violet-500",
  },
  {
    id: 2,
    title: "BizFlow CRM",
    category: "MERN Business Management System",
    description:
      "A modern full-stack MERN business management system built for small businesses to manage customers, items, quotations, invoices, payments, company settings and professionally branded business PDFs.",
    icon: ReceiptText,
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    features: [
      "Customer, item and service management",
      "Quotation, invoice and payment management",
      "Branded quotation and invoice PDF generation",
      "Email verification and password reset codes",
      "Admin and user role support",
      "Company branding and business dashboard",
    ],
    githubUrl: "https://github.com/Insath67/bizflow-crm",
    liveUrl: "https://bizflow-crm-frontend.vercel.app",
    featured: true,
    status: "Live",
    gradient:
      "from-emerald-500/20 via-blue-500/10 to-cyan-500/20",
    iconGradient: "from-emerald-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Smart Bazaar",
    category: "MERN E-Commerce Web Application",
    description:
      "A modern MERN stack e-commerce platform designed with a premium shopping experience, including authentication, product browsing, cart management, wishlists, order processing and admin product management.",
    icon: ShoppingBag,
    technologies: [
      "React",
      "Redux Toolkit",
      "Material UI",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
    features: [
      "User registration, login and OTP verification",
      "Product browsing, sorting and product details",
      "Shopping cart and wishlist management",
      "Checkout, orders and user profile",
      "Admin product and order management",
      "Premium responsive shopping interface",
    ],
    githubUrl: "",
    liveUrl: "https://smart-bazaar-frontend.vercel.app",
    featured: true,
    status: "Live",
    gradient:
      "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    iconGradient: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    title: "Uni-Bond",
    category: "University Networking Platform",
    description:
      "A full-stack web application that connects university students, instructors and company administrators through opportunities, user profiles, tasks, requests and role-based interaction workflows.",
    icon: UsersRound,
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
    ],
    features: [
      "Student, instructor and company admin roles",
      "Opportunity and user profile management",
      "Task and request workflows",
      "Post interaction features",
      "FastAPI Swagger API documentation",
      "PostgreSQL integration and Alembic migrations",
    ],
    githubUrl: "",
    liveUrl: "",
    featured: false,
    status: "Completed",
    gradient:
      "from-blue-500/25 via-cyan-500/10 to-violet-500/25",
    iconGradient: "from-blue-500 to-violet-500",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute right-[5%] top-32 h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-20 left-[5%] h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

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
            Selected development work
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
            A collection of AI, healthcare, business, e-commerce and
            university networking applications created using modern
            full-stack technologies.
          </p>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/30"
              >
                <div
                  className={`relative flex min-h-[240px] items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient} p-8`}
                >
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

                  <div className="absolute left-6 top-6">
                    {project.featured && (
                      <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xl">
                        Featured Project
                      </span>
                    )}
                  </div>

                  <div className="absolute right-6 top-6">
                    <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-xl">
                      {project.status}
                    </span>
                  </div>

                  <div
                    className={`relative flex h-28 w-28 items-center justify-center rounded-[30px] bg-gradient-to-br ${project.iconGradient} text-white shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon size={52} strokeWidth={1.7} />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm font-medium text-gray-300">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-gray-400">
                        {project.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={24}
                      className="mt-1 shrink-0 text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300"
                    />
                  </div>

                  <div className="mt-6 space-y-3">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs font-medium text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10 hover:text-white"
                      >
                        <FaGithub size={18} />
                        GitHub
                      </a>
                    ) : (
                      <div className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-gray-600">
                        <FaGithub size={18} />
                        Repository Soon
                      </div>
                    )}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/25"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    ) : (
                      <div className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-gray-600">
                        <ExternalLink size={18} />
                        Demo Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/insath67"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10 hover:text-white"
          >
            <FaGithub size={19} />
            View More on GitHub
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}