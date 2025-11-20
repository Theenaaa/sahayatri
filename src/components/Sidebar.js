import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo-circle">SY</div>
        <div>
          <div className="sidebar-title">SahaYatri</div>
          <div className="sidebar-subtitle">Jharkhand Tourism Admin</div>
        </div>
      </div>

      <div className="sidebar-section-label">Overview</div>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className="sidebar-link">
          Dashboard
        </NavLink>
      </nav>

      <div className="sidebar-section-label">Operations</div>
      <nav className="sidebar-nav">
        <NavLink to="/tourists" className="sidebar-link">
          Tourists
        </NavLink>
        <NavLink to="/guides" className="sidebar-link">
          Guides Verification
        </NavLink>
        <NavLink to="/vendors" className="sidebar-link">
          Vendors and Homestays
        </NavLink>
        <NavLink to="/destinations" className="sidebar-link">
          Destinations and Geo-Trails
        </NavLink>
        <NavLink to="/events" className="sidebar-link">
          Events and Community
        </NavLink>
        <NavLink to="/sos" className="sidebar-link">
          Safety and SOS
        </NavLink>
      </nav>

      <div className="sidebar-section-label">Trust and Insights</div>
      <nav className="sidebar-nav">
        <NavLink to="/reviews" className="sidebar-link">
          Reviews and Feedback
        </NavLink>
        <NavLink to="/ar-vr" className="sidebar-link">
          AR and VR Assets
        </NavLink>
        <NavLink to="/marketplace" className="sidebar-link">
          Marketplace
        </NavLink>
        <NavLink to="/faq" className="sidebar-link">
          FAQ and Knowledge Base
        </NavLink>
        <NavLink to="/analytics" className="sidebar-link">
          Analytics and Reports
        </NavLink>
      </nav>

      <div className="sidebar-section-label">System</div>
      <nav className="sidebar-nav">
        <NavLink to="/notifications" className="sidebar-link">
          Notifications
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
