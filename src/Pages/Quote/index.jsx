import { useState, useEffect } from "react"; // Hooks to consume the API
import Layout from "../../Components/Layout";

const QuoteGenerator = () => {
  // UseState is a hook to add the info from the API to the state
  const [endpoints, setEndpoints] = useState([]); // State to store the data from the dummy API. It's an empty array because the data is an array of objects

  const fetchQuote = () => {
    fetch("https://api.quotable.io/quotes/random")
      .then((response) => response.json())
      .then((json) => {
        // console.log("Data from API: ", json);
        setEndpoints(json);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Layout>
      <div className="relative mb-4 flex items-center justify-center">
        <h1 className="text-md font-medium sm:text-xl">
          Random Quote Generator
        </h1>
      </div>
      <div className="flex w-screen flex-col items-center justify-center gap-4 p-2">
        <h1 className="text-2xl font-bold text-white/80 sm:text-3xl md:text-4xl">
          Quote Generator
        </h1>
        <div className="m-6 flex min-h-[180px] w-full flex-col items-start justify-around gap-6 rounded-lg bg-[#333333] p-6 text-white/90 shadow-md shadow-[#666666] sm:w-[500px] md:w-[600px] lg:w-[700px]">
          <p className="text-xl font-semibold text-[#F8F9FA] sm:text-xl md:text-2xl">
            {endpoints[0]?.content}
          </p>
          <p className="sm:text-md text-sm font-normal text-[#999999] md:text-lg">
            - {endpoints[0]?.author} -
          </p>
        </div>
        <button
          onClick={fetchQuote}
          className="rounded bg-[#666666] px-4 py-2 font-bold text-white transition duration-300 hover:bg-[#999999]"
        >
          New Quote
        </button>
      </div>
    </Layout>
  );
};

export default QuoteGenerator;
