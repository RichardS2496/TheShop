import { Link } from "react-router-dom";
import "../styles/header.css";
import { LogoApp } from "./LogoApp";
import { SearchBtn } from "./SearchBtn";
import { ShopCart } from "./ShopCart";
import useCart from "./useCart";
const userInfo = "Richard";

export function Header() {
  const { cartQuanty } = useCart();

  return (
    <section className="header-container ">
      <div className="flex flex-row gap-8 w-1/3">
        <Link to="/">
          <LogoApp />
        </Link>
        <form className="flex flex-row w-full" action="">
          <input
            className="w-full bg-white rounded-xl px-2 focus:outline-none"
            type="text"
            placeholder="Search in The Shop"
          />
          <button className="rounded-full ml-[-2rem]">
            <SearchBtn />
          </button>
        </form>
      </div>
      <nav className="w-2/3 flex flex-row justify-end items-center gap-8 text-white">
        <a className="text-start" href="">
          <div className="text-xs">Welcome</div>
          <div className="font-bold text-sm">{userInfo}</div>
        </a>
        <a className="text-start" href="">
          <div className="text-xs">Ship to</div>
          <div className="font-bold text-sm">Current Location</div>
        </a>
        <a className="text-start" href="">
          <div className="text-xs ">Returns</div>
          <div className="font-bold text-sm">& Orders</div>
        </a>
        <Link to="/cart">
          <ShopCart cartQuanty={cartQuanty} />
        </Link>
      </nav>
    </section>
  );
}
