import React from "react";
import dropdown from "../../Images/DropdownWhite.svg";
import { trendingHashtags } from "./data";
import "./TrendingHashtags.scss";

const TrendingHashtags = () => {
  return (
    <div className="right-container">
      <div className="heading-content">
        <div className="right-heading">Trending Hashtags</div>
        <div className="icons">
          <p className="score">Sentiment Score</p>
          <img alt="dropdown" className="dropdown" src={dropdown}></img>
        </div>
      </div>
      <div className="right-content-wrapper">
        {trendingHashtags.map((item) => (
          <div key={item.id} className="right-content">
            <div key={item.id} className="left-content">
              <p className="id">{item.id}</p>
              <p className="username">{item.hashtags}</p>
              <div className="value">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingHashtags;
