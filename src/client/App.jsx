import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthenticationGuard } from "./components/auth/authentication-guard";
import TopNavBar from "./components/TopNavBar";
import { CallbackPage } from "./components/auth/pages/callback-page";
import CreateDate from "./routes/CreateDate";
import Dashboard from "./routes/Dashboard";
import LandingPage from "./routes/LandingPage";
import { ProfilePage } from "./components/auth/pages/profile-page";
import { PageLoader } from "./components/PageLoader";
import "./styles/layouts/page-layout.scss";

function App() {
  // While the React SDK is loading, the PageLoader component renders, which shows up an animation. Log out and log back in to see this in action. No more UI flashing should happen:
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <>
      <TopNavBar />
      <Routes>
        {/* Public Routes: */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-date" element={<CreateDate />} />
        {/* Callback route is used to diminish UI flashing when logging in */}
        <Route path="/callback" element={<CallbackPage />} />
        {/* Protected Routes: */}
        <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
        />
        <Route
        path="/dashboard"
        element={<AuthenticationGuard component={Dashboard} />}
        />
      </Routes>
    </>
  );
}

export default App;
