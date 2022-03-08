import React, { useEffect, useState } from "react";
import "../src/components/Slider";
import "./styles/App.css";
import { setContext } from "@apollo/client/link/context";
import { createHttpLink } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./components/chat/ChatPage";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUpPage";

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
  return (
    <div className="App">
      <div className="App">
        <Navbar />
        {/* <ChatPage /> */}
        <SignUp />
      </div>
    </div>
  );
}
export default App;
