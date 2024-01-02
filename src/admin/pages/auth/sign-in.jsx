import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import bgimg from "../../../assets/img/bg-login.png";
import ReCAPTCHA from "react-google-recaptcha";

export function SignIn() {
  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [captchaisDone, setCaptchaisDone] = useState(false);
  const key = "6LcdVz4pAAAAAJFfkPRxDN6Uw_910ZhmeCHpHxHM";

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        nip: nip,
        password: password,
      });
      navigate("/dashboard/welcome");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  function onChange() {
    setCaptchaisDone(true);
  }

  return (
    <>
      <img
        src={bgimg}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
            <p>{msg}</p>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <form onSubmit={Auth} className="space-y-5">
              <Input
                type="text"
                label="NIP"
                size="lg"
                value={nip}
                onChange={(e) => setNip(e.target.value)}
              />
              <Input
                type="password"
                label="Password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ReCAPTCHA data-type="image" sitekey={key} onChange={onChange} />
              {captchaisDone && (
                <Button type="submit" fullWidth>
                  Sign In
                </Button>
              )}
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
