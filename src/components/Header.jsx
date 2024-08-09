import { Link } from "react-router-dom";
import "../styles/header.css";
import { LogoApp } from "./LogoApp";
//import { SearchBtn } from "./SearchBtn";
import { ShopCart } from "./ShopCart";
import useCart from "../useCart";
import { useMyLocation } from "./useMyLocation";
//import { useState } from "react";

const userInfo = "Richard";

export function Header() {
  const { cartQuantity } = useCart();
  const { location, loading } = useMyLocation();
  /* const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("`/search?query=${searchTerm}`");
  };*/

  return (
    <section className="header-container ">
      <div className="flex flex-row gap-8 w-1/3">
        <Link to="/">
          <LogoApp />
        </Link>
        {/* <form className="flex flex-row w-full" onSubmit={handleSearchSubmit}>
          <input
            className="w-full bg-white rounded-xl px-2 focus:outline-none"
            type="text"
            placeholder="Search in The Shop"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="rounded-full ml-[-2rem]">
            <SearchBtn />
          </button>
        </form>*/}
      </div>
      <nav className="w-2/3 flex flex-row justify-end items-center gap-8 text-white">
        <Link className="text-start" to="/login">
          <div className="text-xs">Welcome</div>
          <div className="font-bold text-sm">{userInfo}</div>
        </Link>
        <a className="text-start" href="">
          <div className="text-xs">Ship to</div>
          <div className="font-bold text-sm">
            {loading
              ? "Loading location..."
              : `${location.city}, ${location.zip}`}
          </div>
        </a>
        <div className="text-start text-slate-500">
          <div className="text-xs ">Returns</div>
          <div className="font-bold text-sm">& Orders</div>
        </div>
        <Link to="/cart">
          <ShopCart cartQuanty={cartQuantity} />
        </Link>
      </nav>
    </section>
  );
}
