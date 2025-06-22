require("dotenv").config();
const { createServer } = require("http");
const mongoose = require("mongoose");
const express = require("express");
const { Server } = require("socket.io");
const { corsOptions } = require("./utils/corsOptions");
const cors = require("cors");
const path = require("path")
const DatasebaseConnection = require("./db/database");
const app = express();
const fs = require("fs");

const uploadsDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

app.get("/", (req, res) => {
  res.write('<h1 style="font-style:italic">Hello From Server</h1>');
  res.end();
});

const server = createServer(app);
const PORT = 5000;

// Datase Call
DatasebaseConnection();

// middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Routes
const loginRoutes = require("./routes/login-routes");
const fileUpload = require("./routes/file-upload.route");

app.use("/api/v1/auth", loginRoutes);
app.use("/api/v1", fileUpload);

// end

const activeUserList = new Map();

const io = new Server(server, {
  cors: {
    credentials: true,
    origin: corsOptions.origin,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    preflightContinue: true,
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected socket id = ${socket.id}`);

  io.emit("welcome", "Hello From Server");

  socket.on("welcome", (userData) => {
    if (userData.id) {
      socket.join(userData.id);
      activeUserList.set(userData?.id, userData);
    }
    // console.log(activeUserList);
  });
  socket.on("user_active", (active) => {
    socket.broadcast.emit("user_active", active);
  });

  socket.on("join-room", (id) => {
    socket.join(id);
  });

  socket.on("message", (userMessage) => {
    console.log(userMessage);
    socket.to(userMessage.receiverID).emit("message", userMessage);
  });

  // socket disconnection
  socket.on("disconnect", () => {
    console.log(`User Disconnected`);
    activeUserList.delete(socket.id);
    socket.broadcast.emit("not-active", false);
  });

  socket.on("typing", (name, id) => {
    socket.to(id).emit("typing", name);
  });

  socket.on("stop-typing", (name) => {
    socket.emit("stop-typing", name);
  });
});

mongoose.connection.once("open", () => {
  console.log(`Connected to MongoDB`);
  server.listen(PORT, function () {
    console.log(`Server is running on PORT: http://localhost:${PORT}`);
  });
});
