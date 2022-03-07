import React from "react";

function ChatList(props) {
  console.log(props.msgList);
  return props.msgList.map((item, i) => (
    <div key={i}>
      <ul id="users">
        <li key={props.id}> display name</li>
      </ul>
    </div>
  ));
}

export default ChatList;
