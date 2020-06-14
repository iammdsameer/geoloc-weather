import React from "react";

const Loader = (props) => (
  <div className="ui active dimmer">
    <div className="ui indeterminate text loader">{props.text}</div>
  </div>
);

Loader.defaultProps = {
  text: "Loading",
};

export default Loader;
