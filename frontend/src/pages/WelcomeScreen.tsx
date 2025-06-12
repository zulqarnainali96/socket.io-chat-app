import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";

const WelcomeScreen = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-indigo-950 bg-gradient-to-bl w-full">
      <h1 className="text-white text-3xl md:text-6xl">Welcome to Chat App</h1>
      <p className="text-white text-[14px] md:text-[18px] py-6">
        This is a simple chat application built with React and Socket.io.
      </p>
      <div className="flex flex-row md:flex-row">
        <Button className="bg-white cursor-pointer text-indigo-950 px-4 py-2 rounded mr-2 hover:bg-indigo-100 transition-colors">
          <NavLink to="/login">Login</NavLink>
        </Button>
        <Button className="bg-white cursor-pointer text-indigo-950 px-4 py-2 rounded mr-2 hover:bg-indigo-100 transition-colors">
          <NavLink to="/register">Register</NavLink>
        </Button>
      </div>
    </main>
  );
};

export default WelcomeScreen;
