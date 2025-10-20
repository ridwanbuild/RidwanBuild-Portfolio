"use client";

import Heading3 from "@/Reusable/Heading3";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    image: "/features-image/e-commerce-website.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    links: {
      code: "https://github.com/yourusername/ecommerce-platform",
      demo: "#",
    },
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern and responsive developer portfolio built with Next.js and Framer Motion.",
    image: "/features-image/e-commerce-website.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    links: {
      code: "https://github.com/yourusername/portfolio",
      demo: "#",
    },
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "A content-rich blog platform with Markdown support and SEO optimization.",
    image: "/features-image/e-commerce-website.png",
    tags: ["React", "Next.js", "Markdown"],
    links: {
      code: "https://github.com/yourusername/blog-platform",
      demo: "#",
    },
  },
  {
    id: 4,
    title: "Task Manager App",
    description:
      "A productivity app to manage daily tasks with drag-and-drop features.",
    image: "/features-image/e-commerce-website.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    links: {
      code: "https://github.com/yourusername/task-manager",
      demo: "#",
    },
  },
  {
    id: 5,
    title: "Restaurant Website",
    description:
      "Responsive restaurant website with menu, booking, and gallery sections.",
    image: "/features-image/e-commerce-website.png",
    tags: ["Next.js", "CSS", "JavaScript"],
    links: {
      code: "https://github.com/yourusername/restaurant-website",
      demo: "#",
    },
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "A real-time weather app using OpenWeatherMap API and dynamic UI.",
    image: "/features-image/e-commerce-website.png",
    tags: ["React", "API", "Tailwind CSS"],
    links: {
      code: "https://github.com/yourusername/weather-app",
      demo: "#",
    },
  },
];

export default function Features() {
  return (
    <section className="py-12 ">
      <div className="text-center py-5">
        <Heading3 text={"Feature Project"} />
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col border border-gray-100 rounded-xl p-4 shadow-lg bg-white hover:shadow-xl transition-md"
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="rounded-lg object-cover w-full h-56 sm:h-64 md:h-56 lg:h-60"
            />

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-bold textRed mt-4">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-rose-100 text-gray-800 rounded-full px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Always Bottom Links */}
            <div className="mt-5 flex gap-4 items-center border-t border-gray-100 pt-4">
              <a
                href={project.links.code}
                target="_blank"
                className="flex items-center gap-2 text-gray-600 font-medium hover:text-black transition-colors"
              >
                <FaGithub /> Code
              </a>

              <a
                href={project.links.demo}
                target="_blank"
                className="flex items-center gap-2 text-gray-600 font-medium hover:text-black transition-colors"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="py-10 text-center">
        <Link href={'/projects'}  className="bgRed cursor-pointer px-8 py-2 rounded text-white">
          View All
        </Link>
      </div>


    </section>
  );
}
