import { motion, Variants } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-black h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* 🔹 Neon Arc Video */}
      <div className="absolute inset-0">
        <video
          src="/video/neon.mp4"
          className="w-full h-full object-cover scale-110 translate-y-[-15%]"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* 🔹 Foreground Content */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-sm md:text-base text-white uppercase tracking-wider mb-2 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          We Are
        </h2>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]">
          PUGARCH
        </h1>

        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">
          Turning Ideas into Intelligent Solutions
        </h3>

        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          At PugArch Technology Pvt. Ltd., we create innovative digital solutions that help 
          businesses work smarter, faster, and more efficiently. From dynamic websites and 
          engaging mobile apps to powerful custom software and skilled technology resource 
          support, we are your trusted partner in digital transformation.
        </p>

        {/* 🔹 CTA Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="#services"
            className="px-6 py-3 rounded-full bg-black text-white font-medium 
                       shadow-[0_0_10px_rgba(138,43,226,0.7)] border border-purple-500 
                       hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(138,43,226,0.9)] 
                       transition duration-300"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-black text-white font-medium 
                       shadow-[0_0_10px_rgba(138,43,226,0.7)] border border-purple-500 
                       hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(138,43,226,0.9)] 
                       transition duration-300"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
};

const WhyPugArch = () => {
  // ✅ Typed Variants
  const container: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.25,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-12 text-center overflow-hidden">
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
        >
          Why PugArch?
        </motion.h2>

        <motion.p
          variants={item}
          className="text-xl font-semibold text-purple-300 mb-6"
        >
          We are PugArch — transforming ideas into powerful digital solutions.
        </motion.p>

        <motion.p variants={item} className="text-lg text-gray-300 mb-10">
          We don’t just develop software — we engineer business-changing
          experiences.
        </motion.p>

        <motion.div
          variants={container}
          className="space-y-6 text-left max-w-2xl mx-auto"
        >
          <motion.p variants={item} className="flex items-start gap-3">
            <span className="text-xl">🚀</span>
            <span className="text-gray-200">
              <strong>Custom Development –</strong> High-performance web & mobile
              applications.
            </span>
          </motion.p>

          <motion.p variants={item} className="flex items-start gap-3">
            <span className="text-xl">☁️</span>
            <span className="text-gray-200">
              <strong>SaaS Solutions –</strong> Agile, scalable, and cloud-ready.
            </span>
          </motion.p>

          <motion.p variants={item} className="flex items-start gap-3">
            <span className="text-xl">📊</span>
            <span className="text-gray-200">
              <strong>Business Systems –</strong> Facility, field, and workforce
              management tools that deliver measurable impact.
            </span>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

// ✅ Exports
export default Hero;
export { WhyPugArch };
