import banner from "../assets/banner-icon.png";

const Title = ({ className, title, subtitle, includeBanner }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto lg:mb-20 text-center ${
        includeBanner ? "mb-6" : "mb-12"
      }`}
    >
      {title && (
        <h2 className="h2 relative flex items-center justify-center py-[4rem] xs:py-[2rem]">
          {title}
          {includeBanner && (
            <span
              className="absolute inset-0 bg-cover bg-no-repeat bg-center z-[-1]"
              style={{
                backgroundImage: `url(${banner})`,
                opacity: "0.15",
                filter: "grayscale(100%)",
              }}
            ></span>
          )}
        </h2>
      )}
      {subtitle && <p className="body-2 mt-4 text-n-4">{subtitle}</p>}
    </div>
  );
};

export default Title;
