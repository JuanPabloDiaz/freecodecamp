import Layout from "../../Components/Layout";
import { useState } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { FaRandom } from "react-icons/fa";
import PropTypes from "prop-types";

function SearchBox({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  SearchBox.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search Wikipedia..."
        onChange={(event) => setSearchTerm(event.target.value)}
        className="rounded border border-gray-400 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="mt-2 flex items-center justify-center gap-2 rounded bg-dark-orange px-4 py-2 font-bold text-white transition duration-200 hover:bg-dark-orange/60 sm:mt-0"
      >
        Search
        <FiSearch className="h-4 w-4" />
      </button>
    </form>
  );
}

function Results({ results }) {
  return (
    <ul className="text-md flex flex-col items-center justify-around gap-2 rounded-xl bg-black p-2 text-white sm:gap-3 md:gap-4 lg:gap-6">
      {results.map((result) => (
        <li className="rounded-lg border bg-black p-2" key={result.pageid}>
          <a
            className="font-bold"
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          >
            {result.title}
          </a>
          <p>{stripHtmlTags(result.snippet)}</p>
        </li>
      ))}
    </ul>
  );
}

function stripHtmlTags(html) {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  return tempElement.innerText;
}
Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      pageid: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      snippet: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

function RandomButton() {
  const handleClick = () => {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  };

  return (
    <button
      onClick={handleClick}
      className="flex w-full items-center justify-center gap-2 rounded bg-dark-orange px-4 py-2 font-bold text-white transition duration-200 hover:bg-dark-orange/60 sm:w-80"
    >
      Random Article
      <FaRandom className="h-4 w-4" />
    </button>
  );
}

function WilipediaViewer() {
  const [results, setResults] = useState([]);

  const handleSearch = (searchTerm) => {
    axios
      .get(
        `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${searchTerm}&utf8=&format=json`,
      )
      .then((response) => {
        setResults(response.data.query.search);
      });
  };

  return (
    <>
      <Layout>
        <div className="relative mb-4 flex items-center justify-center">
          <h1 className="text-xl font-medium text-black sm:text-2xl md:text-3xl">
            Wilipedia Viewer
          </h1>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-around gap-2 rounded-xl border bg-black sm:h-60 sm:w-6/12 sm:gap-3 md:gap-4 lg:gap-6">
          <div className="App flex flex-col items-center">
            <div className="pb-4">
              <h1 className="text-3xl font-extrabold text-light-shade-gray sm:text-3xl md:text-4xl lg:text-5xl">
                Wikipedia Viewer
              </h1>
            </div>
            <SearchBox onSearch={handleSearch} />
            <Results results={results} />
            <RandomButton />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default WilipediaViewer;
