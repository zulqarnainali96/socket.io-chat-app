import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/apiContext";

const useRegister = () => {
  const [email, setEmail] = useState<string | "">("");
  const [isLoading,setIsLoading] = useState(false)
  const [password, setPassword] = useState<string | "">("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // Logic for handling login goes here
    console.log("Register button clicked");
    setIsLoading(true)
    apiClient
      .post("/api/v1/auth/create-account", { email, password })
      .then((response) => {
        if (response.status === 201) {
          navigate("/login");
        }
        setIsLoading(false)
      }).catch( err => console.log(err.message))
  };

  return {
    email,
    isLoading,
    password,
    setEmail,
    setPassword,
    handleRegister,
  };
};

export default useRegister;
