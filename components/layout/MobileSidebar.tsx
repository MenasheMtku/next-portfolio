"use client";

import { useEffect, useState } from "react";

import { Menu } from "lucide-react";

import Sidebar from "./Sidebar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";

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
          <div className="cursor-pointer rounded border bg-slate-200 p-2 md:hidden">
            <Menu />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0 text-xl text-zinc-400">
          <DialogTitle className="sr-only"></DialogTitle>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
