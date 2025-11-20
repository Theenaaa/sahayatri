import React from "react";

const LoginPage = ({ onLogin }) => {
  return (
    <div className="lp-wrapper">
      <div className="lp-card">
        {/* LEFT SIDE */}
        <div className="lp-left">
          <div className="lp-logo-row">
            <div className="lp-logo-circle">SY</div>
            <span className="lp-logo-text">SahaYatri Admin</span>
          </div>

          <h1 className="lp-title">Admin Login</h1>

          <div className="lp-underline" />

          <p className="lp-body">
            Sign in with your official Jharkhand Tourism credentials to access
            the admin console for tourism operations, guides, vendors and SOS.
          </p>

          <p className="lp-subtext">
            For security, this portal is monitored and all access is logged.
            Use your work email address only.
          </p>

          <form
            className="lp-login-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (onLogin) onLogin();
            }}
          >
            <label className="lp-login-label">
              Email
              <input
                type="email"
                required
                placeholder="admin@jharkhand.gov"
                className="lp-login-input"
              />
            </label>

            <label className="lp-login-label">
              One Time Password
              <input
                type="password"
                required
                placeholder="Enter OTP"
                className="lp-login-input"
              />
            </label>

            <div className="lp-login-meta">
              <label className="lp-login-remember">
                <input type="checkbox" /> Remember this device
              </label>
              <button type="button" className="text-link">
                View session logs
              </button>
            </div>

            <button type="submit" className="lp-subscribe-btn lp-login-btn">
              Sign in to console
            </button>

            <p className="lp-login-footnote">
              Multi factor authentication and role based access can be managed
              from system settings after login.
            </p>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="lp-right lp-right-login">
          <div className="lp-right-inner">
            <div className="lp-welcome-text-top">Secure Access</div>
            <div className="lp-welcome-main">
              <span className="lp-letter">L</span>
              <span className="lp-letter">O</span>
              <span className="lp-letter">G</span>
              <span className="lp-letter">I</span>
              <span className="lp-letter">N</span>
            </div>
            <div className="lp-welcome-caption">
              Only verified administrators can sign in. Keep your credentials
              confidential and follow internal security guidelines.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
