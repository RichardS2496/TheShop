import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
