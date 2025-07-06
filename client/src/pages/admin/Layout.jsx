import React from "react";
import { assets } from "../../assets/assets";
import { Outlet } from "react-router";
import Sidebar from "../../components/admin/Sidebar";
import { useAppContext } from '../../context/AppContext'

const Layout = () => {
  const {axios, setToken, navigate} = useAppContext()
   const logout = () => {
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = null;
        setToken(null);
        navigate('/')
    };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-400">
        <img
          src={assets.lunarLogo}
          alt=""
          className="h-12 sm:h-16 w-auto object-contain drop-shadow-lg cursor-pointer"
          onClick={() => navigate("/")}
        />
        <button
          onClick={logout}
          className="cursor-pointer flex items-center gap-2 rounded-full text-sm tracking-wider px-6 py-2 border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-black active:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />

        {/* Limit the Outlet width */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-10 py-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
