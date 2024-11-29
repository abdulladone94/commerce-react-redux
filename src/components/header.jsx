import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-5">
      <Link to="/" className="text-xl font-semibold">
        Home
      </Link>
      <div className="w-10 h-10 bg-blue-300 rounded-full relative flex items-center justify-center">
        <img src={iconCart} alt="cart" className="w-6" />
        <span className="absolute top-2/3 right-1/2 w-5 h-5 bg-red-500 flex items-center justify-center text-white rounded-full text-sm">
          0
        </span>
      </div>
    </header>
  );
};

export default Header;