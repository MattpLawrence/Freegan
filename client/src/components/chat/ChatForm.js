import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function ChatForm() {
  return (
    <form id="chat-form">
      <input
        id="msg"
        type="text"
        placeholder="Enter Message"
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
