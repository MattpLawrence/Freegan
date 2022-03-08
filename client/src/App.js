import React, { useEffect, useState } from "react";
import "../src/components/Slider";
import "./styles/App.css";
import { setContext } from "@apollo/client/link/context";
import { createHttpLink } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./components/chat/ChatPage";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUpPage";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";

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
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/userPage" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
