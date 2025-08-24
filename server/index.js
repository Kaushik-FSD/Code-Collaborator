import express from "express";
import http from "http";
import { Server } from "socket.io";

// https://www.youtube.com/watch?v=p9i4GZGLxGw

const app = express();
const PORT = process.env.port || 9443;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const rooms = new Map(); // Map to track rooms and their participants

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  let currentRoom = null;
  let currentUser = null;

  socket.on("join", ({ roomId, userName }) => {
    // if user is already in a room, leave that room first
    if (currentRoom) {
      socket.leave(currentRoom);
      rooms.get(currentRoom).delete(currentUser); // Remove user from room
      io.to(currentRoom).emit("userJoined", Array.from(rooms.get(currentRoom)));
    }

    //if user not joined, then we will join the user to the room
    currentRoom = roomId;
    currentUser = userName;
    socket.join(roomId);

    if (!rooms.has(roomId)) {
      rooms.set(roomId, new Set());
    }
    rooms.get(roomId).add(userName); // Add user to room
    io.to(roomId).emit("userJoined", Array.from(rooms.get(roomId)));
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
