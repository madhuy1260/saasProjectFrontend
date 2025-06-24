import React from 'react';

function ChatWindow() {
  return (
    <div className="chat-window">
      <div className="message">
        <div className="sender">Acme Team <span className="timestamp">12:45 PM</span></div>
        <div className="text">Event starting in 15 minutes: <strong>Team Status Meeting</strong> from 1:00 PM to 1:30 PM</div>
      </div>
      <div className="message">
        <div className="sender">Zoe Maxwell <span className="timestamp">12:55 PM</span></div>
        <div className="text">Today <strong>@Lisa</strong> will join our huddle to provide updates on the launch.</div>
      </div>
      <div className="message">
        <div className="sender">Lee Hao <span className="timestamp">1:45 PM</span></div>
        <div className="text">Please add any other notes from our sync today!</div>
      </div>
      <div className="message-input">
        <input placeholder="Message #social-media" />
      </div>
    </div>
  );
}

export default ChatWindow;