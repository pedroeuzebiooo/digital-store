import { Menu, Search, ShoppingCart } from "lucide-react";
import logo from "./assets/logo.svg";
import whiteSneakers from "./assets/white-sneakers.png";
import newDropSupreme from "./assets/new-drop-supreme.png";
import adidasCollection from "./assets/adidas-collection.png";
import novoBeatsBass from "./assets/novo-beats-bass.png";
import Camiseta from "./assets/camiseta.png";
import Calca from "./assets/calca.png";
import Headphone from "./assets/headphone.png";
import Tenis from "./assets/tenis.png";

export function App() {
  return (
    <div className="w-96 mx-auto">
      <header className="flex items-center justify-between p-5">
        <Menu className="size-6" />

        <a href="#">
          <img src={logo} alt="Logo do Digital Store" />
        </a>

        <div className="flex items-center justify-center gap-3">
          <Search className="size-6 text-light-gray-2" />

          <div className="relative">
            <ShoppingCart className="size-6 text-primary" />

            <span className="flex items-center justify-center w-4 h-4 p-1 rounded-full bg-error text-xs text-white font-bold absolute right-[-0.25rem] top-[-0.25rem]">
              2
            </span>
          </div>
        </div>
      </header>

      <section className="flex flex-col justify-center items-center gap-12 p-5 bg-light-gray-3">
        <img src={whiteSneakers} alt="White Sneakers" />

        <p className="text-sm text-primary font-bold">
          Melhores ofertas personalizadas
        </p>

        <h1 className="text-5xl font-bold text-center">
          Queima de estoque Nike 🔥
        </h1>

        <p className="text-dark-gray-2 text-center">
          Consequat culpa exercitation mollit nisi excepteur do do tempor
          laboris eiusmod irure consectetur.
        </p>

        <button
          type="button"
          className="flex justify-center items-center bg-primary text-sm text-light-gray-3 font-bold w-full rounded-lg p-4"
        >
          Ver Ofertas
        </button>

        <div className="flex justify-center items-center gap-3">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="w-3 h-3 bg-light-gray-2 rounded-full"></div>
          <div className="w-3 h-3 bg-light-gray-2 rounded-full"></div>
          <div className="w-3 h-3 bg-light-gray-2 rounded-full"></div>
        </div>
      </section>

      <section className="p-5 bg-light-gray-3 space-y-4">
        <h2 className="text-dark-gray-2 font-bold">Coleções em destaque</h2>

        <div className="flex flex-col justify-center items-center gap-4">
          <img src={newDropSupreme} alt="Novo Drop Supreme" />

          <img src={adidasCollection} alt="Coleção Adidas" />

          <img src={novoBeatsBass} alt="Novo Beats Bass" />
        </div>
      </section>

      <section className="p-5 bg-light-gray-3 space-y-5">
        <h2 className="text-base text-dark-gray-2 font-bold">
          Coleções em destaque
        </h2>

        <div className="grid grid-cols-2 justify-center items-center gap-3">
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="p-5 bg-white rounded-full text-center">
              <img src={Camiseta} alt="Camiseta" />
            </div>
            <p className="text-xs text-dark-gray-2 font-bold">Camisetas</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <div className="p-5 bg-white rounded-full text-center">
              <img src={Calca} alt="Calça" />
            </div>
            <p className="text-xs text-dark-gray-2 font-bold">Calças</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <div className="p-5 bg-white rounded-full text-center">
              <img src={Headphone} alt="Headphone" />
            </div>
            <p className="text-xs text-dark-gray-2 font-bold">Headphones</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <div className="p-5 bg-white rounded-full text-center">
              <img src={Tenis} alt="Tênis" />
            </div>
            <p className="text-xs text-dark-gray-2 font-bold">Tênis</p>
          </div>
        </div>
      </section>
    </div>
  );
}
