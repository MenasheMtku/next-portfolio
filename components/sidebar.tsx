"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HomeIcon } from "lucide-react";
import { SiAboutdotme } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import { Send } from "lucide-react";

import Social from "./social";

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
    <div className={`h-full`}>
      <div className="flex h-full flex-col space-y-4 bg-secondary p-2 text-primary-foreground">
        <div className="flex-1 px-3 py-2">
          <div className="flex h-full flex-col justify-between pt-6">
            <div className="space-y-4">
              {routes.map((route) => (
                <div
                  key={route.name}
                  className={cn(
                    "group inline-flex w-full cursor-pointer items-center justify-start gap-4 p-3 text-lg font-medium hover:bg-primary/10 lg:text-xl",
                    pathname === route.path
                      ? "bg-primary/10 text-primary"
                      : ": bg-transparent text-zinc-400",
                  )}
                >
                  <route.icon size={25} className="hidden md:block" />
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
    </div>
  );
};

export default Sidebar;
