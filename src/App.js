import "./App.css";
import { Route, Router } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/" element={<RegisterPage />} />
    </Router>
  );
}

export default App;
