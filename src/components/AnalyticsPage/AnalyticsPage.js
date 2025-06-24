import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UnderConstruction from "../UnderConstructionPage/UnderConstruction";

const AnalyticsPage = () => {
  return (
    <div className="container-fluid p-4">
      <UnderConstruction />
      <h2 className="mb-4">Analytics Dashboard</h2>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header bg-primary text-white">User Growth</div>
            <div className="card-body">
              <div className="bg-light p-4 text-center">
                [Chart Placeholder]
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header bg-success text-white">
              Engagement Rate
            </div>
            <div className="card-body">
              <div className="bg-light p-4 text-center">
                [Chart Placeholder]
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-info text-white">Active Users</div>
            <div className="card-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Sessions</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>42</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>29</td>
                    <td>Moderate</td>
                  </tr>
                  <tr>
                    <td>Carol</td>
                    <td>17</td>
                    <td>Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
