import React from "react";

function EndScreen({ onRestart }) {
  return (
    <div className="screen-card">
      <h1 className="screen-title">Thank you!</h1>

      <div className="screen-content">
        <p>
          End of the experiment.
        </p>
      </div>

      <button className="btn btn-secondary" onClick={onRestart}>
        Back to beginning
      </button>
    </div>
  );
}

export default EndScreen;
