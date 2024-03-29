import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/Components/Layout";
import { TiWeatherStormy, TiWeatherPartlySunny } from "react-icons/ti";
import "./weather.css";

// import { AiOutlineLoading } from "react-icons/ai";

function LocalWeather() {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [unit, setUnit] = useState("C");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      axios
        .get(
          `https://weather-proxy.freecodecamp.rocks/api/current?lat=${location.lat}&lon=${location.lon}`,
        )
        .then((response) => {
          setWeather(response.data);
        });
    }
  }, [location]);

  const toggleUnit = () => {
    setUnit(unit === "C" ? "F" : "C");
  };

  const getTemperature = () => {
    if (unit === "C") {
      return weather.main.temp;
    } else {
      return (weather.main.temp * 9) / 5 + 32;
    }
  };

  return (
    <>
      <Layout>
        <div className="relative mb-12 flex items-center justify-center">
          <h1 className="text-2xl text-xl font-medium text-black md:text-3xl">
            Local Weather
          </h1>
        </div>
        <div className="bg-transpent flex items-center justify-center gap-3 rounded-lg p-4 text-[#121420]">
          <TiWeatherStormy className="h-10 w-10" />
          <TiWeatherPartlySunny className="h-10 w-10 " />
        </div>
        <div className="flex w-4/12 items-center justify-around gap-2 gap-3  p-4 md:gap-4 lg:gap-6">
          <div className="p-4">
            {weather.main ? (
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">{weather.name}</h1>
                <h2 className="my-2 p-2 text-2xl font-semibold text-[#13293D]">
                  {getTemperature()} °{unit}
                </h2>
                <button
                  className="mt-4 w-full rounded border border-gray-800 bg-dark-orange px-4 py-2 font-bold text-black shadow-xl transition duration-200 hover:bg-black hover:text-white"
                  onClick={toggleUnit}
                >
                  Toggle Unit
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 rounded-xl border p-4 text-2xl">
                <p>Loading</p>
                <div className="h-6 w-6 animate-spin rounded-full border-4 border-solid border-black/60 border-b-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                {/* <div className="border-xl rounded-full border-4 border-black/10 bg-transparent">
                  <AiOutlineLoading className="h-5 w-5 animate-spin rounded-full text-black" />
                </div> */}
              </div>
            )}
          </div>
        </div>
        <div className="bg-weatherImg"></div>
      </Layout>
    </>
  );
}

export default LocalWeather;
