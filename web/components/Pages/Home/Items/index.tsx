"use client";

import { useGetItems } from "@/queries/items";
import HomeItem from "./Item";

const HomeItems = () => {
  const { data } = useGetItems();

  return (
    <div className="bg-zinc-50 px-5">
      <div className="flex flex-col gap-3 pt-4 pb-10">
        <div className="flex justify-between items-center">
          <p className="text-sm text-zinc-900 font-semibold">Saved items</p>
          <p className="text-xs text-zinc-500">20 items</p>
        </div>
        <div className="flex flex-col gap-1.5">
          {data?.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeItems;
