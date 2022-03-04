import React from "react";
import "../src/components/Slider";
import { setContext } from "@apollo/client/link/context";
import { createHttpLink } from "@apollo/client";

import Home from "./pages/Home";
import Member from "./pages/Member";

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
  return <div className="App"></div>;
}

export default App;
