import UseGoogleLogin from "./UseGoogleLogin/UseGoogleLogin";

import instance from "../../../axiosInstance";

import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

import { Box, Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import "./GoogleLogin.css";

const clientId =
  "20513430831-2s88uppgtrbfomn25p7ooui5qfmluv7k.apps.googleusercontent.com";

function GoogleLogin() {
  const dispatch = useDispatch();
  const onLoginSuccess = async (token: string) => {
    try {
      const response = await instance.post(
        "/users/google-signIn",
        { token },
        { withCredentials: true }
      );

      dispatch(setUser(response.data));
    } catch (error) {}
  };

  const { handleLogin } = UseGoogleLogin(clientId, onLoginSuccess);

  return (
    <Box className="Login">
      <Typography className="LoginHeader">Login</Typography>
      <Button className="Button" onClick={handleLogin}>
        <GoogleIcon />
        Login with Google
      </Button>
    </Box>
  );
}

export default GoogleLogin;
