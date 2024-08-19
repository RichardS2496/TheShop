import "../styles/categoriesLine.css";

export function Hero() {
  return (
    <section className="flex flex-row rounded-xl p-6 align-middle justify-center h-fit mb-8">
      <div className="w-1/2 text-left flex flex-col gap-8 align-start justify-center">
        <h2 className="text-7xl font-bold text-slate-700">
          All your favorite products in the same place
        </h2>
        <p className="text-3xl border-l-8 w-4/5 border-orange-500 pl-4 text-slate-700">
          Get to know our best offers and start enjoying them.
        </p>
      </div>
      <div className=" w-1/2 relative">
        <div className=" absolute w-4/5 aspect-w-1 aspect-h-1 rounded-full bg-orange-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            className="img-hero "
            src="http://runmydev.com/wp-content/uploads/2024/08/hero_img.png"
          />
        </div>
      </div>
    </section>
  );
}
