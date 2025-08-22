'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const services = [
  {
    title: 'Website Development',
    description:
      'We design and develop responsive, visually stunning, and performance-optimized websites that elevate your brand’s online presence.',
    features: [
      'Modern, interactive UI/UX design',
      'SEO-friendly architecture',
      'Fast loading speeds',
      'Secure hosting integration',
      'E-commerce-ready solutions',
    ],
    image: '/images/3k.png',
  },
  {
    title: 'Mobile Application Development',
    description:
      'From Android to iOS and cross-platform, we create mobile apps that are engaging, reliable, and built for scale.',
    features: [
      'Native & cross-platform apps',
      'Smooth performance & scalability',
      'Secure payment gateway integration',
      'Backend system integration',
      'User-centric design with offline mode',
    ],
    image: '/images/3k.png',
  },
  {
    title: 'Customized Web App Development',
    description:
      'Tailored to your unique workflows and business needs, our web apps improve efficiency, automate processes, and adapt as you grow.',
    features: [
      'Fully customized functionality',
      'Scalable architecture',
      'API & third-party integrations',
      'Role-based access control',
      'High-level security & optimization',
    ],
    image: '/images/3k.png',
  },
  {
    title: 'Resource Provider',
    description:
      'Get skilled developers, designers, and tech professionals to support your projects without long-term hiring commitments.',
    features: [
      'Experienced technology experts',
      'Flexible hiring models (short-term/long-term)',
      'Transparent pricing',
      'Quick onboarding process',
    ],
    image: '/images/3k.png',
  },
];

const ServiceBlock = ({ service, index }: { service: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center gap-12 ${
        index % 2 !== 0 ? 'md:flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.2, ease: 'easeOut', delay: index * 0.1 }}
    >
      {/* Background Image Behind Each Block */}
      <Image
        src="/images/wave.png"
        alt="Background effect"
        fill
        className="absolute inset-0 object-cover opacity-20 z-0 pointer-events-none"
      />

      {/* Service Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center z-10"
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Image
          src={service.image}
          alt={service.title}
          width={450}
          height={350}
          className="object-contain"
        />
      </motion.div>

      {/* Service Text */}
      <motion.div
        className="w-full md:w-1/2 z-10"
        initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
        transition={{ duration: 0.2, ease: 'easeOut', delay: 0.05 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {service.title}
        </h2>
        <p className="text-gray-300 text-base leading-relaxed mb-4">
          {service.description}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          {service.features.map((feature: string, i: number) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section className="relative z-10 py-20 px-4 md:px-12 lg:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-32 relative z-10">

        {/* Animated Services Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          Our <span className="text-indigo-500">Services</span>
        </motion.h1>

        {services.map((service, index) => (
          <ServiceBlock key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
