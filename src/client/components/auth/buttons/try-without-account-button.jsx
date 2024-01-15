import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const TryWithoutAccountButton = ({ className }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) return null;

  const handleTryWithoutAccount = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/create-date",
      },
    });
  };

  return (
    <Button
      variant="contained"
      color="secondary" 
      onClick={handleTryWithoutAccount}
      className={className}
    >
      Try without account
    </Button>
  );
};

export default TryWithoutAccountButton;