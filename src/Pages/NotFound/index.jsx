import Layout from "../../Components/Layout";
import notFound from "../../assets/images/404.png";

const NotFound = () => {
  return (
    <Layout>
      <div className="relative mb-12 flex items-center justify-center">
        <h1 className="text-xl font-medium text-black sm:text-2xl md:text-3xl">
          Not Found
        </h1>
      </div>
      <div className="flex justify-center">
        <img src={notFound} alt="page not found, error 404" />
      </div>
    </Layout>
  );
};

export default NotFound;
