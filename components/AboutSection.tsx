'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

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

const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, delay: i * 0.3, ease: 'easeOut' },
    }),
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <section className="bg-black text-white py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT TEXT */}
        <div className="flex-1">
          <motion.h3
            className="text-xl md:text-2xl font-semibold text-purple-400 mb-3 tracking-wide"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -30 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            About Us
          </motion.h3>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            Your Technology Partner for the Future
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-300 leading-relaxed"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <span className="font-semibold text-white">
              PugArch Technology Pvt. Ltd.
            </span>{' '}
            is a forward-thinking IT solutions provider, specializing in
            application development, technology consultancy, and resource
            augmentation.
            <br /><br />
            Founded with the vision to deliver intelligent, scalable, and
            user-friendly solutions, we help organizations across industries
            embrace the power of digital transformation.
            <br /><br />
            With a blend of creativity, technical precision, and client-focused
            strategy, every project we deliver meets the highest standards of
            performance, security, and usability.
          </motion.p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 flex justify-center"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="/images/tab.png"
            alt="About Us"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* 🔹 Mission / Vision / Values Section */}
      <div className="mt-32 max-w-5xl mx-auto space-y-28">
        {sections.map((section, index) => (
          <motion.div
            key={section.name}
            variants={sectionVariants}
            initial="hidden"
            animate={controls}
            custom={index}
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

            {/* ✅ Fixed paragraph animation */}
            <motion.p
              variants={paragraphVariants}
              initial="hidden"
              animate={controls}
              className="text-gray-300 max-w-3xl text-lg leading-relaxed"
            >
              {section.content}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
