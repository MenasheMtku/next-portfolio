import Footer from "@/components/layout/Footer";
import MobileSidebar from "@/components/layout/MobileSidebar";
import Navbar from "@/components/layout/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    {/* <div className="relative h-full">
      
      <div className="fixed left-2 top-2 z-10 block border-0 md:hidden">
        <MobileSidebar />
      </div>
      
      <main className="min-h-screen w-full bg-slate-100">
        <Navbar />
        <div className="flex min-h-screen max-w-[1440px] pt-4 mx-auto justify-center">
          {children}
        </div>
        <Footer/>
      </main>
    </div> */}
  );
};

export default DashboardLayout;
