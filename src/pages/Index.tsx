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
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen">
      <div data-aos="zoom-in"><Navbar /></div>
      <div data-aos="zoom-in"><Hero /></div>
      <div data-aos="fade-up"><About /></div>
      <div data-aos="fade-up"><Skills /></div>
      <div data-aos="fade-up"><Projects /></div>
      <div data-aos="fade-up"><Contact /></div>
      <div data-aos="fade-in"><Footer /></div>
    </div>
  );
};

export default Index;
