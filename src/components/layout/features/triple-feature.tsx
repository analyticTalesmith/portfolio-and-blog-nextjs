import { ResponsiveSplitHeader } from "../responsive-split-header";
import { FeatureCard, FeatureCardProps } from "../cards/featurecard";

type TripleFeatureProps = {
  header: string;
  desc?: string;
  features: FeatureCardProps[];
  children?: React.ReactNode;
};

const TripleFeature: React.FC<TripleFeatureProps> = ({
  header,
  features,
  children
}) => {
  return (
    <section className="text-on-primary-muted body-font m-0">
      <div className="container px-0 py-12 mx-auto">
        <div className="flex flex-col">
          <ResponsiveSplitHeader header={header}>
            {children}
          </ResponsiveSplitHeader>
        </div>
        <h2>Featured Posts</h2>
        <div className="flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row lg:gap-x-8 -mb-10 mt-4 w-full items-start">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              desc={feature.desc}
              imageUrl={feature.imageUrl}
              imageAlt={feature.imageAlt}
              slug={feature.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { TripleFeature };
