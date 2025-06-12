const { createServer } = require("http");
const { Server } = require("socket.io");
const { corsOptions } = require("./utils/corsOptions");

const server = createServer((req, res) => {
  res.write("Hello World From chat-app");
  res.end();
});
const PORT = 5000;

server.listen(PORT, function () {
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});

const io = new Server(server, {
  cors: {
    credentials: true,
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    preflightContinue: true,
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected socket id = ${socket.id}`);

  io.emit("welcome","Hello From Server")


  // socket disconnection
  socket.on("disconnect",() => {
    console.log(`User Disconnected`)
  })
});
