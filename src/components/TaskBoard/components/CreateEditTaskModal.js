import React from 'react';

function CreateEditTaskModal() {
  return (
    <div className="modal fade" id="taskModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create/Edit Task</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <input className="form-control mb-2" placeholder="Task Title" />
            <textarea className="form-control mb-2" placeholder="Description"></textarea>
            <input className="form-control mb-2" placeholder="Assignee" />
            <input type="date" className="form-control mb-2" />
            <select className="form-select mb-2">
              <option>Priority</option>
            </select>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button className="btn btn-primary">Save Task</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEditTaskModal;