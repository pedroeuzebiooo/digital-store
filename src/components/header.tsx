import { Menu, Search, ShoppingCart, X } from "lucide-react";
import logo from "../assets/logo.svg";
import { useState } from "react";
import classNames from "classnames";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleState(
    state: boolean,
    setter: React.Dispatch<React.SetStateAction<boolean>>,
  ) {
    setter(!state);
  }

  const searchIconClass = classNames("size-6", {
    "text-primary": isSearchOpen,
    "text-light-gray-2": !isSearchOpen,
  });

  return (
    <>
      <header className="relative z-10 space-y-5 px-5 py-8 shadow-lg">
        <nav className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => toggleState(isMenuOpen, setIsMenuOpen)}
          >
            <Menu className="size-6" />
          </button>

          <a href="#">
            <img src={logo} alt="Logo do Digital Store" />
          </a>

          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => toggleState(isSearchOpen, setIsSearchOpen)}
            >
              <Search className={searchIconClass} />
            </button>

            <button type="button" className="relative">
              <ShoppingCart className="size-6 text-primary" />
              <span className="absolute right-[-0.25rem] top-[-0.25rem] flex h-4 w-4 items-center justify-center rounded-full bg-error p-1 text-xs font-semibold text-white">
                2
              </span>
            </button>
          </div>
        </nav>

        {isSearchOpen && (
          <div className="flex items-center justify-between rounded-lg bg-light-gray-3 p-3">
            <input
              type="search"
              placeholder="Pesquisar produto..."
              className="bg-light-gray-3 text-dark-gray-3 placeholder-dark-gray-3 outline-none"
            />
            <button type="button">
              <Search className="size-6 text-light-gray-2" />
            </button>
          </div>
        )}
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-20 min-h-screen bg-dark-gray/50">
          <div className="flex h-full w-80 flex-col justify-between bg-white p-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-dark-gray-2">Páginas</h3>
                <button
                  type="button"
                  onClick={() => toggleState(isMenuOpen, setIsMenuOpen)}
                >
                  <X className="size-6 text-dark-gray-2" />
                </button>
              </div>
              <ul className="flex flex-col justify-center gap-5">
                <li>
                  <a href="#" className="space-y-2 font-semibold text-primary">
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
              <div className="h-px w-full bg-light-gray"></div>
              <button
                type="button"
                className="rounded-lg bg-primary p-3 font-semibold text-light-gray-3 transition-colors hover:bg-tertiary"
              >
                Entrar
              </button>
              <button
                type="button"
                className="space-y-0.5 rounded-lg bg-light-gray-3 p-3 font-semibold text-dark-gray-2 transition-colors hover:bg-light-gray-2"
              >
                Cadastra-se
                <span className="mx-auto block h-0.5 w-24 bg-dark-gray-2"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
