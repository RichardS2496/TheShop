import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ProductView } from "../ProductView";
//import "../styles/searchResults.css";

export function SearchResults() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((json) => {
        const filteredProducts = json.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        setProducts(filteredProducts);
      });
  }, [query]);

  return (
    <section className="search-results-section">
      <h2>Search Results for "{query}"</h2>
      <ul className="grid grid-cols-4 gap-8 mb-16">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <ProductView product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
