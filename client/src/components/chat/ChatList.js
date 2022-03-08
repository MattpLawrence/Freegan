import React from "react";

function ChatList(props) {
  console.log(props.msgList);

  return props.msgList
    .slice(0)
    .reverse()
    .map((item, i) => (
      <div key={i}>
        <div className="message">
          <p className="meta rightAlign">
            {item.userName}: <span>{item.time}</span>
          </p>
          <p className="text rightAlign">{item.msgText}</p>
        </div>
      </div>
    ));
}

export default ChatList;
