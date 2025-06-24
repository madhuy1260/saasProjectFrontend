import React from "react";
import FilterBar from "./components/FilterBar";
import KanbanBoard from "./components/KanbanBoard";
import CreateEditTaskModal from "./components/CreateEditTaskModal";
import SprintViewToggle from "./components/SprintViewToggle";
import AnalyticsPanel from "./components/AnalyticsPanel";

function TaskBoard() {
  return (
    <div className="container-fluid">
      <FilterBar />
      <SprintViewToggle />
      <div className="app-container">
        <KanbanBoard />
        <CreateEditTaskModal />
      </div>
      <AnalyticsPanel />
    </div>
  );
}

export default TaskBoard;
