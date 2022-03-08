import React from "react";

function ChatList(props) {
  console.log(props.msgList);
  return props.msgList.map((item, i) => (
    <div key={i}>
      <div className="message">
        <p className="meta rightAlign">
          {item.userName}: <span>{item.time}</span>
        </p>
        <p className="text rightAlign">{item.msgText}</p>
      </div>
      {/* <ul id="users">
        <li key={props.id}> display name</li>
      </ul> */}
    </div>
  ));
}

export default ChatList;
