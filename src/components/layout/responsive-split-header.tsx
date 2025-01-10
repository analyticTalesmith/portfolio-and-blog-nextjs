type SplitHeaderProps = {
  header: string;
  desc?: string;
};

const ResponsiveSplitHeader: React.FC<SplitHeaderProps> = ({
  header,
  desc,
}) => {
  return (
    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 aling-top">
      <h1 className="sm:w-2/5 text-on-primary-accent font-medium title-font text-2xl mb-2 sm:mb-0">
        { header }
      </h1>
      {desc && <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
        {desc}
        
      </p>}
    </div>
  );
};

export { ResponsiveSplitHeader }