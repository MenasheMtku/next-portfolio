"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HomeIcon } from "lucide-react";
import { SiAboutdotme } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import { Send } from "lucide-react";

import Social from "../Social";

const routes = [
  {
    name: "Home",
    path: "/home",
    icon: HomeIcon,
  },
  {
    name: "About me",
    path: "/about",
    icon: SiAboutdotme,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: MdWork,
  },
  {
    name: "My stack",
    path: "/stack",
    icon: BsStack,
  },
  {
    name: "Contact me",
    path: "/contact",
    icon: Send,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 p-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <div className="flex flex-col justify-between h-full pt-6">
          <div className="space-y-4">
            {routes.map(route => (
              <div
                key={route.name}
                className={cn(
                  "text-lg group gap-4 items-center p-3 inline-flex w-full justify-start font-medium cursor-pointer hover:bg-white/10",
                  pathname === route.path
                    ? "bg-white/10"
                    : "bg-transparent : text-zinc-400"
                )}
              >
                <Link key={route.name} href={route.path} className="w-full">
                  {route.name}
                </Link>
              </div>
            ))}
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
