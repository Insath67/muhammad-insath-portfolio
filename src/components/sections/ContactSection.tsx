"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const portfolioEmail = "insathmansoorofficial@gmail.com";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const emailSubject = encodeURIComponent(
      subject || `Portfolio enquiry from ${name}`,
    );

    const emailBody = encodeURIComponent(
      `Hello Muhammad Insath,

My name is ${name}.
My email address is ${senderEmail}.

${message}

Regards,
${name}`,
    );

    window.location.href = `mailto:${portfolioEmail}?subject=${emailSubject}&body=${emailBody}`;

    setIsSubmitted(true);

    window.setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute left-[5%] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-20 right-[7%] h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

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
            Let&apos;s connect
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
            Have an internship opportunity, project idea or collaboration
            in mind? Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20">
                <MessageSquareText size={27} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Let&apos;s build something meaningful
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                I am currently seeking AI/ML internship opportunities and
                am also open to full-stack development projects,
                collaborations and professional networking.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${portfolioEmail}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                      <Mail size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">Email</p>

                      <p className="mt-1 truncate text-sm font-medium text-gray-200">
                        {portfolioEmail}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300"
                  />
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Location</p>

                    <p className="mt-1 text-sm font-medium text-gray-200">
                      Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-sm font-medium text-gray-300">
                  Connect with me
                </p>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/insath67"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:text-blue-300"
                  >
                    <FaGithub size={21} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/muhammad-insath-20b070282"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:text-blue-300"
                  >
                    <FaLinkedinIn size={20} />
                  </a>

                  <a
                    href={`mailto:${portfolioEmail}`}
                    aria-label="Send email"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:text-blue-300"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <p className="text-sm font-medium text-blue-300">
              Send a message
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              Tell me about your opportunity
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              Complete the form below. Your default email application will
              open with the message prepared.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-400/50 focus:bg-white/[0.04] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-400/50 focus:bg-white/[0.04] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Internship, collaboration or project"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-400/50 focus:bg-white/[0.04] focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-400/50 focus:bg-white/[0.04] focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
              >
                <Send
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
                Send Message
              </button>

              {isSubmitted && (
                <div className="flex items-start gap-3 rounded-xl border border-green-400/20 bg-green-500/10 p-4 text-sm text-green-300">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0"
                  />

                  <p>
                    Your email application should open with the message
                    prepared.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}