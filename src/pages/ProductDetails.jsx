import { useParams } from "react-router-dom";
import { useProducts } from "../useProducts";
import "../styles/productDetail.css";

export function ProductDetails() {
  const { productId } = useParams();
  const { products, error, isLoading } = useProducts();
  const product = products.find((p) => p.id == productId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;
  if (!product) return <div>Product not found</div>;
  return (
    <>
      <section className="product-detail flex flex-row">
        <div className="w-1/3">
          <img src={product.image} alt="" />
        </div>
        <div className="w-2/3">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      </section>
    </>
  );
}
