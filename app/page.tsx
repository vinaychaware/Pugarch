'use client';

import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero, { WhyPugArch } from "../components/Hero";
import AboutSection from "../components/AboutSection";
// import MilestoneSection from "../components/MilestoneSection";
import ServicesSection from "../components/ServicesSection"; 
import ProductsSection from "../components/ProductsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const timeout2 = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-x-hidden">
      {isLoading ? (
        <div
          className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out bg-black z-50 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loader />
        </div>
      ) : (
        <div className="animate-fade-in">
          <Navbar />
          <Hero />
          <WhyPugArch />
          <AboutSection />
          {/* <MilestoneSection /> */}
          <ServicesSection /> 
          <ProductsSection />
          <TestimonialsSection />
          <Footer />
        </div>
      )}
    </div>
  );
}
