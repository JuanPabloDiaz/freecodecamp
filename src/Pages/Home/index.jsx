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
      <div className="flex w-[500px] justify-center gap-4 text-center">
        <img src={certificate1} alt="responsiveWebDesign" />
        <img src={certificate2} alt="responsiveWebDesign" />
      </div>
    </Layout>
  );
};

export default Home;
