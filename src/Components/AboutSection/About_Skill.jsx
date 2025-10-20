"use client";

import Heading3 from "@/Reusable/Heading3";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
  FaCodeBranch,
  FaCloud,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaElementor,
  FaMagento,
  FaServer,
  FaCode,
} from "react-icons/fa";

export default function About_Skill() {
  const skills = [
    {
      category: "Frontend Development",
      icon: <FaReact className="text-blue-500 inline-block mr-2" />,
      tools: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 inline-block mr-2" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 inline-block mr-2" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 inline-block mr-2" /> },
        { name: "Tailwind CSS", icon: <FaCode className="text-teal-400 inline-block mr-2" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 inline-block mr-2" /> },
        { name: "React", icon: <FaReact className="text-blue-500 inline-block mr-2" /> },
        { name: "Next.js", icon: <FaCode className="text-gray-700 inline-block mr-2" /> },
        { name: "TypeScript", icon: <FaCode className="text-blue-600 inline-block mr-2" /> },
      ],
    },
    {
      category: "Backend Development",
      icon: <FaDatabase className="text-green-500 inline-block mr-2" />,
      tools: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 inline-block mr-2" /> },
        { name: "Express.js", icon: <FaCode className="text-gray-600 inline-block mr-2" /> },
        { name: "MongoDB", icon: <FaDatabase className="text-green-700 inline-block mr-2" /> },
        { name: "Firebase", icon: <FaCloud className="text-yellow-500 inline-block mr-2" /> },
      ],
    },
    {
      category: "WordPress Development",
      icon: <FaWordpress className="text-blue-700 inline-block mr-2" />,
      tools: [
        { name: "Theme Customization", icon: <FaWordpress className="text-blue-700 inline-block mr-2" /> },
        { name: "Plugin Integration", icon: <FaCode className="text-gray-600 inline-block mr-2" /> },
        { name: "Elementor & Gutenberg", icon: <FaElementor className="text-pink-500 inline-block mr-2" /> },
        { name: "WooCommerce Setup", icon: <FaMagento className="text-purple-500 inline-block mr-2" /> },
        { name: "Website Optimization", icon: <FaServer className="text-gray-600 inline-block mr-2" /> },
      ],
    },
    {
      category: "Version Control",
      icon: <FaCodeBranch className="text-indigo-500 inline-block mr-2" />,
      tools: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 inline-block mr-2" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-800 inline-block mr-2" /> },
      ],
    },
    {
      category: "Deployment & Hosting",
      icon: <FaCloud className="text-teal-500 inline-block mr-2" />,
      tools: [
        { name: "Netlify", icon: <FaCloud className="text-teal-400 inline-block mr-2" /> },
        { name: "Vercel", icon: <FaCloud className="text-blue-400 inline-block mr-2" /> },
        { name: "cPanel", icon: <FaServer className="text-gray-600 inline-block mr-2" /> },
        { name: "WordPress Hosting", icon: <FaWordpress className="text-blue-700 inline-block mr-2" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full relative bg-white overflow-hidden">
      <div className="min-h-screen w-full bg-[#fff9f5] relative">
        {/* Soft Radial Gradients */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255, 220, 190, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 245, 238, 0.35) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 210, 180, 0.15) 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 py-16 container mx-auto px-4">
          <Heading3 text="Skills" />

          <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50 
                           dark:from-slate-700 dark:via-slate-800 dark:to-slate-900
                           border border-gray-200 dark:border-slate-700 
                           rounded-2xl shadow-md p-6
                           "
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                  {skill.icon}
                  {skill.category}
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {skill.tools.map((tool, i) => (
                    <li
                      key={i}
                      className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 flex items-center"
                    >
                      {tool.icon}
                      {tool.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
