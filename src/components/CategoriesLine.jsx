import { Link } from "react-router-dom";
import "../styles/categoriesLine.css";

export function CategoriesLine() {
  return (
    <section>
      <nav className="grid grid-cols-6 gap-4 mt-4">
        <a className=" bg-orange-500 text-white flex flex-row justify-center items-center gap-2 p-2 rounded-xl text-base font-semibold transition-all">
          All Products
        </a>

        <Link className="category-card">
          <img src="src\assets\cat_img\prices.png" alt="" />
          <h4>Best Deals</h4>
        </Link>
        <Link to={"/category/men's clothing"} className="category-card">
          <img src="src\assets\cat_img\men.png" alt="" />
          <h4>Men's Clothing</h4>
        </Link>
        <Link to={"/category/women's clothing"} className="category-card">
          <img src="src\assets\cat_img\women.png" alt="" />
          <h4>Women's Clothing</h4>
        </Link>
        <Link to={"/category/electronics"} className="category-card">
          <img src="src\assets\cat_img\electronic.png" alt="" />
          <h4>Electronics</h4>
        </Link>
        <Link to={"/category/jewelery"} className="category-card">
          <img src="src\assets\cat_img\jewelry.png" alt="" />
          <h4>Jewelry</h4>
        </Link>
      </nav>
    </section>
  );
}
