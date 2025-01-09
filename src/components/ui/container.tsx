type ContainerProps = {
    children: React.ReactNode;
  };
  
  const Container = ({ children }: ContainerProps) => {
    return (
      <div className="flex-grow min-h-72 min-w-fit bg-background max-w-screen-xl w-full p-2 sm:p-4 md:p-8 lg:p-12 xl:p-16 mx-auto my-8 sm:my-12 rounded-base shadow-shadow border-2 border-black text-on-primary-background">
        {children}
      </div>
    );
  };
  
  export default Container;