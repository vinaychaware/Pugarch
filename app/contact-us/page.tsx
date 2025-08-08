'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnershipForm from '@/components/forms/PartnershipForm';
import ServiceForm from '@/components/forms/ServiceForm';
import JoinUsForm from '@/components/forms/JoinUsForm';

const Contact = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(-1); // -1 = selection step

  const options = ['A Partnership', 'A Service', 'Join Us'];

  const points = [
    '15+ years of expertise in cutting-edge IT solutions and digital transformation.',
    '50+ certified tech professionals turning ideas into reality.',
    '300+ successful projects delivered globally across industries.',
  ];

  const handleToggle = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((opt) => opt !== value)
        : [...prev, value]
    );
  };

  const handleNext = () => {
    if (selectedOptions.length > 0) {
      setCurrentStep(0);
    }
  };

  const handleFormSubmit = () => {
    if (currentStep < selectedOptions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // All forms completed
      setCurrentStep(-2); // -2 means done
    }
  };

  const renderForm = () => {
    const current = selectedOptions[currentStep];
    switch (current) {
      case 'A Partnership':
        return <PartnershipForm onSubmit={handleFormSubmit} />;
      case 'A Service':
        return <ServiceForm onSubmit={handleFormSubmit} />;
      case 'Join Us':
        return <JoinUsForm onSubmit={handleFormSubmit} />;
      default:
        return null;
    }
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="py-24 px-4" id="contact">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h4 className="text-sm text-violet-400 font-semibold uppercase mb-2">Contact</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Got a Project?<br />
              Let <span className="text-violet-500">PugArch</span> Bring<br />
              It To Life!
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Innovative Solutions. Expert Teams. Proven Success.
            </p>
            <ul className="space-y-4">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-violet-500 mt-1" />
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="bg-black border border-violet-500/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(139,92,246,0.25)] max-w-md w-full">
            {currentStep === -1 && (
              <>
                <h3 className="text-xl font-semibold mb-6">You are interested in...</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  {options.map((option, index) => (
                    <label
                      key={index}
                      className={`block rounded-md px-4 py-3 border transition-all cursor-pointer ${
                        selectedOptions.includes(option)
                          ? 'bg-violet-600 border-violet-600 text-white'
                          : 'border-white/20 text-gray-300 hover:border-violet-500 hover:text-white'
                      }`}
                      onClick={() => handleToggle(option)}
                    >
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleToggle(option)}
                        className="hidden"
                      />
                      {option}
                    </label>
                  ))}
                  <button
                    type="button"
                    onClick={handleNext}
                    className="mt-6 w-full px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-violet-500 hover:text-white transition-all duration-300"
                  >
                    Next →
                  </button>
                </form>
              </>
            )}

            {currentStep >= 0 && renderForm()}

            {currentStep === -2 && (
              <div className="text-center text-lg text-violet-400 font-semibold">
                Thank you! All selected forms have been submitted ✅
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
