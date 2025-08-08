'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3, // triggers when 30% of section is visible
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section className="bg-black text-white py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT TEXT */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            At <span className="font-semibold text-white">PugArch Technology Private Limited</span>, we’re more than just a technology company – we’re strategic partners in navigating the ever-evolving landscape of IT products and services.
            <br /><br />
            With a relentless commitment to innovation, excellence, and customer satisfaction, we empower businesses of all sizes to thrive in the digital age.
          </p>
        </div>

        {/* RIGHT IMAGE WITH SLIDE-IN ANIMATION */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
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
