import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const CreateAccountButton = ({ className }) => {
  const { loginWithRedirect } = useAuth0();

  const handleCreateAccount = async () => {
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
