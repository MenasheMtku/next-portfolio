import MobileSidebar from "@/components/mobile-sidebar";

export default function Navbar() {
  return (
    <div className="w-max justify-between fixed top-4 left-4 flex items-center z-10">
      <MobileSidebar />
    </div>
  );
}
