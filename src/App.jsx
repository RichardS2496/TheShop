import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./components/CartContext";
import { ShoppingCart } from "./pages/ShoppingCart";

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
