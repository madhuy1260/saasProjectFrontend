import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        height: "100vh",
        borderRight: "1px solid #ccc",
      }}
    >
      <div style={{ padding: "20px", borderBottom: "1px solid #eee" }}>
        <h3 style={{ margin: 0, color: "#333" }}>CRM</h3>
        <small style={{ color: "#666" }}>CRM SYSTEM DESIGN</small>
      </div>

      <nav style={{ marginTop: "20px" }}>
        <NavLink to="/dashboard" style={linkStyle}>
          <span className="material-icons" style={iconStyle}></span>
          Dashboard
        </NavLink>

        <NavLink to="/inquiry" style={linkStyle}>
          <span className="material-icons" style={iconStyle}></span>
          Inquiry Capture
        </NavLink>

        <NavLink to="/quotation" style={linkStyle}>
          <span className="material-icons" style={iconStyle}></span>
          Quotation Builder
        </NavLink>

        <NavLink to="/checklist" style={linkStyle}>
          <span className="material-icons" style={iconStyle}></span>
          Checklist Management
        </NavLink>

        <NavLink to="/pogenerator" style={linkStyle}>
          <span className="material-icons" style={iconStyle}></span>
          PO Generator
        </NavLink>

        <NavLink to="/logistics" style={linkStyle}>
          <span className="material-icons" style={iconStyle}></span>
          Logistics Tracker
        </NavLink>

        <NavLink to="/pod" style={linkStyle}>
          <span className="material-icons" style={iconStyle}></span>
          POD
        </NavLink>

        <NavLink to="/accounts" style={linkStyle}>
          <span className="material-icons" style={iconStyle}></span>
          Accounts Panel
        </NavLink>

        <NavLink to="/admin" style={linkStyle}>
          <span className="material-icons" style={iconStyle}></span>
          Admin Panel
        </NavLink>

        <NavLink to="/viewdoc" style={linkStyle}>
          <span className="material-icons" style={iconStyle}></span>
          View Document
        </NavLink>

        <NavLink to="/reports" style={linkStyle}>
          <span className="material-icons" style={iconStyle}></span>
          Reports
        </NavLink>

        <NavLink to="/help" style={linkStyle}>
          <span className="material-icons" style={iconStyle}></span>
          Help Center
        </NavLink>
      </nav>
    </div>
  );
};

const linkStyle = ({ isActive }) => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  textDecoration: "none",
  color: isActive ? "#fff" : "#333",
  backgroundColor: isActive ? "#c59d5f" : "transparent",
  borderRadius: "8px",
  marginBottom: "5px",
});

const iconStyle = {
  marginRight: "10px",
};

export default Sidebar;
