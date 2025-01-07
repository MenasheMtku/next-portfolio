"use client";
import { ReactNode } from "react";
import ThemeProvider from "@/components/ThemeProvider";
// import { useTheme } from "@/components/ThemeProvider";
// import { themes } from "@/lib/themes";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import ThemeToggle from "@/components/ThemeToggle";

interface RootLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: RootLayoutProps) => {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
};

// Separate component to use the theme hook (hooks must be used within component scope)
const LayoutContent = ({ children }: { children: ReactNode }) => {
  // const { theme } = useTheme();

  return (
    <div className="relative h-full">
      {/* Sidebar */}
      <div
        className={`z-[80] hidden h-screen p-0 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col`}
      >
        <Sidebar />
      </div>
      {/* Main Content */}
      <main className={`min-h-screen w-full md:pl-72`}>
        <Navbar />
        <div className="flex min-h-screen w-full justify-center">
          <div className="absolute right-6 top-4">
            <ThemeToggle />
            <div className="space-y-4">
              {/* <div className="flex justify-end gap-4 bg-slate-500 p-4"></div> */}
            </div>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
