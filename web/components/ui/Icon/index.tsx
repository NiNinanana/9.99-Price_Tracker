import { LucideProps } from "lucide-react";
import { iconMap, IconName, IconSize, iconSizeMap } from "./config";
import { cn } from "cn";

interface IconProps extends LucideProps {
  name: IconName;
  size: IconSize;
}

const Icon = ({ name, size, className, ...props }: IconProps) => {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    return null;
  }

  return (
    <LucideIcon
      className={cn("shrink-0", iconSizeMap[size], className)}
      {...props}
    />
  );
};

export default Icon;
