import React from "react";
import "./LineChart.scss";
import downloadIcon from "../../../Images/download.svg";
import shareIcon from "../../../Images/share.svg";
import { faAngleDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

const pdata = [
  {
    name: "Jun 1, 22",
    student: 13,
    fees: 10,
  },
  {
    name: "Jun 4, 22",
    student: 15,
    fees: 12,
  },
  {
    name: "Jun 7, 22",
    student: 5,
    fees: 10,
  },
  {
    name: "Jun 10, 22",
    student: 10,
    fees: 5,
  },
  {
    name: "Jun 13, 22#",
    student: 9,
    fees: 4,
  },
  {
    name: "Jun 16, 22",
    student: 7,
    fees: 12,
  },
  {
    name: "Jun 19, 22",
    student: 12,
    fees: 4,
  },
  {
    name: "Jun 22, 22",
    student: 6,
    fees: 15,
  },
  {
    name: "Jun 25, 22",
    student: 10,
    fees: 8,
  },
];

const LineChartData = () => {
  return (
    <div className="lineChart-container">
      <div className="whole-container">
        <div className="heading-content">
          <div className="heading">Wellbeing Sentiment Score Over Time</div>
          <div className="right-icons">
            <img alt="downloadIcon" className="icon" src={downloadIcon} />
            <img alt="shareIcon" className="icon" src={shareIcon} />
          </div>
        </div>
        <div className="buttons">
          <div className="left-button">
            <button className="left-ouline-button">
              India
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <button className="left-ouline-buttonTwo">
              Past 1 months
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </div>
          <div className="right-button">
            <button className="right-ouline-button">
              <FontAwesomeIcon icon={faPlus} />
              Compare country
            </button>
            <button className="right-ouline-buttonTwo">
              <FontAwesomeIcon icon={faPlus} />
              Compare time
            </button>
          </div>
        </div>
      </div>
      <div className="Add-country">
        <div className="country">
          <span className="circle"></span>
          <p className="title">India</p>
        </div>
        <button className="country-add">
          <span className="faplus">
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <p className="title">Add country</p>
        </button>
      </div>

      <div className="chart">
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={pdata}
            width={500}
            height={100}
            margin={{ top: 50, right: 70, left: 0, bottom: 40 }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="name"
              interval={"preserveStartEnd"}
              tickFormatter={(value) => value + ""}
            />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
            {/* <Legend /> */}
            <Line
              type="monotone"
              dataKey="student"
              stroke="red"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="fees"
              stroke="green"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartData;
