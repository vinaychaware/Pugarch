'use client';

const JoinUsForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add resume upload and form processing logic
    onSubmit(); // move to next or show success
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black border border-violet-500/30 rounded-xl p-6 md:p-10 shadow-[0_0_50px_rgba(168,85,247,0.25)] text-white max-w-4xl mx-auto"
    >
      <h4 className="text-sm text-violet-400 mb-1">Join Us</h4>
      <h2 className="text-xl font-semibold mb-8">Be a Part of the PugArch Journey</h2>

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
          placeholder="Phone Number"
          className="form-input-style"
        />
        <input
          type="url"
          placeholder="LinkedIn Profile URL"
          className="form-input-style"
        />

        <input
          type="text"
          placeholder="Role/Position"
          className="form-input-style"
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          required
          className="file-input-style"
        />

        <input
          type="url"
          placeholder="Portfolio"
          className="form-input-style col-span-full"
        />

        <textarea
          placeholder="Why Do You Want to Join PugArch?"
          rows={4}
          className="form-input-style col-span-full"
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-white text-black font-semibold py-2 px-6 hover:bg-violet-600 hover:text-white transition"
      >
        Apply Now
      </button>
    </form>
  );
};

export default JoinUsForm;
