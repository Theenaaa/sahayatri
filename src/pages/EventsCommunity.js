import React from "react";

const EventsCommunity = () => (
  <div>
    <h1 className="page-title">Events and Community</h1>
    <p className="page-subtitle">
      Manage festivals, workshops and community driven eco tourism activities.
    </p>

    <div className="toolbar">
      <button className="primary-btn small">Add event</button>
      <select className="toolbar-select">
        <option>All time</option>
        <option>Upcoming</option>
        <option>Ongoing</option>
        <option>Completed</option>
      </select>
    </div>

    <div className="card mt-16">
      <table className="data-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Type</th>
            <th>Location</th>
            <th>Dates</th>
            <th>Host</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Netarhat Winter Festival</td>
            <td>Festival</td>
            <td>Netarhat</td>
            <td>12 Dec - 14 Dec</td>
            <td>Tourism Department</td>
            <td><span className="status-pill medium">Upcoming</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default EventsCommunity;
