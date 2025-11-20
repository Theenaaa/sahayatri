import React from "react";

const VendorManagement = () => {
  return (
    <div>
      <h1 className="page-title">Vendor and Service Provider Management</h1>
      <p className="page-subtitle">
        Control onboarding, verification, fraud detection and lifecycle of vendors and homestays.
      </p>

      <div className="toolbar">
        <input className="toolbar-input" placeholder="Search vendor or license ID" />
        <select className="toolbar-select">
          <option>All types</option>
          <option>Homestay</option>
          <option>Guide and tour</option>
          <option>Transport</option>
          <option>Artisan</option>
        </select>
        <select className="toolbar-select">
          <option>Verification status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </div>

      <div className="grid grid-2 mt-16">
        <div className="card">
          <div className="card-header">
            <h3>Pending Vendor Verification</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Type</th>
                <th>District</th>
                <th>License expiry</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prabhat Eco Stay</td>
                <td>Homestay</td>
                <td>Latehar</td>
                <td>12 Jun 2026</td>
                <td><span className="status-pill warning">Pending</span></td>
              </tr>
              <tr>
                <td>Tribal Trails Jharkhand</td>
                <td>Guide and tour</td>
                <td>Ranchi</td>
                <td>05 Mar 2026</td>
                <td><span className="status-pill warning">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Vendor Profile Controls</h3>
          </div>
          <div className="detail-panel">
            <p>
              Use this area to update vendor information, deactivate or blacklist vendors and mark suspected fraud.
            </p>
            <div className="detail-grid">
              <div>
                <label>
                  Vendor name
                  <input type="text" placeholder="Selected vendor" />
                </label>
                <label>
                  Status
                  <select>
                    <option>Active</option>
                    <option>Deactivated</option>
                    <option>Blacklisted</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  Fraud notes
                  <textarea rows="5" placeholder="Duplicate IDs, suspicious reviews or unusual booking patterns." />
                </label>
              </div>
            </div>
            <div className="mt-16">
              <button className="primary-btn small">Save changes</button>
              <button className="outline-btn small ml-8">Trigger re verification</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorManagement;
