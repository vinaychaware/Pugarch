/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    // { name: "Milestone", href: "/milestone" },
    // { name: "Products", href: "/products" },
    // { name: "Services", href: "/serv" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="mx-auto mt-4 max-w-[1440px] w-[95%] border border-black bg-black backdrop-blur-sm overflow-hidden">

      {/* Central Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
        <div className="w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.35)_0%,_rgba(0,0,0,0.9)_70%)] blur-2xl"></div>
      </div>

      {/* Navbar Content */}
      <div className="relative z-10 px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="w-24">
          <Link href="/">
            <img
              src="/images/3.png"
              alt="PugArch Logo"
              className="w-full h-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-200 text-sm font-medium hover:text-violet-400 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <Link href="/contact-us">
          <Button className="hidden md:block rounded-full px-5 py-1.5 text-sm font-semibold text-white border border-violet-500 hover:bg-violet-600 hover:text-white transition-all duration-300 shadow-[0_0_12px_rgba(139,92,246,0.5)] hover:shadow-[0_0_18px_rgba(139,92,246,0.7)]">
            Contact Us
          </Button>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-violet-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 py-4 border-t border-violet-500/20 relative z-10">
          <nav className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-violet-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>
              <Button className="mt-4 px-6 py-2 rounded-full bg-transparent border border-violet-500 text-white hover:bg-violet-600 transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
