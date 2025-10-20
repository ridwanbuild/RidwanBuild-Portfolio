"use client";

import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathName = usePathname()
  

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  
  return (
    <nav className="w-full bg-white/30 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
      <div className="container m-auto px-4 flex items-center justify-between h-18">
        {/* Logo */}

        <div className="text-2xl font-bold textBlack">
          <Link href="/">
            Web-<span className="textRed">Ridwan</span>
          </Link>
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-blackColor hover:text-themeColor font-normal transition-colors ${pathName === link.href ? "textRed" : ""}`}
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 cursor-pointer focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
        </button>


      </div>

      {/* ✅ UPDATED SECTION: Added smooth animation for mobile dropdown */}
      <div
        className={`md:hidden bg-white/50 backdrop-blur-md border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "h-screen opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex py-10 flex-col space-y-3 px-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-gray-700 font-medium transition-colors  ${pathName === link.href ? "textRed" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      {/* ✅ End of updated animation section */}
    </nav>
  );
}
