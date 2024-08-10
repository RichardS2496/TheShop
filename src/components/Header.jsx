import { Link } from "react-router-dom";
import "../styles/header.css";
import { LogoApp } from "./LogoApp";
//import { SearchBtn } from "./SearchBtn";
import { ShopCart } from "./ShopCart";
import { useMyLocation } from "./useMyLocation";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

//import { useState } from "react";

export function Header() {
  const location = useLocation();
  const { cartQuantity, user } = useContext(CartContext); // Obteniendo el usuario del CartContext
  const { myLocation, loading } = useMyLocation();

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
        {/* 
        <form className="flex flex-row w-full" onSubmit={handleSearchSubmit}>
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
        </form>
        */}
      </div>
      <nav className="w-2/3 flex flex-row justify-end items-center gap-8 text-white">
        <Link className="text-start" to="/login">
          <div className="text-xs">{user ? "Welcome," : "Sign Up /"}</div>
          <div className="font-bold text-sm">{user ? user.email : "Login"}</div>
        </Link>
        <a className="text-start" href="">
          <div className="text-xs">Ship to</div>
          <div className="font-bold text-sm">
            {loading
              ? "Loading location..."
              : `${myLocation.city}, ${myLocation.zip}`}
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
