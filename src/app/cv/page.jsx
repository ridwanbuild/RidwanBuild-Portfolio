"use client";

import React from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

export default function CvPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
      <h1 className="lg:text-4xl text-2xl font-bold textRed mb-3">
        My Curriculum Vitae
      </h1>

      <p className="text-gray-600 text-sm max-w-lg  px-2 mb-8">
        You can preview a snapshot of my CV below or download the full version
        to explore my experience, education, and skills in detail.
      </p>

      {/* CV Preview Image */}
      <div className="shadow-lg rounded-xl overflow-hidden border-rose-400 border mb-8">
        <Image
          src="/cv-image-01.webp" // 👈 place your image in /public/cv-demo.png
          alt="CV Preview"
          width={600}
          height={800}
          className="object-cover"
        />

        <Image
          src="/cv-image-02.webp" // 👈 place your image in /public/cv-demo.png
          alt="CV Preview"
          width={600}
          height={800}
          className="object-cover"
        />


      </div>

    </div>
  );
}
