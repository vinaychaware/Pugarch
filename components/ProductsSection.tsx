'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const productData = [
  {
    title: 'Employee Management Solution',
    subtitle:
      '"Smarter Employee Management in One Dashboard" – A complete workforce platform to manage attendance, schedules, performance, and documentation with ease.',
    features: [
      'Face recognition attendance tracking',
      'GPS-based check-in/out',
      'Field visit scheduling & tracking',
      'Payroll integration',
      'Shift & roster management',
      'Performance & appraisal modules',
      'Employee self-service portal',
      'Document repository',
    ],
    image: '/images/3k.png',
    bgImage: '/images/wave.png',
  },
  {
    title: 'Field Management Solution',
    subtitle:
      '"Revolutionizing On-Field Operations" – Perfect for sales, service, and inspection teams needing real-time coordination and tracking.',
    features: [
      'Attendance with face recognition',
      'Route planning & mapping',
      'Tour & marketing activity logging',
      'Expense claim submission',
      'Custom data collection forms',
      'SOS emergency alerts',
      'Offline mode functionality',
    ],
    image: '/images/3k.png',
    bgImage: '/images/wave.png',
  },
  {
    title: 'Facility Management Solution',
    subtitle:
      '"Effortless Facility Oversight" – Manage workforce, assets, and maintenance schedules with one smart system.',
    features: [
      'Real-time workforce tracking',
      'Asset & inventory management',
      'Maintenance scheduling & alerts',
      'Incident reporting & tracking',
      'Compliance & vendor management',
      'Multi-location dashboards',
    ],
    image: '/images/3k.png',
    bgImage: '/images/wave.png',
  },
  {
    title: 'Forest Management Solution',
    subtitle:
      '"Smart Conservation Management" – A dedicated platform for forest departments to manage operations, safety, and environmental monitoring.',
    features: [
      'Beat-wise attendance with face recognition',
      'Beat inspection logs',
      'Wildlife monitoring',
      'KML-based territory mapping',
      'Foot patrolling logs',
      'Incident reporting with photo/video proof',
      'Offline sync-enabled dashboard',
    ],
    image: '/images/3k.png',
    bgImage: '/images/wave.png',
  },
]

export default function ProductScrollSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>('.panel')
    const totalPanels = panels.length

    const horizontalWrapper = scrollRef.current
    if (!horizontalWrapper) return

    gsap.to(panels, {
      xPercent: -100 * (totalPanels - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-section',
        start: 'top top',
        end: () => `+=${window.innerWidth * (totalPanels - 1) * 1.5}`,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        anticipatePin: 1,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="horizontal-section h-screen w-full overflow-hidden bg-black relative">
      <div
        ref={scrollRef}
        className="horizontal-scroll-wrapper flex w-[400vw] h-screen"
      >
        {productData.map((item, index) => (
          <section
            key={index}
            className="panel w-screen h-screen flex flex-col items-center justify-start px-6 md:px-12 lg:px-24 pt-24"
          >
            {/* ✅ Heading over each product */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                Our <span className="text-violet-400">Products</span>
              </h1>
              <p className="text-gray-400 mt-2 text-base md:text-lg max-w-3xl mx-auto">
                Explore our suite of smart solutions designed to streamline operations,
                empower teams, and enhance productivity.
              </p>
            </div>

            {/* Product Content */}
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl h-full justify-center">
              {/* Image Section with background */}
              <div className="w-full md:w-1/2 flex justify-center items-center relative">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                ></div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[70vh] object-contain relative z-10"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 text-white relative z-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-400">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl font-medium mb-6 text-gray-300">
                  {item.subtitle}
                </p>
                <ul className="text-gray-400 text-lg space-y-3">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-violet-400 text-xl">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
