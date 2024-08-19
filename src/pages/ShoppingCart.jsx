import { Link } from "react-router-dom";
import useCart from "../useCart";
import "../styles/cartShopping.css";
import { useState, useEffect } from "react";

export function ShoppingCart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {})
  );

  useEffect(() => {
    setQuantities(
      cartItems.reduce((acc, item) => {
        acc[item.id] = item.quantity;
        return acc;
      }, {})
    );
  }, [cartItems]);

  const handleIncrement = (itemId) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] + 1,
      };
      updateQuantity(itemId, newQuantities[itemId]);
      return newQuantities;
    });
  };

  const handleDecrement = (itemId) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] > 1 ? prevQuantities[itemId] - 1 : 1,
      };
      updateQuantity(itemId, newQuantities[itemId]);
      return newQuantities;
    });
  };

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * quantities[item.id],
    0
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + quantities[item.id],
    0
  );

  return (
    <section className="h-screen">
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
            <div className="h-full w-full flex items-center justify-center">
              {" "}
              <p className="text-2xl font-bold text-slate-400">
                Your cart is empty.
              </p>
            </div>
          ) : (
            <ul className="my-8 flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  className="p-4 flex flex-row items-start justify-between rounded-xl"
                  key={item.id}
                  to={`/products/${item.id}`}
                >
                  <div className=" flex flex-row gap-4 items-center w-5/6">
                    <Link to={`/products/${item.id}`} className="w-1/5 h-32">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </Link>
                    <div className="w-4/5 px-4 flex flex-col justify-between self-start text-start gap-4">
                      <div>
                        <Link to={`/products/${item.id}`} className="text-lg">
                          {item.title}{" "}
                        </Link>
                        <h4 className="text-green-500 text-sm">In Stock</h4>
                      </div>
                      <div className="w-full flex flex-row items-center justify-between">
                        <div className="flex flex-row justify-start gap-2">
                          <button
                            className="border-2 self-start px-4 rounded-lg font-bold"
                            onClick={() => handleDecrement(item.id)}
                          >
                            -
                          </button>
                          <h3>Qty: {quantities[item.id]}</h3>
                          <button
                            className="font-bold border-2 self-start px-4 rounded-lg"
                            onClick={() => handleIncrement(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end w-1/6 justify-between">
                    <h4 className=" text-xl font-semibold">{item.price} €</h4>
                    <button
                      className="text-red-500 self-end"
                      onClick={() => handleRemove(item.id)}
                    >
                      Delete Product
                    </button>
                  </div>
                </div>
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
          <div className="flex flex-col gap-4 text-center">
            {cartItems.length > 0 && (
              <Link className="bg-orange-500 w-full rounded-xl p-4 text-bold text-white">
                Checkout
              </Link>
            )}
            <Link
              to="/"
              className="bg-slate-400 w-full rounded-xl p-4 text-bold text-white"
            >
              Continue Shopping
            </Link>
          </div>
          <hr className="mt-4"></hr>
          <button
            className="text-center text-xs mt-4 mb-2 self-center"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        </div>
      </section>
    </section>
  );
}
