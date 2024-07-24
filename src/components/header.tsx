import { Menu, Search, ShoppingCart, X } from "lucide-react";
import logo from "../assets/logo.svg";
import { useState } from "react";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openSearch() {
    setIsSearchOpen(true);
  }

  function closeSearch() {
    setIsSearchOpen(false);
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  return (
    <>
      <header className="px-5 py-8 relative z-10 shadow-lg space-y-5">
        <nav className="flex items-center justify-between">
          <Menu className="size-6" onClick={openMenu} />

          <a href="#">
            <img src={logo} alt="Logo do Digital Store" />
          </a>

          <div className="flex items-center justify-center gap-4">
            {isSearchOpen ? (
              <Search className="size-6 text-primary" onClick={closeSearch} />
            ) : (
              <Search
                className="size-6 text-light-gray-2"
                onClick={openSearch}
              />
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

      {isMenuOpen && (
        <div className="fixed inset-0 z-20 bg-dark-gray/50 min-h-screen">
          <div className="w-80 p-8 bg-white h-full flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-dark-gray-2 font-bold">Páginas</h3>

                <X className="size-6 text-dark-gray-2" />
              </div>

              <ul className="flex flex-col gap-5">
                <li>
                  <a href="#" className="text-primary font-bold space-y-2">
                    Home
                    <span className="block h-0.5 w-12 bg-primary"></span>
                  </a>
                </li>

                <li>
                  <a href="#" className="text-dark-gray-2">
                    Produtos
                  </a>
                </li>

                <li>
                  <a href="#" className="text-dark-gray-2">
                    Categorias
                  </a>
                </li>

                <li>
                  <a href="#" className="text-dark-gray-2">
                    Meus Pedidos
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <div className="w-full h-px bg-light-gray"></div>

              <button
                type="button"
                className="bg-primary text-light-gray-3 font-bold rounded-lg px-4 py-2"
              >
                Entrar
              </button>

              <button
                type="button"
                className="bg-white text-dark-gray-2 font-semibold rounded-lg px-4 py-2 space-y-0.5"
              >
                Cadastra-se
                <span className="block h-0.5 w-24 bg-dark-gray-2 mx-auto"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
