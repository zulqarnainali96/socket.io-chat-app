import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/apiContext";

const useLogin = () => {
  const [email, setEmail] = useState<string | "">("");
  const [password, setPassword] = useState<string | "">("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logic for handling login goes here
    apiClient
      .post("/api/v1/auth/create-account", { email, password })
      .then((response) => {
        if (response.status === 201) {
          navigate("/chat");
        }
      });
    console.log("Login button clicked");
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
  };
};

export default useLogin;
