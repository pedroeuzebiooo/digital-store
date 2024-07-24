import { Menu, Search, ShoppingCart } from "lucide-react";
import logo from "../assets/logo.svg";
import { useState } from "react";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function openSearch() {
    setIsSearchOpen(true);
  }

  function closeSearch() {
    setIsSearchOpen(false);
  }

  return (
    <header className="px-5 py-8 relative z-10 shadow-lg space-y-5">
      <nav className="flex items-center justify-between">
        <Menu className="size-6" />

        <a href="#">
          <img src={logo} alt="Logo do Digital Store" />
        </a>

        <div className="flex items-center justify-center gap-4">
          {isSearchOpen ? (
            <Search className="size-6 text-primary" onClick={closeSearch} />
          ) : (
            <Search className="size-6 text-light-gray-2" onClick={openSearch} />
          )}

          <div className="relative">
            <ShoppingCart className="size-6 text-primary" />

            <span className="flex items-center justify-center w-4 h-4 p-1 rounded-full bg-error text-xs text-white font-bold absolute right-[-0.25rem] top-[-0.25rem]">
              2
            </span>
          </div>
        </div>
      </nav>

      {isSearchOpen && (
        <div className="py-4 px-5 bg-light-gray-3 flex justify-between items-center rounded-lg">
          <input
            type="search"
            placeholder="Pesquisar produto..."
            className="text-dark-gray-3 placeholder-dark-gray-3 bg-light-gray-3 outline-none"
          />

          <Search className="size-6 text-light-gray-2" />
        </div>
      )}
    </header>
  );
}
