"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const links = [
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/menashe-mtku/",
    icon: FaLinkedin,
    color: "bg-blue-500",
    hoverColor: "hover:text-blue-700",
  },
  {
    name: "GitHub",
    path: "https://github.com/MenasheMtku",
    icon: FaGithub,
    color: "bg-black",
    hoverColor: "hover:text-gray-400",
  },
  {
    name: "WhatsApp",
    path: "https://wa.me/0542661126",
    icon: FaWhatsapp,
    color: "bg-green-500",
    hoverColor: "hover:text-green-700",
  },
];

const Social = () => {
  return (
    <div className="flex items-center justify-around gap-4 p-0">
      {links.map(item => (
        <Link
          key={item.name}
          href={item.path}
          target="_blank"
          className="transition-colors duration-300 rounded-full p-4"
          aria-label={item.name}
        >
          <item.icon size={25} className={`text-white ${item.hoverColor}`} />
        </Link>
      ))}
    </div>
  );
};

export default Social;
