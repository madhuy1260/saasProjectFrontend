import React from "react";
import "../styles/Board.css";

const lanes = [
  "Ready for Dev",
  "In Dev",
  "Ready for Code Review",
  "In Code Review",
  "Ready for Build",
  "Ready for QA",
  "In QA",
  "Done",
];

const swimlanes = ["Core Effort", "Tooling Content"];

const Board = () => (
  <div className="kanban-board">
    {swimlanes.map((swimlane) => (
      <div className="swimlane" key={swimlane}>
        <div className="swimlane-title">{swimlane}</div>
        <div className="lane-container">
          {lanes.map((lane) => (
            <div className="lane" key={lane}>
              <div className="lane-title">{lane}</div>
              <div className="card placeholder" style={{ color: "blue" }}>
                <span style={{ color: "black" }}>Card</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Board;
