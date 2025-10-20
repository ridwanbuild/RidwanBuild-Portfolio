"use client";
import Heading3 from "@/Reusable/Heading3";
import React from "react";

const experiences = [
  {
    year: "2025 – Present",
    title: "Junior Frontend Developer",
    company: "Upwork Platform",
    details: [
      "Built dynamic user interfaces with React and Tailwind CSS.",
      "Collaborated with design teams using Figma.",
      "Integrated REST APIs and optimized UI performance.",
    ],
  },
  {
    year: "2025 – Present",
    title: "Junior Frontend Developer",
    company: "Fiverr Platform",
    details: [
      "Developed static and dynamic web pages using HTML, CSS, and Bootstrap.",
      "Handled responsive design across browsers and devices.",
    ],
  },
  {
    year: "2019 – Present",
    title: "Graphic Designer",
    company: "Fiverr Platform",
    details: [
      "Assisted in wireframe to UI conversion.",
      "Participated in client design feedback and revisions.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="py-10">
          <Heading3 text="Experience" />
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-white to-rose-50 shadow-lg rounded-2xl p-6 border-l-4 border-rose-400 hover:scale-[1.02] transition-transform duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{exp.company}</p>
              <p className="text-sm font-medium textRed mb-3">{exp.year}</p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
