import useCart from "../components/useCart";

export function ShoppingCart() {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} width="50" />
              <div>{item.title}</div>
              <div>€ {item.price}</div>
              <div>Quantity: {item.quantity}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
