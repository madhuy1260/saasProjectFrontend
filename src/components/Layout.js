import React from "react";
import Navbar from "./Navbar";
import Sidebar from "../pages/Sidebar";

function Layout({ children }) {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "18% 82%",
          height: "100%",
        }}
      >
        <div style={{ borderRight: "1px solid #ccc", overflowY: "auto" }}>
          <Sidebar />
        </div>
        <div style={{ padding: "20px", overflowY: "auto" }}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
