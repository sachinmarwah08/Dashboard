import React, { useState } from "react";
import "./RealTimeFeeds.scss";
import searchIcon from "../../Images/SearchIcon.svg";
import { data } from "./data";

const RealTimeFeeds = () => {
  const [usedata] = useState(data);
  return (
    <div className="left-container">
      <div className="main-heading">
        <h1 className="heading">Real-time Tweets</h1>
        <h1 className="second-heading">Real-time News</h1>
      </div>
      <div className="radio-button">
        <div>
          <label className="container">
            <p className="positive">Positive</p>
            <input type="radio" checked="checked" name="radio" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="second-container">
          <label className="container">
            <p className="positive">Negative</p>
            <input type="radio" checked="checked" name="radio" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="search-container">
        <input
          className="seacrh-bar"
          type="text"
          name="search"
          placeholder="search..."
        />
        <div className="search-icon">
          <img
            className="search-icon-image"
            alt="searchIcon"
            src={searchIcon}
          />
        </div>
      </div>

      <div className="left-content-wrapper">
        {usedata.map((item) => (
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
            <p className="link">{item.link}</p>
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
    </div>
  );
};

export default RealTimeFeeds;
