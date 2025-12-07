import React, { useState } from "react";

function GroupSelectionScreen({ onSelectGroup }) {
  const [error, setError] = useState("");

  const handleGroupClick = (groupName) => {
    let expectedPassword = "";

    if (groupName === "ELG") expectedPassword = "palermo";
    if (groupName === "ASIG") expectedPassword = "seul";

    const userInput = prompt("Please enter the password:");

    if (!userInput) {
      setError("Password is required.");
      return;
    }

    if (userInput.trim().toLowerCase() === expectedPassword) {
      setError("");
      onSelectGroup(groupName); // przechodzimy dalej
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <div className="screen-card">
      <h1 className="screen-title">Welcome</h1>

      <div className="screen-content">
        <div className="button-row">
          <button
            className="btn group-button"
            onClick={() => handleGroupClick("ELG")}
          >
            Group 2: ELG
          </button>

          <button
            className="btn group-button"
            onClick={() => handleGroupClick("ASIG")}
          >
            Group 3: ASIG
          </button>
        </div>

        {error && (
          <p style={{ color: "red", marginTop: "16px", textAlign: "center" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default GroupSelectionScreen;
