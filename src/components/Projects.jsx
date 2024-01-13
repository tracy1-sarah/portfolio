import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "30rem",
    width: "90%",
    zIndex: "9999",
  },
  overlay: {
    padding: "2rem",
    zIndex: "9999",
  },
};
Modal.setAppElement("#root");

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectProject, setSelectProject] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="bg-bg_light_primary max-w-full mx-auto" id="projects">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectProject?.image} alt="..." />
          <h6>{selectProject?.title}</h6>
        </div>
        <br />
        <p>{selectProject?.description}</p>
        <br />
        <div className="flex justify-end">
          <a href={selectProject?.link} target="_blank" rel="noreferrer">
            <button className="btn">Demo</button>
          </a>
        </div>
      </Modal>

      <div className="md:container mx-auto px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="w-full md:max-w-[35vw] "
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            // data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="swiper-container max-w-full pb-16 overflow-hidden"
          >
            <div className="swiper-wrapper">
              {Projects.project_content.map((content, i) => (
                <SwiperSlide
                  key={i}
                  className="swiper-slide bg-white rounded-2xl p-5 border-b-8 border-[#FAF9FD] h-fit"
                >
                  <img src={content.image} alt="..." className="w-full" />
                  <div className="flex flex-col gap-1 mt-2">
                    <h5 className="font-bold font-Poppins">{content.title}</h5>
                    <button
                      onClick={() => {
                        setSelectProject(content);
                        openModal();
                      }}
                      className="btn font-bold text-gray-600 self-end"
                    >
                      View
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
