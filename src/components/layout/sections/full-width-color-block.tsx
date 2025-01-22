import { type ColorName } from "@/lib/colorname";
import { cn } from "@/lib/utils";

type FullWidthColorBlockProps = {
  bgColor?: ColorName;
  className?: string;
  childClassName?: string;
  children: React.ReactNode;
};

const FullWidthColorBlock = ({
  bgColor = "primary-container",
  className,
  childClassName,
  children,
}: FullWidthColorBlockProps) => {
  return (
    <div className={cn(`bg-${bgColor} w-full`, className)}>
      <div className={cn("constrained-width", childClassName)}>{children}</div>
    </div>
  );
};

export default FullWidthColorBlock;
