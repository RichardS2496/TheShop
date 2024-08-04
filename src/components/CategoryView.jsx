import { Link } from "react-router-dom";
import { ProductView } from "../ProductView";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/categoryView.css";

export function CategoryView() {
  const { productCategory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${productCategory}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [productCategory]);

  return (
    <section className="category-section">
      <div className="flex flex-row gap-8">
        <div className="w-1/5 filter-section">
          <nav className="grid grid-cols-1 gap-4  ">
            <Link to="/" className="categoryFilter-card">
              Home
            </Link>

            <Link className="categoryFilter-card">
              <h4>Best Deals</h4>
            </Link>
            <Link
              to={"/category/men's clothing"}
              className="categoryFilter-card"
            >
              <h4>Men's Clothing</h4>
            </Link>
            <Link
              to={"/category/women's clothing"}
              className="categoryFilter-card"
            >
              <h4>Women's Clothing</h4>
            </Link>
            <Link to={"/category/electronics"} className="categoryFilter-card">
              <h4>Electronics</h4>
            </Link>
            <Link to={"/category/jewelery"} className="categoryFilter-card">
              <h4>Jewelry</h4>
            </Link>
          </nav>
        </div>
        <div className="w-4/5 ">
          <ul className="grid grid-cols-4 gap-8 mb-16">
            {products.map((product) => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <ProductView product={product} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
