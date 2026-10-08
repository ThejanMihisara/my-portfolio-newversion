import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import Experience from "./Pages/Experience";
import Services from "./Pages/Services";
import ContactPage from "./Pages/Contact";
import Education from "./Pages/Education";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';
import NotFoundPage from "./Pages/404";
import { ArrowUp } from "lucide-react";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Experience />
          <Portofolio />
          <Services />
          <Education />
          <ContactPage />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2026{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Thejan™
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2026{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Thejan™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0
          ? Math.min(100, Math.round((scrollTop / scrollableHeight) * 100))
          : 0;

      setShowScrollTop(scrollTop > 300);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
         <Route path="*" element={<NotFoundPage />} /> {/* Ini route 404 */}
      </Routes>
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full border border-[#a855f7]/40 bg-[#08031f]/95 text-[0px] shadow-[0_0_28px_rgba(99,102,241,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#c084fc]/80"
        >
          <span
            className="absolute inset-0 rounded-full transition-all duration-300"
            style={{
              background: `conic-gradient(from 180deg, #a855f7 ${scrollProgress}%, rgba(255,255,255,0.08) ${scrollProgress}% 100%)`,
            }}
          />
          <span className="absolute inset-[3px] rounded-full bg-[#08031f]" />
          <span className="relative flex h-full w-full flex-col items-center justify-center text-white">
            <ArrowUp className="h-5 w-5 text-[#f5f3ff]" strokeWidth={2.4} />
            <span className="text-[10px] font-bold leading-none text-[#e9d5ff]">
              {scrollProgress}%
            </span>
          </span>
          <span className="pointer-events-none absolute right-0 bottom-[calc(100%+0.6rem)] whitespace-nowrap border border-white/80 bg-[#08031f] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
            Scroll progress: {scrollProgress}%
          </span>
          ↑
        </button>
      )}

    </BrowserRouter>
  );
}

export default App;
