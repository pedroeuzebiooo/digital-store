import logoWhite from "../assets/logo-white.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

export function Footer() {
  return (
    <footer className="space-y-8 bg-dark-gray px-5 py-8">
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
          <h3 className="text-lg font-semibold text-white">Informação</h3>

          <p className="leading-8 text-white">
            Sobre <br /> Drip Store <br /> Segurança <br /> Wishlist <br /> Blog{" "}
            <br /> Trabalhe conosco <br /> Meus Pedidos
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Informação</h3>

          <p className="leading-8 text-white">
            Camisetas <br /> Calças <br /> Bonés <br /> Headphones <br /> Tênis
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">Contato</h3>

        <p className="leading-8 text-white">
          Av. Santos Dumont, 1510 - 1 andar - <br /> Aldeota, Fortaleza - CE,
          60150-161 <br /> <br /> (85) 3051-3411
        </p>
      </div>

      <div className="h-px w-full bg-light-gray"></div>

      <p className="text-center text-sm text-white">@ 2022 Digital College</p>
    </footer>
  );
}
