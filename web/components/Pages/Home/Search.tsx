"use client";

import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import useStoreId, { DEFAULT_STORE_ID } from "@/util/searchParams/useStoreId";
import { ReactNode, Suspense } from "react";

const HomeSearch = () => {
  return (
    <Suspense>
      <HomeSearchMain />
    </Suspense>
  );
};

interface IFilterButtonProps {
  id: string;
  children: ReactNode;
}

const CUSTOM_ID = "CUSTOM";

const FilterButton = ({ id, children }: IFilterButtonProps) => {
  const [storeId, setStoreId] = useStoreId();

  const getIsSelected = () => {
    if (!storeId && id === DEFAULT_STORE_ID) return true;
    return storeId === id;
  };

  const isSelected = getIsSelected();

  const handleClickButton = () => {
    if (id === CUSTOM_ID) return; // TODO: Add a function to open modal
    setStoreId(id);
  };

  return (
    <Button
      onClick={handleClickButton}
      variant={isSelected ? "default" : "outline"}
    >
      {children}
    </Button>
  );
};

const HomeSearchMain = () => {
  return (
    <div className="px-5 pt-4 pb-2 flex flex-col gap-3">
      <div>
        <p className="text-3xl font-bold text-zinc-900">9.99</p>
        <p className="text-xs text-zinc-500">Grocery price tracker</p>
      </div>
      <div className="p-3 flex gap-2.5 items-center border rounded-lg border-zinc-200">
        <Icon className="text-zinc-500" name="search" size="md" />
        <input
          className="w-full pl-1 placeholder:text-zinc-500 text-sm"
          placeholder="Search saved items..."
        />
      </div>
      <div className="flex gap-2">
        {/* FIXME: Change dynamic ids */}
        <FilterButton id={DEFAULT_STORE_ID}>All</FilterButton>
        <FilterButton id="123">Costco</FilterButton>
        <FilterButton id="456">Walmart</FilterButton>
        <FilterButton id="789">NoFrills</FilterButton>
        <FilterButton id={CUSTOM_ID}>+ Custom</FilterButton>
      </div>
    </div>
  );
};

export default HomeSearch;
