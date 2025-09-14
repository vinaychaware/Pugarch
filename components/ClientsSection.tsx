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
                       dark:bg-gray-900 
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
                     dark:bg-gray-900 rounded-2xl shadow-md 
                     hover:shadow-purple-500/30 cursor-pointer"
        >
          <Image
            src={logo}
            alt={`industry-${index}`}
            width={100}
            height={100}
            className="object-contain mb-3 transition duration-500 hover:scale-110"
            style={{ borderRadius: '10px' }}
          />
          {/* <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Industry {index + 1}
          </p> */}
        </motion.div>
      ))}
    </div>
  )
}

const ClientsSection = () => {
  const clientLogos = [
    '/images/cl1.png',
    '/images/cl2.png',
    '/images/cl3.png',
    '/images/cl4.png',
    '/images/cl5.png',
    '/images/cl6.png',
    '/images/cl7.png',
    '/images/cl8.png',
    '/images/cl9.png',
    '/images/cl10.png',
    '/images/cl11.jpg',
    '/images/cl12.png',
    '/images/cl13.jpg',
    '/images/cl14.png',
    '/images/cl15.jpg',
    '/images/cl16.png',
    '/images/cl17.png',
    '/images/cl18.png',
    '/images/cl19.png',
    '/images/cl20.png',
    '/images/cl21.png',
    '/images/cl22.png',
    '/images/cl23.png',
    '/images/cl24.png',
  
  ] 



  const industryLogos = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.2.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/7.png',
    '/images/logistics.png',
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

