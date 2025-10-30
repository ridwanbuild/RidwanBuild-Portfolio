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
    <div className="flex w-full fixed z-40 top-1/2 -translate-y-1/2 items-center   left-2 py-3 bottom-2">

      <div className="shadow-md flex flex-col gap-7 py-5 px-3 justify-center rounded-full backdrop-blur-[4px] border-gray-200 bg-white/50">
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
