/* eslint-disable no-unused-vars */
import React from "react";
import "./Styles/BreakTime.css";
import { useState, useEffect } from "react";

function BreakTime({ breakTime }) {
  const breakComponents = breakTime.map((breakInterval, index) => {
    const totalBreakTime = breakInterval.end - breakInterval.start;

    const minutes = Math.floor(totalBreakTime / (1000 * 60));
    const seconds = Math.floor((totalBreakTime / 1000) % 60);

    return (
      <div key={index} className="break-time-container">
        <div className="break-time-text">
          <p>{`Work ${index + 1} Time:`}</p>
        </div>
        <div className="break-time-value">
          <p>
            {minutes} minutes {seconds} seconds
          </p>
        </div>
      </div>
    );
  });

  return <div>{breakComponents}</div>;
}

export default BreakTime;
