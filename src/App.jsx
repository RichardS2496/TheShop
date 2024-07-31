import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./CartContext";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <CartProvider>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </CartProvider>
  );
}

export default App;
