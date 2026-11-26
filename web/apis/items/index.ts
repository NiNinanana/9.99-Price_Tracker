import { IGetItemsResponse } from "@/types/Item/dto";
import { api } from "..";

export const getItems = () => api.get("items").json<IGetItemsResponse>();
