'use client';

import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

type Section = {
  name: string;
  title: string;
  icon: string;
  content: string;
};

const sections: Section[] = [
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

// Shared variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 },
  },
};

// Top section slide-ins
const leftSlide: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const rightSlide: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

// ✅ Child component so hooks aren't inside a map loop
function MVVItem({ section, index }: { section: Section; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="flex flex-col items-center text-center gap-8"
    >
      <div className="flex items-center gap-6">
        {index % 2 === 0 ? (
          <>
            <h2
              className={`text-5xl font-extrabold tracking-wide ${
                section.name === 'values' ? 'text-gray-400' : 'text-white'
              }`}
            >
              {section.title}
            </h2>
            <div className="p-4 w-16 h-16 rounded-xl border border-violet-400/40 shadow-[0_0_25px_rgba(139,92,246,0.6)]">
              <img
                src={section.icon}
                alt={`${section.title} Icon`}
                className="w-full h-full object-contain"
              />
            </div>
          </>
        ) : (
          <>
            <div className="p-4 w-16 h-16 rounded-xl border border-violet-400/40 shadow-[0_0_25px_rgba(139,92,246,0.6)]">
              <img
                src={section.icon}
                alt={`${section.title} Icon`}
                className="w-full h-full object-contain"
              />
            </div>
            <h2
              className={`text-5xl font-extrabold tracking-wide ${
                section.name === 'values' ? 'text-gray-400' : 'text-white'
              }`}
            >
              {section.title}
            </h2>
          </>
        )}
      </div>

      <motion.p
        variants={paragraphVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-gray-300 max-w-3xl text-lg leading-relaxed"
      >
        {section.content}
      </motion.p>
    </motion.div>
  );
}

export default function AboutSection() {
  // Top block animation
  const topRef = useRef<HTMLDivElement | null>(null);
  const topInView = useInView(topRef, { once: false, amount: 0.3 });

  return (
    <section className="bg-black text-white py-24 px-6">
      {/* Heading ABOVE the text/image */}
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-6 text-violet-300/90 text-sm tracking-[5 em] uppercase text-center md:text-left">
          About Us
        </h1>

        {/* Top Section (Headline + Body + Image) */}
        <div
          ref={topRef}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Left: text */}
          <motion.div
            variants={leftSlide}
            initial="hidden"
            animate={topInView ? 'visible' : 'hidden'}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Your Technology Partner for the Future
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              PugArch Technology Pvt. Ltd. is a forward-thinking IT solutions provider,
              specializing in application development, technology consultancy, and
              resource augmentation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded with the vision to deliver intelligent, scalable, and user-friendly
              solutions, we help organizations across industries embrace the power of
              digital transformation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a blend of creativity, technical precision, and client-focused
              strategy, every project we deliver meets the highest standards of
              performance, security, and usability.
            </p>
          </motion.div>

          {/* Right: image */}
          <motion.div
            variants={rightSlide}
            initial="hidden"
            animate={topInView ? 'visible' : 'hidden'}
            className="flex-1 flex justify-center"
          >
            <img
              src="/images/tab.png"
              alt="Tablet showcasing technology"
              className="w-[400px] md:w-[500px] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <div className="mt-32 max-w-5xl mx-auto space-y-28">
        {sections.map((section, index) => (
          <MVVItem key={section.name} section={section} index={index} />
        ))}
      </div>
    </section>
  );
}
