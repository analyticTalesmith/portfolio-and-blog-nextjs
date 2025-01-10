import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export type FeatureCardProps = {
  title: string;
  desc: string;
  imageUrl?: string;
  imageAlt?: string;
  slug: string;
  className?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  desc,
  imageUrl,
  imageAlt,
  slug,
  className,
}) => {
  return (
    <div className={cn("w-full flex flex-row lg:flex-col", className)}>
      {imageUrl && imageAlt && (
        <div className="hidden w-10 mr-4 h-full md:block lg:w-full lg:h-48 md:h-36 relative rounded-lg overflow-hidden">
          
        <Link href={slug}>
          <Image
            className="md:border-b-2 border-primary-border w-full object-cover object-center"
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
          />
          </Link>
        </div>
      )}
      <div className="flex-col">
        <Link href={slug}>
          <h2 className="text-xl font-medium title-font text-on-primary-card lg:mt-5 hover:text-primary hover:underline hover:decoration-primary">
            {title}
          </h2>
        </Link>
        <p className="text-base leading-relaxed mt-2 text-on-primary-muted">
          {desc}
        </p>
        <Link
          className="text-secondary inline-flex items-center mt-4"
          href={slug}
        >
          Learn More
          <ArrowRight height="16" />
        </Link>
      </div>
    </div>
  );
};

export { FeatureCard };
