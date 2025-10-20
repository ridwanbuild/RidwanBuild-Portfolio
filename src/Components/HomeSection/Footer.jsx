"use client";

import React from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

// ====== Dynamic Footer Data ======
const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
];

const contactInfo = {
  email: "webridwan20@gmail.com",
  address: "Chattogram, Bangladesh",
  phone: "+880187625020",
};

const socialLinks = [
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaFacebookF />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-slate-50 to-gray-200 text-gray-600 pt-10 pb-5 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ==== Brand & Subscribe ==== */}
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-bold textBlack mb-4">
            
            <Link href="/">
              Web-<span className="textRed">Ridwan</span>
            </Link>
          </div>

          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            I’m a passionate{" "}
            <span className="font-semibold text-gray-700">Web Developer</span>{" "}
            who loves turning ideas into beautiful, functional websites. Focused
            on clean code, modern design, and real user experience.
          </p>

          <p className="text-sm text-gray-500 mb-5">
            Join my community for design inspiration, coding tips, and creative
            ideas.
          </p>

          {/* ==== Subscribe Form ==== */}
          <form className="flex items-center max-w-md border border-gray-300 focus-within:border-black transition">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent py-2 px-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-none"
            />
            <button
              type="submit"
              className="bgRed  text-white px-8 py-2 text-sm cursor-pointer shadow hover:opacity-90 transition "
            >
              Send
            </button>
          </form>
        </div>

        {/* ==== Quick Links ==== */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-black transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ==== Contact Info ==== */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-5">Get In Touch</h4>
          <ul className="space-y-4 text-sm">
            {/* Email */}
            <li className="flex items-center gap-3">
              <span className="p-2 bg-white rounded-full shadow">
                <FaEnvelope className="text-gray-600" />
              </span>
              <Link
                href={`mailto:${contactInfo.email}`}
                className="hover:text-black transition"
              >
                {contactInfo.email}
              </Link>
            </li>

            {/* Address */}
            <li className="flex items-center gap-3">
              <span className="p-2 bg-white rounded-full shadow">
                <FaMapMarkerAlt className="text-gray-600" />
              </span>
              {contactInfo.address}
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">
              <span className="p-2 bg-white rounded-full shadow">
                <FaPhone className="text-gray-600" />
              </span>
              <Link
                href={`tel:${contactInfo.phone}`}
                className="hover:text-black transition"
              >
                {contactInfo.phone}
              </Link>
            </li>
          </ul>

          {/* ==== Social Icons ==== */}
          <div className="flex gap-4 mt-6">
            {socialLinks.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="p-2 bgBlack text-white rounded-full shadow hover:opacity-90 transition"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ==== Bottom Copyright ==== */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Web-Ridwan. All rights reserved.
      </div>
    </footer>
  );
}
