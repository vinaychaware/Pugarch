'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// Animation for auto-scrolling carousel
const scrollVariants = {
  animate: {
    x: ['0%', '-50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear',
      },
    },
  },
};

// Logo Carousel Component
type LogoCarouselProps = {
  title: string;
  logos: string[];
};

const LogoCarousel: React.FC<LogoCarouselProps> = ({ title, logos }) => {
  return (
    <div className="my-24">
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">{title}</h3>
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-12 px-6"
          variants={scrollVariants}
          animate="animate"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="w-[100px] h-[100px] bg-white rounded-full p-3 shadow-md flex items-center justify-center shrink-0"
            >
              <Image
                src={logo}
                alt={`logo-${index}`}
                width={70}
                height={70}
                className="object-contain rounded-full grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Content Sections
const sections = [
  {
    name: 'mission',
    title: 'MISSION',
    icon: '/images/mission.png',
    content:
      'Our mission is to make life of the people around us better and safer through technology and innovation. We strive to create solutions that not only solve problems but also enhance the quality of life for our community and beyond.',
  },
  {
    name: 'vision',
    title: 'VISION',
    icon: '/images/vision.png',
    content:
      'Our vision is to be a world leader in technology solution provider to influence growth and development of the people. We envision a future where technology seamlessly integrates with human needs to create unprecedented opportunities for growth.',
  },
  {
    name: 'values',
    title: 'VALUES',
    icon: '/images/mission.png',
    content:
      'At the heart of everything we do is a commitment to purposeful innovation, human-centric design, and meaningful impact. We believe in solving real problems through collaboration, empathy, and forward-thinking approach.',
  },
];

// Logo image paths (should be in /public/logos/)
const clientLogos = [
  '/logos/client1.png',
  '/logos/client2.png',
  '/logos/client3.png',
  '/logos/client4.png',
  '/logos/client5.png',
];

const industryLogos = [
  '/logos/industry1.png',
  '/logos/industry2.png',
  '/logos/industry3.png',
  '/logos/industry4.png',
  '/logos/industry5.png',
];

// Main About Section
const AboutSection: React.FC = () => {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <section className="py-24 px-6 min-h-screen">
        <div className="max-w-5xl mx-auto space-y-40">
          {sections.map((section, index) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center text-center gap-6"
            >
              <div className="flex items-center gap-4">
                {index % 2 === 0 ? (
                  <>
                    <h2
                      className={`text-4xl font-extrabold tracking-wide ${
                        section.name === 'values' ? 'text-gray-400' : 'text-white'
                      }`}
                    >
                      {section.title}
                    </h2>
                    <Image
                      src={section.icon}
                      alt={`${section.title} Icon`}
                      width={48}
                      height={48}
                      className="rounded-md"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={section.icon}
                      alt={`${section.title} Icon`}
                      width={48}
                      height={48}
                      className="rounded-md"
                    />
                    <h2
                      className={`text-4xl font-extrabold tracking-wide ${
                        section.name === 'values' ? 'text-gray-400' : 'text-white'
                      }`}
                    >
                      {section.title}
                    </h2>
                  </>
                )}
              </div>
              <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Logo carousels */}
      <div className="px-6 max-w-6xl mx-auto">
        <LogoCarousel title="Our Clients" logos={clientLogos} />
        <LogoCarousel title="Industries We Serve" logos={industryLogos} />
      </div>

      <Footer />
    </main>
  );
};

export default AboutSection;
