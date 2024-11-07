"use client";

import { useEffect, useState } from "react";

import { Menu } from "lucide-react";

import Sidebar from "./sidebar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div className="md:hidden p-2 border rounded cursor-pointer bg-slate-200">
            <Menu />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72 text-zinc-400 text-xl">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
