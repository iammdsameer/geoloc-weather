import React from "react";

const seasonOption = {
  winter: { text: "Pull over your blanket! It's freezing.", icon: "snowflake" },
  summer: { text: "Let's dive in a pool. It's too hot.", icon: "sun" },
};

const getSeasonInfo = (lat, month) => {
  if (month > 2 && month < 0) {
    // For Northern Hemisphere, it's summer.
    return lat > 0 ? "summer" : "winter";
    // For Southern Hemisphere, it's winter.
  }
  return lat < 0 ? "winter" : "summer";
};

const Season = (props) => {
  let season = getSeasonInfo(props.lat, new Date().getMonth());
  return (
    <div className={`season ${season}`}>
      <i className={`icon ${seasonOption[season].icon} massive left-icon`} />
      <h1>{seasonOption[season].text}</h1>
      <i className={`icon ${seasonOption[season].icon} massive right-icon`} />
    </div>
  );
};

export default Season;

// Northern Hemisphere 0 or greater
// Southern Hemisphere 0 or lesser
