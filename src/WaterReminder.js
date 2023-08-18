/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
import React, { useState, useEffect } from "react";
import "./Styles/WaterReminder.css";

function WaterReminder() {
  const [waterTimer, setWaterTimer] = useState(30 * 60 * 1000);
  const [showReminder, setShowReminder] = useState(false);
  const waterInterval = null;

  useEffect(() => {
    const waterInterval = setInterval(() => {
      if (waterTimer === 0) {
        setShowReminder(true);
        waterInterval = setInterval(() => {});
        setWaterTimer(30 * 60 * 1000); // 30 min
      } else if (waterTimer > 0) {
        setShowReminder(true);
        setWaterTimer(waterTimer - 1000); // Each 1 sec decrease the count
      } else {
        clearInterval(waterInterval);
      }
    }, 1000); // Each sec

    return () => {
      clearInterval(waterInterval);
    };
  }, [waterTimer]);

  const handleReminderClose = () => {
    setShowReminder(false);
  };

  const handleDrink = () => {
    setWaterTimer(60 * 60 * 1000); // 1 hour
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={`water-reminder-container ${showReminder ? "active" : ""}`}>
      {showReminder && (
        <div className="reminder-content">
          <h1>Water Reminder</h1>
          <p>Time to drink something!!!</p>
          <p>Time left: {formatTime(waterTimer)}</p>
          <button onClick={handleDrink}>I drink thnx</button>
          <button onClick={handleReminderClose}>Close</button>
        </div>
      )}
    </div>
  );
}

export default WaterReminder;
