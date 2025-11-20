import React from "react";

const Analytics = () => (
  <div>
    <h1 className="page-title">Analytics Dashboard</h1>
    <p className="page-subtitle">
      High level view of tourist trends, booking funnels, revenue and platform health.
    </p>

    <div className="grid grid-3 mt-16">
      <div className="card kpi-card">
        <div className="kpi-label">Monthly active tourists</div>
        <div className="kpi-value">8,920</div>
      </div>
      <div className="card kpi-card">
        <div className="kpi-label">Average rating</div>
        <div className="kpi-value">4.6</div>
      </div>
      <div className="card kpi-card">
        <div className="kpi-label">System uptime</div>
        <div className="kpi-value">99.7%</div>
      </div>
    </div>

    <div className="grid grid-2 mt-24">
      <div className="card chart-card">
        <h3>Bookings by season</h3>
        <div className="chart-placeholder">
          Chart library integration for season wise bookings.
        </div>
      </div>
      <div className="card chart-card">
        <h3>Source of traffic</h3>
        <div className="chart-placeholder">
          Pie or doughnut chart for direct, referrals and campaigns.
        </div>
      </div>
    </div>
  </div>
);

export default Analytics;
