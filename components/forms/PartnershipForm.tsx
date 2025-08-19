'use client';

const PartnershipForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Your email/API logic here
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black border border-violet-500/30 rounded-xl p-6 md:p-10 shadow-[0_0_50px_rgba(168,85,247,0.25)] text-white max-w-4xl mx-auto"
    >
      <h4 className="text-sm text-violet-400 mb-1">Partnership</h4>
      <h2 className="text-xl font-semibold mb-8">Let’s Collaborate To Drive Innovation</h2>

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
          type="text"
          placeholder="Company Name"
          required
          className="form-input-style"
        />
        <input
          type="text"
          placeholder="Designation"
          className="form-input-style"
        />

        <input
          type="url"
          placeholder="Website URL"
          className="form-input-style"
        />
        <input
          type="text"
          placeholder="Industry"
          className="form-input-style"
        />

        <input
          type="text"
          placeholder="Collaboration Goal"
          className="form-input-style"
        />
        <input
          type="text"
          placeholder="Message"
          className="form-input-style"
        />

        <div className="col-span-full">
          <input
            type="file"
            className="w-full file-input-style"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-white text-black font-semibold py-2 px-6 hover:bg-violet-600 hover:text-white transition"
      >
        Submit Partnership Request
      </button>
    </form>
  );
};

export default PartnershipForm;
