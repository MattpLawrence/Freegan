import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function ChatForm(props) {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    (() => {
      props.addMessage({
        id: Math.random(Math.floor(Math.random() * 8)),
        msgText: msg,
        userName: "tbd",
      });
      setMsg("");
    })();
  };

  return (
    <form id="chat-form">
      <input
        id="msg"
        type="text"
        placeholder="Enter Message"
        value={msg}
        required
        autocomplete="off"
      />
      <a className="waves-effect waves-light btn" id="sendBtn">
        <FontAwesomeIcon icon={faPaperPlane} className="faIcon" />
        &nbsp;&nbsp;Send
      </a>
    </form>
  );
}

export default ChatForm;
