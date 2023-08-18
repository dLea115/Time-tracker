import React from "react";
import "./Styles/StandUpReminder.css";

function StandUpReminder({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className={`stand-up-reminder-container ${show ? "active" : ""}`}>
      {show && (
        <div className="reminder-content">
          <p>Time to stand up for stretching the legs !!!</p>
          <button onClick={onClose}>OK</button>
        </div>
      )}
    </div>
  );
}

export default StandUpReminder;
