import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useLocation } from "react-router-dom";
import { LoginButton } from "./auth/buttons/login-button";
import { LogoutButton } from "./auth/buttons/logout-button";
import { SignupButton } from "./auth/buttons/signup-button";
import ThistleCalendarLogo from "../assets/calendar_thistle_transparent.png";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import "../styles/TopNavBar.scss";

function TopNavBar() {
  const { isAuthenticated, user } = useAuth0();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const location = useLocation();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (setting) => {
    if (setting.path) {
      navigate(setting.path);
    }
    handleCloseUserMenu();
  };

  // location.pathname !== "/dashboard" and location.pathname !== "/profile" are conditions that check if the current path is not '/dashboard' or '/profile', respectively. If the condition is true, the corresponding menu item is included; otherwise, it is excluded. The filter(Boolean) function call at the end of the array will remove any false values, effectively excluding menu items based on the current path:
  let settings = isAuthenticated
    ? [
        location.pathname !== "/dashboard" && {
          label: "Dashboard",
          path: "/dashboard",
        },
        location.pathname !== "/profile" && {
          label: "Profile",
          path: "/profile",
        },
        { label: "Logout", component: <LogoutButton /> },
      ].filter(Boolean)
    : [
        { label: "Login", component: <LoginButton /> },
        { label: "Signup", component: <SignupButton /> },
      ];

  return (
    <AppBar id="top-nav" position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className="logo"
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Grand Hotel",
              fontWeight: 400,
              letterSpacing: ".1rem",
              color: "inherit",
            }}
          >
            <Link to={"/"}>
              <img src={ThistleCalendarLogo} alt="logo" className="logo-icon" />
              DateSync
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              id="create-button"
            >
              <Link to={"/create-date"}>
                <AddCircleOutlineIcon />
              </Link>
            </IconButton>
          </Box>
          <Typography
            className="logo"
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Grand Hotel",
              fontWeight: 400,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to={"/"}>
              <img src={ThistleCalendarLogo} alt="logo" className="logo-icon" />
              DateSync
            </Link>
          </Typography>
          <Box
            className="nav-menu"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button
              id="create-button"
              sx={{ my: 2, color: "inherit", display: "flex" }}
            >
              <Link to={"/create-date"}>
                <AddCircleOutlineIcon className="nav-plus-icon" />
                Create Your Perfect Date
              </Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                {/* Avatar with conditional source */}
                <Avatar
                  id="profile-icon"
                  alt="User Avatar"
                  src={
                    isAuthenticated && user && user.picture
                      ? user.picture
                      : undefined
                  }
                >
                  {!isAuthenticated || !user || !user.picture ? (
                    <PersonIcon />
                  ) : null}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.label}
                  onClick={() => handleMenuItemClick(setting)}
                >
                  {setting.component ? (
                    setting.component
                  ) : (
                    <Typography textAlign="center">
                      <a
                        href={setting.path}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {setting.label}
                      </a>
                    </Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopNavBar;
