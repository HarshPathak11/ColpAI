"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white font-jost">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Left side: Logo + Company Name */}
        <div className="flex items-center gap-2">
          {/* Replace with your logo path and sizes */}
          <Image src="/blob.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-wide">TanPrish Dynamics</span>
        </div>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex space-x-6 text-sm lg:text-base font-medium">
          <li className="hover:text-gray-300 transition">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link href="/">Contact Us</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link href="/">Help</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link href="/">More Info</Link>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {/* Simple Hamburger Icon */}
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col items-center space-y-4 py-4 text-sm">
            <li className="hover:text-gray-300 transition">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="hover:text-gray-300 transition">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li className="hover:text-gray-300 transition">
              <Link href="/help" onClick={() => setIsOpen(false)}>
                Help
              </Link>
            </li>
            <li className="hover:text-gray-300 transition">
              <Link href="/more-info" onClick={() => setIsOpen(false)}>
                More Info
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
