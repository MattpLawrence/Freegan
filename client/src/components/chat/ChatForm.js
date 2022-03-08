import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function ChatForm(props) {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(msg);
    (() => {
      props.addMessage({
        id: Math.random(Math.floor(Math.random() * 8)),
        msgText: msg,
        userName: "tbd",
        time: moment().format("h:mm a"),
      });

      setMsg("");
    })();
  };
  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  return (
    <form id="chat-form" onSubmit={handleSubmit}>
      <input
        id="msg"
        type="text"
        placeholder="Enter Message"
        value={msg}
        required
        autoComplete="off"
        onChange={handleChange}
      />
      <button className="waves-effect waves-light btn" id="sendBtn">
        <FontAwesomeIcon icon={faPaperPlane} className="faIcon" />
        &nbsp;&nbsp;Send
      </button>
    </form>
  );
}

export default ChatForm;
