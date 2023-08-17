import React, { useState, useEffect } from "react";
import BreakTime from "./BreakTime";
import StartTime from "./StartTime";
import StandUpReminder from "./StandUpReminder";
import WaterReminder from "./WaterReminder";
import "./Styles/BreakTime.css";
import "./Styles/Timer.css";

function Timer() {
  const [isRunning, setIsRunning] = useState(false); // Timer
  const [breakTime, setBreakTime] = useState([]); // Break timer
  const [startTime, setStartTime] = useState(null); // Start
  const [standUpReminder, setStandUpReminder] = useState(false); // Sitting timer
  const [elapsedTime, setElapsedTime] = useState(0); // Time passed

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      setStartTime(new Date());
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      const now = new Date();
      const elapsedMilliseconds = now - startTime;
      setBreakTime((prevBreakTime) => prevBreakTime + elapsedMilliseconds);
    }
  };

  const takeBreak = () => {
    if (isRunning) {
      const now = new Date();
      const breakStart = new Date(startTime);
      setBreakTime([...breakTime, { start: breakStart, end: now }]);
    }
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours} hours ${minutes} minutes ${seconds} seconds`;
  };

  useEffect(() => {
    let timerInterval;

    if (isRunning) {
      timerInterval = setInterval(() => {
        const now = new Date();
        const elapsedMilliseconds = now - startTime;
        setElapsedTime(elapsedMilliseconds);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isRunning, startTime]);

  useEffect(() => {
    const standUpInterval = setInterval(() => {
      setStandUpReminder(true);
    }, 2 * 60 * 60 * 1000); // 2 hour timer

    return () => {
      clearInterval(standUpInterval);
    };
  });

  return (
    <div className="timer-container">
      <h1>Time Tracker App</h1>
      <div className="timer-value">
        <h2>Elapsed Time:</h2>
        <p>{formatTime(elapsedTime)}</p>
      </div>
      <StartTime startTime={startTime} />
      <div className="timer-button">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={takeBreak}>Take a Break</button> {/* Break button */}
      </div>
      <BreakTime breakTime={breakTime} /> {/* Break Timer and button */}
      <WaterReminder /> {/* Water Reminder */}
      <div>
        <StandUpReminder
          show={standUpReminder}
          onClose={() => setStandUpReminder(false)}
        />
      </div>
    </div>
  );
}

export default Timer;
