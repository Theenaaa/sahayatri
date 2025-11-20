import React from "react";

const ReviewModeration = () => (
  <div>
    <h1 className="page-title">Reviews and Ratings Moderation</h1>
    <p className="page-subtitle">
      Moderate reviews, check blockchain authenticity and apply AI based toxicity filters.
    </p>

    <div className="toolbar">
      <select className="toolbar-select">
        <option>All ratings</option>
        <option>1 star</option>
        <option>2 stars</option>
        <option>3 stars</option>
        <option>4 stars</option>
        <option>5 stars</option>
      </select>
      <select className="toolbar-select">
        <option>All sources</option>
        <option>Destination</option>
        <option>Guide</option>
        <option>Vendor</option>
        <option>Reported</option>
      </select>
      <label className="checkbox-inline">
        <input type="checkbox" /> Show only flagged reviews
      </label>
    </div>

    <div className="card mt-16">
      <table className="data-table">
        <thead>
          <tr>
            <th>Source</th>
            <th>Tourist</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Blockchain hash</th>
            <th>AI toxicity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Netarhat</td>
            <td>Rahul S.</td>
            <td>5</td>
            <td>Wonderful sunrise point and well managed eco trail.</td>
            <td>Valid</td>
            <td>Clean</td>
            <td>
              <button className="link-btn">Hide</button>
            </td>
          </tr>
          <tr>
            <td>Tribal Trails Jharkhand</td>
            <td>Aditi K.</td>
            <td>2</td>
            <td>Guide arrived late and itinerary was incomplete.</td>
            <td>Valid</td>
            <td>Neutral</td>
            <td>
              <button className="link-btn">Escalate</button>
              <button className="link-btn ml-4">Flag guide</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ReviewModeration;
