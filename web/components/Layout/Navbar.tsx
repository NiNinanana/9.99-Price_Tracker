"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cn } from "cn";
import Icon from "../ui/Icon";
import { IconName } from "../ui/Icon/config";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Separator } from "../ui/separator";

interface ITabProps extends ButtonPrimitive.Props {
  icon: IconName;
  name: string;
  href: string;
}

const TabButton = ({ href, name, icon }: ITabProps) => {
  const pathname = usePathname();
  const isCurrent =
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "w-28.5 h-12 rounded-md pt-0.75 pb-1.75",
        isCurrent ? "bg-zinc-100 text-zinc-900 font-semibold" : "text-zinc-500",
      )}
    >
      <div className="flex flex-col items-center gap-1">
        <Icon size="md" name={icon} />
        <p className="text-xs">{name}</p>
      </div>
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className="bottom-0 absolute">
      <Separator className="border-zinc-200" />
      <div className="pt-5 px-4 pb-4 flex gap-2 justify-center">
        <TabButton name="Prices" icon="tag" href="/" />
        <TabButton name="Add" icon="square-plus" href="/add" />
        <TabButton name="Cart" icon="shopping-cart" href="/cart" />
      </div>
    </div>
  );
};

export default Navbar;
