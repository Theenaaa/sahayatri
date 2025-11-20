import React from "react";

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <input
          type="text"
          placeholder="Search tourist, vendor, SOS, destination..."
        />
      </div>
      <div className="topbar-right">
        <button className="topbar-pill">This Week</button>
        <button className="primary-btn">Download Report</button>
        <div className="topbar-user">
          <div className="topbar-avatar">AD</div>
          <div className="topbar-user-info">
            <div className="topbar-user-name">Admin</div>
            <div className="topbar-user-role">Jharkhand</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;

