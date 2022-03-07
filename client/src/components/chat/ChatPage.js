import React, { useState } from "react";
import "../../styles/chat.css";

function ChatPage() {
  return (
    <div className="container" id="chatShadow">
      <div className="chat-container">
        <header className="chat-header">{/* <h1> display name</h1> */}</header>
        <main className="chat-main">
          <div className="chat-sidebar">
            <h3>
              <i className="fas fa-comments"></i> Room:
            </h3>
            <h2 id="room-name">Main Chat</h2>
            <h3>
              <i className="fas fa-users"></i> Users
            </h3>
            <ul id="users">{/* <li> display name</li> */}</ul>
          </div>
          <div className="chat-messages"></div>
        </main>
        <div className="chat-form-container">
          <form id="chat-form">
            <input
              id="msg"
              type="text"
              placeholder="Enter Message"
              required
              autocomplete="off"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              id="sendBtn"
            >
              <i className="fas fa-paper-plane"></i> Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
