import { CategoriesLine } from "./CategoriesLine";
import { Hero } from "./Hero";
import { MainProductsView } from "./MainProductsView";

export function BodyPage() {
  return (
    <section className="body-section">
      <Hero />
      <CategoriesLine />
      <MainProductsView />
    </section>
  );
}
