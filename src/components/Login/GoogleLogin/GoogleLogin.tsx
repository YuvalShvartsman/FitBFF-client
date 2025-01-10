import UseGoogleLogin from "./UseGoogleLogin";

import instance from "../../../axiosInstance";

import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/userSlice";

import { FaGoogle as GoogleIcon } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";

const clientId =
  "20513430831-2s88uppgtrbfomn25p7ooui5qfmluv7k.apps.googleusercontent.com";

function GoogleLogin() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onLoginSuccess = async (token: string) => {
    try {
      const response = await instance.post(
        "/users/google-signIn",
        { token },
        { withCredentials: true }
      );

      navigate("/user-preferences");
      dispatch(setUser(response.data));
    } catch (error) {}
  };

  const { handleLogin } = UseGoogleLogin(clientId, onLoginSuccess);

  return (
    <div className="bg-blue-100 flex h-3/5 w-1/4 self-center rounded-xl flex-col justify-around items-center">
      <h1 className="w-full text-center text-light text-3xl font-bold">
        Login
      </h1>
      <Button
        text="Login With Google"
        Icon={GoogleIcon}
        onClick={handleLogin}
      />
    </div>
  );
}

export default GoogleLogin;
