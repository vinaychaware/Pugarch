{/* 🔹 Top Vertical Intro (MISSION / VISION / VALUES) */}
<div className="flex flex-col items-center gap-16">
  {sections.map((section, i) => (
    <div
      key={section.name}
      className="flex items-center gap-4"
    >
      {/* If it's the VISION row → show ICON first */}
      {i === 1 && (
        <div className="p-4 w-14 h-14 rounded-xl border border-violet-400/40 shadow-[0_0_20px_rgba(139,92,246,0.35)]">
          <video
            src={section.icon}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}

      {/* Title */}
      <span
        className={`text-3xl font-extrabold tracking-wide ${
          section.name === "values" ? "text-gray-400" : "text-white"
        }`}
      >
        {section.title}
      </span>

      {/* If it's NOT the VISION row → show ICON after text */}
      {i !== 1 && (
        <div className="p-4 w-14 h-14 rounded-xl border border-violet-400/40 shadow-[0_0_20px_rgba(139,92,246,0.35)]">
          <video
            src={section.icon}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  ))}
</div>
