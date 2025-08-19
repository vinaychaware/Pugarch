'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import clsx from 'clsx';

const clients = [
  {
    id: 1,
    name: 'Jessica Turner',
    role: 'Content Strategy Lead',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    message: 'The talented team behind our content development creates insightful and engaging pieces that truly resonate with your target audience.',
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'CEO, TechNova',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    message: 'Working with this team was a game-changer. Their dedication and creativity were beyond expectations.',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'CTO, PixelEdge',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    message: 'Their attention to detail and commitment to delivering quality work is unmatched.',
  },
  {
    id: 4,
    name: 'Mike Chen',
    role: 'Founder, GreenHive',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    message: 'The results we achieved together speak volumes. Truly a top-tier team.',
  },
  {
    id: 5,
    name: 'Emily Davis',
    role: 'COO, BrightLabs',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    message: "Professional, prompt, and precise. Couldn't ask for more in a partner.",
  },
  {
    id: 6,
    name: 'Robert Wilson',
    role: 'Manager, NovaNet',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    message: 'Delivered our project ahead of schedule with great results.',
  },
  {
    id: 7,
    name: 'Lisa Brown',
    role: 'Lead Designer, Visionary',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    message: 'Their designs are sleek and intuitive. I loved working with them!',
  },
  {
    id: 8,
    name: 'David Miller',
    role: 'Senior Developer',
    image: 'https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    message: 'Exceptional technical expertise and seamless collaboration throughout the project.',
  },
];

const radius = 150;

const TestimonialSection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white py-24 overflow-hidden px-6 md:px-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What Our Clients{' '}
          <span className="text-violet-400 italic font-medium">Are Saying</span>
        </h2>
      </motion.div>

      {/* Layout (swap order → text first, circle second) */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-24 w-full max-w-7xl">
        
        {/* Testimonial Content (Left side) */}
        <motion.div
          key={selected}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md bg-zinc-900 border border-gray-800 rounded-2xl p-10 shadow-xl"
        >
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400 fill-yellow-400 mx-0.5" />
            ))}
          </div>

          <p className="italic text-gray-300 text-lg leading-relaxed mb-8 text-center">
            {clients[selected].message}
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={clients[selected].image}
                alt={clients[selected].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h4 className="text-white font-semibold text-lg">{clients[selected].name}</h4>
              <p className="text-gray-400 text-sm">{clients[selected].role}</p>
            </div>
          </div>
        </motion.div>

        {/* Avatar Circle (Right side) */}
        <div className="relative w-[400px] h-[400px] flex-shrink-0">
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {clients.map((client, index) => {
              const angle = (index / clients.length) * 2 * Math.PI - Math.PI / 2;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <motion.div
                  key={client.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="absolute"
                  style={{
                    left: `${200 + x - 30}px`,
                    top: `${200 + y - 30}px`,
                  }}
                >
                  <motion.button
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className={clsx(
                      'transform transition-all duration-300 border-2 rounded-full p-1 hover:scale-110',
                      selected === index
                        ? 'border-violet-400 shadow-lg shadow-violet-500/40 scale-110'
                        : 'border-gray-600 hover:border-gray-400'
                    )}
                    onClick={() => setSelected(index)}
                  >
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-[60px] h-[60px] rounded-full object-cover"
                    />
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="w-24 h-24 rounded-full bg-zinc-950 shadow-xl flex items-center justify-center overflow-hidden border-4 border-zinc-900">
              <img
                src="/images/3.png"
                alt="Company Logo"
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
