import About_Skill from "@/Components/AboutSection/About_Skill";
import Education from "@/Components/AboutSection/Education";
import Experience from "@/Components/AboutSection/Experience";
import Heading3 from "@/Reusable/Heading3";
import React from "react";

export default function AboutPage() {
  return (
    <div>
      <div className=" w-full bg-[#fefcff] relative">
        {/* Dreamy Sky Pink Glow */}

        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
          }}
        />

        <div className="container pt-25 m-auto px-4 py-20 flex items-center justify-center">

          <div className="z-20 ">

  
              <h2 className="text-3xl font-bold  mb-5 textBlack">
          About <span className="textRed">Me</span>
        </h2>

            {/* About Me content */}
            <div className="text-gray-900  leading-relaxed ">

              <div className="lg:w-[900px] space-y-3">
                
               <p> I’m a{" "}
                <span className="textRed font-medium">Frontend Developer</span>{" "}
                specializing in React, Next.js, JavaScript, TypeScript, Tailwind
                CSS, Bootstrap, HTML, and CSS. I create high-performance,
                responsive user interfaces and manage application state
                effectively.</p>

               
                
               <p> On the backend, I work with Node.js, Express.js, MongoDB, and
                Firebase to build scalable server logic and data flows. I also
                serve as a{" "}
                <span className="textRed font-medium">WordPress Developer</span>
                , handling theme customization, plugin integration, Elementor /
                Gutenberg workflows, WooCommerce setup, and site optimization &
                maintenance.</p>

              

               <p> Using Git & GitHub for version control, I deploy projects via
                Netlify, Vercel, cPanel, and WordPress hosting platforms. I
                focus on clean, maintainable code, scalable architecture, and
                performance optimizations to build polished web solutions.</p>

              </div>

            </div>



          </div>
        </div>
      </div>

      <About_Skill></About_Skill>
      <Experience></Experience>
      <Education></Education>
    </div>
  );
}
