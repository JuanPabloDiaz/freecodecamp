// import { useContext } from "react";
import Layout from "../../Components/Layout";
import certificate1 from "../../assets/images/legacyFrontEnd.png";
import certificate2 from "../../assets/images/responsiveWebDesign.png";

const Home = () => {
  // const context = useContext(AppContext);

  return (
    <Layout>
      <div className="relative mb-4 flex items-center justify-center">
        <h1 className="text-md font-medium sm:text-xl">Certifications</h1>
      </div>
      <div className="flex flex-col justify-center gap-4 text-center lg:flex-row">
        <a href="https://www.freecodecamp.org/certification/1diazdev/legacy-front-end">
          <img
            className="h-[200px] transition duration-300 ease-in-out hover:scale-95 hover:shadow-md hover:shadow-black md:h-[300px] lg:h-[400px]"
            src={certificate1}
            alt="Legacy Front End"
          />
        </a>
        <a href="https://www.freecodecamp.org/certification/1diazdev/responsive-web-design">
          <img
            className="h-[200px] transition duration-300 ease-in-out hover:scale-95 hover:shadow-md hover:shadow-black md:h-[300px] lg:h-[400px]"
            src={certificate2}
            alt="Responsive Web Design"
          />
        </a>
      </div>
    </Layout>
  );
};

export default Home;
