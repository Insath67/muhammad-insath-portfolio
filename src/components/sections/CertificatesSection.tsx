"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Award,
  CalendarDays,
  Clock3,
  ExternalLink,
  Eye,
  Sparkles,
  X,
} from "lucide-react";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  duration?: string;
  description: string;
  image: string;
  credentialUrl?: string;
  skills: string[];
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Python for Data Science and Machine Learning Bootcamp",
    issuer: "Udemy",
    date: "June 28, 2026",
    duration: "25 total hours",
    description:
      "Completed a comprehensive Python course covering data science, data analysis, data visualisation and machine learning concepts.",
    image:
      "/images/certificates/python-data-science-ml-bootcamp.jpg",
    credentialUrl:
      "https://ude.my/UC-59d3c516-ca26-492e-bda8-aee90b022a43",
    skills: [
      "Python",
      "Data Science",
      "Machine Learning",
      "Data Analysis",
    ],
  },
  {
    id: 2,
    title: "Upper Secondary Plus B1.2 English Course",
    issuer: "British Council — Colombo Teaching Centre",
    date: "April 7, 2023",
    description:
      "Successfully completed the Upper Secondary Plus B1.2 English language programme at the British Council Colombo Teaching Centre.",
    image:
      "/images/certificates/british-council-english-course.jpeg",
    skills: [
      "English Communication",
      "Reading",
      "Writing",
      "Speaking",
      "Listening",
    ],
  },
];

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  useEffect(() => {
    if (!selectedCertificate) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCertificate]);

  return (
    <>
      <section
        id="certificates"
        className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="pointer-events-none absolute right-[7%] top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-20 left-[5%] h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

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
              Courses and achievements
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Certificates
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
              Certificates earned through technical learning and
              professional development programmes.
            </p>
          </motion.div>

          <div className="grid gap-7 lg:grid-cols-2">
            {certificates.map((certificate, index) => (
              <motion.article
                key={certificate.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-400/30"
              >
                <button
                  type="button"
                  onClick={() =>
                    setSelectedCertificate(certificate)
                  }
                  aria-label={`View ${certificate.title}`}
                  className="relative block aspect-[16/10] w-full cursor-pointer overflow-hidden bg-white"
                >
                  <Image
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/45 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-xl border border-white/20 bg-black/50 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                      <Eye size={18} />
                      View Certificate
                    </span>
                  </div>
                </button>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300">
                      <Award size={25} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold leading-7 text-white sm:text-2xl">
                        {certificate.title}
                      </h3>

                      <p className="mt-2 font-medium text-violet-300">
                        {certificate.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-gray-400">
                    {certificate.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-gray-300">
                      <CalendarDays
                        size={15}
                        className="text-blue-400"
                      />
                      {certificate.date}
                    </span>

                    {certificate.duration && (
                      <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-gray-300">
                        <Clock3
                          size={15}
                          className="text-violet-400"
                        />
                        {certificate.duration}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCertificate(certificate)
                      }
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10 hover:text-white"
                    >
                      <Eye size={18} />
                      View Certificate
                    </button>

                    {certificate.credentialUrl && (
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/25"
                      >
                        <ExternalLink size={18} />
                        Verify Credential
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {selectedCertificate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertificate.title} preview`}
          onClick={() => setSelectedCertificate(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[26px] border border-white/15 bg-[#0d1320] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
              <div className="min-w-0 pr-4">
                <h3 className="truncate font-semibold text-white">
                  {selectedCertificate.title}
                </h3>

                <p className="mt-1 truncate text-sm text-gray-400">
                  {selectedCertificate.issuer}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate preview"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            <div className="relative min-h-0 flex-1 overflow-auto bg-black/30 p-4 sm:p-6">
              <div className="relative mx-auto min-h-[70vh] w-full">
                <Image
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} full certificate`}
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}