"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";

const sections = [
  {
    name: "mission",
    title: "MISSION",
    content:
      "Our mission is to make life of the people around us better and safer through technology and innovation.",
    icon: "/video/mission.mp4",
  },
  {
    name: "vision",
    title: "VISION",
    content:
      "Our vision is to be a world leader in technology solution provider to influence growth and development of the people.",
    icon: "/video/vission.mp4",
  },
  {
    name: "values",
    title: "VALUES",
    content:
      "At the heart of everything we do is a commitment to purposeful innovation, human-centric design, and meaningful impact. We believe in solving real problems through collaboration, empathy, and scalable solutions that grow with our clients. Our culture is built on trust, creativity, and the drive to make technology feel personal and powerful.",
    icon: "/video/values.mp4",
  },
];

const SectionBlock = ({ section, index }: { section: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center gap-6"
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
    >
      {/* Icon + Title */}
      <div className="flex flex-col items-center gap-4">
        <div className="p-6 w-28 h-28 rounded-2xl border border-violet-400/40 shadow-[0_0_30px_rgba(139,92,246,0.35)]">
          <video
            src={section.icon}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h3
          className={`text-3xl font-bold ${
            section.name === "values" ? "text-gray-400" : "text-white"
          }`}
        >
          {section.title}
        </h3>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-gray-300 max-w-3xl text-lg leading-relaxed"
      >
        {section.content}
      </motion.p>
    </motion.div>
  );
};

export default function AboutSection() {
  return (
    <>
      <Navbar />

      <section className="py-32 px-6 min-h-screen bg-gradient-to-b from-black via-black to-violet-950/20">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-24">
          {/* 🔹 Top Vertical Titles (MISSION / VISION / VALUES) */}
          <div className="flex flex-col items-center gap-12">
            {sections.map((section) => (
              <div key={section.name} className="flex flex-col items-center gap-3">
                <span
                  className={`text-2xl font-bold ${
                    section.name === "values" ? "text-gray-400" : "text-white"
                  }`}
                >
                  {section.title}
                </span>
                <div className="p-4 w-14 h-14 rounded-xl border border-violet-400/40 shadow-[0_0_20px_rgba(139,92,246,0.35)]">
                  <video
                    src={section.icon}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 🔹 Scroll Sections */}
          <div className="space-y-40">
            {sections.map((section, index) => (
              <SectionBlock key={section.name} section={section} index={index} />
            ))}
          </div>
        </div> 
      </section>
    </>
  );
}
