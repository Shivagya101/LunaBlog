import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-screen pt-6 bg-white/5 border-r border-white/10 backdrop-blur-md text-slate-300 font-light">
      <NavLink
        end={true}
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-8 md:min-w-64 cursor-pointer transition-all tracking-wide font-mono 
    ${
      isActive
        ? "bg-yellow-300/10 border-r-4 border-yellow-300 text-yellow-200"
        : "hover:bg-white/10 hover:text-white"
    }`
        }
      >
        <span className="text-lg">🏠</span>
        <p className="hidden md:inline-block text-sm">Dashboard</p>
      </NavLink>

      <NavLink
        to="/admin/addBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-8 md:min-w-64 cursor-pointer transition-all tracking-wide font-mono 
    ${
      isActive
        ? "bg-yellow-300/10 border-r-4 border-yellow-300 text-yellow-200"
        : "hover:bg-white/10 hover:text-white"
    }`
        }
      >
        <span className="text-lg">📝</span>
        <p className="hidden md:inline-block text-sm">Add Blogs</p>
      </NavLink>

      <NavLink
        to="/admin/listBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-8 md:min-w-64 cursor-pointer transition-all tracking-wide font-mono 
    ${
      isActive
        ? "bg-yellow-300/10 border-r-4 border-yellow-300 text-yellow-200"
        : "hover:bg-white/10 hover:text-white"
    }`
        }
      >
        <span className="text-lg">📜</span>
        <p className="hidden md:inline-block text-sm">List Blogs</p>
      </NavLink>

      <NavLink
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-8 md:min-w-64 cursor-pointer transition-all tracking-wide font-mono 
    ${
      isActive
        ? "bg-yellow-300/10 border-r-4 border-yellow-300 text-yellow-200"
        : "hover:bg-white/10 hover:text-white"
    }`
        }
      >
        <span className="text-lg">📡</span>
        <p className="hidden md:inline-block text-sm">Transmissions</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
