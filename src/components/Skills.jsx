import { content } from "../Content";

const Skills = () => {
  const { skills, tools } = content;

  return (
      <section className="min-h-fit bg-bg_light_primary" id="skills">
        {/* content */}
        <div className="md:container px-5  py-14">
          <h2 className="title" data-aos="fade-down">
            {skills.title}
          </h2>
          <br/>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.skills_content.map((skill, i) => (
                <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="bg-white sm:cursor-pointer
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
                >
                  <div>
                    <img
                        src={skill.logo}
                        alt="..."
                        className="w-10 group-hover:scale-125 duration-200"
                    />
                  </div>
                  <div>
                    <h6>{skill.name}</h6>
                  </div>
                </div>
            ))}
          </div>
        </div>
        <div className="md:container px-5  py-14">
          <h2 className="title" data-aos="fade-down">
            {tools.title}
          </h2>
          <br/>
          <div className="flex flex-wrap gap-4 justify-center">
            {tools.tool.map((skill, i) => (
                <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="bg-white sm:cursor-pointer
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
                >
                  <div>
                    <img
                        src={skill.logo}
                        alt="..."
                        className="w-10 group-hover:scale-125 duration-200"
                    />
                  </div>
                  <div>
                    <h6>{skill.name}</h6>
                  </div>
                </div>
            ))}
          </div>
        </div>

      </section>
  );
};

export default Skills;
