import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Products", "Purchases"],
  ["Shorts", 9],
  ["Pants", 4],
  ["Hoodies", 7],
];

export const options = {
  title: "Top Products",
  pieHole: 0.85,
  slices: {
    0: { color: "#f6dc7d" },
    1: { color: "#ee8484" },
    2: { color: "#98d89e" },
  },
  backgroundColor:'transparent',
  is3D: false,
};

const Piechart = () => {
  return (
    <div className="piechart">
      <Chart
      chartType="PieChart"
      height="256px"
      
      data={data}
      options={options}
    />
    </div>
  )
}

export default Piechart

