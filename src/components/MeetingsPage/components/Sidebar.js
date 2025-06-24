import React from "react";
// import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar1">
      <div className="user-info">
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="User"
          className="avatar"
        />
        <span>Working from home 🏡</span>
      </div>
      <div className="menu-section">
        <button className="btn selected">All</button>
        <button className="btn">Direct</button>
        <button className="btn">Spaces</button>
      </div>
      <div className="contacts">
        <h6>Favorites</h6>
        <ul>
          <li className="contact selected">
            <span className="avatar-circle blue">D</span>
            <div>
              <strong>Development Agenda</strong>
              <div className="subtext">ENG Deployment</div>
            </div>
          </li>
          <li className="contact">
            <span className="avatar-circle red">M</span>
            <div>
              <strong>Matthew Baker</strong>
              <div className="subtext">Marketing Collateral</div>
            </div>
          </li>
          {/* Add more contacts */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
