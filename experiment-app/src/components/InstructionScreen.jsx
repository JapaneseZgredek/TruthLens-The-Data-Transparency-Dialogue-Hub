import React from "react";
import { instructions } from "../instructionData";

function InstructionScreen({ groupName, onStart }) {
  const groupInstruction = instructions[groupName];

  return (
    <div className="screen-card">
      <h1 className="screen-title">{groupInstruction.title}</h1>

      <div className="screen-content">
        <p style={{ whiteSpace: "pre-line", textAlign: "justify" }}>
          {groupInstruction.text}
        </p>
      </div>

      <button className="btn btn-primary" onClick={onStart}>
        Start
      </button>
    </div>
  );
}

export default InstructionScreen;
