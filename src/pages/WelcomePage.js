import React from "react";

const WelcomePage = ({ onContinue }) => {
  return (
    <div className="lp-wrapper">
      <div className="lp-card">
        {/* LEFT SIDE */}
        <div className="lp-left">
          <div className="lp-logo-row">
            <div className="lp-logo-circle">SY</div>
            <span className="lp-logo-text">SahaYatri Admin</span>
          </div>

          <h1 className="lp-title">Welcome to Our Admin Console</h1>

          <div className="lp-underline" />

          <p className="lp-body">
            This portal is for Jharkhand Tourism administration. Manage tourists,
            guides, vendors, SOS alerts and analytics from a single workspace.
          </p>

          <p className="lp-subtext">
            Access is restricted to authorised staff. Use your official email to
            proceed to the secure login page.
          </p>

          <form
            className="lp-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (onContinue) onContinue();
            }}
          >
            <input
              type="email"
              className="lp-input"
              placeholder="Enter official email"
              required
            />
            <button type="submit" className="lp-subscribe-btn">
              Continue
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="lp-right">
          <div className="lp-right-inner">
            <div className="lp-welcome-text-top">Jharkhand</div>
            <div className="lp-welcome-main">
              <span className="lp-letter">W</span>
              <span className="lp-letter">E</span>
              <span className="lp-letter">L</span>
              <span className="lp-letter">C</span>
              <span className="lp-letter">O</span>
              <span className="lp-letter">M</span>
              <span className="lp-letter">E</span>
            </div>
            <div className="lp-welcome-caption">
              Tourism operations, safety and insights in one place.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
