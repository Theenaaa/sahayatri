import React from "react";

const FAQKnowledge = () => (
  <div>
    <h1 className="page-title">FAQ and Knowledge Base</h1>
    <p className="page-subtitle">
      Central repository for answers, policies and travel advisories.
    </p>

    <div className="grid grid-2 mt-16">
      <div className="card">
        <h3>Frequently Asked Questions</h3>
        <ul className="faq-list">
          <li>
            <strong>How are guides verified</strong>
            <p>
              Guides upload license, ID and experience proof. Admins conduct checks and approve via blockchain secured workflow.
            </p>
          </li>
          <li>
            <strong>What is the refund policy for bookings</strong>
            <p>
              Policies vary by vendor and are recorded in the booking details page of the admin portal.
            </p>
          </li>
        </ul>
      </div>
      <div className="card">
        <h3>New Article</h3>
        <label>
          Title
          <input type="text" placeholder="Travel advisory or policy update" />
        </label>
        <label>
          Content
          <textarea rows="8" placeholder="Write content for the knowledge base article." />
        </label>
        <button className="primary-btn mt-12">Publish article</button>
      </div>
    </div>
  </div>
);

export default FAQKnowledge;
