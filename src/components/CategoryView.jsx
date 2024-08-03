import { Link } from "react-router-dom";
import { ProductView } from "../ProductView";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function CategoryView() {
  const { productCategory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${productCategory}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
    console.log(productCategory);
  }, [productCategory]);

  return (
    <section className="mt-4">
      <ul className="grid grid-cols-5 gap-8 mb-16">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <ProductView
                productCategory={productCategory}
                product={product}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
