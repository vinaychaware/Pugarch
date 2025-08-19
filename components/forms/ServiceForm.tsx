'use client';

const ServiceForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with API or email service
    onSubmit(); // trigger next step or success message
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black border border-violet-500/30 rounded-xl p-6 md:p-10 shadow-[0_0_50px_rgba(168,85,247,0.25)] text-white max-w-4xl mx-auto"
    >
      <h4 className="text-sm text-violet-400 mb-1">Service</h4>
      <h2 className="text-xl font-semibold mb-8">
        Let’s Transform Your Vision into Reality
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          required
          className="form-input-style"
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          className="form-input-style"
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="form-input-style col-span-full"
        />

        <input
          type="tel"
          placeholder="Contact Number"
          className="form-input-style"
        />
        <input
          type="text"
          placeholder="Organization"
          className="form-input-style"
        />

        <input
          type="text"
          placeholder="Type of Service needed"
          className="form-input-style"
        />
        <input
          type="text"
          placeholder="Project Brief"
          className="form-input-style"
        />
      </div>

      <button
        type="submit"
        className="mt-6 mx-auto block rounded-full bg-white text-black font-semibold py-2 px-6 hover:bg-violet-600 hover:text-white transition"
      >
        Request a Service
      </button>
    </form>
  );
};

export default ServiceForm;
