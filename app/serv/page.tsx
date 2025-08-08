'use client';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Website Development',
    description:
      'Elevate your online presence with our comprehensive web development solutions. Our team of skilled developers specializes in creating dynamic, responsive websites that captivate users and drive results. Using the latest technologies and industry best practices, we deliver custom web solutions that align perfectly with your business goals, whether it’s a corporate website, an e-commerce platform, or a content management system.',
    image: '/images/3k.png',
  },
  {
    title: 'Mobile Application Development',
    description:
      'Transform your ideas into engaging mobile applications with our expert app development team. Whether it’s iOS, Android, or cross-platform development, we craft innovative and user-friendly apps tailored to your specific requirements. From concept to deployment, we ensure a seamless development process and a stunning end-product that stands out in the competitive app market.',
    image: '/images/3k.png',
  },
  {
    title: 'Customized Web App Development',
    description:
      'Every business is unique, and so are its requirements. Our customized web development services are tailored to address your specific needs and challenges. Whether you need a bespoke web application, CRM system, or enterprise solution, we work closely with you to understand your objectives and deliver a fully customized solution that exceeds your expectations.',
    image: '/images/3k.png',
  },
  {
    title: 'Resource Provider',
    description:
      'Finding the right talent for your projects can be challenging. As a resource provider, we offer access to a pool of skilled professionals in the fields of app and web development. Whether you need additional developers, designers, or project managers, we can help you assemble the perfect team to bring your vision to life.',
    image: '/images/3k.png',
  },
];

export default function VerticalServicesSection() {
  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Navbar */}
      <Navbar />

      {/* Services Section */}
      <section className="relative z-10 py-20 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-24 relative z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center gap-12 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Background Image Behind Each Block */}
              <Image
                src="/images/wave.png" // Replace with actual path if needed
                alt="Background effect"
                fill
                className="absolute inset-0 object-cover opacity-20 z-0 pointer-events-none"
              />

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center z-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={450}
                  height={350}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
