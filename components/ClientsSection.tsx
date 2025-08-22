'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// ✅ Logo hover pop
const logoHover = {
  hover: { scale: 1.15, rotate: 5, transition: { duration: 0.3 } },
}

const LogoCarousel = ({ title, logos }: { title: string; logos: string[] }) => {
  return (
    <div className="my-24">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100"
      >
        {title}
      </motion.h3>

      {/* ✅ Marquee + Scrollbar with theme colors */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 dark:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-700">
        <motion.div
          className="flex gap-12 px-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={index}
              variants={logoHover}
              whileHover="hover"
              className="w-[100px] h-[100px] bg-white dark:bg-gray-800 rounded-full p-3 shadow-md flex items-center justify-center shrink-0 hover:shadow-lg hover:shadow-gray-400/40 dark:hover:shadow-gray-900/60 transition"
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

const ClientsSection = () => {
  const clientLogos = [
    '/images/client1.jpg',
    '/images/client2.png',
    '/images/client3.jpg',
    '/images/client4.png',
    '/images/client5.png',
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

  return (
    <div className="px-6 max-w-6xl mx-auto">
      <LogoCarousel title="Our Clients" logos={clientLogos} />
      <LogoCarousel title="Industries We Serve" logos={industryLogos} />
    </div>
  )
}

export default ClientsSection
