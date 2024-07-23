import { ArrowRight, Menu, Search, ShoppingCart } from "lucide-react";
import logo from "./assets/logo.svg";
import whiteSneakers from "./assets/white-sneakers.png";
import newDropSupreme from "./assets/new-drop-supreme.png";
import adidasCollection from "./assets/adidas-collection.png";
import newBeatsBass from "./assets/new-beats-bass.png";
import ornament from "./assets/ornament.svg";
import tShirt from "./assets/t-shirt.png";
import trouser from "./assets/trouser.png";
import headphone from "./assets/headphone.png";
import sneakerCategory from "./assets/sneaker-category.png";
import sneaker from "./assets/sneaker.png";
import sneakers from "./assets/sneakers.png";

export function App() {
  return (
    <div className="w-96 mx-auto">
      <header className="flex items-center justify-between px-5 py-8">
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

      <section className="px-5 py-8 bg-light-gray-3 space-y-8 relative">
        <img src={whiteSneakers} alt="White Sneakers" />

        <p className="text-primary font-bold text-center">
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
          className="flex justify-center items-center bg-primary text-light-gray-3 font-bold w-full rounded-lg p-4"
        >
          Ver Ofertas
        </button>

        <div className="flex justify-center items-center gap-5">
          <div className="w-4 h-4 bg-primary rounded-full"></div>
          <div className="w-4 h-4 bg-light-gray-2 rounded-full"></div>
          <div className="w-4 h-4 bg-light-gray-2 rounded-full"></div>
          <div className="w-4 h-4 bg-light-gray-2 rounded-full"></div>
        </div>

        <img src={ornament} alt="Ornament" className="absolute top-5 right-0" />
      </section>

      <section className="px-5 py-8 bg-light-gray-3 space-y-5">
        <h2 className="text-dark-gray-2 font-bold">Coleções em destaque</h2>

        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src={newDropSupreme}
            alt="Novo Drop Supreme"
            className="rounded-lg"
          />

          <img
            src={adidasCollection}
            alt="Coleção Adidas"
            className="rounded-lg"
          />

          <img
            src={newBeatsBass}
            alt="Novo Beats Bass"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="p-5 bg-light-gray-3 space-y-5">
        <h2 className="text-dark-gray-2 font-bold">Coleções em destaque</h2>

        <div className="grid grid-cols-2 justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="p-5 bg-white rounded-full">
              <img src={tShirt} alt="Camiseta" />
            </div>
            <p className="text-sm text-dark-gray-2 font-bold">Camisetas</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <div className="p-5 bg-white rounded-full">
              <img src={trouser} alt="Calça" />
            </div>
            <p className="text-sm text-dark-gray-2 font-bold">Calças</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <div className="p-5 bg-white rounded-full">
              <img src={headphone} alt="Headphone" />
            </div>
            <p className="text-sm text-dark-gray-2 font-bold">Headphones</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <div className="p-5 bg-white rounded-full">
              <img src={sneakerCategory} alt="Tênis" />
            </div>
            <p className="text-sm text-dark-gray-2 font-bold">Tênis</p>
          </div>
        </div>
      </section>

      <section className="p-5 bg-light-gray-3 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-dark-gray-2 font-bold">Coleções em destaque</h2>

          <a
            href="#"
            className="text-primary flex items-center justify-center gap-2"
          >
            Ver todos
            <ArrowRight className="size-6" />
          </a>
        </div>

        <div className="grid grid-cols-2 justify-center items-center gap-4">
          <div className="flex flex-col justify-center gap-4">
            <div className="p-5 bg-white rounded-lg flex flex-col justify-center items-center gap-4">
              <span className="block py-1 px-4 bg-[#E7FF86] text-dark-gray-2 uppercase font-bold rounded-full">
                30% Off
              </span>
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="font-bold text-light-gray">Tênis</small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="p-5 bg-white rounded-lg flex flex-col justify-center items-center gap-4">
              <span className="block py-1 px-4 bg-[#E7FF86] text-dark-gray-2 uppercase font-bold rounded-full">
                30% Off
              </span>
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="font-bold text-light-gray">Tênis</small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="p-5 bg-white rounded-lg flex flex-col justify-center items-center">
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="font-bold text-light-gray">Tênis</small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="p-5 bg-white rounded-lg flex flex-col justify-center items-center">
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="font-bold text-light-gray">Tênis</small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="p-5 bg-white rounded-lg flex flex-col justify-center items-center">
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="font-bold text-light-gray">Tênis</small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="p-5 bg-white rounded-lg flex flex-col justify-center items-center">
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="font-bold text-light-gray">Tênis</small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="p-5 bg-white rounded-lg flex flex-col justify-center items-center">
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="font-bold text-light-gray">Tênis</small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="p-5 bg-white rounded-lg flex flex-col justify-center items-center">
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="font-bold text-light-gray">Tênis</small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 space-y-5">
        <div className="w-72 h-72 mx-auto flex justify-center items-center bg-light-gray-3 rounded-full p-12">
          <img src={sneakers} alt="Sneakers" />
        </div>

        <div className="flex flex-col justify-center gap-8">
          <p className="text-warning">Oferta especial</p>

          <h2 className="text-3xl text-dark-gray-2 font-bold">
            Air Jordan edição de colecionador
          </h2>

          <p className="text-dark-gray-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>

          <button
            type="button"
            className="bg-primary text-light-gray-3 font-bold w-48 py-2 px-4 rounded-lg"
          >
            Ver Oferta
          </button>
        </div>
      </section>
    </div>
  );
}
