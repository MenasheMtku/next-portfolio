"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Social from "./social";

const routes = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "About me",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "My stack",
    path: "/stack",
  },
  {
    name: "Contact me",
    path: "/contact",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 p-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-4">
            {routes.map(route => (
              <Link
                key={route.name}
                href={route.path}
                className={cn(
                  "text-lg group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10",
                  pathname === route.path
                    ? "bg-white/10"
                    : "bg-transparent : text-zinc-400"
                )}
              >
                {route.name}
              </Link>
            ))}
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
