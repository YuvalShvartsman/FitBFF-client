import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const useGoogleLogin = (clientId: string, onLoginSuccess: (token: string) => void, onLoginFailure: (error: any) => void) => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: 'profile email',
      });
    }

    gapi.load('client:auth2', start);
  }, [clientId]);

  const handleLogin = async () => {
    const auth2 = gapi.auth2.getAuthInstance();
    try {
      const googleUser = await auth2.signIn();
      const id_token = googleUser.getAuthResponse().id_token;
      onLoginSuccess(id_token);
    } catch (error) {
      onLoginFailure(error);
    }
  };

  return { handleLogin };
};

export default useGoogleLogin;
