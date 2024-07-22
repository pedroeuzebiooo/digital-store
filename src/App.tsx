import { Menu, Search, ShoppingCart } from "lucide-react";
import Logo from "./assets/logo.svg";

function App() {
  return (
    <div className="w-96 mt-12 mx-auto">
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
    </div>
  );
}

export default App;
