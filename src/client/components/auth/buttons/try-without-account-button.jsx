import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

const TryWithoutAccountButton = ({ className }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  // This only shows the button if the user is not authenticated:
  if (isAuthenticated) return null;

  return (
    <Link to="/create-date" style={{ textDecoration: "none" }}>
      <Button
        variant="contained"
        color="secondary" 
        className={className}
      >
        Try without account
      </Button>
    </Link>
  );
};

export default TryWithoutAccountButton;