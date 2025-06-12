import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WelcomeScreen from "./pages/WelcomeScreen";
import Chat from "./pages/Chat";

// const socket = io("ws://localhost:5000");
function App() {
  // socket.on("connect", function () {
  //   console.log(socket.id);
  // });

  // socket.on("welcome", function (msg) {
  //   console.log(msg);
  // });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
