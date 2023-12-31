import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

import CreateDate from "./routes/CreateDate";
import Dashboard from "./routes/Dashboard";
import LandingPage from "./routes/LandingPage";
import TopNavBar from "./components/TopNavBar";

function App() {
  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-date" element={<CreateDate />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
