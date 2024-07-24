import logoWhite from "../assets/logo-white.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

export function Footer() {
  return (
    <footer className="px-5 py-8 bg-dark-gray space-y-8">
      <img src={logoWhite} alt="Logo Digital Store White" />

      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </p>

      <div className="flex items-center gap-8">
        <img src={facebook} alt="Facebook Logo" />

        <img src={instagram} alt="Instagram Logo" />

        <img src={twitter} alt="Twitter Logo" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-lg text-white font-semibold">Informação</h3>

          <p className="text-white leading-8">
            Sobre <br /> Drip Store <br /> Segurança <br /> Wishlist <br /> Blog{" "}
            <br /> Trabalhe conosco <br /> Meus Pedidos
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg text-white font-semibold">Informação</h3>

          <p className="text-white leading-8">
            Camisetas <br /> Calças <br /> Bonés <br /> Headphones <br /> Tênis
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg text-white font-semibold">Contato</h3>

        <p className="text-white leading-8">
          Av. Santos Dumont, 1510 - 1 andar - <br /> Aldeota, Fortaleza - CE,
          60150-161 <br /> <br /> (85) 3051-3411
        </p>
      </div>

      <div className="w-full h-px bg-light-gray"></div>

      <p className="text-sm text-center text-white">@ 2022 Digital College</p>
    </footer>
  );
}
