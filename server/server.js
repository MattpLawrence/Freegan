const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const io = require("socket.io");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { type } = require("os");
const { builtinModules } = require("module");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const io = socketIo(server);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Add build lines later

// Start server
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  console.log(`Server is running ${PORT}`);
};

// Call function to start the server
startApolloServer(typeDefs, resolvers);

modules.export(io);
