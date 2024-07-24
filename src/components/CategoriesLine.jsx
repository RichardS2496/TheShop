import "../styles/categoriesLine.css";

export function CategoriesLine() {
  return (
    <section>
      <nav className="grid grid-cols-6 gap-4 mt-4">
        <a className=" bg-orange-500 text-white flex flex-row justify-center items-center gap-2 p-2 rounded-xl text-base font-semibold transition-all">
          All Products
        </a>
        {/*{data.map((category) => {
          return <a key={category}>{category}</a>;
        })}*/}
        <a href="#" className="category-card">
          <img src="src\assets\cat_img\prices.png" alt="" />
          <h4>Best Deals</h4>
        </a>
        <a href="#" className="category-card">
          <img src="src\assets\cat_img\men.png" alt="" />
          <h4>Men's Clothing</h4>
        </a>
        <a href="#" className="category-card">
          <img src="src\assets\cat_img\women.png" alt="" />
          <h4>Women's Clothing</h4>
        </a>
        <a href="#" className="category-card">
          <img src="src\assets\cat_img\electronic.png" alt="" />
          <h4>Electronics</h4>
        </a>
        <a href="#" className="category-card">
          <img src="src\assets\cat_img\jewelry.png" alt="" />
          <h4>Jewelry</h4>
        </a>
      </nav>
    </section>
  );
}
