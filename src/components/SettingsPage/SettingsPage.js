import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UnderConstruction from "../UnderConstructionPage/UnderConstruction";

const SettingsPage = () => {
  return (
    <div className="container p-4">
      <UnderConstruction />
      <h2 className="mb-4">Settings</h2>
      <div className="card mb-3">
        <div className="card-header">Preferences</div>
        <div className="card-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="darkMode" />
            <label className="form-check-label" htmlFor="darkMode">
              Enable Dark Mode
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="notifications"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="notifications">
              Receive Notifications
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="dataSharing"
            />
            <label className="form-check-label" htmlFor="dataSharing">
              Allow Data Sharing
            </label>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Account</div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              defaultValue="john_doe"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              defaultValue="john@example.com"
            />
          </div>

          <button className="btn btn-primary">Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
