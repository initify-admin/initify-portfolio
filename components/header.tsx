import Link from "next/link";
import SidebarToggle from "./ui/sidebar-toggle";

export default function Header() {
  return (
    <header className="w-full px-6 py-6 md:px-8 md:py-8 xl:px-16 2xl:py-9 2xl:px-32">
      <div className="w-full justify-between items-center flex">
        <Link
          href="https://initify.com/"
          className="text-dark font-bold text-2xl uppercase tracking-wide"
        >
          Initify
        </Link>

        <SidebarToggle />
      </div>
    </header>
  );
}
