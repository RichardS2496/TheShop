import "../styles/categoriesLine.css";

export function Hero() {
  return (
    <section className="flex flex-row bg-blue-200 rounded-xl p-6 align-middle justify-center">
      <div className="w-1/2 text-left flex flex-col gap-4 align-start justify-center">
        <h2 className="text-6xl font-bold">
          All your favorite products in the same place
        </h2>
        <p>Get to know our best offers and start enjoying them.</p>
        <button className="bg-slate-400 self-start p-2 rounded-lg">
          Read more
        </button>
      </div>
      <div className=" w-1/2">
        <img
          className="img-hero"
          src="src\http://runmydev.com/wp-content/uploads/2024/08/hero_img.png"
        />
      </div>
    </section>
  );
}
