import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  // The loginWithRedirect() method from the Auth0Context performs a redirect to the Auth0 /authorize endpoint to kickstart the authentication process. We can pass a configuration object to this method to customize the login experience.

  // By setting up the value of appState.returnTo to /profile, we are telling the Auth0 React SDK the following: When our users log in with Auth0 and return to our React application, take them from the default callback URL path, /callback, to the "Profile" page, /profile:
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <Typography onClick={handleLogin} style={{ cursor: 'pointer' }}>
      Log In
    </Typography>
  );
};