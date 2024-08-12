import { Link } from "react-router-dom";
import { ProductView } from "../ProductView";
import { useProducts } from "../useProducts";

export function MainProductsView() {
  const { products, error, isLoading } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <section className="mt-4 h-screen">
      <ul className="grid grid-cols-5 gap-8 mb-16">
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
