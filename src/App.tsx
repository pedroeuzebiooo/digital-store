import { Menu, Search, ShoppingCart } from "lucide-react";
import Logo from "./assets/logo.svg";
import WhiteSneakers from "./assets/white-sneakers.png";
import novoDropSupreme from "./assets/novo-drop-supreme.png";
import colecaoAdidas from "./assets/colecao-adidas.png";
import novoBeatsBass from "./assets/novo-beats-bass.png";
import Camiseta from "./assets/camiseta.png";
import Calca from "./assets/calca.png";
import Headphone from "./assets/headphone.png";
import Tenis from "./assets/tenis.png";

export function App() {
  return (
    <div className="w-96 mx-auto">
      <header className="flex items-center justify-between p-5">
        <Menu className="size-6 text-[#1F1F1F]" />

        <a href="#">
          <img src={Logo} alt="Logo do Tennis Store" />
        </a>

        <div className="flex items-center gap-3 relative">
          <Search className="size-6 text-[#CCCCCC]" />
          <ShoppingCart className="size-6 text-[#C92071]" />

          <span className="flex items-center justify-center w-4 h-4 p-1 rounded-full bg-[#EE4266] text-xs text-white font-bold absolute right-[-0.25rem] top-[-0.25rem]">
            2
          </span>
        </div>
      </header>

      <section className="p-5 bg-[#F5F5F5] space-y-8">
        <img src={WhiteSneakers} alt="White Sneakers" />

        <p className="text-sm text-[#C92071] text-center font-bold">
          Melhores ofertas personalizadas
        </p>

        <h1 className="text-5xl text-[#1F1F1F] text-center font-bold">
          Queima de estoque Nike 🔥
        </h1>

        <p className="text-sm text-[#474747] text-center">
          Consequat culpa exercitation mollit nisi excepteur do do tempor
          laboris eiusmod irure consectetur.
        </p>

        <button
          type="button"
          className="flex justify-center items-center bg-[#C92071] text-sm text-[#F5F5F5] font-bold w-full rounded-lg p-3"
        >
          Ver Ofertas
        </button>

        <div className="flex justify-center items-center gap-3">
          <div className="w-3 h-3 bg-[#C92071] rounded-full"></div>
          <div className="w-3 h-3 bg-[#CCCCCC] rounded-full"></div>
          <div className="w-3 h-3 bg-[#CCCCCC] rounded-full"></div>
          <div className="w-3 h-3 bg-[#CCCCCC] rounded-full"></div>
        </div>
      </section>

      <section className="p-5 bg-[#F5F5F5] space-y-3">
        <h2 className="text-base text-[#474747] font-bold">
          Coleções em destaque
        </h2>

        <div className="flex flex-col justify-center items-center gap-3">
          <img src={novoDropSupreme} alt="Novo Drop Supreme" />

          <img src={colecaoAdidas} alt="Coleção Adidas" />

          <img src={novoBeatsBass} alt="Novo Beats Bass" />
        </div>
      </section>

      <section className="p-5 bg-[#F5F5F5] space-y-5">
        <h2 className="text-base text-[#474747] font-bold">
          Coleções em destaque
        </h2>

        <div className="grid grid-cols-2 justify-center items-center gap-3">
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="p-5 bg-white rounded-full text-center">
              <img src={Camiseta} alt="Camiseta" />
            </div>
            <p className="text-xs text-[#474747] font-bold">Camisetas</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <div className="p-5 bg-white rounded-full text-center">
              <img src={Calca} alt="Calça" />
            </div>
            <p className="text-xs text-[#474747] font-bold">Calças</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <div className="p-5 bg-white rounded-full text-center">
              <img src={Headphone} alt="Headphone" />
            </div>
            <p className="text-xs text-[#474747] font-bold">Headphones</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <div className="p-5 bg-white rounded-full text-center">
              <img src={Tenis} alt="Tênis" />
            </div>
            <p className="text-xs text-[#474747] font-bold">Tênis</p>
          </div>
        </div>
      </section>
    </div>
  );
}
