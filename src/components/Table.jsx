import React from "react";

const Table = ({
  DAY,
  MONTH,
  YEAR,
  MinTemperature,
  MaxTemperature,
  Pressure,
  Humidity,
}) => {
  return (
    <table className="border-2 border-black flex-1 h-fit">
      <thead>
        <tr className="bg-orange-600">
          <th colSpan="2" className="px-6">
            Date: {DAY}-{MONTH}-{YEAR}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-300 border-2 border-black">
          <td colSpan="2">Temperature</td>
        </tr>
        <tr className="bg-gray-300 border-2 border-black">
          <td className="text-center border-2 border-black" colSpan="1">
            Min
          </td>
          <td className="text-center border-2 border-black" colSpan="1">
            Max
          </td>
        </tr>
        <tr className="bg-gray-300">
          <td className="border-2 border-black">{MinTemperature}</td>
          <td className="border-2 border-black">{MaxTemperature}</td>
        </tr>
        <tr>
          <td className="border-2 border-black">Pressure</td>
          <td className="border-2 border-black">{Pressure}</td>
        </tr>
        <tr>
          <td className="border-2 border-black">Humidty</td>
          <td className="border-2 border-black">{Humidity}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
