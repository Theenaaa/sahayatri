import React from "react";

const TouristUsers = () => (
  <div>
    <h1 className="page-title">Tourist User Management</h1>
    <p className="page-subtitle">
      Monitor registered tourists, trip history and reported accounts.
    </p>

    <div className="toolbar">
      <input className="toolbar-input" placeholder="Search tourist" />
      <select className="toolbar-select">
        <option>All flags</option>
        <option>Clean</option>
        <option>Warning issued</option>
        <option>Blacklisted</option>
      </select>
    </div>

    <div className="card mt-16">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Trips</th>
            <th>Last trip</th>
            <th>Reports</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rahul Sharma</td>
            <td>rahul@example.com</td>
            <td>5</td>
            <td>Netarhat weekend</td>
            <td>0</td>
            <td><button className="link-btn">View history</button></td>
          </tr>
          <tr>
            <td>Foreign Group</td>
            <td>team@travelglobal.com</td>
            <td>2</td>
            <td>Dassam Falls</td>
            <td>1</td>
            <td>
              <button className="link-btn">Issue warning</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TouristUsers;
