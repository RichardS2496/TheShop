import { useParams } from "react-router-dom";
import { useProducts } from "../useProducts";
import "../styles/productDetail.css";
import { Rate } from "../components/Rate";

export function ProductDetails() {
  const { productId } = useParams();
  const { products, error, isLoading } = useProducts();
  const product = products.find((p) => p.id == productId);

  function capitalWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;
  if (!product) return <div>Product not found</div>;
  return (
    <>
      <section className="product-detail flex flex-row gap-12 my-12">
        <div className="w-1/3">
          <img className="" src={product.image} alt="" />
        </div>
        <div className="w-2/3 flex flex-col gap-4 text-start">
          <span className="rounded-full bg-orange-500 px-4 py-2 w-fit text-white text-sm font-semibold">
            {capitalWords(
              product.category === "jewelery" ? "jewelry" : product.category
            )}
          </span>
          <h1 className="font-bold text-4xl">{product.title}</h1>
          <h4 className="text-4xl font-bold">€ {product.price}</h4>
          <hr className="bg-slate-400"></hr>
          <Rate rating={product.rating.rate} />
          <p className="text-xl">{product.description}</p>
        </div>
      </section>
    </>
  );
}
