import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/apiContext";

const useRegister = () => {
  const [email, setEmail] = useState<string | "">("");
  const [name, setName] = useState<string | "">("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState<string | "">("");
  const navigate = useNavigate();

  const handleRegister = () => {
    setIsLoading(true);
    apiClient
      .post("/api/v1/auth/create-account", { email, password, name })
      .then((response) => {
        if (response.status === 201) {
          navigate("/login");
        }
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    email,
    name,
    isLoading,
    password,
    setName,
    setEmail,
    setPassword,
    handleRegister,
  };
};

export default useRegister;
