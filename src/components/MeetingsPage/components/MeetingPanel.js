import React from "react";
// import "./MeetingPanel.css";

const MeetingPanel = () => {
  return (
    <div className="meeting-panel">
      <button className="btn-schedule">+ Schedule a meeting</button>
      <div className="meeting-illustration">
        <i className="fa-solid fa-calendar-days fa-beat-fade fa-2xl"></i>
        <h4>Upcoming meeting</h4>
        <p>
          Come here to find all the upcoming meetings in this space. Use{" "}
          <strong>'Schedule a meeting'</strong> to create a new meeting.
        </p>
      </div>
      <div className="info-box">
        The participant capacity for meeting in this space depends on the space
        sponsor’s license.
        <a href="#"> Learn more.</a>
      </div>
    </div>
  );
};

export default MeetingPanel;
