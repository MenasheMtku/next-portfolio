import MobileSidebar from "@/components/mobile-sidebar";

export default function Navbar() {
  return (
    <div className="w-max justify-between absolute top-4 left-4 flex items-center">
      <MobileSidebar />
    </div>
  );
}
