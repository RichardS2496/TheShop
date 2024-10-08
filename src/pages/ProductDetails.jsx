import { Link, useParams } from "react-router-dom";
import { useProducts } from "../useProducts";
import "../styles/productDetail.css";
import { Rate } from "../components/Rate";
import useCart from "../useCart";
import { useEffect, useState } from "react";

export function ProductDetails() {
  const { productId } = useParams();
  const { products, error, isLoading } = useProducts();
  const { addToCart, removeFromCart, cartItems } = useCart();
  const product = products.find((p) => p.id == productId);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      const isProductInCart = cartItems.some((item) => item.id === product.id);
      setIsAdded(isProductInCart);
    }
  }, [cartItems, product]);

  function capitalWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;
  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setIsAdded(false);
  };

  return (
    <>
      <section className="product-detail flex flex-row gap-12 my-12 h-screen">
        <div className="product-img-container w-1/3 h-[520px]">
          <img
            className="product-img hover:product-img-hover"
            src={product.image}
            alt=""
          />
          {/*<div className="zoomer" id="zoomer"></div>*/}
        </div>
        <div className="w-2/3 flex flex-col gap-4 text-start">
          <div className="zoomCaptured "></div>
          <Link
            to={`/category/${product.category}`}
            className="rounded-full bg-orange-500 px-4 py-2 w-fit text-white text-sm font-semibold"
          >
            {capitalWords(
              product.category === "jewelery" ? "jewelry" : product.category
            )}
          </Link>
          <h1 className="font-bold text-4xl">{product.title}</h1>
          <h4 className="text-4xl font-bold">{product.price} €</h4>
          <hr className="bg-slate-400"></hr>
          <div className="flex flex-row items-center justify-start my-[-1.5rem]">
            <p className="text-sm">Ratings {product.rating.rate} of 5</p>
            <Rate rating={product.rating.rate} />
            <p className="text-sm">Based on {product.rating.count} reviews</p>
          </div>
          <p className="text-xl">{product.description}</p>
          <div className="flex flex-row gap-4">
            {isAdded ? (
              <button
                onClick={handleRemoveFromCart}
                className="bg-red-500 text-white px-4 py-2 rounded-full mt-4"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4"
              >
                Add to Cart
              </button>
            )}
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full mt-4">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
