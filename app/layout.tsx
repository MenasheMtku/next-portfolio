import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// Components
import Footer from "@/components/layout/Footer";
import MobileSidebar from "@/components/layout/MobileSidebar";
import Navbar from "@/components/layout/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Menashe Mtku | Frontend Developer & Software Engineer",
  description: "I'm Menashe Mtku, a Frontend Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio to see my projects, skills, and experience in building high-performance applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative h-full">
          {/* Sidebar */}
          <div className="fixed left-2 top-2 z-10 block border-0 md:hidden">
            <MobileSidebar />
          </div>
          {/* Main Content */}
          <main className="min-h-screen w-full bg-slate-100">
            <Navbar />
            <div className="flex min-h-screen max-w-[1440px] pt-4 mx-auto justify-center">
              {children}
            </div>
            <Footer />
          </main>
        </div>

      </body>
    </html>
  );
}
