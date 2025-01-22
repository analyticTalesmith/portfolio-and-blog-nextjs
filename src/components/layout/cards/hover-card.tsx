import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type VariantOptions = "primary" | "secondary" | "tertiary";

interface HoverCardProps {
  variant: VariantOptions;
  icon: React.ReactNode;
  number: number;
  heading: string;
  description: string;
  bgImage?: string;
}

// Define variant styles using CVA
const cardStyles = cva(
  "relative flex p-1 md:p-4 self-center rounded-lg transform transition-all duration-300 hover:shadow-lg cursor-pointer overflow-hidden group flex-row w-64 md:flex-col md:w-52 lg:w-64 h-16 md:h-80",
  {
    variants: {
      variant: {
        primary: "bg-primary text-on-primary",
        secondary: "bg-secondary text-on-secondary",
        tertiary: "bg-tertiary text-on-tertiary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const headingStyles = cva(
    "text-lg group-hover:uppercase font-black md:text-3xl transition-transform duration-300 group-hover:translate-y-0",
    {
      variants: {
        variant: {
          primary: "text-on-primary",
          secondary: "text-on-secondary",
          tertiary: "text-on-tertiary",
        },
      },
      defaultVariants: {
        variant: "primary",
      },
    }
  );

  


  const backgroundStyles = cva(
    "bg-background mt-2 md:mt-4 -m-4 p-4 py-8",
    {
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
    }
  );

const HoverCard: React.FC<HoverCardProps> = ({
  variant = "primary",
  icon,
  number,
  heading,
  description,
  bgImage,
}) => {
  return (
    <div
      className={cardStyles({ variant })}  
    >
      {/* Background Image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center grayscale opacity-10 group-hover:opacity-20 transition-opacity duration-300"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Icon */}
      <div className="relative z-10 flex-shrink-0 w-5 h-5 my-auto mx-2 md:ml-0 md:mr-auto md:w-10 md:h-10">
        {icon}
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center flex-grow md:mt-6 sm:text-left">
        

        {/* Heading */}
        <div className="relative flex-grow flex flex-col z-10 h-full">
        {/* Heading Group */}
        <div className="flex items-center justify-between my-auto md:mt-32 group-hover:md:mt-0 transition-all duration-300">
          <h3 className={headingStyles({ variant })}>{heading}</h3>
          <span className="text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
            →
          </span>
        </div>
        </div>

        {/* Hover Content */}
        <div
          className="hidden md:block md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 "
        >
            <div className={backgroundStyles({ variant })}>
          <p className=" font-semibold">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;