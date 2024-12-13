import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

export const BackgroundStars = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  //Generate random animation timings
  const generateAnimationStyle = () => ({
    animationDuration: `${Math.random() * 5 + 3}s`,
    animationDelay: `${Math.random() * 5}s`,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative">
      <MouseParallax strength={0.01} parallaxContainerRef={parallaxRef}>
        <div className="absolute">
          <div
            style={generateAnimationStyle()}
            className={`star w-1 h-1 between-l-md:hidden -ml-[1rem] -mt-36 rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute">
          <div
            style={generateAnimationStyle()}
            className={`star w-2 h-2 ml-[11rem] -mt-[12rem] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute">
          <div
            style={generateAnimationStyle()}
            className={`star w-1 h-1 ml-[17rem] -mt-[23rem] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute">
          <div
            style={generateAnimationStyle()}
            className={`star w-3 h-3 ml-[1rem] -mt-[25.5rem] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute">
          <div
            style={generateAnimationStyle()}
            className={`star w-2 h-2 below-md:ml-[40rem] ml-[50rem] -mt-[24rem] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute">
          <div
            style={generateAnimationStyle()}
            className={`star w-1 h-1 below-md:ml-[45.5rem] below-md:-mt-[9.5rem] between-md-sm:ml-[30.5rem] ml-[47.5rem] -mt-[14.5rem] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute">
          <div
            style={generateAnimationStyle()}
            className={`star w-3 h-3 sm:hidden between-l-md:hidden ml-[61.5rem] -mt-[19rem] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute">
          <div
            style={generateAnimationStyle()}
            className={`star w-2 h-2 ml-[66.5rem] below-xl:hidden -mt-[9rem] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute">
          <div
            style={generateAnimationStyle()}
            className={`star w-1 h-1 between-l-md:hidden ml-[62rem] -mt-[31rem] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
