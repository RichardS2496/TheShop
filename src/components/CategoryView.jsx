import { useParams } from "react-router-dom";

export function CategoryView() {
  const { productCategory } = useParams();

  return (
    <section>
      <h1>{productCategory.replace("-", " ").toUpperCase()}</h1>
      <p>Contenido de la categoría {productCategory}</p>
    </section>
  );
}
