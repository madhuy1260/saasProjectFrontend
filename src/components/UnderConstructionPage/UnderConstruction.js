import React from "react";
import "./underConstruction.css";

const UnderConstruction = () => {
  return (
    <div className="under-construction-overlay">
      <div className="coming-soon-container">
        <h1>Coming Soon</h1>
        <p>
          Our website is currently undergoing scheduled maintenance.
          <br />
          We should be back shortly. Thank you for your patience.
        </p>
        <div className="countdown">
          <div>
            <span>00</span>
            <p>Days</p>
          </div>
          <div>
            <span>00</span>
            <p>Hours</p>
          </div>
          <div>
            <span>00</span>
            <p>Mins</p>
          </div>
          <div>
            <span>00</span>
            <p>Sec</p>
          </div>
        </div>
        <button className="notify-btn">Notify Us</button>
        <div className="social-icons">
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-google-plus-g" />
          <i className="fab fa-instagram" />
          <i className="fab fa-pinterest" />
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
