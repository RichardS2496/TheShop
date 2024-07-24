import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useProducts() {
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);

  return {
    products: data || [],
    isLoading: !error && !data,
    isError: error,
  };
}
