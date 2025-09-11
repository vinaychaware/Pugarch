// "use client";

// import { useState, useEffect } from 'react';
// import { CheckCircle, Users, Calendar, FileText, CreditCard } from 'lucide-react';

// const ExperienceSection = () => {
//   const [currentLevel, setCurrentLevel] = useState('Seed');
//   const levels = ['Seed', 'Growth', 'Scale', 'Enterprise'];
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentLevel(prev => {
//         const currentIndex = levels.indexOf(prev);
//         return levels[(currentIndex + 1) % levels.length];
//       });
//     }, 3000);
    
//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     { icon: Users, text: 'Employee Data Management' },
//     { icon: CreditCard, text: 'Automated Payroll Processing' },
//     { icon: Calendar, text: 'Smart Attendance Tracking' },
//     { icon: FileText, text: 'Digital Records System' }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-violet-900/20 via-blue-900/20 to-black">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Mobile Mockup */}
//           <div className="relative flex justify-center">
//             <div className="relative">
//               {/* Phone Frame */}
//               <div className="w-72 h-[500px] bg-black rounded-[2.5rem] p-4 border-2 border-gray-800 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
//                 <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[2rem] relative overflow-hidden">
//                   {/* Screen Content */}
//                   <div className="p-6 h-full flex flex-col">
//                     {/* Header */}
//                     <div className="text-center mb-8">
//                       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.5)]">
//                         <CheckCircle className="w-8 h-8 text-white" />
//                       </div>
//                       <h3 className="text-white text-lg font-bold">Level Unlocked!</h3>
//                     </div>
                    
//                     {/* Level Animation */}
//                     <div className="text-center mb-8">
//                       <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-2">
//                         {currentLevel}
//                       </div>
//                       <div className="w-full bg-gray-700 rounded-full h-2">
//                         <div 
//                           className="bg-gradient-to-r from-violet-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
//                           style={{ width: `${(levels.indexOf(currentLevel) + 1) * 25}%` }}
//                         ></div>
//                       </div>
//                     </div>
                    
//                     {/* Features */}
//                     <div className="space-y-3 flex-1">
//                       {features.map((feature, index) => (
//                         <div key={index} className="flex items-center space-x-3 text-gray-300">
//                           <feature.icon className="w-5 h-5 text-violet-400" />
//                           <span className="text-sm">{feature.text}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Floating Elements */}
//               <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-violet-500 animate-pulse shadow-[0_0_20px_rgba(139,92,246,0.6)]"></div>
//               <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-blue-500 animate-pulse shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
//             </div>
//           </div>
          
//           {/* Content */}
//           <div className="space-y-6">
//             <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
//               Paperless Efficiency
//             </h2>
            
//             <p className="text-xl text-gray-300 leading-relaxed">
//               Transform your organization with our comprehensive digital solutions that streamline operations 
//               and eliminate paper-based processes. Experience the future of workplace management today.
//             </p>
            
//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold text-white">Key Features:</h3>
//               <div className="grid sm:grid-cols-2 gap-4">
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-black/50 border border-violet-500/20">
//                     <feature.icon className="w-5 h-5 text-violet-400" />
//                     <span className="text-gray-300">{feature.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="pt-4">
//               <button className="px-8 py-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white font-semibold rounded-lg shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-300 hover:scale-105">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;