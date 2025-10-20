"use client";

import React from "react";


// Dynamic data
const stats = [
  { number: "200+", label: "Our Project Complete" },
  { number: "80+", label: "Our Natural Products" },
  { number: "300+", label: "Clients Reviews" },
  { number: "4000+", label: "Our Satisfied Clients" },
];


export default function ExperienceSection() {
  return (
    <section className="lg:py-20 bg-white">

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side */}


        <div className="bg-gradient-to-r from-slate-200 to-red-50  p-5 rounded-2xl shadow-sm flex flex-col justify-center">

         <div className="flex items-center pb-3 justify-center ">
           <h2 className="text-7xl lg:text-[120px] font-bold textRed ">03</h2>

          <h3 className="lg:text-[40px] text-xl lg:leading-12 border font-bold px-8 textBlack ">
            Years Of Experience
          </h3>

         </div>

          <p className="text-gray-600 leading-relaxed">
            Business consulting consultants provide expert advice and guide
            businesses to help them improve their performance and efficiency.
          </p>
        </div>

        {/* Right side grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-200 to-rose-50 p-5 rounded-2xl text-center border-b-4 border-rose-400 hover:border-red-500 transition-all duration-300 shadow-sm"
            >
              <h4 className="lg:text-3xl text-xl font-extrabold textRed mb-2">
                {item.number}
              </h4>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>


      </div>

    </section>
  );
}
