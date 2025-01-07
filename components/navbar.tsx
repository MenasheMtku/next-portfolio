"use client";

import MobileSidebar from "@/components/mobile-sidebar";

export default function Navbar() {
  return (
    <div className="fixed left-4 top-4 z-10 p-0">
      <MobileSidebar />
    </div>
  );
}
