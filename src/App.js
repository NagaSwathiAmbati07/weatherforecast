import { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

export const WeatherReportContext = createContext(null);

function App() {
  let [searchLocation, setSearchLocation] = useState(undefined);
  let [weatherData, setWeatherData] = useState(undefined);
   let [searchError, setSearchError] = useState(false);
  return (
    <div className="App">
      <WeatherReportContext.Provider
        value={{
          searchLocation,
          setSearchLocation,
          weatherData,
          setWeatherData,
          searchError,
          setSearchError,
        }}
      >
        <Header />
        <Body />
      </WeatherReportContext.Provider>
    </div>
  );
}

export default App;
