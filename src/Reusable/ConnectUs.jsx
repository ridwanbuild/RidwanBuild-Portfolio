"use client";

import { FaGithub, FaLinkedin, FaYoutube, FaHome, FaSun, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import Link from "next/link";

export default function ConnectUs() {
  const icons = [
    { icon: <FaHome />, link: "/" },
    { icon: <FaGithub />, link: "https://github.com/ridwanbuild" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/ridwanbuild" },
    { icon: <SiX />, link: "https://x.com/ridwanbuild" },
    { icon: <FaInstagram />, link: "https://instagram.com/ridwanbuild" },
    { icon: <FaYoutube />, link: "https://youtube.com/" },

  ];

  return (
    <div className="flex absolute w-full z-40 top-25 left-1/2  -translate-x-1/2 -translate-y-1/2 justify-center items-center  py-3 bottom-2">

      <div className="shadow-md flex  gap-5 py-2 px-4 justify-center rounded-full backdrop-blur-[4px] border-gray-200 bg-white/40">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer justify-center text-xl text-gray-800 transition-colors hover:text-rose-500"
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
