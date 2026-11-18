import { Plus, Search, ShoppingCart, SquarePlus, Tag } from "lucide-react";

export const iconMap = {
  tag: Tag,
  "square-plus": SquarePlus,
  "shopping-cart": ShoppingCart,
  plus: Plus,
  search: Search,
} as const;

export const iconSizeMap = {
  xs: "size-3.5", // 14px
  sm: "size-4", // 16px
  md: "size-5", // 20px
  lg: "size-6", // 24px
} as const;

export type IconName = keyof typeof iconMap;
export type IconSize = keyof typeof iconSizeMap;
