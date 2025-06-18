import LayoutWrapper from "../components/LayoutWrapper";
import bgImage from "../assets/images/img-1.jpg";
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
import { Loader2Icon } from "lucide-react";
import useRegister from "../hooks/use-register";
import type { register } from "../types/type";

const Section1 = () => <img loading="lazy" className="w-full h-full" src={bgImage} />

const Section2 = ({
  email,
  handleRegister,
  password,
  setEmail,
  setPassword,
  loading
}: register) => (
  <div className="flex flex-col items-center justify-center w-full h-screen">
    <h1 className="text-white text-3xl py-4 register-title">Sign Up</h1>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              </div>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          className="w-full"
          onClick={handleRegister}
          variant="outline"
          type="submit"
          disabled={loading}
        >
          <Loader2Icon className="animate-spin" />
          Please wait...
        </Button>
      </CardFooter>
    </Card>
  </div>
);

const Register = () => {
  const { handleRegister, email, setEmail, password, setPassword,isLoading } =
    useRegister();
  return (
    <LayoutWrapper
      section1={<Section1 />}
      section2={
        <Section2
          email={email}
          setEmail={setEmail}
          setPassword={setPassword}
          password={password}
          handleRegister={handleRegister}
          loading={isLoading}
        />
      }
    ></LayoutWrapper>
  );
};

export default Register;
