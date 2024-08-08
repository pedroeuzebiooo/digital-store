import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

import sneaker from "../../assets/sneaker.png";
import { ChevronDown, Filter, X } from "lucide-react";
import { useState } from "react";

export function ProductListPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function filterOpen() {
    setIsFilterOpen(true);
  }

  function filterClose() {
    setIsFilterOpen(false);
  }

  return (
    <div className="mx-auto w-96">
      <Header />

      <section className="space-y-5 bg-light-gray-3 px-5 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-lg border border-dark-gray-2 p-4">
            <p className="text-sm text-dark-gray-2">
              <strong>Ordernar por:</strong> mais relevantes
            </p>

            <ChevronDown className="size-6 text-dark-gray-2" />
          </div>

          <button
            className="rounded-lg bg-primary p-4 transition-colors hover:bg-tertiary"
            onClick={filterOpen}
          >
            <Filter className="size-6 text-white" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-dark-gray-2">
            Resultados para “Tênis”{" "}
            <span className="font-normal"> - 389 produtos</span>
          </h2>
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

      <Footer />

      {isFilterOpen && (
        <div className="fixed inset-0 z-20 bg-dark-gray/50">
          <div className="flex w-80 flex-col justify-between bg-white p-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-dark-gray-2">Filtrar por</h3>
                <button type="button" onClick={filterClose}>
                  <X className="size-6 text-dark-gray-2" />
                </button>
              </div>

              <div className="h-px w-full bg-light-gray-2"></div>

              <div className="space-y-5">
                <h4 className="font-semibold text-dark-gray-2">Marca</h4>

                <div className="flex flex-col justify-end gap-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="marca"
                      id="adidas"
                      className="h-6 w-6 accent-primary"
                      checked
                    />

                    <label htmlFor="adidas" className="text-dark-gray-2">
                      Adidas
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="marca"
                      id="balenciaga"
                      className="h-6 w-6 accent-primary"
                    />

                    <label htmlFor="balenciaga" className="text-dark-gray-2">
                      Balenciaga
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="marca"
                      id="k-swiss"
                      className="h-6 w-6 accent-primary"
                      checked
                    />

                    <label htmlFor="k-swiss" className="text-dark-gray-2">
                      K-Swiss
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="marca"
                      id="nike"
                      className="h-6 w-6 accent-primary"
                    />

                    <label htmlFor="nike" className="text-dark-gray-2">
                      Nike
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="marca"
                      id="puma"
                      className="h-6 w-6 accent-primary"
                    />

                    <label htmlFor="puma" className="text-dark-gray-2">
                      Puma
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <h4 className="font-semibold text-dark-gray-2">Categoria</h4>

                <div className="flex flex-col justify-end gap-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="categoria"
                      id="esporte-lazer"
                      className="h-6 w-6 accent-primary"
                      checked
                    />

                    <label htmlFor="esporte-lazer" className="text-dark-gray-2">
                      Esporte e lazer
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="categoria"
                      id="casual"
                      className="h-6 w-6 accent-primary"
                    />

                    <label htmlFor="casual" className="text-dark-gray-2">
                      Casual
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="categoria"
                      id="utilitario"
                      className="h-6 w-6 accent-primary"
                    />

                    <label htmlFor="utilitario" className="text-dark-gray-2">
                      Utilitário
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="categoria"
                      id="corrida"
                      className="h-6 w-6 accent-primary"
                    />

                    <label htmlFor="corrida" className="text-dark-gray-2">
                      Corrida
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <h4 className="font-semibold text-dark-gray-2">Gênero</h4>

                <div className="flex flex-col justify-end gap-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="genero"
                      id="masculino"
                      className="h-6 w-6 accent-primary"
                      checked
                    />

                    <label htmlFor="masculino" className="text-dark-gray-2">
                      Masculino
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="genero"
                      id="feminino"
                      className="h-6 w-6 accent-primary"
                      checked
                    />

                    <label htmlFor="feminino" className="text-dark-gray-2">
                      Feminino
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="genero"
                      id="unisex"
                      className="h-6 w-6 accent-primary"
                    />

                    <label htmlFor="unisex" className="text-dark-gray-2">
                      Unisex
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <h4 className="font-semibold text-dark-gray-2">Estado</h4>

                <div className="flex flex-col justify-end gap-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="estado"
                      id="novo"
                      className="h-6 w-6 accent-primary"
                      checked
                    />

                    <label htmlFor="novo" className="text-dark-gray-2">
                      Novo
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="estado"
                      id="usado"
                      className="h-6 w-6 accent-primary"
                    />

                    <label htmlFor="usado" className="text-dark-gray-2">
                      Usado
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
