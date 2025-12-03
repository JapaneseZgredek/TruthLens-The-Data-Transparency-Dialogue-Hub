import { useState } from "react";
import "./App.css";

import GroupSelectionScreen from "./components/GroupSelectionScreen.jsx";
import InstructionScreen from "./components/InstructionScreen.jsx";
import ExperimentScreen from "./components/ExperimentScreen.jsx";
import EndScreen from "./components/EndScreen.jsx";

function App() {
  const [currentScreen, setCurrentScreen] = useState("group");
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleSelectGroup = (groupName) => {
    setSelectedGroup(groupName);
    setCurrentScreen("instruction");
  };

  const handleStart = () => {
    setCurrentScreen("experiment");
  };

  const handleFinishExperiment = () => {
    setCurrentScreen("end");
  };

  const handleRestart = () => {
    setSelectedGroup(null);
    setCurrentScreen("group");
  };

  return (
      <div className="app-root">
        {currentScreen === "group" && (
          <GroupSelectionScreen onSelectGroup={handleSelectGroup} />
        )}

        {currentScreen === "instruction" && (
          <InstructionScreen groupName={selectedGroup} onStart={handleStart} />
        )}

        {currentScreen === "experiment" && (
          <ExperimentScreen
            onFinish={handleFinishExperiment}
            groupName={selectedGroup}
          />
        )}

        {currentScreen === "end" && <EndScreen onRestart={handleRestart} />}
      </div>
    );

}

export default App;