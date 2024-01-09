import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <Typography onClick={handleSignUp} style={{ cursor: 'pointer' }}>
      Sign Up
    </Typography>
  );
};