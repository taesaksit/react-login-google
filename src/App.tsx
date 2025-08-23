// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { LayoutComponent } from "./layouts/Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<PrivateRoute />}>
          <Route element={<LayoutComponent />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
        </Route>


      </Routes>
      <ToastContainer aria-label="Notification Container" />
    </>

  );
}
