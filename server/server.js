const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const socketIo = require("socket.io");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { type } = require("os");

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
const botName = "Gamer Gabble Bot";

// run when client connects
io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    //emit object to be grabbed with socket.on() in main.js to be viewable only the one connecting
    socket.emit("message", formatMessage(botName, "Welcome to Gamer Gabble"));

    // Broadcast when user connects to everyone but user in the room
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // SEND USER AND ROOM INFO
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // listen for ChatMessage to be submitted
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    // submit the message to everyone
    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  // Run when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      // broadcast to everyone
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );
      // send user room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});
// Start server
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  console.log(`Server is running ${PORT}`);
};

// Call function to start the server
startApolloServer(typeDefs, resolvers);
