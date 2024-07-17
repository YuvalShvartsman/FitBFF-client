import React from "react";
import UseGoogleLogin from "./UseGoogleLogin/UseGoogleLogin";
import instance from "../../../axiosInstance";

const clientId =
  "20513430831-2s88uppgtrbfomn25p7ooui5qfmluv7k.apps.googleusercontent.com";

const GoogleLogin: React.FC = () => {
  const onLoginSuccess = async (token: string) => {
    try {
      const response = await instance.post("/users/google-signIn", { token });
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error sending token to server:", error);
    }
  };

  const onLoginFailure = (error: any) => {
    console.error("Login failed:", error);
  };

  const { handleLogin } = UseGoogleLogin(
    clientId,
    onLoginSuccess,
    onLoginFailure
  );

  return <button onClick={handleLogin}>Login with Google</button>;
};

export default GoogleLogin;
