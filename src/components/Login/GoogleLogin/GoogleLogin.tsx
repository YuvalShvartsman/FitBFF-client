import UseGoogleLogin from "./UseGoogleLogin/UseGoogleLogin";

import instance from "../../../axiosInstance";

import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

const clientId =
  "20513430831-2s88uppgtrbfomn25p7ooui5qfmluv7k.apps.googleusercontent.com";

function GoogleLogin() {
  const dispatch = useDispatch();
  const onLoginSuccess = async (token: string) => {
    try {
      const response = await instance.post("/users/google-signIn", { token });
      dispatch(setUser(response.data));
      console.log(response.data);
    } catch (error) {}
  };

  const { handleLogin } = UseGoogleLogin(clientId, onLoginSuccess);

  return <button onClick={handleLogin}>Login with Google</button>;
}

export default GoogleLogin;
