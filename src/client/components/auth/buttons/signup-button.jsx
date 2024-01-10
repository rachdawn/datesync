import { useAuth0 } from "@auth0/auth0-react";
import { Typography, Button } from "@mui/material";

export const SignupButton = ({ asButton = false, className }) => {
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

 // THis will render as a button if asButton is true, otherwise it will render as text (Typography):
 return asButton ? (
  <Button 
    variant="contained"
    color="primary"
    onClick={handleSignUp}
    className={className}
  >
    Sign Up for free
  </Button>
) : (
  <Typography onClick={handleSignUp} style={{ cursor: 'pointer' }}>
    Sign Up
  </Typography>
);
};