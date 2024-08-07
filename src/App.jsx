//firebase
import { appFirebase } from "./firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(appFirebase);
//------

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
//import { SearchResults } from "./pages/SearchResults";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <CartProvider>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          {/*<Route path="/search" element={<SearchResults />} />*/}
          <Route path="/category/:productCategory" element={<CategoryView />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
      {/*  <Footer />
       */}{" "}
    </CartProvider>
  );
}

export default App;
