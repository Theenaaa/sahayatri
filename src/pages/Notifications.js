import React from "react";

const Notifications = () => (
  <div>
    <h1 className="page-title">Notifications System</h1>
    <p className="page-subtitle">
      Configure system alerts, SMS and push campaigns for tourists and vendors.
    </p>

    <div className="grid grid-2 mt-16">
      <div className="card">
        <h3>Compose Notification</h3>
        <label>
          Audience
          <select>
            <option>All tourists</option>
            <option>Only vendors</option>
            <option>Guides in active trips</option>
          </select>
        </label>
        <label>
          Channel
          <select>
            <option>In app notification</option>
            <option>SMS</option>
            <option>Email</option>
          </select>
        </label>
        <label>
          Message
          <textarea rows="6" placeholder="Type advisory or announcement" />
        </label>
        <button className="primary-btn mt-12">Send notification</button>
      </div>

      <div className="card">
        <h3>Recent Notifications</h3>
        <ul className="notif-list">
          <li>
            Travel advisory for heavy rainfall in Netarhat. Status: Delivered.
          </li>
          <li>
            Marketplace maintenance window scheduled tonight. Status: Scheduled.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Notifications;
