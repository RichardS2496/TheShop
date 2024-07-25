import { Link } from "react-router-dom";
import "./styles/productCard.css";

function titleShorter(title) {
  if (title.length > 46) {
    return title.slice(0, 43) + "...";
  }
  return title;
}

export function ProductView({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="productCard">
      <img src={product.image} />
      <h2 className="text-start self-start">{titleShorter(product.title)}</h2>
      <h3 className="self-start font-semibold text-lg">€ {product.price}</h3>
    </Link>
  );
}
