import { type ColorName } from "@/lib/colorname";
import { cn } from "@/lib/utils";

type ConstrainedWidthBlockProps = {
  bgColor?: ColorName;
  foregroundColor?: ColorName;
  className?: string;
  children: React.ReactNode;
};

const ConstrainedWidthBlock = ({
  bgColor = "surface-container",
  foregroundColor = "on-surface",
  className,
  children,
}: ConstrainedWidthBlockProps) => {
  return (
    <div
      className={cn(
        `bg-${bgColor} text-${foregroundColor} constrained-width flex-grow min-h-72 bg-surface-container text-on-surface constrained-width w-full p-2 sm:p-4 md:p-8 lg:p-12 xl:p-16 mx-auto my-8 sm:my-12 rounded-lg`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default ConstrainedWidthBlock;
