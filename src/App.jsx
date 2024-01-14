import Navbar from "./Layouts/Navbar";
import Testimonials from "./components/Testimonials";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./components/Hero"));
const Skills = lazy(() => import("./components/Skills"));
const Service = lazy(() => import("./components/Services"));
const Projects = lazy(() => import("./components/Projects"));
const Hireme = lazy(() => import("./components/Hireme"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <Suspense>
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      {/* <Testimonials / > */}
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Tracy | Tech Girlie</h6>
        <p>Tech Girlie © All Copyrights Reserved 2023</p>
      </footer>
    </Suspense>
  );
};

export default App;
