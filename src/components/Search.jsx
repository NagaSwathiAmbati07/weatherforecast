import React, { useState, useContext } from "react";
import { WeatherReportContext } from "../App";
import { ImSpinner6 } from "react-icons/im";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const { searchLocation, setSearchLocation } = useContext(WeatherReportContext);
  const { setWeatherData } = useContext(WeatherReportContext);
  const { setSearchError } = useContext(WeatherReportContext);
  let baseurl = `http://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&appid=1635890035cbba097fd5c26c8ea672a1`;

  let onGetWeatherData = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let weatherData = await fetch(baseurl);
      setSearchError(false);
      console.log(weatherData);
      if (weatherData.status !== 200) {
        setWeatherData(undefined);
        setSearchError(true);
        throw new Error("API Internal Error");
      } else {
        let data = await weatherData.json();
        let FiveDays = data?.list.slice(0, 5);
        setWeatherData(FiveDays);
        console.log(FiveDays);
      }
    } catch (Errormsg) {
      console.log(Errormsg);
    } finally {
      setLoading(false);
    }
  };

  let onChangeText = (e) => {
    setSearchLocation(e.target.value);
    if (e.target.value.length < 1) {
      setWeatherData(undefined)
      setSearchError(false);
    }
    console.log(e.target.value.length);
  };
  console.log("loading", loading);

  return (
    <div>
      <form className="flex gap-4 sm:gap-1 flex-col sm:flex-row">
        <input
          type="text"
          placeholder="Enter city"
          value={searchLocation}
          onChange={onChangeText}
          className="border-2 border-orange-500 px-4 py-[6px] rounded-md outline-none"
        />
        <button
          className={`bg-orange-500 rounded-md px-9 py-[6px] sm:px-4 text-white self-center ${
            searchLocation ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={onGetWeatherData}
          disabled={searchLocation ? false : true}
        >
          Search
        </button>
        {loading && (
          <div className="flex items-center justify-center sm:justify-normal">
            <ImSpinner6 size={30} className="rotate1" />
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;
