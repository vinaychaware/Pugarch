const Hero = () => {
  return (
    
    <section className="relative bg-black text-white min-h-screen flex flex-col justify-start items-center text-center px-4 pt-32 pb-0 overflow-hidden">
  {/* Heading */}
  <div className="z-10 mb-[70vh]">
    <h2 className="text-sm text-white uppercase tracking-wider mb-2">
      We Are
    </h2>
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">PUGARCH</h1>
    <p className="max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed">
      With a passion for technology and a commitment to excellence, we
      specialize in delivering cutting-edge solutions tailored to meet the
      unique needs of our clients.
    </p>
  </div>

  {/* Glow Arc Image */}
  <div className="absolute bottom-0  left-1/2 -translate-x-1/2 w-[120%] h-[60vh] md:h-[65vh] pointer-events-none z-0">
    <img
      src="/images/neon-arc.png"
      alt="Neon Arc"
      className="w-full h-full object-contain opacity-90"
    />
  </div>
</section>


  );

};

export default Hero;
