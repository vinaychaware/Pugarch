'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // ❌ remove once:true so it can animate in/out multiple times
    amount: 0.3, // triggers when 30% of section is visible
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // 👈 animate out when leaving viewport
    }
  }, [isInView, controls]);

  return (
    <section className="bg-black text-white py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT TEXT */}
        <div className="flex-1">
          {/* About Us Heading */}
          <motion.h3
            className="text-xl md:text-2xl font-semibold text-purple-400 mb-3 tracking-wide"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -30 }, // exit animation
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            About Us
          </motion.h3>

          {/* Main Tagline */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 }, // exit animation
            }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            Your Technology Partner for the Future
          </motion.h2>

          {/* Description */}
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
            hidden: { opacity: 0, x: 100 }, // slide out when leaving
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
    </section>
  );
};

export default AboutUsSection;
