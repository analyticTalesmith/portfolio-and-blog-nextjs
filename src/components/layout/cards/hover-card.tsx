import React from "react";
import { cva } from "class-variance-authority";
import { Circle, CircleChevronRight } from "lucide-react";

type VariantOptions = "primary" | "secondary" | "tertiary";

interface HoverCardProps {
  variant: VariantOptions;
  icon: React.ReactNode;
  heading: string;
  description: string;
  bgImage?: string;
}

// Define variant styles using CVA
const cardStyles = cva(
  "relative flex self-center rounded-lg transform transition-all duration-300 hover:shadow-md cursor-pointer overflow-hidden group flex-row w-64 md:flex-col md:w-52 lg:w-64 h-16 md:h-80",
  {
    variants: {
      variant: {
        primary: "bg-primary text-on-primary-container md:text-primary-vibrant",
        secondary: "bg-secondary text-on-secondary-container md:text-secondary-vibrant",
        tertiary: "bg-tertiary text-on-tertiary-container md:text-tertiary-vibrant",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const headingStyles = cva(
  "text-lg font-black md:text-3xl transition-transform duration-300 group-hover:translate-y-0 px-2 md:px-4 md:py-2",
  {
    variants: {
      variant: {
        primary:
          "text-on-primary-container md:bg-primary-container",
        secondary:
          "text-on-secondary-container md:bg-secondary-container",
        tertiary:
          "text-on-tertiary-container md:bg-tertiary-container",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const arrowStyles = cva(
    "text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2",
    {
      variants: {
        variant: {
          primary:
            "text-on-primary-container md:text-primary-container",
          secondary:
            "text-on-secondary-container md:text-secondary-container",
          tertiary:
            "text-on-tertiary-container md:text-tertiary-container",
        },
      },
      defaultVariants: {
        variant: "primary",
      },
    }
  );

const backgroundStyles = cva("bg-background mt-2 md:mt-4 px-4 py-8", {
  variants: {
    variant: {
      primary: "bg-primary-container text-on-primary-container",
      secondary: "bg-secondary-container text-on-secondary-container",
      tertiary: "bg-tertiary-container text-on-tertiary-container",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});


const bannerStyles = cva("absolute inset-0 inline-block h-full md:hidden transition-all duration-300 max-md:w-1/2 group-hover:max-md:w-full"
, {
    variants: {
      variant: {
        primary: "bg-primary-container text-on-primary-container",
        secondary: "bg-secondary-container text-on-secondary-container",
        tertiary: "bg-tertiary-container text-on-tertiary-container",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  });
  


const HoverCard: React.FC<HoverCardProps> = ({
  variant = "primary",
  icon,
  heading,
  description,
  bgImage,
}) => {
  return (
    <div className={cardStyles({ variant })}>
      {/* Background Image */}
      {bgImage && (
        <div
          className="max-md:hidden absolute inset-0 bg-cover bg-center grayscale opacity-10 group-hover:opacity-20 transition-opacity duration-300"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Wrapper for Icon and Text with Background */}
      <div className="relative z-10 flex w-full items-center group md:flex-col md:items-start">
        {/* Background Fill */}
        <div className={bannerStyles({ variant })}></div>

        {/* Icon */}
        <div className="relative z-10 flex-shrink-0 w-5 h-5 my-auto ml-2 md:ml-4 md:mt-4 md:mr-auto md:w-10 md:h-10 md:p-2 md:bg-surface-container md:rounded-full">
          {icon}
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center flex-grow md:mt-6 sm:text-left">
          {/* Heading */}
          <div className="flex items-center justify-between my-auto md:mt-32 group-hover:md:mt-0 transition-all duration-300">
            <h3 className={headingStyles({ variant })}>{heading}</h3>
            <CircleChevronRight className={arrowStyles({variant})} />
          </div>

          {/* Hover Content */}
          <div className="hidden md:block md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300">
            <div className={backgroundStyles({ variant })}>
              <p className="font-semibold">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
