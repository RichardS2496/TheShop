import { RateLow05 } from "./rates/RateLow05";
import { RateLow0 } from "./rates/RateLow0";
import { RateLow1 } from "./rates/RateLow1";
import { RateLow15 } from "./rates/RateLow15";
import { RateLow2 } from "./rates/RateLow2";
import { RateMedium25 } from "./rates/RateMedium25";
import { RateMedium3 } from "./rates/RateMedium3";
import { RateMedium35 } from "./rates/RateMedium35";
import { RateHigh4 } from "./rates/RateHigh4";
import { RateHigh45 } from "./rates/RateHigh45";
import { RateHigh5 } from "./rates/RateHigh5";

export function Rate({ rating }) {
  function getRateComponent(rating) {
    if (rating === 0) {
      return <RateLow0 />;
    } else if (rating <= 0.5) {
      return <RateLow05 />;
    } else if (rating <= 1) {
      return <RateLow1 />;
    } else if (rating <= 1.5) {
      return <RateLow15 />;
    } else if (rating <= 2) {
      return <RateLow2 />;
    } else if (rating <= 2.5) {
      return <RateMedium25 />;
    } else if (rating <= 3) {
      return <RateMedium3 />;
    } else if (rating <= 3.5) {
      return <RateMedium35 />;
    } else if (rating <= 4) {
      return <RateHigh4 />;
    } else if (rating <= 4.5) {
      return <RateHigh45 />;
    } else if (rating <= 5) {
      return <RateHigh5 />;
    }
  }
  return <>{getRateComponent(rating)}</>;
}
