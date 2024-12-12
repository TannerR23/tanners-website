const Section = ({
  className,
  id,
  bottomLine,
  bottomLineOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`relative
        ${customPaddings || `py-10 lg:py-16 xl:py-20`} 
        ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10"></div>
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10"></div>

      {bottomLine && (
        <div className={`${bottomLineOffset || ""} max-md:hidden py-10 border-b border-n-12 pointer-events-none  ml-[12.5rem] mr-[12.5rem]`}></div>
      )}
    </div>
  );
};

export default Section;
