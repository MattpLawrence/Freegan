import React, { useEffect, useState } from "react";
import "../src/components/Slider";
import "./styles/App.css";
import { setContext } from "@apollo/client/link/context";
import { createHttpLink } from "@apollo/client";
import io from "socket.io-client";
import ChatPage from "./components/chat/ChatPage";

// constructor that will be used for GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

function App() {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      <div className="App">
        <ChatPage socket={socket} />
      </div>
    </div>
  );
}
export default App;
