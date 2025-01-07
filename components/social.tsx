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
    hoverColor: "hover:text-gray-400 ",
  },
  {
    name: "WhatsApp",
    path: "https://wa.me/972542661126?text=Hi%20Menashe,%0A%0AI%20came%20across%20your%20profile%20and%20I%E2%80%99m%20looking%20for%20a%20frontend%20developer%20for%20an%20exciting%20opportunity.%0A%0ALet's%20connect!",
    icon: FaWhatsapp,
    color: "bg-green-500",
    hoverColor: "hover:text-green-700",
  },
];

const Social = () => {
  return (
    <div className="flex items-center justify-around gap-4 p-0">
      {links.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          target="_blank"
          className="rounded-full p-4 transition-colors duration-300"
          aria-label={item.name}
        >
          <item.icon size={25} className={`text-primary ${item.hoverColor}`} />
        </Link>
      ))}
    </div>
  );
};

export default Social;
