import Swal from "sweetalert2";

import { useEffect } from "react";

import { gapi } from "gapi-script";

const useGoogleLogin = (
  clientId: string,
  onLoginSuccess: (token: string) => void
) => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "profile email",
      });
    }

    gapi.load("client:auth2", start);
  }, [clientId]);

  const handleLogin = async () => {
    const auth2 = gapi.auth2.getAuthInstance();
    try {
      const googleUser = await auth2.signIn();
      const id_token = googleUser.getAuthResponse().id_token;
      onLoginSuccess(id_token);
      Swal.fire({
        title: "Authentication completed",
        text: "You logged in!",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "connection to server failed",
      });
    }
  };

  return { handleLogin };
};

export default useGoogleLogin;
