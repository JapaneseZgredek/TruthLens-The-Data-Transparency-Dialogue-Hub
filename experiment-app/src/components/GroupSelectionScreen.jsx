import React from "react";

function GroupSelectionScreen({ onSelectGroup }) {
  return (
    <div className="screen-card">
      <h1 className="screen-title">Welcome</h1>

      <div className="screen-content">
        <div className="button-row">
          <button
            className="btn group-button"
            onClick={() => onSelectGroup("ELG")}
          >
            Group 2: ELG
          </button>

          <button
            className="btn group-button"
            onClick={() => onSelectGroup("ASIG")}
          >
            Group 3: ASIG
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroupSelectionScreen;
