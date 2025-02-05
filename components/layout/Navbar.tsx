"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const links = [
    { id: 1, name: "About", href: "/about" },
    { id: 2, name: "Projects", href: "/projects" },
    { id: 3, name: "Stack", href: "/stack" },
    { id: 4, name: "Contact", href: "/contact" },
  ];

  return (
    <div className={`fixed z-10 hidden h-[80px] w-full justify-between md:flex transition-all duration-300 ${isScrolled ? "bg-slate-200 shadow-md": "bg-transparent"
      }`}>
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="ml-10 text-2xl font-bold">
            Menashe
          </Link>
        </div>
        <div>
          <ul className="mr-6 flex gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.id}
                  className={`relative px-3 py-2 text-xl transition-colors duration-200 ${isActive ? "font-semibold text-gray-950 dark:text-foreground" : "text-gray-800 dark:text-gray-200"}`}
                >
                  <Link href={link.href} className="relative pb-3">
                    {link.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-0.5 w-full transform bg-gray-800 transition-transform duration-200 dark:bg-foreground" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
