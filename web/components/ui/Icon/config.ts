import { ShoppingCart, SquarePlus, Tag } from "lucide-react";

export const iconMap = {
  tag: Tag,
  "square-plus": SquarePlus,
  "shopping-cart": ShoppingCart,
} as const;

export const iconSizeMap = {
  xs: "size-3.5",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
} as const;

export type IconName = keyof typeof iconMap;
export type IconSize = keyof typeof iconSizeMap;
