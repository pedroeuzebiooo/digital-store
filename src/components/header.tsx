import { Menu, Search, ShoppingCart } from "lucide-react";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-8 relative z-10 shadow-lg">
      <Menu className="size-6" />

      <a href="#">
        <img src={logo} alt="Logo do Digital Store" />
      </a>

      <div className="flex items-center justify-center gap-4">
        <Search className="size-6 text-light-gray-2" />

        <div className="relative">
          <ShoppingCart className="size-6 text-primary" />

          <span className="flex items-center justify-center w-4 h-4 p-1 rounded-full bg-error text-xs text-white font-bold absolute right-[-0.25rem] top-[-0.25rem]">
            2
          </span>
        </div>
      </div>
    </header>
  );
}
