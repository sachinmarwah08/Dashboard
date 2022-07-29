import React from "react";
import "./GlobalWellbeing.scss";

const GlobalWellbeing = () => {
  return (
    <div className="main-container">
      <div className="left-content">
        <h1 className="heading">Global Wellbeing Sentiment Index</h1>
      </div>
      <div className="right-content">
        <div className="right-border"></div>
        <div className="column-one">
          <p className="digit-one">0.04</p>
          <p className="value-one">Current Day Value </p>
          <p className="date">As of 20 July, 2022</p>
        </div>
        {/* <div className="column-one">
          <p className="digit-one">0.04</p>
          <p className="value-one">Current Day Value </p>
          <p className="date">As of 20 July, 2022</p>
        </div> */}
        <div className="column-two">
          <p className="column-two-digit-one">-0.02</p>
          <p className="value-one-tilte">
            Absolute Change from Previous Time Period
          </p>
        </div>
        <div className="column-two">
          <p className="column-two-digit-one">-33.3%</p>
          <p className="value-one-tilte">
            Relative Change from Previous Time Period
          </p>
        </div>
        {/* <div className="line-one">
          <p className="digit-one">0.04</p>
          <p className="digit-two">-0.02 (-33.3%)</p>
        </div>
        <div className="line-two">
          <p className="value-one">Current Day value</p>
          <p className="value-two">Absolute Change from Previous Time Period</p>
        </div>
        <p className="date">As of 20 July, 2022</p> */}
      </div>
    </div>
  );
};

export default GlobalWellbeing;
