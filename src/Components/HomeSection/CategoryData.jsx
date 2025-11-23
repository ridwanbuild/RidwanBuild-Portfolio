"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { projectsData } from "../../../public/ProjectData";

export default function CategoryData() {
  // ====== CATEGORY LIST ======
  const categories = ["Frontend", "MERN Stack", "WordPress"];
  const [selectedData, setSelectedData] = useState(categories[0]);


  // ========== FILTER BY SELECTED CATEGORY ==========
  const filterData = projectsData.filter((item) => item.category === selectedData);



  return (
    <div className="py-16 container m-auto">

      {/* CATEGORY SWITCH TABS */}
      <div className="flex space-x-0  bg-white p-1 border border-rose-500/50 rounded-sm text-sm justify-center mb-8 w-fit m-auto">
        {categories.map((cat) => (
          <div className="flex items-center" key={cat}>
            <input
              type="radio"
              name="category"
              id={cat}
              className="hidden peer"
              checked={selectedData === cat}
              onChange={() => setSelectedData(cat)}
            />

            <label
              htmlFor={cat}
              className="cursor-pointer rounded-sm lg:px-4 px-4 py-1.5 text-gray-500 transition-colors duration-200 peer-checked:bg-rose-500 peer-checked:text-white"
            >
              {cat}
            </label>
          </div>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterData.map((project) => (
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



            {/* CONTENT */}
            <div className="flex-1">
              <h3 className="text-lg font-bold textRed mt-4">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                {project.description}
              </p>

              {/* TAGS */}
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

            {/* LINKS */}
            <div className="mt-5 justify-between flex gap-4 items-center border-t border-gray-100 pt-4">

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

      {/* VIEW ALL BUTTON */}
      <div className="py-10 text-center">
        <Link
          href={"/projects"}
          className="bgRed cursor-pointer px-8 py-2 rounded text-white"
        >
          View All
        </Link>
      </div>

    </div>
  );
}
