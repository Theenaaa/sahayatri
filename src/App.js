import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import GuideVerification from "./pages/GuideVerification";
import VendorManagement from "./pages/VendorManagement";
import TouristUsers from "./pages/TouristUsers";
import ReviewModeration from "./pages/ReviewModeration";
import DestinationsGeo from "./pages/DestinationsGeo";
import EventsCommunity from "./pages/EventsCommunity";
import ARVRAssets from "./pages/ARVRAssets";
import Marketplace from "./pages/Marketplace";
import FAQKnowledge from "./pages/FAQKnowledge";
import SOSConsole from "./pages/SOSConsole";
import Notifications from "./pages/Notifications";
import Analytics from "./pages/Analytics";

function App() {
  // flow:
  // 1) authStage = "welcome"  -> show welcome screen
  // 2) authStage = "login"    -> show login page
  // 3) isAuthenticated = true -> show full admin layout
  const [authStage, setAuthStage] = React.useState("welcome");
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  if (authStage === "welcome") {
    return <WelcomePage onContinue={() => setAuthStage("login")} />;
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  // Authenticated admin layout
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <Topbar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/guides" element={<GuideVerification />} />
            <Route path="/vendors" element={<VendorManagement />} />
            <Route path="/tourists" element={<TouristUsers />} />
            <Route path="/reviews" element={<ReviewModeration />} />
            <Route path="/destinations" element={<DestinationsGeo />} />
            <Route path="/events" element={<EventsCommunity />} />
            <Route path="/ar-vr" element={<ARVRAssets />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/faq" element={<FAQKnowledge />} />
            <Route path="/sos" element={<SOSConsole />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
