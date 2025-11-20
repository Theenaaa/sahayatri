import React from "react";

const GuideVerification = () => {
  return (
    <div>
      <h1 className="page-title">Guide Verification</h1>
      <p className="page-subtitle">
        Review applications, verify documents and track performance of registered guides.
      </p>

      <div className="toolbar">
        <input className="toolbar-input" placeholder="Search guide by name or ID" />
        <select className="toolbar-select">
          <option>All statuses</option>
          <option>Submitted</option>
          <option>Under review</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
        <select className="toolbar-select">
          <option>All districts</option>
          <option>Ranchi</option>
          <option>Latehar</option>
          <option>Netarhat</option>
        </select>
      </div>

      <div className="grid grid-2 mt-16">
        <div className="card">
          <div className="card-header">
            <h3>Pending Guide Applications</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>District</th>
                <th>Experience</th>
                <th>Submitted</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>G-2041</td>
                <td>Ramesh Kumar</td>
                <td>Ranchi</td>
                <td>4 years</td>
                <td>2 days ago</td>
                <td><span className="status-pill warning">Under review</span></td>
              </tr>
              <tr>
                <td>G-2042</td>
                <td>Anita Devi</td>
                <td>Netarhat</td>
                <td>7 years</td>
                <td>1 day ago</td>
                <td><span className="status-pill neutral">Submitted</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Guide Details and Documents</h3>
          </div>
          <div className="detail-panel">
            <h4>Selected guide</h4>
            <p>Select a guide from the left table to view ID proof, certification, experience proof and introduction script.</p>
            <div className="detail-grid">
              <div>
                <h5>Verification Notes</h5>
                <textarea rows="5" placeholder="Interview call notes, background checks and reference details." />
              </div>
              <div>
                <h5>Status Timeline</h5>
                <ul className="timeline">
                  <li>Submitted</li>
                  <li>Under review</li>
                  <li>Approved or Rejected</li>
                </ul>
                <div className="mt-12">
                  <button className="primary-btn small">Approve and write blockchain hash</button>
                  <button className="outline-btn small ml-8">Reject and record reason</button>
                </div>
              </div>
            </div>
            <h5 className="mt-16">Performance Tracking</h5>
            <p>
              This section will display rating trends, complaint history and number of tourists served for existing guides.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideVerification;
