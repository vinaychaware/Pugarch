'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

// ✅ Section reveal animation
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.3,
      ease: 'easeOut',
    },
  }),
}

// ✅ Logo hover pop
const logoHover = {
  hover: { scale: 1.15, rotate: 5, transition: { duration: 0.3 } },
}

const LogoCarousel = ({
  title,
  logos,
}: {
  title: string
  logos: string[]
}) => {
  return (
    <div className="my-24">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-semibold text-center mb-6"
      >
        {title}
      </motion.h3>

      {/* ✅ Continuous Marquee */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-12 px-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // Adjust speed here
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={index}
              variants={logoHover}
              whileHover="hover"
              className="w-[100px] h-[100px] bg-white rounded-full p-3 shadow-md flex items-center justify-center shrink-0"
            >
              <Image
                src={logo}
                alt={`logo-${index}`}
                width={70}
                height={70}
                className="object-contain rounded-full grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// Static About Sections
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
]

// Logos
const clientLogos = [
  '/images/client1.jpg',
  '/images/client2.png',
  '/images/client3.jpg',
  '/images/client4.png',
  '/images/client4.png',
]

const industryLogos = [
  '/images/industry1.png',
  '/images/industry2.png',
  '/images/industry3.png',
  '/images/industry4.png',
  '/images/industry5.png',
  '/images/industry6.png',
  '/images/industry7.png',
  '/images/industry8.png',
]

const AboutSection = () => {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* About Sections */}
      <section className="py-24 px-6 min-h-screen">
        <div className="max-w-5xl mx-auto space-y-40">
          {sections.map((section, index) => (
            <motion.div
              key={section.name}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col items-center text-center gap-6"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
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
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-300 max-w-2xl text-lg leading-relaxed"
              >
                {section.content}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Logos */}
      <div className="px-6 max-w-6xl mx-auto">
        <LogoCarousel title="Our Clients" logos={clientLogos} />
        <LogoCarousel title="Industries We Serve" logos={industryLogos} />
      </div>

      <Footer />
    </main>
  )
}

export default AboutSection
