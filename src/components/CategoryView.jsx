import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function CategoryView() {
  const { productCategory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${productCategory}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [productCategory]);

  return (
    <section>
      <h1>{productCategory.replace("-", " ").toUpperCase()}</h1>
      <p>Contenido de la categoría {productCategory}</p>
    </section>
  );
}
