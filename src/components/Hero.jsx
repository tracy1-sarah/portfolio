import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        ></div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <div className="px-4">
            <h3 className="py-2">Heyaa, I am</h3>
            <h1 className="py-4 text-4xl">
              {hero.firstName} <span>{hero.LastName}</span>
            </h1>
            <h1 className="text-3xl">{hero.title}</h1>
          </div>
          <br />
          <div className="flex justify-end">
            <a
              href={import.meta.env.BASE_URL + "file/TRACY-Resume.pdf"}
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">{hero.btnText}</button>
            </a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <div className="px-4">
                  <h3>{content.count}</h3>
                  <p>{content.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
