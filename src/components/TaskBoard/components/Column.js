import React from 'react';
import TaskCard from './TaskCard';

function Column({ status }) {
  return (
    <div className="p-3 border rounded m-2 bg-light" style={{ minWidth: '250px' }}>
      <h5>{status}</h5>
      <TaskCard />
    </div>
  );
}

export default Column;