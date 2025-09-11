'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// 🔹 Logo Carousel (Clients)
const LogoCarousel = ({
  logos,
  reverse = false,
}: {
  logos: string[]
  reverse?: boolean
}) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-12 px-6 w-max ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.15,
              rotate: 3,
              y: -6,
              boxShadow: '0px 0px 18px rgba(126,58,242,0.6)',
              transition: { duration: 0.4, ease: 'easeOut' },
            }}
            className="w-[90px] md:w-[110px] h-[90px] md:h-[110px] 
                       bg-white dark:bg-gray-900 
                       rounded-full p-4 shadow-md 
                       flex items-center justify-center shrink-0 
                       hover:shadow-purple-500/40 
                       cursor-pointer transition"
          >
            <Image
              src={logo}
              alt={`logo-${index}`}
              width={80}
              height={80}
              className="object-contain rounded-full transition duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// 🔹 Industries Grid
const IndustryGrid = ({ logos }: { logos: string[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-center p-4 
                     bg-white dark:bg-gray-900 rounded-2xl shadow-md 
                     hover:shadow-purple-500/30 cursor-pointer"
        >
          <Image
            src={logo}
            alt={`industry-${index}`}
            width={80}
            height={80}
            className="object-contain mb-3 transition duration-500 hover:scale-110"
          />
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Industry {index + 1}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

const ClientsSection = () => {
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

  return (
    <div className="px-6 max-w-7xl mx-auto my-24">
      {/* ✨ Clients */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-6 
                   tracking-wide bg-gradient-to-r from-[#7E3AF2] to-[#9E7CFF] 
                   bg-clip-text text-transparent"
      >
        Our Clients
      </motion.h3>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        We’re proud to collaborate with industry-leading organizations that
        trust us to deliver innovation and results.
      </p>
      <LogoCarousel logos={clientLogos} />

      {/* ✨ Industries */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mt-24 mb-6 
                   tracking-wide bg-gradient-to-r from-[#7E3AF2] to-[#9E7CFF] 
                   bg-clip-text text-transparent"
      >
        Industries We Serve
      </motion.h3>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Our solutions span across diverse industries, empowering businesses to
        operate smarter, faster, and more efficiently.
      </p>
      <IndustryGrid logos={industryLogos} />
    </div>
  )
}

export default ClientsSection

