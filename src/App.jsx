import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import LoginPage from "./domains/auth/login";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./domains/auth/register";
import Dashboard from "./domains/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" Component={LoginPage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/register" Component={RegisterPage} />
      <Route path="/dashboard" Component={Dashboard} />
    </Routes>
  );
}

export default App;
