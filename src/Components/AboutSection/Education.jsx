"use client";
import Heading3 from "@/Reusable/Heading3";
import React from "react";

const education = [
  {
    year: "2019 – 2025",
    institution: "National University, Bangladesh",
    qualification: "Bachelor of Arts — Political Science",
    details: [],
  },

  {
    year: "2024 Present",
    institution: "Programming Hero (on going)",
    qualification:
      "Full Stack Developer — MERN + TypeScript, Redux, Next.js, Node.js, Express, MongoDB, PostgreSQL, Prisma, Docker, Nginx, AWS",
    details: [],
  },

  {
    year: "2024",
    institution: "Ostad",
    qualification:
      "MERN Development (Ongoing) — Advanced Front-End Developer (React, Next.js)",
    details: [],
  },

  {
    year: "2023",
    institution: "Creative IT",
    qualification:
      "Front-End Developer (HTML, CSS, JavaScript, etc)",
    details: [],
  },



  
];

export default function Education() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container m-auto px-4">
        <div className="py-10">
          <Heading3 text="Education" />
        </div>

        <div className="grid gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-white to-rose-50 shadow-lg rounded-2xl p-6 border-l-4 border-rose-400 hover:scale-[1.02] transition-transform duration-200"
            >
              <p className="text-sm font-medium textRed mb-2">{edu.year}</p>
              <h3 className="text-lg capitalize font-semibold text-gray-900">
                {edu.institution}
              </h3>
              <p className="text-sm text-gray-700 mb-4">{edu.qualification}</p>

              {edu.details.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {edu.details.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
