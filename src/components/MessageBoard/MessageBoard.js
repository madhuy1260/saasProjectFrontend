import React from "react";
import "./MessageBoard.css";
import "./SlackClone.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatWindow from "./ChatWindow";
import UnderConstruction from "../UnderConstructionPage/UnderConstruction";

const MessagePage = () => {
  return (
    <div className="slack-app app-container">
      <UnderConstruction />
      <Sidebar />
      <div className="main-content">
        <Header />
        <ChatWindow />
      </div>
    </div>
  );
};

export default MessagePage;
