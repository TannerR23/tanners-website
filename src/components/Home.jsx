import React from "react";
import Section from "./Section";
import bonsaiTree from "../assets/bonsai-tree.png";
import { BackgroundStars } from "./HomeStars";

const Home = ({ title, message, msgStyling }) => {
  return (
    <Section
      className="pt-[10rem] -mt-[5.25rem]"
      bottomLine
      customPaddings
      id="home"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1rem] md:mb-10 lg:mb-[2rem]">
          <h1 className="h1">{title}</h1>
          <img
            className="tree-animation mx-auto"
            src={bonsaiTree}
            width={400}
            alt="tree"
            style={{ filter: "invert(1)" }}
          ></img>
          <p className={`${msgStyling || 'quote text-n-2'}`}>
            {message}
          </p>
          <BackgroundStars />
        </div>
      </div>
    </Section>
  );
};

export default Home;
