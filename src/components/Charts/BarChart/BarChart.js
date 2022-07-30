import React, { useState } from "react";
import "./BarChart.scss";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   Rectangle,
// } from "recharts";
import Icon from "../../../Images/Dropdown.svg";
import highSortDown from "../../../Images/bi-sort-down.svg";
import lowSortDown from "../../../Images/bi-sort-down-alt.svg";

const data = [
  {
    name: "Sweden",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Belgium",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Hungary",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Austria",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Denmark",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Lithuania",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Japan",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Latvia",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Luxembourg",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Malta",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "South Africa",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sweden",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sweden",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sweden",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "WHO Geneva",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const BarChartComponent = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="wrapper">
      <div className="content">
        <h1 className="heading">
          Countries Rankings by Wellbeing Sentiment Score
        </h1>
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="filter"
        >
          <img
            alt="sort-icon"
            className={`${!isActive ? "sort-icon" : "sort-icon-open"}`}
            src={Icon}
          ></img>
          {isActive && (
            <div className="filter-dropdown-content">
              <div className="filter-dropdown-item">
                High to low
                <img className="sort-down" src={highSortDown}></img>
              </div>
              <div className="filter-dropdown-item">
                Low to high
                <img className="sort-down" src={lowSortDown}></img>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <div className="chart-bar">
          {data.map((item) => (
            <div className="chart-content">
              <div className="country">{item.name}</div>
              <div className="bar"></div>
            </div>
          ))}

          {/* <ResponsiveContainer height={data.length * 50 + 10}> */}
          {/* <BarChart
              width={600}
              height={100}
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 0 }}
            > */}
          {/* <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" hide /> */}
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

export default BarChartComponent;
