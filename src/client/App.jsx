import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreateDate from "./routes/CreateDate";
import Dashboard from "./routes/Dashboard";
import LandingPage from "./routes/LandingPage";
import TopNavBar from "./components/TopNavBar";
import { CallbackPage } from "./components/auth/pages/callback-page";

function App() {

  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-date" element={<CreateDate />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </>
  );
}

export default App;
