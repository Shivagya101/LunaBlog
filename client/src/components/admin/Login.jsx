import React, { useState } from "react";
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
const Login = () => {
   const { axios, setToken } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
            const {data} = await axios.post('/api/admin/login', {email, password});
            if (data.success) {
                setToken(data.token);
                localStorage.setItem('token', data.token);
                axios.defaults.headers.common['Authorization'] = data.token;
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#1f1c2c] to-[#928dab] text-slate-200 font-light">
      <div className="w-full max-w-sm p-6 mx-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg shadow-yellow-300/10">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-orbitron text-yellow-300 tracking-widest">
            Admin Console ⌁
          </h1>
          <p className="text-sm text-slate-400">Authenticate to enter mission control.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-sm">
          <div className="flex flex-col">
            <label className="text-slate-300 mb-1 font-mono">🛰 Email Address</label>
            <input
              type="email"
              required
              placeholder="captain@moonbase.io"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-b border-yellow-300/20 placeholder-slate-400 px-2 py-2 outline-none focus:border-yellow-300 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-slate-300 mb-1 font-mono">🔒 Access Code</label>
            <input
              type="password"
              required
              placeholder="seeecret key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-b border-yellow-300/20 placeholder-slate-400 px-2 py-2 outline-none focus:border-yellow-300 transition text-base placeholder:text-base
"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 font-semibold text-sm bg-yellow-300/80 hover:bg-yellow-300 text-black rounded-lg tracking-wider uppercase transition-all"
          >
            Begin Transmission
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
