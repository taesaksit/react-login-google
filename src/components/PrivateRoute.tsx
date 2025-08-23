// src/components/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  // ตัวอย่างตรวจสอบ token ใน localStorage
  return !!localStorage.getItem("token-social-signin");
};

export const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};
