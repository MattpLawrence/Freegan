

import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { setContext } from "@apollo/client/link/context";
//import { createHttpLink } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

//import { setContext } from "@apollo/client/link/context";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";

import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignUpPage";
import User from "./pages/UserPage";


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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (


    // <Router>

    //   <div className="App">
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/signupPage" element={<Signup />} />
    //       <Route path="/loginPage" element={<Login />} />
    //       <Route path="/userPage" element={<User />} />
    //     </Routes>
    //   </div>
    // </Router>
  // );

    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route
              path ="/"
              element={<Home />}
            />
            <Route
              path="/user"
              element={<User />}
              />
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
  

}
export default App;
