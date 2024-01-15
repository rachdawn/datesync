import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const SignUpForFreeButton = ({ className }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) return null;

  const handleSignUpForFree = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/create-date",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <Button
      variant="contained"
      color="secondary" 
      onClick={handleSignUpForFree}
      className={className}
    >
      Sign up for free
    </Button>
  );
};

export default SignUpForFreeButton;