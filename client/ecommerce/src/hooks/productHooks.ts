import { useQuery } from "@tanstack/react-query";

export const useGetProductsQuery = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:3001/product").then((res) => res.json()),
  });

export const useGetProductByIdQuery = (productId: string) =>
  useQuery({
    queryKey: ["products", productId],
    queryFn: () =>
      fetch(`http://localhost:3001/product/id/${productId}`).then((res) =>
        res.json()
      ),
  });
