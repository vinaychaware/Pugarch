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
    image: '/images/Field mngmnt mob.png',
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
    image: '/images/FM mob .src.png',
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
    image: '/images/Forest mngmnt mob.png',
    bgImage: '/images/wave.png',
  },
]

export default function ProductScrollSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const panels = gsap.utils.toArray<HTMLElement>('.panel')
    const totalPanels = panels.length
    const horizontalWrapper = scrollRef.current
    if (!horizontalWrapper) return

    const scrollLength = window.innerWidth * (totalPanels - 1)

    gsap.to(panels, {
      xPercent: -100 * (totalPanels - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-section',
        start: 'top top',
        end: `+=${scrollLength}`,
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
      {/* Header */}
      <div className="text-center mb-4 sm:mb-6 md:mb-10 px-2">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Our <span className="text-violet-400">Products</span>
        </h1>
      </div>

      {/* Panels */}
      <div
        ref={scrollRef}
        className="horizontal-scroll-wrapper flex h-full"
        style={{ width: `${productData.length * 100}vw` }}
      >
        {productData.map((item, index) => (
          <section
            key={index}
            className="panel w-screen h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-4"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 max-w-7xl w-full">
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center items-center relative">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                ></div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="relative z-10 object-contain max-h-[30vh] sm:max-h-[40vh] md:max-h-[60vh] lg:max-h-[70vh] w-auto"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-white relative z-20 text-center md:text-left">
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-violet-400">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-4 sm:mb-6 text-gray-300 leading-relaxed">
                  {item.subtitle}
                </p>
                <ul className="text-gray-400 text-xs sm:text-sm md:text-base space-y-1 sm:space-y-2 md:space-y-3">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 leading-snug">
                      <span className="text-violet-400 text-base sm:text-lg">
                        •
                      </span>
                      <span>{feature}</span>
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
