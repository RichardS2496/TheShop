import { ProductView } from "../ProductView";
import { useProducts } from "../useProducts";

export function MainProductsView() {
  const { products, error, isLoading } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <section className="mt-4">
      <ul className="grid grid-cols-5 gap-8">
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <ProductView product={product} />
          </li>
        ))}
      </ul>
      <div className="h-44">Banercito</div>
      <ul className="grid grid-cols-5 gap-8">
        {products.slice(10, 20).map((product) => (
          <li key={product.id}>
            <ProductView product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
