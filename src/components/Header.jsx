import home_logo from "../assets/home_logo.svg";
import Button from "./Button"
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { navItems } from "../constants";
import MobileNav from "./MobileNav";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  //Method to toggle mobile or desktop navigation
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  //Method to handle onclick of nav item
  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  //Listener for when changing window sizes to enable page scroll again
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (mediaQuery.matches) {
        enablePageScroll();
      }
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:background-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="lg:absolute block w-[12rem] xl:mr-8" href="#home" onClick={handleClick}>
          <img
            src={home_logo}
            width={190}
            height={40}
            alt="logo"
            style={{ filter: "invert(1)" }}
          />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed ${openNavigation ? "top-[2.8rem]": "top-[5rem]"} left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navItems.map((item) => (
              <a
                className={`block relative font-code text-2xl 
                        uppercase text-n-1 transition-colors hover:text-color-1
                        px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                        ${
                          item.url === pathname.hash
                            ? "z-2 lg:text-n-1"
                            : "lg:text-n-1/50"
                        }
                        lg:leading-5 lg:hover:text-n-1 xl:px-12 max-lg:w-full max-lg:text-center max-lg:border-b`}
                key={item.id}
                href={item.url}
                onClick={handleClick}
              >
                {item.title}
              </a>
            ))}
          </div>
          <MobileNav />
        </nav>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
