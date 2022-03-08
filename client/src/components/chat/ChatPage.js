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
        <header className="chat-header">
          <h5>Chat</h5>
        </header>

        <div className="chat-messages">
          <ChatList msgList={msgList} />
        </div>

        <div className="chat-form-container">
          <ChatForm addMessage={addMessage} socket={socket} />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
