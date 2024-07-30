import { Link } from "react-router-dom";
import useCart from "../components/useCart";
import "../styles/cartShopping.css";

export function ShoppingCart() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <section className="cart-container">
      <div className="items-list-container w-3/4 ">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-left text-4xl font-bold text-slate-400 mb-6">
            Shopping Cart
          </h2>
          <h4 className="text-right text-xl font-semibold text-slate-400">
            Price
          </h4>
        </div>

        <hr></hr>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="my-8 flex flex-col gap-4">
            {cartItems.map((item) => (
              <Link
                className="p-4 flex flex-row items-start justify-between rounded-xl"
                key={item.id}
                to={`/products/${item.id}`}
              >
                <div className=" flex flex-row gap-4 items-center w-5/6">
                  <div className="w-1/5 h-32">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-4/5 px-4 flex flex-col self-start text-start">
                    <h2 className="text-lg">{item.title} </h2>
                    <h4 className="text-green-500 text-sm">In Stock</h4>
                    <h3>Qty: {item.quantity}</h3>
                  </div>
                </div>
                <div className="flex flex-col items-end w-1/6">
                  <h4 className=" text-xl font-semibold">{item.price} €</h4>
                </div>
              </Link>
            ))}
          </ul>
        )}
      </div>
      <div className="price-container text-right w-1/4">
        <h4 className="text-right text-xl font-semibold text-slate-400">
          Subtotal
        </h4>
        <h6 className="text-slate-800">{totalQuantity} Items</h6>
        <h2 className="text-right text-4xl font-bold text-slate-800 mb-6">
          {subtotal.toFixed(2)} €
        </h2>
      </div>
    </section>
  );
}
