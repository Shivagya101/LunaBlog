import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-slate-300 font-light">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-[6px] border-yellow-300/20 border-t-yellow-300 mb-6 shadow-yellow-300/10 shadow-md"></div>

      {/* Caption */}
      <p className="text-xs uppercase tracking-widest text-yellow-400 font-mono opacity-80">
        📡 Receiving transmission from lunar capsule...
      </p>
    </div>
  )
}

export default Loader
