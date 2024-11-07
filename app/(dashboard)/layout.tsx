import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 md:w-72 z-[80] bg-gray-900 p-4">
        <Sidebar />
      </div>
      <main className="md:pl-72 w-full h-[100vh] bg-slate-100">
        <Navbar />
        <div className="w-full flex justify-center h-full pt-16">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
