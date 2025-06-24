import React from "react";
// import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h5>Development Agenda</h5>
        <span className="subtext">ENG Deployment</span>
      </div>
      <div className="header-tabs">
        <span className="tab">Messages</span>
        <span className="tab">People (30)</span>
        <span className="tab">Content</span>
        <span className="tab selected">Schedule</span>
        <span className="tab">Apps</span>
      </div>
      <div className="header-right">
        <button className="btn btn-meet">Meet</button>
        <i className="bi bi-search"></i>
        <i className="bi bi-three-dots-vertical"></i>
      </div>
    </div>
  );
};

export default Header;
