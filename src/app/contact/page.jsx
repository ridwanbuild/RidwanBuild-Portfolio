"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  // 🔹 Dynamic contact info
  const contactInfo = {
    email: "webridwan20@gmail.com",
    phone: "+8801876258020",
    location: "Chittagong Bangladesh",
  };

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #fef2f2 0%, #f9fafb 50%, #e0f2fe 100%)",
      }}
    >
      <div className="container m-auto px-4">
        {/* Heading */}
        
        <h2 className="text-3xl font-bold text-center mb-10 textBlack">
          Contact <span className="textRed">Me</span>
        </h2>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/50 backdrop-blur-md shadow-sm rounded-md p-6 border border-gray-100 max-w-5xl mx-auto items-center">
          
          {/* ===== Left Side: Contact Info ===== */}
          <div className="">
            <h3 className="text-xl font-semibold mb-3 textBlack">
              Get in <span className="textRed">Touch</span>
            </h3>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <ul className="space-y-5 text-gray-700">
              <li className="flex items-center gap-3">
                <FaEnvelope className="textRed text-lg" />
                <div>
                  <p className="font-medium textBlack">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 text-sm hover:textRed transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="textRed text-lg" />
                <div>
                  <p className="font-medium textBlack">Phone</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-600 text-sm hover:textRed transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="textRed text-lg" />
                <div>
                  <p className="font-medium textBlack">Location</p>
                  <p className="text-gray-600 text-sm">
                    {contactInfo.location}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* ===== Right Side: Contact Form ===== */}
          <div className="">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-red-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-red-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-red-400"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-gradient-to-r from-rose-400 to-red-500 hover:from-rose-500 hover:to-red-600 text-white font-semibold py-2 rounded-md transition-all shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
