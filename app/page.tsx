'use client';

import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import MilestoneSection from "../components/MilestoneSection";
// import ServicesSection from "../components/ServicesSection";
// import ExperienceSection from "../components/ExperienceSection";
import ProductsSection from "../components/ProductsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import Loader from "../components/Loader"; // Custom loader component

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setFadeOut(true); // trigger fade out
    }, 2500); // start fading before fully hiding loader

    const timeout2 = setTimeout(() => {
      setIsLoading(false); // fully remove loader
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
          className={`transition-opacity duration-500 ease-in-out ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loader />
        </div>
      ) : (
        <div className="animate-fade-in">
          <Navbar />
          <Hero />
          <AboutSection />
          <MilestoneSection />
          {/* <ExperienceSection /> */}
          <ProductsSection />
          <TestimonialsSection />
          <Footer />
        </div>
      )}
    </div>
  );
}
