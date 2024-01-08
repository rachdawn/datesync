import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Typography onClick={handleLogout} style={{ cursor: 'pointer' }}>
      Log Out
    </Typography>
  );
};