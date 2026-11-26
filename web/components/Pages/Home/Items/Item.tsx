import { ItemType } from "@/types/Item";
import dayjs from "dayjs";

interface IHomeItemProps {
  item: ItemType;
}

const HomeItem = ({ item }: IHomeItemProps) => {
  const { displayName, realName, price, store, date, amount, eachPrice } = item;

  return (
    <div className="rounded-xl border border-zinc-200 flex flex-col gap-4 p-3.5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-base text-zinc-900 font-semibold">{realName}</p>
          <p className="text-xs text-zinc-500">{displayName}</p>
        </div>
        <p className="text-xl font-bold text-zinc-900">${price}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="py-1 px-2 rounded-lg bg-zinc-100 text-zinc-600 text-xs font-medium">
            {store}
          </div>
          <p className="text-xs text-zinc-500">
            {dayjs(date).format("MMM D, YYYY")}
          </p>
        </div>
        <p className="text-zinc-600 text-xs">
          {amount} * ${eachPrice} ea
        </p>
      </div>
    </div>
  );
};

export default HomeItem;
