// src/components/Mail/GmailReplica.js
import React from "react";
import "./Mailpage.css";

function MailPage() {
  return (
    <div className="gmail-wrapper">
      <header className="gmail-header ">
        <div className="logo">
          G<span>mail</span>
        </div>
        <input type="text" placeholder="Search mail" className="search-bar" />
        <div className="user-info">
          <span>hikingfan@gmail.com</span>
          <img
            src="https://www.gravatar.com/avatar/placeholder"
            alt="avatar"
            className="avatar"
          />
        </div>
      </header>

      <div className="gmail-body  app-container">
        <aside className="sidebar">
          <button className="compose">COMPOSE</button>
          <ul className="nav-list">
            <li className="active">Inbox (6)</li>
            <li>Starred</li>
            <li>Sent Mail</li>
            <li>Drafts</li>
            <li>Hiking</li>
            <li>Home</li>
            <li>Receipts</li>
            <li>To Do</li>
            <li>Urgent!</li>
            <li>More</li>
          </ul>
        </aside>

        <main className="email-list">
          <div className="email-controls">
            <button>⬜</button>
            <button>⟳</button>
            <button>More ▾</button>
          </div>

          <ul className="emails">
            {[...Array(10)].map((_, i) => (
              <li className="email-item" key={i}>
                <input type="checkbox" />
                <span className="star">☆</span>
                <span className="sender">Google+</span>
                <span className="subject">
                  <strong>Peter Harbison added you on Google+</strong> – Follow
                  and share with Peter by adding him to a circle.
                </span>
                <span className="date">Sep 16</span>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

export default MailPage;
