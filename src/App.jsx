import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import LoginPage from "./domains/auth/login";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./domains/auth/register";
import Dashboard from "./domains/dashboard";
import Layout from "./components/layout";
import JobRequirements from "./domains/requirements/Index";
import Profiles from "./domains/profiles";
import JobList from "./domains/job-list";
import ChangePassword from "./domains/setttings/ChangePassword";
import Account from "./domains/setttings/Account";

function App() {
  return (
    <Routes>
      <Route path="/" Component={LoginPage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/register" Component={RegisterPage} />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/job-requirements"
        element={
          <Layout>
            <JobRequirements />
          </Layout>
        }
      />
      <Route
        path="/profiles"
        element={
          <Layout>
            <Profiles />
          </Layout>
        }
      />
      <Route
        path="/job-list"
        element={
          <Layout>
            <JobList />
          </Layout>
        }
      />
      <Route
        path="/change-password"
        element={
          <Layout>
            <ChangePassword />
          </Layout>
        }
      />
      <Route
        path="/account"
        element={
          <Layout>
            <Account />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
