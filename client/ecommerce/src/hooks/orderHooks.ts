import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUserOrders = (jwttoken: string) =>
  useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      axios
        .get(`http://localhost:3001/api/orders/my-orders`, {
          headers: {
            Authorization: `Bearer ${jwttoken}`,
          },
        })
        .then((res) => {
          return res.data;
        }),
  });
