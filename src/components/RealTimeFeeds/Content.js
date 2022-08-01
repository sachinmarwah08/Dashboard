import React from "react";
import { data } from "./data";

const Content = ({ filterData, cardIndex }) => {
  return (
    <div className="left-content-wrapper">
      {filterData.map((item, key) => (
        <div key={item.id} className="left-content">
          <h1 className="left-content-heading">
            <span className="heading-colored">{item.colredHeading}</span> ❤️
            {item.heading}
          </h1>
          <p className="hashtags">
            {item.hashtags}
            <span className="hashtags-colored">{item.coloredHastags}</span>
            ❤️
          </p>
          <a href={item.link} target="_blank" className="link">
            {item.link}
          </a>
          <div className="twitter-details">
            <img
              alt="twitter"
              className="twitter-logo"
              src={item.twitterLogo}
            ></img>
            <p className="username">{item.userName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
