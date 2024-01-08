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
import { useNavigate } from 'react-router-dom';
import { LoginButton } from "./auth/buttons/login-button";
import { LogoutButton } from "./auth/buttons/logout-button";
import { SignupButton } from "./auth/buttons/signup-button";
import ThistleCalendarLogo from "../assets/calendar_thistle_transparent.png";
import "../styles/TopNavBar.scss";


function TopNavBar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

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

  let settings = isAuthenticated
  ? [
      { label: "Dashboard", path: "/dashboard" },
      { label: "Profile", path: "/profile" },
      { label: "Logout", component: <LogoutButton /> },
    ]
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
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Grand Hotel",
              fontWeight: 400,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={ThistleCalendarLogo} alt="logo" className="logo-icon" />
            <span>DateSync</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              href="/create-date"
              color="inherit"
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
          <Typography
            className="logo"
            variant="h4"
            noWrap
            component="a"
            href="/"
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
            <img src={ThistleCalendarLogo} alt="DateSync logo" className="logo-icon" />
            DateSync
          </Typography>
          <Box
            className="nav-menu"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button
              id="create-button"
              href="/create-date"
              sx={{ my: 2, color: "inherit", display: "flex" }}
            >
              <AddCircleOutlineIcon className="nav-plus-icon" />
              Create Your Perfect Date
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  id="profile-icon"
                  alt="User"
                  src="/static/images/avatar/2.jpg"
                />
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
                <MenuItem key={setting.label} onClick={() => handleMenuItemClick(setting)}>
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
