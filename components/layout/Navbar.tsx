'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  const links = [
    { id: 1, name: "About", href: "/about" },
    { id: 2, name: "Projects", href: "/projects" },
    { id: 3, name: "Stack", href: "/stack" },
    { id: 4, name: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-slate-200 hidden md:flex w-full justify-between fixed h-[80px] z-10">
      <div className="max-w-[1440px] mx-auto flex justify-between w-full items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold ml-10">
            Menashe
          </Link>
        </div>
        <div>
          <ul className="flex gap-4 mr-6">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.id}
                  className={`relative px-3 py-2 transition-colors text-xl duration-200 ${isActive ? "font-semibold text-gray-950 dark:text-foreground" : "text-gray-800 dark:text-gray-200"}`}
                >
                  <Link href={link.href} className="relative pb-3">
                    {link.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-0.5 w-full transform bg-gray-800 dark:bg-foreground transition-transform duration-200" />
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
