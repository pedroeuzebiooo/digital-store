import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

import sneaker from "../../assets/sneaker.png";
import { ChevronDown, Filter } from "lucide-react";

export function ProductListPage() {
  return (
    <div className="mx-auto w-96">
      <Header />

      <section className="py- py8 space-y-5 bg-light-gray-3 px-5 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-lg border border-dark-gray-2 p-4">
            <p className="text-sm text-dark-gray-2">
              <strong>Ordernar por:</strong> mais relevantes
            </p>

            <ChevronDown className="size-6 text-dark-gray-2" />
          </div>

          <div className="cursor-pointer rounded-lg bg-primary p-4 transition-colors hover:bg-tertiary">
            <Filter className="size-6 text-white" />
          </div>
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
    </div>
  );
}
