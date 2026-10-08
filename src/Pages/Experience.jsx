import React, { memo } from "react";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  Rocket,
} from "lucide-react";

const EXPERIENCE_SKILLS = [
  "Next.js",
  "React.js",
  "Laravel",
  "MySQL",
  "Flutter",
  "API Integration",
  "Tailwind CSS",
  "POS System",
  "ERP System",
  "Deployment",
  "cPanel",
];

const EXPERIENCE_POINTS = [
  "Contributing to production-focused POS and ERP modules with modern frontend and backend technologies.",
  "Building user interfaces and application flows with Next.js, React.js, Tailwind CSS, and Laravel.",
  "Working with MySQL databases, API integrations, and practical business requirements from real projects.",
  "Strengthening delivery skills through debugging, deployment support, code improvements, and team collaboration.",
];

const Experience = () => {
  return (
    <section
      id="Experience"
      className="relative overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] pt-6 pb-16 sm:pt-8 sm:pb-20 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center" data-aos="fade-up" data-aos-duration="900">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Experience
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Hands-on engineering experience building practical software for real business needs.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-8 bottom-8 hidden md:block w-px bg-gradient-to-b from-[#6366f1] via-[#a855f7] to-transparent" />

          <div
            className="relative rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-lg p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:border-[#a855f7]/40 hover:shadow-purple-500/10"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1]/10 via-[#a855f7]/10 to-cyan-500/5" />

            <div className="grid gap-8 lg:grid-cols-[1.1fr_1.6fr] lg:items-start">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] shadow-lg shadow-purple-500/20">
                    <BriefcaseBusiness className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-[#c4b5fd]">
                      Current Role
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-100">
                      Software Engineering Intern
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-[#a855f7]" />
                    <span>Applantics (PVT) Ltd</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-[#a855f7]" />
                    <span>May 2026 - Present</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Rocket className="h-5 w-5 text-[#a855f7]" />
                    <span>6 months internship experience</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className="h-5 w-5 text-[#c4b5fd]" />
                    <h4 className="text-lg font-semibold text-gray-100">
                      What I Work On
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {EXPERIENCE_POINTS.map((point) => (
                      <li key={point} className="flex gap-3 text-sm sm:text-base text-gray-400 leading-relaxed">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#a855f7]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="h-5 w-5 text-[#c4b5fd]" />
                    <h4 className="text-lg font-semibold text-gray-100">
                      Technologies
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {EXPERIENCE_SKILLS.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-2 text-sm text-[#e9d5ff]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);
