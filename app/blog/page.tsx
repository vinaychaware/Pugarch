"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "Unlocking Efficiency and Customer Satisfaction with Field Service Management",
    description:
      "Unlocking Efficiency and Customer Satisfaction with Field Service Management. Overall service efficiency has improved by 31% and there are 24,000 technicians dispatched.",
    image: "/images/3.png",
    slug: "unlocking-efficiency",
  },
  {
    title: "Field Service Management (FSM) System Software",
    description:
      "The Lowdown on Field Service Management System Software. FSM is leading the shift for the modern field team. These 3 use cases may forever shift how your field team will evolve.",
    image: "/images/3.png",
    slug: "fsm-system-software",
  },
  {
    title: "Technology And Child Safety Management",
    description:
      "TECHNOLOGY AND CHILD SAFETY MANAGEMENT. This shift in 2024 is leading to a revolution in how safety is enforced in the education and parenting system.",
    image: "/images/3.png",
    slug: "child-safety-management",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Blog Section */}
      <section className="pt-28 pb-10 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-10">Blogs</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-gradient-to-b from-[#18181b] to-black border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-violet-700/30 transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-[260px]">
                <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-400">{blog.description}</p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-white hover:text-violet-400"
                >
                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12">
          <Link href="/blog/all">
            <button className="px-6 py-2 border border-violet-500 rounded-full text-white hover:bg-violet-600 transition">
              View More
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
