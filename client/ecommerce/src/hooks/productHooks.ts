import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ShopContext } from "../store/shop-store";
import { useContext } from "react";

export const useGetProductsBySearchQuery = (
  page: number,
  searchQuery: string
) =>
  useQuery({
    queryKey: ["products", page, searchQuery],
    queryFn: () =>
      axios
        .post(`http://localhost:3001/api/products/query/page/${page}`, {
          searchQuery,
        })
        .then((res) => {
          return res.data;
        }),
  });
export const useGetProductByIdQuery = (productId: string) =>
  useQuery({
    queryKey: ["products", productId],
    queryFn: () =>
      fetch(`http://localhost:3001/api/products/id/${productId}`).then((res) =>
        res.json()
      ),
  });
