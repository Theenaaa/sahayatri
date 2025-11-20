import React from "react";

const ARVRAssets = () => (
  <div>
    <h1 className="page-title">AR and VR Asset Management</h1>
    <p className="page-subtitle">
      Curate immersive previews, manage file hosting and connect assets to destinations.
    </p>

    <div className="toolbar">
      <button className="primary-btn small">Upload asset</button>
      <select className="toolbar-select">
        <option>All types</option>
        <option>AR model</option>
        <option>VR tour</option>
        <option>360 image</option>
      </select>
    </div>

    <div className="card mt-16">
      <table className="data-table">
        <thead>
          <tr>
            <th>Asset name</th>
            <th>Type</th>
            <th>Linked destination</th>
            <th>Hosting</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Betla Fort 360 Walkthrough</td>
            <td>VR tour</td>
            <td>Betla</td>
            <td>CDN</td>
            <td><span className="status-pill success">Active</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ARVRAssets;
