import React from "react";

const DestinationsGeo = () => (
  <div>
    <h1 className="page-title">Destinations and Geo Mapping</h1>
    <p className="page-subtitle">
      Manage destinations, categories and PostGIS powered geo spatial layers.
    </p>

    <div className="toolbar">
      <button className="primary-btn small">Add destination</button>
      <select className="toolbar-select">
        <option>All categories</option>
        <option>Waterfalls</option>
        <option>Temples</option>
        <option>Trekking trails</option>
        <option>Heritage sites</option>
      </select>
      <label className="checkbox-inline">
        <input type="checkbox" /> Show hidden destinations
      </label>
    </div>

    <div className="grid grid-2 mt-16">
      <div className="card">
        <div className="card-header">
          <h3>Destination List</h3>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>District</th>
              <th>Visibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dassam Falls</td>
              <td>Waterfall</td>
              <td>Ranchi</td>
              <td><span className="status-pill success">Visible</span></td>
            </tr>
            <tr>
              <td>Ancient Temple Complex</td>
              <td>Temple</td>
              <td>Deoghar</td>
              <td><span className="status-pill neutral">Hidden</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>PostGIS Map View</h3>
        </div>
        <div className="map-placeholder">
          Interactive map region for boundaries, geotags and POI layers
          such as police, ATMs and hospitals.
        </div>
        <div className="mt-12">
          <button className="outline-btn small">Toggle POI layers</button>
          <button className="outline-btn small ml-8">Enable destination visibility</button>
        </div>
      </div>
    </div>
  </div>
);

export default DestinationsGeo;
