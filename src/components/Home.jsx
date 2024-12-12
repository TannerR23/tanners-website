import React from "react";
import Section from "./Section";
import bonsaiTree from "../assets/bonsai-tree.png";
import { BackgroundStars } from "./HomeStars";

const Home = () => {
  return (
    <Section
      className="pt-[10rem] -mt-[5.25rem]"
      bottomLine
      customPaddings
      id="home"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1rem] md:mb-10 lg:mb-[2rem]">
          <h1 className="h1">Hello...</h1>
          <img
            className="tree-animation mx-auto"
            src={bonsaiTree}
            width={400}
            alt="tree"
            style={{ filter: "invert(1)" }}
          ></img>
          <p className="quote text-n-2">
            "The magic you are looking for is in the work you are avoiding."
          </p>
          <BackgroundStars />
        </div>
      </div>
    </Section>
  );
};

export default Home;
