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

// ************************************Socket.io**************************************
io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      const newRecipients = recipients.filter((r) => r !== recipient);
      newRecipients.push(id);
      socket.broadcast.to(recipient).emit("receive-message", {
        recipients: newRecipients,
        sender: id,
        text,
      });
    });
  });
});
// Start server
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  console.log(`Server is running ${PORT}`);
};

// Call function to start the server
startApolloServer(typeDefs, resolvers);

modules.export(io);
