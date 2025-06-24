import React from "react";
import "./MeetingsPage.css";
import Sidebar from "../MessageBoard/Sidebar";
import Header from "../MessageBoard/Header";
import MeetingPanel from "./components/MeetingPanel";

const MeetingsPage = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <MeetingPanel />
      </div>
    </div>
  );
};

export default MeetingsPage;
