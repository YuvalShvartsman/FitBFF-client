import UseGoogleLogin from "./UseGoogleLogin/UseGoogleLogin";

import instance from "../../../axiosInstance";

const clientId =
  "20513430831-2s88uppgtrbfomn25p7ooui5qfmluv7k.apps.googleusercontent.com";

function GoogleLogin() {
  const onLoginSuccess = async (token: string) => {
    try {
      await instance.post("/users/google-signIn", { token });
    } catch (error) {}
  };

  const { handleLogin } = UseGoogleLogin(clientId, onLoginSuccess);

  return <button onClick={handleLogin}>Login with Google</button>;
}

export default GoogleLogin;
