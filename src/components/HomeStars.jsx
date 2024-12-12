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
    <div className="absolute translate-x-[1rem] translate-y-[5rem]">
      {/* Div for stars created than 1280xp */}
      <div className="relative hidden lg:block below-xl:hidden -top-[42.375rem] left-1/2 w-[78rem] aspect-square -translate-x-1/2 md:w-[65rem] md:-top-[36.5rem] xl:-top-[38rem]">
        {/* Moving background stars */}
        <MouseParallax strength={0.01} parallaxContainerRef={parallaxRef}>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-1 h-1 -ml-[1rem] -mt-36 rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-2 h-2 ml-[2rem] -mt-[7rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
            <div
              style={generateAnimationStyle()}
              className={`star hidden w-2 h-2 -ml-[2rem] mt-[12.9rem] rounded-full xl:block transit transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-2 h-2 -ml-[0.25rem] mt-[8rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-2 h-2 ml-[13rem] mt-[9rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-1 h-1 ml-[5rem] -mt-[3rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-2 h-2 -ml-[15rem] mt-[8.5rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-2 h-2 ml-[5rem] -mt-[2rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-2 h-2 -ml-[7rem] -mt-[1rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </MouseParallax>
      </div>

              {/* Stars for md devices */}
      <div className="relative hidden lg:block md:hidden left-1/2 aspect-square -translate-x-1/2 w-[65rem] -top-[36.5rem]">
        {/* Moving background stars */}
        <MouseParallax strength={0.01} parallaxContainerRef={parallaxRef}>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-2 h-2 ml-[4.5rem] mt-[12rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-2 h-2 ml-[3rem] -mt-[4rem] -translate-x-[9rem] translate-y-10 rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-2 h-2 ml-[2rem] -mt-[7rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-2 h-2 -ml-[10rem] mt-[12rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-2 h-2 -ml-[0.25rem] mt-[8rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
            <div
              style={generateAnimationStyle()}
              className={`star w-2 h-2 ml-[13rem] mt-[9rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </MouseParallax>
      </div>

      {/* Stars for md devices */}
      <div className="relative hidden sm:block -top-[15rem] left-1/2 w-[30rem]">
        {/* Moving background stars */}
        <MouseParallax strength={0.01} parallaxContainerRef={parallaxRef}>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom">
            <div
              style={generateAnimationStyle()}
              className={`star w-2 h-2 ml-[4.5rem] -mt-[0.5rem] -translate-x-[3rem] -translate-y-[4rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom">
            <div
              style={generateAnimationStyle()}
              className={`star w-1 h-1 ml-[4.5rem] -mt-[12rem] translate-x-[2rem] below-md:-ml-[2rem] below-md:-mt-[15rem] -translate-y-[1rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom">
            <div
              style={generateAnimationStyle()}
              className={`star  w-2 h-2 ml-[4.5rem] -mt-[6.5rem] below-md:ml-[1rem] below-md:-mt-[10rem] -translate-x-[25rem] -translate-y-[4rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

        </MouseParallax>
      </div>

      {/* Stars for sm devices */}
      <div className="relative hidden below-sm:block -top-[15rem] left-1/2 w-[30rem]">
        {/* Moving background stars */}
        <MouseParallax strength={0.01} parallaxContainerRef={parallaxRef}>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom">
            <div
              style={generateAnimationStyle()}
              className={`star w-1 h-1 -translate-x-[2rem] -ml-[2rem] -mt-[15rem] xs:-ml-[8rem] xxs:-ml-[15rem] -translate-y-[1rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom">
            <div
              style={generateAnimationStyle()}
              className={`star  w-1 h-1 ml-[1rem] -mt-[0.5rem] -translate-x-[27.5rem] -translate-y-[4rem] rounded-full transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>

        </MouseParallax>
      </div>
    </div>
  );
};
