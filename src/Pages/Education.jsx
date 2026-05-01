import React, { useEffect, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GraduationCap, BookOpen, University } from "lucide-react";

const educationData = [
  {
    period: "2020 - 2021",
    title: "Primary Education",
    institution: "Devananda College, Ambalangoda",
    description: "G.C.E (Ordinary Level) Examination with ICT",
    achievement: "Five \"A\" passes, three \"B\" passes, and one \"C\" pass",
    icon: BookOpen,
    side: "left",
    color: "from-[#06b6d4] to-[#0891b2]",
    glowColor: "rgba(6,182,212,0.4)",
  },
  {
    period: "2021 - 2024",
    title: "Secondary Education",
    institution: "Aloysius College, Galle",
    description: "G.C.E (Advanced Level), Physical Science Stream",
    achievement: "Three \"C\" passes",
    icon: GraduationCap,
    side: "right",
    color: "from-[#a855f7] to-[#6366f1]",
    glowColor: "rgba(168,85,247,0.4)",
  },
  {
    period: "2024 - Present",
    title: "University",
    institution: "SLIIT City Uni (SCU), Colombo 3",
    description: "BSc (Hons) Computer Science",
    achievement: "Currently Pursuing",
    icon: University,
    side: "left",
    color: "from-[#06b6d4] to-[#0891b2]",
    glowColor: "rgba(6,182,212,0.4)",
  },
];

const TimelineCard = memo(({ item, index }) => {
  const Icon = item.icon;
  const isLeft = item.side === "left";

  return (
    <div
      className={`relative flex items-center w-full mb-12 ${
        isLeft ? "flex-row-reverse md:flex-row" : "flex-row-reverse"
      }`}
      data-aos={isLeft ? "fade-right" : "fade-left"}
      data-aos-duration="800"
      data-aos-delay={index * 150}
    >
      {/* Card */}
      <div
        className={`w-full md:w-5/12 ${
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <div
          className="relative group rounded-2xl border border-cyan-400/30 bg-[#030014]/80 backdrop-blur-md p-6 transition-all duration-500 hover:scale-[1.02] hover:border-cyan-400/70 overflow-hidden"
          style={{
            boxShadow: `0 0 20px ${item.glowColor}30, inset 0 0 20px ${item.glowColor}05`,
          }}
        >
          {/* Glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
            style={{
              boxShadow: `0 0 40px ${item.glowColor}50`,
            }}
          />

          {/* Top gradient line */}
          <div
            className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
          />

          <div className="flex items-start gap-4">
            <div
              className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
              style={{ boxShadow: `0 0 20px ${item.glowColor}60` }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-cyan-400 text-sm font-semibold mb-2">
                {item.institution}
              </p>
              <p className="text-gray-400 text-sm mb-1">{item.description}</p>
              <p className="text-gray-500 text-xs italic">{item.achievement}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Center dot + period */}
      <div className="hidden md:flex flex-col items-center w-2/12 relative z-10">
        <div
          className="w-5 h-5 rounded-full border-2 border-cyan-400 bg-[#030014] shadow-lg flex-shrink-0"
          style={{ boxShadow: `0 0 15px ${item.glowColor}, 0 0 30px ${item.glowColor}50` }}
        />
        <span
          className={`absolute text-xs font-bold text-cyan-400 whitespace-nowrap ${
            isLeft ? "right-[60%] mr-2" : "left-[60%] ml-2"
          } top-0 translate-y-[-2px]`}
        >
          {item.period}
        </span>
      </div>

      {/* Mobile period label */}
      <div className="md:hidden flex-shrink-0 mr-4 flex flex-col items-center">
        <div
          className="w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#030014]"
          style={{ boxShadow: `0 0 12px ${item.glowColor}` }}
        />
        <span className="text-[10px] font-bold text-cyan-400 mt-1 writing-mode-vertical whitespace-nowrap rotate-90 origin-center mt-8 mb-4">
          {item.period}
        </span>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block w-5/12" />
    </div>
  );
});

const EducationPage = () => {
  useEffect(() => {
    AOS.init({ once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div
      id="Education"
      className="min-h-screen text-white px-[5%] sm:px-[5%] lg:px-[10%] py-16 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div
        className="text-center mb-16"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <div className="inline-block relative group">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Education
          </h2>
          <div className="mt-2 h-1 w-full bg-gradient-to-r from-[#06b6d4] to-[#a855f7] rounded-full" />
        </div>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
          My academic journey that shaped my passion for technology.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical center line — desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />

        {educationData.map((item, index) => (
          <TimelineCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default memo(EducationPage);
