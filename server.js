const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log('A user Connected');
  socket.on("message", (msg) => {
    console.log(`user: ${msg.user} / message: ${msg.message}`);
    socket.broadcast.emit("message", { user: msg.user, message: msg.message })

  })

})

const port = 3001
server.listen(port, () => {
  console.log(` Started Server on port ${port}`);
})