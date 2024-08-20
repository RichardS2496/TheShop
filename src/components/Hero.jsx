import "../styles/categoriesLine.css";
import { RateHigh45 } from "./rates/RateHigh45";

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
      <div className=" w-1/2 relative ">
        <div className="z-0 absolute w-3/5 h-64 rounded-xl bg-orange-500 top-0 right-0 transform -translate-x-0 -translate-y-0"></div>
        <img
          className="img-hero absolute z-1 w-4/5 right-0"
          src="http://runmydev.com/wp-content/uploads/2024/08/hero_img.png"
        />
        <div className="absolute p-4 pb-0 bg-gray-300/70 w-fit rounded-xl bottom-0">
          <p className="text-lg mb-[-1rem]">"I loved this product"</p>
          <RateHigh45 />
        </div>
      </div>
    </section>
  );
}
