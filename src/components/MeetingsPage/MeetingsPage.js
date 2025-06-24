import React from "react";
import "./MeetingsPage.css";
import Sidebar from "../MeetingsPage/components/Sidebar";
import Header from "../MeetingsPage/components/Header";
import MeetingPanel from "../MeetingsPage/components/MeetingPanel";

const MeetingsPage = () => {
  return (
    <div className="app-container1">
      <Sidebar />
      <div className="main-content">
        <Header />
        <MeetingPanel />
      </div>
    </div>
  );
};

export default MeetingsPage;
