'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

// ✅ Fixed: Framer Motion animation config
const scrollVariants: Variants = {
  animate: {
     x: [0, -500],
    transition: {
      repeat: Infinity,
      repeatType: 'loop', // ✅ Correct type
      duration: 20,
      ease: 'linear',
    },
  },
};

const LogoCarousel = ({
  title,
  logos,
}: {
  title: string;
  logos: string[];
}) => {
  return (
    <div className="my-24">
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">
        {title}
      </h3>
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

// Static sections
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

// Placeholder logos
const clientLogos = [
  '/images/client1.jpg',
  '/images/client2.png',
  '/images/client3.jpg',
  '/images/client4.png',
  '/images/client4.png',
];

const industryLogos = [
  '/images/industry1.png',
  '/images/industry2.png',
  '/images/industry3.png',
  '/images/industry4.png',
  '/images/industry5.png',
  '/images/industry6.png',
  '/images/industry7.png',
  '/images/industry8.png'
];

const AboutSection = () => {
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
                        section.name === 'values'
                          ? 'text-gray-400'
                          : 'text-white'
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
                        section.name === 'values'
                          ? 'text-gray-400'
                          : 'text-white'
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

      <div className="px-6 max-w-6xl mx-auto">
        <LogoCarousel title="Our Clients" logos={clientLogos} />
        <LogoCarousel title="Industries We Serve" logos={industryLogos} />
      </div>

      <Footer />
    </main>
  );
};

export default AboutSection;
