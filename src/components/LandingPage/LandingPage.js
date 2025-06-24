import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // Import custom CSS

const modules = [
  { name: "Mail", icon: "📬", route: "/mail" },
  { name: "Messaging", icon: "💬", route: "/messages" },
  { name: "Meetings", icon: "🎥", route: "/meetings" },
  { name: "Tasks", icon: "📋", route: "/taskboard" },
  { name: "Analytics", icon: "📊", route: "/analytics" },
  { name: "Settings", icon: "⚙️", route: "/settings" },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">SaaS Workspace</h1>
      <div className="row justify-content-center">
        {modules.map((module, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div
              className="module-card p-4 shadow-sm"
              onClick={() => navigate(module.route)}
            >
              <div className="module-icon">{module.icon}</div>
              <div className="module-name mt-2">{module.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
