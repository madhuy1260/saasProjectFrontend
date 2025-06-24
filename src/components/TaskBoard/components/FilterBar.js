import React from 'react';

function FilterBar() {
  return (
    <div className="d-flex justify-content-between my-3">
      <input type="text" className="form-control w-25" placeholder="Search Tasks..." />
      <select className="form-select w-25">
        <option>Filter by Assignee</option>
      </select>
      <select className="form-select w-25">
        <option>Filter by Priority</option>
      </select>
    </div>
  );
}

export default FilterBar;