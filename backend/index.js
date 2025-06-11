const { createServer } = require("http");
const { Server } = require("socket.io");

const server = createServer();
const PORT = 5000;

server.listen(PORT, function () {
  console.log(`Server is running on PORT: ${PORT}`);
});

const io = new Server(server, {
  cors: {
    credentials: true,
    origin: "*",
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    preflightContinue: true,
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected socket id = ${socket.id}`);
});
