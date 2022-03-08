import React, { useState } from "react";
import "../../styles/chat.css";
import "materialize-css/dist/css/materialize.min.css";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

function ChatPage({ socket }) {
  const [msgList, setMsgList] = useState([]);

  const addMessage = (msg) => {
    // check to see if anything ahs been passed through
    if (!msg) {
      return;
    }
    //Add message to array
    const newList = [msg, ...msgList];
    setMsgList(newList);
  };

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
            <ul id="users">{/* <li>{{userData.name_display}}</li> */}</ul>
          </div>
          <div className="chat-messages">
            <ChatList msgList={msgList} />
          </div>
        </main>
        <div className="chat-form-container">
          <ChatForm addMessage={addMessage} socket={socket} />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
