import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/apiContext";
import { setLocalStorage } from "../lib/local-storage";

const useLogin = () => {
  const [email, setEmail] = useState<string | "">("");
  const [password, setPassword] = useState<string | "">("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logic for handling login goes here
    console.log("Login button clicked");
    setIsLoading(true);
    apiClient
      .post("/api/v1/auth/login-user", { email, password })
      .then((response) => {
        if (response.status === 200) {
          navigate("/chat");
          setLocalStorage("user_data",response.data.data)
        }
        setIsLoading(false);
      })
      .catch((error) => console.log(error.message))
      .finally(() => {
        console.log("Finally")
        setIsLoading(false);
      });
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
    isLoading,
  };
};

export default useLogin;
