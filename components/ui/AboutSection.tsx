import { FaEye, FaBullseye, FaBalanceScale } from 'react-icons/fa'

const AboutSection = () => {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center space-y-12">
        {/* Headings */}
        <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-4">
          <FaBullseye className="text-violet-500" /> MISSION
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-4">
          <FaEye className="text-violet-500" /> VISION
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-4">
          <FaBalanceScale className="text-violet-500" /> VALUES
        </h2>

        {/* Vision Text */}
        <div className="max-w-2xl mx-auto text-lg">
          <h3 className="text-2xl font-semibold flex items-center gap-2 justify-center mb-2">
            <FaEye className="text-violet-500" /> VISION
          </h3>
          <p>
            Our vision is to be a world leader in technology solution
            providers to influence growth and development of the people.
          </p>
        </div>

        {/* Mission Text */}
        <div className="max-w-2xl mx-auto text-lg">
          <h3 className="text-2xl font-semibold flex items-center gap-2 justify-center mb-2">
            <FaBullseye className="text-violet-500" /> MISSION
          </h3>
          <p>
            Our mission is to make the life of the people around us better and safer
            through technology and innovation.
          </p>
        </div>

        {/* Clients Section */}
        <div className="pt-12">
          <h3 className="text-2xl font-semibold mb-4">Our Clients</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="w-16 h-16 rounded-full bg-gray-800"></div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="pt-12">
          <h3 className="text-2xl font-semibold mb-4">Industries We Serve</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="w-16 h-16 rounded-full bg-gray-700"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
