import React from 'react'

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 my-32 px-4">
  <h1 className="md:text-4xl text-2xl font-orbitron text-white drop-shadow-md">
    📡 Never Miss a Transmission
  </h1>
  <p className="md:text-lg text-slate-300/70 pb-6 max-w-xl">
    Subscribe to receive moonbase memos, cosmic tech updates, and exclusive stellar briefings.
  </p>
  <form className="flex w-full max-w-2xl rounded-full overflow-hidden shadow-lg border border-white/10 backdrop-blur-md bg-white/5">
    <input
      className="flex-grow px-4 py-3 bg-transparent text-sm md:text-base text-white placeholder-slate-300/50 outline-none"
      type="email"
      placeholder="Enter your interstellar address"
      required
    />
    <button
      type="submit"
      className="px-6 md:px-10 py-3 text-white bg-yellow-400/80 hover:bg-yellow-400 transition-all font-semibold uppercase tracking-wider text-xs md:text-sm"
    >
      Subscribe
    </button>
  </form>
</div>

  )
}

export default Newsletter