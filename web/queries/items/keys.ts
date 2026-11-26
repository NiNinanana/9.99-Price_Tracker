export const itemsQuerykeys = {
  all: ["items"],
  list: () => [...itemsQuerykeys.all, "list"],
} as const;
