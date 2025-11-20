import React from "react";

const SOSConsole = () => (
  <div>
    <h1 className="page-title">SOS Console</h1>
    <p className="page-subtitle">
      Monitor live SOS alerts, track responders and update tourist safety status.
    </p>

    <div className="grid grid-2 mt-16">
      <div className="card">
        <div className="card-header">
          <h3>Live Alerts</h3>
          <span className="chip danger">3 open</span>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tourist</th>
              <th>Location</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Responder</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SOS-1842</td>
              <td>Rahul S.</td>
              <td>Netarhat</td>
              <td><span className="status-pill danger">High</span></td>
              <td><span className="status-pill warning">In progress</span></td>
              <td>Local police</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>Live Map and Status</h3>
        <div className="map-placeholder">
          Integrate real time map view with pinned SOS locations and responder routes.
        </div>
        <div className="mt-12">
          <button className="outline-btn small">Mark as resolved</button>
          <button className="outline-btn small ml-8">Notify family contact</button>
        </div>
      </div>
    </div>
  </div>
);

export default SOSConsole;
