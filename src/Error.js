import React from "react";

const Error = (props) => (
  <div className={`error season`}>
    <i className={`icon undo massive left-icon`} />
    <h1>{props.text}</h1>
    <i className={`icon undo massive right-icon`} />
  </div>
);

Error.defaultProps = {
  text: "User did not accept the location prompt.",
};

export default Error;
