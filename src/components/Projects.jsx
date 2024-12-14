import { projects } from "../constants";
import grid from "../assets/grid.png";
import github from "../assets/github-logo.png"
import Section from "./Section";
import Title from "./Title";
import Arrow from "../assets/svg/Arrow";
import Button from "./Button";

const Projects = () => {
  return (
    <Section id="projects" className="xl:-translate-y-[10rem]">
      <div className="container relative z-2">
        <Title
          title="My Projects"
          subtitle="[ Things I have done through the university or in my spare time ]"
          includeBanner
        />
        <div className="relative">
          <div className="grid lg:grid-cols-3 between-l-md:grid-cols-2 between-md-sm:grid-cols-1 mb-10">
            {projects.map((item) => (
              <div
                key={item.id}
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] between-md-sm:max-w-full mx-auto border border-n-1/10 rounded-3xl my-10 h-[90%] w-[90%] overflow-hidden hover:bg-n-14"
                style={{ backgroundImage: `url(${grid})`}}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem]">
                  <h5 className="h5 mb-5 text-center mt-5 underline">
                    {item.name}
                  </h5>
                  <p className="body-2 mb-6 text-n-3 mx-8 xxs:justify-center xxs:mx-4">
                    {item.description}
                  </p>
                  <div className="flex items-center mt-auto justify-end xxs:justify-center">
                    <Button href={item.link} target>
                      <div className="flex items-center p-2 bg-n-7 border border-n-5 rounded-full">
                        <p className="ml-auto font-code text-xs font-bold uppercase tracking-wider">
                          View Project
                        </p>
                        <Arrow />
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-n-7 p-1 border border-n-5 max-w-[16rem] mx-auto text-center">
            <Button href="https://github.com/TannerR23" target>
            <div className="flex flex-wrap xxs:hidden">
                <img src={github} width={24} height={24}/>
                <p className="body-2 ml-4 font-code tracking-widest">Explore More!</p>
            </div>
            <p className="body-2 ml-4 font-code tracking-widest hidden xxs:block">Explore More!</p>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
