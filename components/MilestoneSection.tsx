'use client';

import { GraduationCap, Landmark, Factory } from 'lucide-react';

const milestones = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Developed innovative planetarium programs in collaboration with ISRO',
    centre: false,
  },
  {
    icon: Landmark,
    title: 'Government',
    description: 'Enhanced service delivery for government institutions in Maharashtra',
    centre: true,
  },
  {
    icon: Factory,
    title: 'Industry',
    description: 'Optimised operations for leading organisations in warehouse, facility, and manufacturing sectors.',
    centre: false,
  },
];

const MilestoneSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-20">Milestones</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isCenter = milestone.centre;

            return (
              <div
                key={index}
                className={`relative rounded-xl p-8 text-center w-[280px] min-h-[280px] border border-white/10 transition-transform duration-500
                ${
                  isCenter
                    ? 'bg-black scale-[1.05] z-10 shadow-[0_0_60px_rgba(168,85,247,0.4)]'
                    : 'bg-[#111111] hover:scale-[1.02]'
                }`}
              >
                <Icon className="w-14 h-14 text-white mb-6 mx-auto" />
                <h3 className="text-lg font-medium mb-2">{milestone.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{milestone.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MilestoneSection;