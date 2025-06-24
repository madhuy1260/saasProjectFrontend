import React from 'react';

function TaskCard() {
  return (
    <div className="card mb-2 shadow-sm">
      <div className="card-body">
        <h6 className="card-title">Sample Task</h6>
        <p className="card-text">Assignee: John Doe</p>
        <span className="badge bg-warning text-dark">High Priority</span>
      </div>
    </div>
  );
}

export default TaskCard;