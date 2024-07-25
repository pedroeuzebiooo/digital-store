import { Header } from "./components/header";
import { Footer } from "./components/footer";

import { ArrowRight } from "lucide-react";

import whiteSneakers from "./assets/white-sneakers.png";
import ornament from "./assets/ornament.svg";
import starsWarsStormTrooperSupreme from "./assets/star-wars-storm-trooper-supreme.png";
import sneakerFeaturedCollectionsSection1 from "./assets/sneaker-featured-collections-section-1.png";
import headphoneFeaturedCollectionsSection1 from "./assets/headphone-featured-collections-section-1.png";
import tShirt from "./assets/t-shirt.png";
import trouser from "./assets/trouser.png";
import headphone from "./assets/headphone.png";
import sneakerCategory from "./assets/sneaker-category.png";
import sneaker from "./assets/sneaker.png";
import sneakers from "./assets/sneakers.png";

export function App() {
  return (
    <div className="mx-auto w-96">
      <Header />

      <section className="relative space-y-8 bg-light-gray-3 px-5 py-8">
        <img src={whiteSneakers} alt="White Sneakers" />

        <p className="text-center font-semibold text-primary">
          Melhores ofertas personalizadas
        </p>

        <h1 className="text-center text-5xl font-semibold">
          Queima de estoque Nike 🔥
        </h1>

        <p className="text-center text-dark-gray-2">
          Consequat culpa exercitation mollit nisi excepteur do do tempor
          laboris eiusmod irure consectetur.
        </p>

        <button
          type="button"
          className="flex w-full items-center justify-center rounded-lg bg-primary p-3 font-semibold text-light-gray-3 transition-colors hover:bg-tertiary"
        >
          Ver Ofertas
        </button>

        <div className="flex items-center justify-center gap-5">
          <div className="h-4 w-4 rounded-full bg-primary"></div>
          <div className="h-4 w-4 rounded-full bg-light-gray-2"></div>
          <div className="h-4 w-4 rounded-full bg-light-gray-2"></div>
          <div className="h-4 w-4 rounded-full bg-light-gray-2"></div>
        </div>

        <img src={ornament} alt="Ornament" className="absolute right-0 top-0" />
      </section>

      <section className="space-y-5 bg-light-gray-3 px-5 py-8">
        <h2 className="font-semibold text-dark-gray-2">Coleções em destaque</h2>

        <div className="flex flex-col justify-center gap-5">
          <div className="relative space-y-5 rounded-lg bg-[#D8E3F2] p-5 shadow-lg">
            <span className="rounded-full bg-[#E7FF86] px-4 py-2 font-semibold uppercase text-dark-gray-2 shadow-lg">
              30% Off
            </span>

            <h3 className="text-4xl font-semibold">Novo drop Supreme</h3>

            <button
              type="button"
              className="relative z-10 w-36 rounded-lg bg-white p-3 font-semibold text-primary transition-colors hover:bg-light-gray-3"
            >
              Comprar
            </button>

            <img
              src={starsWarsStormTrooperSupreme}
              alt="Stars Wars Storm Trooper Supreme"
              className="absolute bottom-0 right-0 w-48"
            />
          </div>

          <div className="relative space-y-5 rounded-lg bg-[#D8E3F2] p-5 shadow-lg">
            <span className="rounded-full bg-[#E7FF86] px-4 py-2 font-semibold uppercase text-dark-gray-2 shadow-lg">
              30% Off
            </span>

            <h3 className="text-4xl font-semibold">
              Coleção <br /> Adidas
            </h3>

            <button
              type="button"
              className="w-36 rounded-lg bg-white p-3 font-semibold text-primary transition-colors hover:bg-light-gray-3"
            >
              Comprar
            </button>

            <img
              src={sneakerFeaturedCollectionsSection1}
              alt="Sneaker Featured Collections Section 1"
              className="absolute bottom-0 right-0 w-48"
            />
          </div>

          <div className="relative space-y-5 rounded-lg bg-[#D8E3F2] p-5 shadow-lg">
            <span className="rounded-full bg-[#E7FF86] px-4 py-2 font-semibold uppercase text-dark-gray-2 shadow-lg">
              30% Off
            </span>

            <h3 className="text-4xl font-semibold">
              Novo <br /> Beats Bass
            </h3>

            <button
              type="button"
              className="w-36 rounded-lg bg-white p-3 font-semibold text-primary transition-colors hover:bg-light-gray-3"
            >
              Comprar
            </button>

            <img
              src={headphoneFeaturedCollectionsSection1}
              alt="Headphone Featured Collections Section 1"
              className="absolute bottom-0 right-0 w-48"
            />
          </div>
        </div>
      </section>

      <section className="space-y-5 bg-light-gray-3 px-5 py-8">
        <h2 className="font-semibold text-dark-gray-2">Coleções em destaque</h2>

        <div className="grid grid-cols-2 items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="rounded-full bg-white p-5">
              <img src={tShirt} alt="Camiseta" />
            </div>
            <p className="text-sm font-semibold text-dark-gray-2">Camisetas</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="rounded-full bg-white p-5">
              <img src={trouser} alt="Calça" />
            </div>
            <p className="text-sm font-semibold text-dark-gray-2">Calças</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="rounded-full bg-white p-5">
              <img src={headphone} alt="Headphone" />
            </div>
            <p className="text-sm font-semibold text-dark-gray-2">Headphones</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="rounded-full bg-white p-5">
              <img src={sneakerCategory} alt="Tênis" />
            </div>
            <p className="text-sm font-semibold text-dark-gray-2">Tênis</p>
          </div>
        </div>
      </section>

      <section className="space-y-5 bg-light-gray-3 px-5 py-8">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-dark-gray-2">
            Coleções em destaque
          </h2>

          <a
            href="#"
            className="flex items-center justify-center gap-2 font-semibold text-primary"
          >
            Ver todos
            <ArrowRight className="size-6" />
          </a>
        </div>

        <div className="grid grid-cols-2 items-center justify-center gap-5">
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-5 shadow-lg">
              <span className="block rounded-full bg-[#E7FF86] px-4 py-1 font-semibold uppercase text-dark-gray-2">
                30% Off
              </span>
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="text-sm font-semibold text-light-gray">
              Tênis
            </small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-5 shadow-lg">
              <span className="block rounded-full bg-[#E7FF86] px-4 py-1 font-semibold uppercase text-dark-gray-2">
                30% Off
              </span>
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="text-sm font-semibold text-light-gray">
              Tênis
            </small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-5 shadow-lg">
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="text-sm font-semibold text-light-gray">
              Tênis
            </small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-5 shadow-lg">
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="text-sm font-semibold text-light-gray">
              Tênis
            </small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-5 shadow-lg">
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="text-sm font-semibold text-light-gray">
              Tênis
            </small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-5 shadow-lg">
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="text-sm font-semibold text-light-gray">
              Tênis
            </small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-5 shadow-lg">
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="text-sm font-semibold text-light-gray">
              Tênis
            </small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-5 shadow-lg">
              <img src={sneaker} alt="Sneaker" />
            </div>
            <small className="text-sm font-semibold text-light-gray">
              Tênis
            </small>
            <p className="text-dark-gray-2">K-Swiss V8 - Mascu...</p>
            <div className="flex gap-4">
              <p className="text-light-gray line-through">$200</p>
              <p>$100</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5 px-5 py-8">
        <div className="mx-auto flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-b from-light-gray-3/30 to-white">
          <img src={sneakers} alt="Sneakers" />
        </div>

        <div className="flex flex-col justify-center gap-8">
          <p className="font-bold text-warning">Oferta especial</p>

          <h2 className="text-4xl font-bold text-dark-gray-2">
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
            className="w-48 rounded-lg bg-primary px-4 py-2 font-bold text-light-gray-3"
          >
            Ver Oferta
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
