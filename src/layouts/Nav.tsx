import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import {toast} from 'react-toastify'

import {
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

interface NavigationItem {
  name: string;
  path: string;
}

export const Navbar = () => {
  const navigate = useNavigate();
  const pathName = window.location.pathname.split("/")[1];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation: NavigationItem[] = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Home", path: "/home" },
  ];

  const logout = () => {
    googleLogout();
    localStorage.removeItem("token-social-signin");
    navigate("/");
    toast.success("you have been logged out 👋");
  }
  return (
    <header className="bg-white border-b-2 border-gray-200 shadow sticky top-0 z-50">
      <nav className="flex items-center justify-between p-2 lg:px-8">
        {/* Logo */}
        <div className="flex items-center text-xl font-bold text-gray-500">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gradient-to-r from-blue-500 via-orang-500 to-orange-500 bg-clip-text text-transparent font-bold text-xl hover:scale-110"
          >
            OAuth2 + React
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`text-sm font-semibold hover:text-orange-500 hover:scale-110 active:scale-90 duration-300 ease-in-out ${
                pathName === item.path.slice(1)
                  ? "text-orange-500 scale-110 font-bold border-b-2 border-orange-200"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Desktop Logout */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <button
            onClick={logout}
            className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-red-600 duration-300 ease-in-out"
          >
            Logout <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col p-4 gap-3">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm font-semibold py-2 text-left hover:text-orange-500 ${
                  pathName === item.path.slice(1)
                    ? "text-orange-500 font-bold"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => {
                logout()
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-red-600 py-2"
            >
              Logout <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
