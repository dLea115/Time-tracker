import React from "react";
import "./Styles/StartTime.css";

function StartTime({ startTime }) {
  if (!startTime) {
    return null;
  }
  return (
    <div>
      {startTime && <p>Start Time: {startTime.toLocaleTimeString()}</p>}
    </div>
  );
}

export default StartTime;
