import React from "react";
import "./MapChart.scss";
import WorldMap from "../../../Images/WorldMap.svg";
import Table from "../../../Images/Table.png";
import BigArrow from "../../../Images/bif-Arrow.png";
import { Chart } from "react-google-charts";

const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

const MapChartComponent = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <h1 className="heading">Country Ranking</h1>
        <div className="side-logos">
          <img className="WorldMap" src={WorldMap}></img>
          <img className="table" src={Table}></img>
          <img className="bigArrow" src={BigArrow}></img>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <div className="chart-map">
          <Chart
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = data[selection[0].row + 1];
                  console.log("Selected : " + region);
                },
              },
            ]}
            chartType="GeoChart"
            width="100%"
            height="500px"
            data={data}
          />
          {/* <ResponsiveContainer height={data.length * 50 + 10}> */}
          {/* <BarChart
        width={600}
        height={300}
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 20, bottom: 230 }}
      > */}
          {/* <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" /> */}
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          {/* <Bar radius={[0, 10, 10, 0]} dataKey="pv" fill="#FFB800" /> */}
          {/* </BarChart> */}
          {/* </ResponsiveContainer> */}
        </div>
      </div>
    </div>
  );
};

export default MapChartComponent;
