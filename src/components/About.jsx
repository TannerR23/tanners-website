import { courseWorks, education, hobbies, profileIcons } from "../constants";
import pin from "../assets/pin.png";
import Button from "./Button";
import Section from "./Section";
import Title from "./Title";

const About = () => {
  return (
    <Section id="about-me">
      <div className="container">
        <Title title="About Me" includeBanner />
        <div className="relative">
          <div className="relative z-1 min-h-[18rem] mb-5 border border-n-1/10 rounded-3xl flex flex-col xs:text-center">
            <h4 className="h4 text-center mt-4">Profile</h4>
            <p className="body-2 text-n-2 px-12 mt-6">
              Currently studying for a Bachelor of Engineering (Honors) majoring
              in Software Engineering. I am a creative thinker, passionate about
              software development, and have worked in a variety of different
              systems and languages throughout academic and personal projects. I
              aim to gain experience within the software industry to be able to
              design and create solutions to problems around the world.
            </p>
            <h5 className="h5 text-center my-4">Coursework</h5>
            <ul className="flex flex-wrap justify-center mt-4 mb-8 py-4 gap-10 border-t border-b border-n-5">
              {courseWorks.map((item) => (
                <li>{item.courseWork}</li>
              ))}
            </ul>
            <ul className="flex flex-wrap justify-center mt-auto p-4 gap-1">
              {profileIcons.map((item) => (
                <Button
                  href={item.link}
                  target
                  className="xs:my-2.5"
                  key={item.id}
                >
                  <li className="flex items-center justify-center rounded-2xl bg-n-7 border border-n-5 p-2 w-[10rem]">
                    <img
                      src={item.icon}
                      width={36}
                      height={36}
                      alt={item.name}
                    ></img>
                    <p className="body-2 ml-4">{item.name}</p>
                  </li>
                </Button>
              ))}
            </ul>
            <div className="flex items-center justify-center text-n-4 mb-4">
              <img
                src={pin}
                width={24}
                height={24}
                style={{ filter: "invert(100%)", opacity: "25%" }}
              />
              <p className="ml-2">New Zealand</p>
            </div>
          </div>
          <div className="relative z-1 grid gap-5 grid-cols-4 below-xl:flex below-xl:flex-col min-h-[20rem]">
            <div className="relative border border-n-1/10 rounded-3xl overflow-hidden">
              <h4 className="h4 text-center mt-4">Education</h4>
              <ul className="body-2">
                {education.map((item) => (
                  <li key={item.id} className="py-4 ml-8">
                    <div className="flex items-center">
                      <img
                        src={item.logo}
                        width={36}
                        height={36}
                        alt={item.name}
                      />
                      <div className="flex flex-col">
                        <p className="mx-4">{item.name}</p>
                        <p className="mx-4 text-n-4 font-serif">{item.date}</p>
                      </div>
                    </div>
                    <p className="text-n-3 ml-[3.25rem] pr-12 mt-2">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative border border-n-1/10 rounded-3xl overflow-hidden below-xl:grid-cols-1 col-span-3">
              <h4 className="h4 text-center mt-4">Hobbies</h4>
              <ul className="body-2">
                {hobbies.map((item) => (
                  <li key={item.id} className="py-4 ml-8">
                    <div className="flex items-center">
                      <div className="bg-n-6 p-2 rounded-full">
                        <img
                          src={item.icon}
                          width={24}
                          height={24}
                          alt={item.hobby}
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="ml-4">{item.hobby}</p>
                        <p className="ml-4 text-n-4 font-serif">{item.date}</p>
                      </div>
                    </div>
                    <p className="text-n-3 ml-[3.5rem] pr-12 mt-2">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
