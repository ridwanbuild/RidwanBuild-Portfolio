"use client";

import { FaGithub, FaLinkedin, FaYoutube, FaHome, FaSun } from "react-icons/fa";
import { SiX } from "react-icons/si";
import Link from "next/link";

export default function ConnectUs() {
  const icons = [
    { icon: <FaHome />, link: "/" },
    { icon: <FaGithub />, link: "https://github.com/ridwanbuild" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/ridwanbuild" },
    { icon: <SiX />, link: "https://x.com/ridwanbuild" },
    { icon: <FaYoutube />, link: "https://youtube.com/" },
  ];

  return (
    <div className="flex w-full fixed items-center justify-center py-3 bottom-2">
      <div className="flex items-center border shadow-md gap-7 px-10 py-3 justify-center rounded-full backdrop-blur-[1px] border-gray-200 bg-gradient-to-r from-pink-100 via-purple-50 to-blue-100">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer justify-center text-xl text-gray-900 transition-colors hover:text-rose-500"
          >
            <Link href={item.link} target="_blank">
              {item.icon}
            </Link>
          </div>
        ))}

        <button className="text-xl text-gray-900 ">
          <FaSun />
        </button>
      </div>
    </div>
  );
}
