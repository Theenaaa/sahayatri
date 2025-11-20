import React from "react";

const Marketplace = () => (
  <div>
    <h1 className="page-title">Marketplace for Artisans</h1>
    <p className="page-subtitle">
      Approve listings, manage artisans and track sales of handicrafts.
    </p>

    <div className="toolbar">
      <input className="toolbar-input" placeholder="Search product or artisan" />
      <select className="toolbar-select">
        <option>All statuses</option>
        <option>Pending</option>
        <option>Live</option>
        <option>Suspended</option>
      </select>
    </div>

    <div className="card mt-16">
      <table className="data-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Artisan</th>
            <th>Category</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Handloom Shawl</td>
            <td>Gumla Weavers Group</td>
            <td>Textiles</td>
            <td>1,200</td>
            <td>42</td>
            <td><span className="status-pill success">Live</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Marketplace;
