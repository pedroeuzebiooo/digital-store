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

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="px-5 py-8 relative z-10 shadow-lg space-y-5">
        <nav className="flex items-center justify-between">
          <button type="button">
            <Menu className="size-6" onClick={openMenu} />
          </button>

          <a href="#">
            <img src={logo} alt="Logo do Digital Store" />
          </a>

          <div className="flex items-center justify-center gap-4">
            {isSearchOpen ? (
              <button type="button">
                <Search className="size-6 text-primary" onClick={closeSearch} />
              </button>
            ) : (
              <button type="button">
                <Search
                  className="size-6 text-light-gray-2"
                  onClick={openSearch}
                />
              </button>
            )}

            <button type="button" className="relative">
              <ShoppingCart className="size-6 text-primary" />

              <span className="flex items-center justify-center w-4 h-4 p-1 rounded-full bg-error text-xs text-white font-semibold absolute right-[-0.25rem] top-[-0.25rem]">
                2
              </span>
            </button>
          </div>
        </nav>

        {isSearchOpen && (
          <div className="py-4 px-5 bg-light-gray-3 flex justify-between items-center rounded-lg">
            <input
              type="search"
              placeholder="Pesquisar produto..."
              className="text-dark-gray-3 placeholder-dark-gray-3 bg-light-gray-3 outline-none"
            />

            <button type="button">
              <Search className="size-6 text-light-gray-2" />
            </button>
          </div>
        )}
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-20 bg-dark-gray/50 min-h-screen">
          <div className="w-80 p-8 bg-white h-full flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-dark-gray-2 font-semibold">Páginas</h3>

                <button type="button">
                  <X className="size-6 text-dark-gray-2" onClick={closeMenu} />
                </button>
              </div>

              <ul className="flex flex-col justify-center gap-5">
                <li>
                  <a href="#" className="text-primary font-semibold space-y-2">
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
                className="bg-primary text-light-gray-3 font-semibold rounded-lg p-3 hover:bg-tertiary transition-colors"
              >
                Entrar
              </button>

              <button
                type="button"
                className="bg-light-gray-3 text-dark-gray-2 font-semibold rounded-lg p-3 space-y-0.5 hover:bg-light-gray-2 transition-colors"
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
