
import { useContext, useEffect, useState } from "react";
import Table from "./Table";
import { WeatherReportContext } from "../App";

const Body = () => {
  const { weatherData, searchError } = useContext(WeatherReportContext);

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-2 sm:p-2 h-[calc(100vh-100px)] border px-16">
      {weatherData ? (
        weatherData.map((Item) => {
          let date = new Date(Item.dt * 1000).toLocaleDateString().split("/");
          let DAY = Number(date[1]) <= 9 ? `0${date[1]}` : date[1];
          let MONTH = Number(date[0]) <= 9 ? `0${date[0]}` : date[0];
          let YEAR = date.pop();
          let MinTemperature = Item.main.temp_min;
          let MaxTemperature = Item.main.temp_min;
          let Pressure = Item.main.pressure.toFixed(2);
          let Humidity = Item.main.humidity.toFixed(2);
          console.log(date,DAY,MONTH,YEAR,"log")
          return (
            <Table
              DAY={DAY}
              MONTH={MONTH}
              YEAR={YEAR}
              MinTemperature={MinTemperature}
              MaxTemperature={MaxTemperature}
              Pressure={Pressure}
              Humidity={Humidity}
              key={Item.dt}
            />
          );
        })
      ) : searchError ? (
        <h1 className="text-3xl text-center w-full my-auto">
          Oops...Looks like you Entered Invalid City,Please Try Again.
        </h1>
      ) : (
        <h1 className="text-3xl text-center w-full my-auto">
          Enter City to Get Weather Forecast
        </h1>
      )}
    </div>
  );
};

export default Body;
