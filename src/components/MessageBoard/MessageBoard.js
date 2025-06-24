import React from "react";
import "./MessageBoard.css";
import "./SlackClone.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatWindow from "./ChatWindow";

const MessagePage = () => {
  return (
    <div className="slack-app app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <ChatWindow />
      </div>
    </div>
  );
};

export default MessagePage;
