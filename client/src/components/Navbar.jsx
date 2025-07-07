import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <div className="flex flex-col items-center gap-3 py-6 px-6 sm:px-20 xl:px-32">
      {/* Top row: logo + login/dashboard */}
      <div className="w-full flex justify-between items-center">
        <img
          src={assets.lunarLogo}
          alt="logo"
          onClick={() => navigate("/")}
          className="h-12 sm:h-16 w-auto object-contain drop-shadow-lg cursor-pointer"
        />

        <button
          onClick={() => navigate("/admin")}
          className="
            flex items-center gap-2
            px-6 py-2
            rounded-full
            text-sm tracking-wider font-mono
            border-2 border-primary text-primary
            bg-transparent
            hover:bg-primary hover:text-black
            active:bg-primary/80
            focus:outline-none focus:ring-2 focus:ring-primary/50
            transition
          "
        >
          {token ? "Dashboard" : "Login"}
          <img src={assets.arrow} alt="arrow" className="w-3" />
        </button>
      </div>
      <div className="mt-4 text-xs sm:text-sm text-yellow-100/50 font-orbitron tracking-wide italic">
        ✧ Transmission courtesy of Shivagya ✧
      </div>
      {/* Tranquility tagline */}
      <div className="mt-2 px-6 py-1 rounded-full text-xs sm:text-sm font-orbitron tracking-widest text-yellow-300 bg-white/5 backdrop-blur-sm border border-yellow-300/30 shadow-md">
        ✦ Live from the Information-Action Ratio Terminal ✦
      </div>
    </div>
  );
};

export default Navbar;
