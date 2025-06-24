import React from "react";
import "./styles/App.css";
import Board from "./components/Board";
import UnderConstruction from "../UnderConstructionPage/UnderConstruction";

function TaskBoard() {
  return (
    <div className="App">
      {/* <UnderConstruction /> */}
      <Board />
    </div>
  );
}

export default TaskBoard;
