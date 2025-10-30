"use client";

import SplitText from "gsap/src/SplitText";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradient-bg-with-grid.png')] bg-cover bg-center bg-no-repeat text-slate-800 text-sm font-[Poppins,sans-serif]">
      <div className="container m-auto px-4 flex items-center justify-center">
        <div className="lg:flex items-center gap-8 py-20 justify-between">
          
          {/* ✅ Image section */}
          <div className="lg:pt-0 pt-8 flex lg:w-96 bg-gradient-to-t from-zinc-200 via-slate-200 to-gray-100 border-3 rounded-2xl border-blue-400 items-center justify-center order-1 lg:order-2">
            <Image
              src="/portflio image.png"
              width={500}
              height={500}
              alt="Portfolio image"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>

          {/* ✅ Text section */}
          <div className="space-y-1 order-2 py-10 lg:order-1 lg:text-left">

            <h4 className="text-sm font-normal">Welcome to my world</h4>

            <h1 className="lg:text-4xl py-1 textBlack capitalize text-xl font-bold leading-snug">
              Hi, I’m Ridwan —{" "}
              <span className="textRed">Web Developer & Designer</span>
            </h1>


            <p className="max-w-xl mx-auto lg:mx-0">
              I’m a frontend developer skilled in React, Next.js, TypeScript,
              and modern JavaScript frameworks — building fast, responsive web
              apps with clean UI. I’m also a WordPress developer creating
              high-performing custom websites that blend design with function.
            </p>

            {/* ✅ Buttons */}
            <div className="flex flex-wrap lg:justify-start gap-4 pt-5">

              <Link 
                href="/cv"
                className="lg:px-10 px-5 py-3 text-white bgRed font-semibold rounded-full transition"
              >
                Download CV
              </Link>

              <Link 
                href="https://github.com/ridwanbuild"
                className="lg:px-10 px-6 flex items-center gap-2 py-3 font-semibold rounded-full border transition"
              >
                <FaGithub size={20} />

                GitHub
              </Link>

            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
