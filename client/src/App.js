import React from "react";
import Navbar from "./components/Navbar";

import { setContext } from "@apollo/client/link/context";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import User from "./pages/User";
import { Route, Router, Routes } from "react-router-dom";

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
  )
}
export default App;
