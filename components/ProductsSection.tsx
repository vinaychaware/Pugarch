'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const productData = [
  {
    title: 'PORTABLE PLANETARIUM',
    subtitle: 'Introducing Our Incredible Planetarium for Schools!',
    features: [
      'Official partnership with ISRO (Indian Space Research Organisation) as a Space Tutor.',
      'On-site installation for immersive astronomy experiences.',
      'Customizable sessions for various age groups.',
      'Scientific visuals and 360° space shows powered by advanced Dome-Planetarium.',
      'Can be installed in schools, museums, science centers, or even in your place.',
      'Education meets entertainment through simulation-based space projection.',
    ],
    image: '/images/3k.png',
  },
  {
    title: 'SMART CONNECT FMS',
    subtitle: 'Field Management System',
    features: [
      'Real-time visibility',
      'Tracking Worker Visits',
      'Geo-Mapping / Geofencing Notification',
      'Centralized Monitoring',
      'Live Feedback',
      'Face Recognition',
    ],
    image: '/images/3k.png',
  },
  {
    title: 'SMART CONNECT EMS',
    subtitle: 'Employee Management System',
    features: [
      'Employee data management',
      'Attendance tracking',
      'Leave Management',
      'Face Recognition',
    ],
    image: '/images/3k.png',
  },
  {
    title: 'SMART CONNECT SGMS',
    subtitle: 'Security Guard Management System',
    features: [
      'Real Time Data',
      'Geo Tagging',
      'Live Tracking',
      'Time & Task Check-in',
      'Duty Log Monitoring',
      'Incident Reporting',
      'Inventory & Asset Check',
      'Performance Reports',
    ],
    image: '/images/3k.png',
  },
]

export default function ProductScrollSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>('.panel')
    const totalPanels = panels.length

    const horizontalWrapper = scrollRef.current
    if (!horizontalWrapper) return

    const scrollTween = gsap.to(panels, {
      xPercent: -100 * (totalPanels - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-section',
        start: 'top top',
        end: () => `+=${window.innerWidth * (totalPanels - 1) * 1.5}`, // Slower scroll
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
            className="panel w-screen h-screen flex items-center justify-center px-6 md:px-12 lg:px-24"
          >
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl h-full justify-center">
              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="phone-img h-[80vh] object-contain"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-400">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl font-semibold mb-6">
                  {item.subtitle}
                </p>
                <ul className="text-gray-300 text-lg space-y-3">
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
