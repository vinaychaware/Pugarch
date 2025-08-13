const Hero = () => {
  return (
    <section className="relative bg-black h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* Neon Arc Video - only inside Hero */}
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

      {/* Foreground Content */}
      <div className="relative z-10">
        <h2 className="text-sm text-white uppercase tracking-wider mb-2 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          We Are
        </h2>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]">
          PUGARCH
        </h1>
        <p className="max-w-2xl text-gray-200 text-base md:text-lg leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          With a passion for technology and a commitment to excellence, we
          specialize in delivering cutting-edge solutions tailored to meet the
          unique needs of our clients.
        </p>
      </div>
    </section>
  );
};

export default Hero;
