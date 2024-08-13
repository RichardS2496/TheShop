import { ProductView } from "./ProductView";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function FetcherProduct() {
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);

  if (error) {
    return <div>Something went wrong!</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul>
        {data.map((product) => {
          return (
            <li key={product.id}>
              <ProductView product={product} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
