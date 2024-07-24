import { ProductView } from "./ProductView";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function FetcherProduct() {
  const { data, error } = useSWR(
    "https://fakestoreapi.com/products?limit=50",
    fetcher
  );

  if (error) {
    return <div>Something went wrong!</div>;
  }
  if (!data) {
    return <div>No data!</div>;
  }

  return (
    <>
      <h1>Lista de Productos para testing</h1>

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
