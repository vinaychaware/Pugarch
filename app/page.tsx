'use client';

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero, { WhyPugArch } from "../components/Hero";
import AboutSection from "../components/AboutSection";
// import MilestoneSection from "../components/MilestoneSection";
import ServicesSection from "../components/ServicesSection"; 
import ProductsSection from "../components/ProductsSection";
import ClientsSection from "../components/ClientsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { ArrowUp } from "lucide-react"; 

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => setFadeOut(true), 2500);
    const timeout2 = setTimeout(() => setIsLoading(false), 3000);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-x-hidden scroll-smooth">
      {isLoading ? (
        <div
          className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out bg-black z-50 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loader />
        </div>
      ) : (
        <div className="animate-fade-in relative">
          <Navbar />
          <section id="home">
            <Hero />
          </section>
          <WhyPugArch />
          <section id="about">
            <AboutSection />
          </section>
          {/* <MilestoneSection /> */}
          <section id="services">
            <ServicesSection />
          </section>
          <section id="products">
            <ProductsSection />
          </section>
          <section id="clients">
            <ClientsSection />
          </section>
          <section id="testimonials">
            <TestimonialsSection />
          </section>
          <Footer />

          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 p-3 rounded-full bg-violet-600 text-white shadow-lg hover:bg-violet-700 transition-all duration-300 z-50"
            >
              <ArrowUp size={20} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
