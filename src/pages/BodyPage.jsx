import { CategoriesLine } from "../components/CategoriesLine";
import { Hero } from "../components/Hero";
import { MainProductsView } from "../components/MainProductsView";
import "../App.css";

export function BodyPage() {
  return (
    <section className="body-section">
      <Hero />
      <CategoriesLine />
      <MainProductsView />
    </section>
  );
}
