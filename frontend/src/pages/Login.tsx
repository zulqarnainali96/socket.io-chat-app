import bgImage from "../assets/images/img-1.jpg";
import LayoutWrapper from "../components/LayoutWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";

// import { Loader2Icon } from "lucide-react";

const Section1 = () => (
  <img loading="lazy" className="w-full h-full" src={bgImage} />
);

const Section2 = ({handleLogin} : {handleLogin: () => void}) => (
  <div className="flex flex-col items-center justify-center w-full h-screen">
    <h1 className="text-white text-3xl py-4">Login</h1>
    <Card className="w-full max-w-sm bg-transparent">
      <CardHeader>
        <CardTitle className="text-white">Create your account</CardTitle>
        <CardDescription className="text-white">
          Enter your email and password below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label className="text-white" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label className="text-white" htmlFor="password">
                  Password
                </Label>
                <NavLink
                  to="/forgot-password"
                  className="text-white ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </NavLink>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          variant="outline"
          type="submit"
          className="w-full cursor-pointer active:bg-gray-300"
          onClick={handleLogin}
        >
          {/* <Loader2Icon className="animate-spin" /> */}
          Login
        </Button>
        <Button
          variant="outline"
          className="w-full cursor-pointer transition-colors text-white bg-blue-600 border-0 hover:bg-blue-700 hover:text-white"
        >
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  </div>
);

const Login = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    // Logic for handling login goes here
    navigate("/chat")
    console.log("Login button clicked");
  };
  return (
    <LayoutWrapper
      section1={<Section1 />}
      section2={<Section2 handleLogin={handleLogin} />}
    ></LayoutWrapper>
  );
};

export default Login;
