import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./CartContext";
import { ShoppingCart } from "./pages/ShoppingCart";
//import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { CategoryView } from "./components/CategoryView";

function App() {
  return (
    <CartProvider>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/category/:productCategory" element={<CategoryView />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </ScrollToTop>
      {/*  <Footer />
       */}{" "}
    </CartProvider>
  );
}

export default App;
