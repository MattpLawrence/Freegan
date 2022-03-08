import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { setContext } from "@apollo/client/link/context";
import { createHttpLink } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";

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
          <Route path="/signupPage" element={<SignUpPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/userPage" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
