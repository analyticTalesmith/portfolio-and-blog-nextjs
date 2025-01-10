const HorizontalRule = ({ outerClassName = '', innerClassName = '' }) => {
  return (
    <div className={`h-1 mt-4 bg-primary-border rounded overflow-hidden ${outerClassName}`}>
      <div className={`w-24 h-full bg-primary ${innerClassName}`}></div>
    </div>
  );
};

export { HorizontalRule };
