const express = require("express");
const app = express();
const path = require("path");
const socketio = require("socket.io");
const http = require("http");

const formatMessage = require("./utils/message");
const { userJoin, getUser, userLeave, getRoomUsers } = require("./utils/user");

const port = 3000 || process.env.port;
const server = http.createServer(app);
const io = socketio(server);
app.use(express.static(path.join(__dirname, "public")));

const botName = "chatapp";

io.on("connection", (socket) => {
  //we will catch the emit for joining the room
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    //user will join only to this room
    socket.join(user.room);

    socket.emit("message", formatMessage(botName, "welcome to chatapp"));

    //broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined te chat`)
      );

    //send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  //listen/catch the emit that was done on the main.js side
  socket.on("chatMessage", (msg) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  //when the client disconnects or leaves the room
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);
    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );
      //send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
