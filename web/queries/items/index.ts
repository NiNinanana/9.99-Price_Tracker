import { useQuery } from "@tanstack/react-query";
import { itemsQuerykeys } from "./keys";
import { getItems } from "@/apis/items";

export const useGetItems = () => {
  return useQuery({
    queryKey: itemsQuerykeys.list(),
    queryFn: () => getItems(),
  });
};
