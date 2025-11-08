import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disableMutationObserver: true,
    });

    const timer = setTimeout(() => AOS.refreshHard(), 300);

    const saveScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };
    window.addEventListener("beforeunload", saveScroll);

    const restoreScroll = () => {
      const savedY = sessionStorage.getItem("scrollPosition");
      if (savedY) {
        window.scrollTo({
          top: parseFloat(savedY),
          behavior: "instant",
        });
      }
    };
    window.addEventListener("load", restoreScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeunload", saveScroll);
      window.removeEventListener("load", restoreScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div data-aos="zoom-in">
        <Hero />
      </div>

      <div data-aos="fade-up">
        <About />
      </div>

      <div data-aos="fade-up">
        <Skills />
      </div>

      <div data-aos="fade-up">
        <Projects />
      </div>

      <div data-aos="fade-up">
        <Contact />
      </div>

      <div data-aos="fade-in">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
