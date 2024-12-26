import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (

    <div className="h-full relative">
      {/* Sidebar */}
      <div className="hidden h-screen md:flex md:flex-col md:fixed md:inset-y-0 md:w-72 z-[80] bg-gray-900 p-4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="md:pl-72 w-full min-h-screen bg-slate-100">
        <Navbar />
        <div className="w-full flex justify-center min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
