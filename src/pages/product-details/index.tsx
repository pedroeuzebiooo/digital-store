import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import whiteSneakers2 from "../../assets/white-sneakers-2.png";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import whiteSneakers3 from "../../assets/white-sneakers-3.png";
import stars from "../../assets/stars.svg";
import avaliacao from "../../assets/avaliacao.svg";
import preco from "../../assets/preco.svg";
import precoCortado from "../../assets/preo-cortado.svg";
import sneaker from "../../assets/sneaker.png";

export function ProductDetails() {
  return (
    <div className="mx-auto w-96">
      <Header />

      <section className="space-y-5 bg-light-gray-3 px-5 py-8">
        <p className="text-sm text-dark-gray-2">
          <strong>Home</strong> / Produtos / Tênis / Nike / <br />
          Tênis Nike Revolution 6 Next Nature Masculino
        </p>

        <div className="space-y-8">
          <div className="flex h-64 w-full items-center justify-center gap-2 rounded-lg bg-[#E2E3FF]">
            <ChevronLeft className="size-6 text-dark-gray-2" />

            <img src={whiteSneakers2} alt="white Sneakers 2" className="w-64" />

            <ChevronRight className="size-6 text-dark-gray-2" />
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="rounded-lg border border-primary bg-[#E2E3FF] px-2 py-4">
              <img
                src={whiteSneakers3}
                alt="white Sneakers 3"
                className="w-10"
              />
            </div>

            <div className="rounded-lg bg-[#FFE8BC] px-2 py-4">
              <img
                src={whiteSneakers3}
                alt="white Sneakers 3"
                className="w-10"
              />
            </div>

            <div className="rounded-lg bg-[#FFC0BC] px-2 py-4">
              <img
                src={whiteSneakers3}
                alt="white Sneakers 3"
                className="w-10"
              />
            </div>

            <div className="rounded-lg bg-[#DEC699] px-2 py-4">
              <img
                src={whiteSneakers3}
                alt="white Sneakers 3"
                className="w-10"
              />
            </div>

            <div className="rounded-lg bg-[#E8DFCF] px-2 py-4">
              <img
                src={whiteSneakers3}
                alt="white Sneakers 3"
                className="w-10"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">
              Tênis Nike Revolution 6 Next Nature Masculino
            </h1>

            <p className="text-sm text-dark-gray-3">
              Casual | Nike | REF:38416711
            </p>

            <div className="flex items-center gap-4">
              <img src={stars} alt="Stars" />

              <div className="flex items-center gap-4">
                <img src={avaliacao} alt="Avaliação" />
                <p className="text-light-gray">(90 avaliações )</p>
              </div>
            </div>

            <div className="flex items-end gap-2">
              <img src={preco} alt="Preço" />

              <img src={precoCortado} alt="Preço Cortado" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-light-gray">
              Descrição do produto
            </h3>

            <p className="text-sm text-dark-gray-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-light-gray">Tamanho</h3>

            <div className="flex items-center gap-3">
              <div className="rounded-lg border border-light-gray-2 p-3 text-sm font-semibold text-dark-gray-2">
                39
              </div>

              <div className="rounded-lg border border-light-gray-2 p-3 text-sm font-semibold text-dark-gray-2">
                40
              </div>

              <div className="rounded-lg border border-primary bg-primary p-3 text-sm font-semibold text-white">
                41
              </div>

              <div className="rounded-lg border border-light-gray-2 p-3 text-sm font-semibold text-dark-gray-2">
                42
              </div>

              <div className="rounded-lg border border-light-gray-2 p-3 text-sm font-semibold text-dark-gray-2">
                43
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-light-gray">Tamanho</h3>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#6FEEFF]"></div>
              <div className="h-10 w-10 rounded-full bg-[#FF6969]"></div>
              <div className="h-10 w-10 rounded-full bg-[#5E5E5E]"></div>
              <div className="h-10 w-10 rounded-full bg-[#6D70B7]"></div>
            </div>
          </div>

          <div>
            <button className="w-full rounded-lg bg-[#FFB31F] px-4 py-2 font-semibold uppercase text-white transition-colors hover:bg-warning">
              Comprar
            </button>
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
