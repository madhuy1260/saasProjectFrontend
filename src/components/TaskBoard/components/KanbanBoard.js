import React from 'react';
import Column from './Column';

const statuses = ['Backlog', 'To Do', 'In Progress', 'Review', 'Done'];

function KanbanBoard() {
  return (
    <div className="d-flex overflow-auto">
      {statuses.map(status => <Column key={status} status={status} />)}
    </div>
  );
}

export default KanbanBoard;