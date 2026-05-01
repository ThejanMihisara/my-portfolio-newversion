import React, { useEffect, useState, useCallback, memo } from "react";
import { supabase } from "../supabase"; // Import the supabase client from supabase.js
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Header Component
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
        About Me
      </h2>
    </div>
    <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2">
      A passionate developer crafting innovative, user-friendly solutions.
    </p>
  </div>
));

// Profile Image Component
const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div
      className="relative group"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
          <img
            src="/photo.png"
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
));

// StatCard Component for displaying data
const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <span className="text-4xl font-bold text-white">{value}</span>
      </div>
      <div>
        <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">{label}</p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">{description}</p>
          <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  const [projectsCount, setProjectsCount] = useState(0);  // Store project count
  const [certificatesCount, setCertificatesCount] = useState(0);  // Store certificate count
  const [experience, setExperience] = useState(0);  // Store experience in years
  const [isLoading, setIsLoading] = useState(true);  // Loading state

  // Fetch project and certificate counts from Supabase
  const fetchCounts = useCallback(async () => {
    setIsLoading(true);  // Set loading to true before fetching

    try {
      // Fetching project count from Supabase
      const { data: projectsData, error: projectsError } = await supabase
        .from("projects")
        .select("*", { count: "exact" });

      // Fetching certificate count from Supabase
      const { data: certificatesData, error: certificatesError } = await supabase
        .from("certificates")
        .select("*", { count: "exact" });

      if (projectsError || certificatesError) {
        throw new Error("Error fetching counts");
      }

      // Calculate years of experience
      const startDate = new Date("2024-01-06");  // The start date when the experience began
      const today = new Date();
      const experienceYears = today.getFullYear() - startDate.getFullYear() - 
        (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

      // Update the states with the fetched counts and calculated experience
      setProjectsCount(projectsData.length);
      setCertificatesCount(certificatesData.length);
      setExperience(experienceYears);  // Set the calculated experience

    } catch (error) {
      console.error("Error fetching data from Supabase:", error.message);
    } finally {
      setIsLoading(false);  // Set loading to false after fetch completes
    }
  }, []);

  // Fetch the data when the component mounts
  useEffect(() => {
    fetchCounts();
  }, [fetchCounts]);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="About">
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I'm
              </span>
              <span
                className="block mt-2 text-gray-200"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                Thejan Mihisara
              </span>
            </h2>

            <p
              className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              A Computer Science undergraduate and aspiring Full-Stack Developer with a strong interest in building scalable web applications and real-world solutions. Experienced in MERN stack development and continuously exploring AI/ML and DevOps. A collaborative learner passionate about innovation, problem-solving, and contributing to impactful technology projects.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <a href="https://drive.google.com/file/d/154JD-pzDbEtx2DC2t6dzZggQphUNddA8/view?usp=sharing" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                </button>
              </a>
              <a href="#Portofolio" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10"
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>

        <a href="#Portofolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                <StatCard
                  icon={Code}
                  color="from-[#6366f1] to-[#a855f7]"
                  value={projectsCount}
                  label="Total Projects"
                  description="Innovative web solutions crafted"
                  animation="fade-right"
                />
                <StatCard
                  icon={Award}
                  color="from-[#a855f7] to-[#6366f1]"
                  value={certificatesCount}
                  label="Certificates"
                  description="Professional skills validated"
                  animation="fade-up"
                />
                <StatCard
                  icon={Globe}
                  color="from-[#6366f1] to-[#a855f7]"
                  value={experience}
                  label="Years of Experience"
                  description="Continuous learning journey"
                  animation="fade-left"
                />
              </>
            )}
          </div>
        </a>
      </div>
    </div>
  );
};

export default memo(AboutPage);