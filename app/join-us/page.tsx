"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";   // adjust path as per your project
import Footer from "@/components/Footer";   // adjust path as per your project

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    role: "",
    resume: null,
    portfolio: "",
    motivation: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
    // TODO: Connect API or backend for handling form data
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Join Us Form */}
      <main className="flex-grow flex justify-center items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-[#0B0B0F] border border-purple-500/40 shadow-xl rounded-2xl p-8 w-full max-w-2xl"
        >
          <h2 className="text-lg text-gray-300">Join Us</h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Be a Part of the PugArch Journey
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border rounded-md"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border rounded-md"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border rounded-md mt-4"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border rounded-md"
            />
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn Profile URL"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border rounded-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="role"
              placeholder="Role/Position"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border rounded-md"
            />
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full p-3 bg-transparent border rounded-md"
            />
          </div>

          <input
            type="url"
            name="portfolio"
            placeholder="Portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border rounded-md mt-4"
          />

          <textarea
            name="motivation"
            placeholder="Why Do You Want to Join PugArch?"
            value={formData.motivation}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border rounded-md mt-4"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:opacity-90 transition w-full"
          >
            Apply Now
          </button>
        </form>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
