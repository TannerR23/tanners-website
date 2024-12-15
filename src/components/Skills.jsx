import { languageSkills, miscSkills, softSkills } from "../constants";
import Section from "./Section";
import Title from "./Title";

const Skills = () => {
  return (
    <Section
      id="skills"
      className="between-md-sm:-translate-y-[2.5rem]"
    >
      <div className="container">
        <Title title="My Skills" className="xs:mt-[5rem]" includeBanner />
        <div className="relative border border-n-1/10 rounded-3xl p-8 between-sm-xs:pt-0 grid gap-2 between-sm-xs:grid-cols-2 below-sm:flex below-sm:flex-col">
          <div>
            <h4 className="h4 text-center mb-8 between-sm-xs:mt-8">
              Languages
            </h4>
            <ul className="flex flex-wrap justify-between between-sm-xs:flex-col between-sm-xs:text-center bg-n-7 p-5 border border-n-10 rounded-3xl between-sm-xs:min-h-[25rem]">
              {languageSkills.map((item) => (
                <li
                  key={item.id}
                  className="between-sm-xs:py-3 between-sm-xs:border-b between-sm-xs:border-n-6/90"
                >
                  <div className="flex between-sm-xs:grid grid-cols-2">
                    <div className="between-sm-xs:flex justify-center">
                        <img
                        src={item.icon}
                        width={24}
                        height={24}
                        alt={item.skill}
                        />
                    </div>
                    <p className="body-2 ml-4 text-start">{item.skill}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="h4 text-center my-8">Misc</h4>
            <ul className="flex flex-wrap justify-between between-sm-xs:flex-col between-sm-xs:text-center bg-n-7 p-5 border border-n-10 rounded-3xl between-sm-xs:min-h-[25rem]">
              {miscSkills.map((item) => (
                <li
                  key={item.id}
                  className="between-sm-xs:py-3 between-sm-xs:border-b between-sm-xs:border-n-6/90"
                >
                  <div className="flex between-sm-xs:grid grid-cols-2">
                    <div className="between-sm-xs:flex justify-center">
                        <img
                        src={item.icon}
                        width={24}
                        height={24}
                        alt={item.skill}
                        />
                    </div>
                    <p className="body-2 ml-4 text-start">{item.skill}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="between-sm-xs:col-span-2">
            <h4 className="h4 text-center my-8">Soft Skills</h4>
            <ul className="flex flex-wrap justify-between below-md:flex-col below-md:text-center bg-n-7 p-5 border border-n-10 rounded-3xl">
              {softSkills.map((item) => (
                <li
                  key={item.id}
                  className="below-md:py-3 below-md:border-b below-md:border-n-6/90"
                >
                <p className="body-2 ml-4">{item.skill}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
