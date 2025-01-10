type SplitHeaderProps = {
  header: string;
  children?: React.ReactNode;
};

const ResponsiveSplitHeader: React.FC<SplitHeaderProps> = ({
  header,
  children,
}) => {
  return (
    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 aling-top">
      <h1 className="sm:w-2/5 text-on-primary-accent font-black title-font mb-2 sm:mb-0">
        { header }
      </h1>
      {children && <div className="flex flex-col sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
        {children}
        
      </div>}
    </div>
  );
};

export { ResponsiveSplitHeader }