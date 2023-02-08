import React from "react";
import spinner from "./spinner.gif";

function Spinner() {
  return (
    <div>
      <img src={spinner} className="" alt="Loading..." />
    </div>
  );
}

export default Spinner;
