import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const CreateAccountButton = ({ className }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) return null;

  const handleCreateAccount = async () => {
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
      onClick={handleCreateAccount}
      className={className}
    >
      Create Account
    </Button>
  );
};

export default CreateAccountButton;
