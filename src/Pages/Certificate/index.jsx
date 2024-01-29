// import { useContext } from "react";
import Layout from "../../Components/Layout";
import certificate1 from "../../assets/images/legacyFrontEnd.png";
import certificate2 from "../../assets/images/frontEndLibraries.png";
import certificate3 from "../../assets/images/responsiveWebDesign.png";

const Home = () => {
  const skills =
    "rounded-lg bg-black p-2 font-bold text-dark-orange shadow-lg shadow-light-shade-gray hover:shadow-none hover:bg-dark-orange hover:text-black transition duration-300 ease-in-out";

  return (
    <Layout>
      <div className="relative mb-12 flex items-center justify-center">
        <h1 className="text-xl font-medium text-black sm:text-2xl md:text-3xl">
          Certifications
        </h1>
      </div>
      <div className="flex flex-col justify-center gap-4 text-center lg:flex-row">
        <a href="https://www.freecodecamp.org/certification/1diazdev/legacy-front-end">
          <img
            className="h-[200px] transition duration-300 ease-in-out hover:scale-95 hover:shadow-md hover:shadow-black md:h-[300px] lg:h-[400px]"
            src={certificate1}
            alt="Legacy Front End"
          />
        </a>
        <a href="https://www.freecodecamp.org/certification/1diazdev/front-end-development-libraries">
          <img
            className="h-[200px] transition duration-300 ease-in-out hover:scale-95 hover:shadow-md hover:shadow-black md:h-[300px] lg:h-[400px]"
            src={certificate2}
            alt="Front end development libraries"
          />
        </a>
      </div>
      <div className="flex flex-col justify-center gap-4 pt-4 text-center lg:flex-row">
        <a href="https://www.freecodecamp.org/certification/1diazdev/responsive-web-design">
          <img
            className="h-[200px] transition duration-300 ease-in-out hover:scale-95 hover:shadow-md hover:shadow-black md:h-[300px] lg:h-[400px]"
            src={certificate3}
            alt="Responsive Web Design"
          />
        </a>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <h1 className="text-md text-center font-medium sm:text-xl">Projects</h1>
        <p>
          This site is a collection of all the projects I've built to get this
          two certifications.
        </p>
        <p>
          The goal was to build a series of projects to improve my skills in...
        </p>
        <ul className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <li className={` ${skills}`}>JavaScript</li>
          <li className={` ${skills}`}>React</li>
          <li className={` ${skills}`}>Tailwind CSS</li>
          <li className={` ${skills}`}>Git</li>
          <li className={` ${skills}`}>HTML</li>
          <li className={` ${skills}`}>CSS</li>
          <li className={` ${skills}`}>Markdown</li>
          <li className={` ${skills}`}>GitHub</li>
          <li className={` ${skills}`}>jQuery</li>
          <li className={` ${skills}`}>Sass</li>
          <li className={` ${skills}`}>Node.js</li>
          <li className={` ${skills}`}>Bootstrap</li>
        </ul>
        <p>
          You can view the live version of the projects by clicking on the links
          in the footer.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
