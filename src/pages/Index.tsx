
import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Equipment from "../components/Equipment";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    const handleAnimations = () => {
      const appearElements = document.querySelectorAll(".appear");
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: "0px 0px -100px 0px", 
        threshold: 0.1
      });
      
      appearElements.forEach(element => {
        observer.observe(element);
      });
      
      return () => {
        appearElements.forEach(element => {
          observer.unobserve(element);
        });
      };
    };
    
    handleAnimations();
  }, []);
  
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Equipment />
        <Process />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
