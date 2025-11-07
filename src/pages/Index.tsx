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
    // ✅ Inisialisasi AOS
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disableMutationObserver: true,
    });

    const timer = setTimeout(() => AOS.refreshHard(), 300);

    // ✅ Simpan posisi scroll sebelum reload
    const saveScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };
    window.addEventListener("beforeunload", saveScroll);

    // ✅ Setelah reload, kembalikan posisi scroll ke sebelumnya
    const restoreScroll = () => {
      const savedY = sessionStorage.getItem("scrollPosition");
      if (savedY) {
        window.scrollTo({
          top: parseFloat(savedY),
          behavior: "instant", // langsung tanpa animasi biar tidak bergeser
        });
      }
    };
    window.addEventListener("load", restoreScroll);

    // Bersihkan listener
    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeunload", saveScroll);
      window.removeEventListener("load", restoreScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div data-aos="zoom-in" data-aos-delay="150">
        <Hero />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <About />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <Skills />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Projects />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Contact />
      </div>

      <div data-aos="fade-in" data-aos-delay="200">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
