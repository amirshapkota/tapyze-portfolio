'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Tapyze Mobile App"
                  width={1024}
                  height={1024}
                  className="mx-auto"
                />
              </div>
              <span className="text-3xl font-bold text-black">TAPYZE</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#ed7b0e] transition-colors text-lg font-medium"
            >
              About
            </Link>
            <Link
              href="/team"
              className="text-gray-700 hover:text-[#ed7b0e] transition-colors text-lg font-medium"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#ed7b0e] transition-colors text-lg font-medium"
            >
              Contact
            </Link>
            <Link
              href="/legal"
              className="text-gray-700 hover:text-[#ed7b0e] transition-colors text-lg font-medium"
            >
              Legal
            </Link>

            {/* Get Started Button */}
            <Button className="bg-[#ed7b0e] hover:bg-[#d16a0c] text-white font-medium" onClick={() => window.location.href = '/'}>
              Get Started
            </Button>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" /> // Close icon
              ) : (
                <Menu className="h-6 w-6" /> // Hamburger icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Conditionally rendered based on `isMenuOpen`) */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu} // Close when clicked outside
      >
        <div
          className={`flex flex-col items-center pt-16 space-y-6 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing menu when clicked inside
        >
            <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Tapyze Mobile App"
                  width={1024}
                  height={1024}
                  className="mx-auto"
                />
              </div>
              <span className="text-2xl font-bold text-black">TAPYZE</span>
            </Link>
          </div>
          <hr className="w-full border-gray-200 mb-4" />
          <Link
            href="/about"
            className="text-gray-700 hover:text-[#ed7b0e] transition-colors text-lg font-medium"
          >
            About
          </Link>
          <Link
            href="/team"
            className="text-gray-700 hover:text-[#ed7b0e] transition-colors text-lg font-medium"
          >
            Team
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-[#ed7b0e] transition-colors text-lg font-medium"
          >
            Contact
          </Link>
          <Link
            href="/legal"
            className="text-gray-700 hover:text-[#ed7b0e] transition-colors text-lg font-medium"
          >
            Legal
          </Link>
          <Button className="bg-[#ed7b0e] hover:bg-[#d16a0c] text-white mt-4 font-medium">
            Get Started
          </Button>
          <div> </div>
        </div>
      </div>
    </nav>
  )
}
