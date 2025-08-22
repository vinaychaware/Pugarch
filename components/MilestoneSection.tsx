// 'use client';

// import { GraduationCap, Landmark, Factory } from 'lucide-react';

// const milestones = [
//   {
//     icon: GraduationCap,
//     title: 'Education',
//     // description: 'Developed innovative planetarium programs in collaboration with ISRO',
//   },
//   {
//     icon: Landmark,
//     title: 'Government',
//     description: 'Enhanced service delivery for government institutions in Maharashtra',
//   },
//   {
//     icon: Factory,
//     title: 'Industry',
//     description:
//       'Optimised operations for leading organisations in warehouse, facility, and manufacturing sectors.',
//   },
// ];

// const MilestoneSection = () => {
//   return (
//     <section className="py-24 bg-black text-white">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold mb-20">Milestones</h2>

//         {/* Cards row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
//           {milestones.map((milestone, index) => {
//             const Icon = milestone.icon;

//             return (
//               <div
//                 key={index}
//                 className={`relative rounded-xl p-8 text-center min-h-[280px] border border-white/10 bg-[#111] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:border-purple-500/50`}
//               >
//                 <Icon className="w-14 h-14 text-white mb-6 mx-auto transition-colors duration-300 hover:text-purple-400" />
//                 <h3 className="text-lg font-medium mb-2">{milestone.title}</h3>
//                 <p className="text-xs text-gray-400 leading-relaxed">{milestone.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MilestoneSection;
