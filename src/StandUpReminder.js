import React from "react";
import "./Styles/StandUpReminder.css";

function StandUpReminder({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="stand-up-reminder">
      <div className="reminder-content">
        <p>Time to stand up for streching the legs !!!</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default StandUpReminder;
