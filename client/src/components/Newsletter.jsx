import React from 'react'

const Newsletter = () => (
  <section className="flex flex-col items-center text-center space-y-4 my-32 px-4">
    {/* Heading */}
    <h1 className="text-2xl md:text-4xl font-orbitron text-white drop-shadow-md">
      📡 Never Miss a Transmission
    </h1>

    {/* Sub-heading */}
    <p className="md:text-lg text-slate-300/70 pb-6 max-w-xl">
      Subscribe to receive moonbase memos, cosmic tech updates, and exclusive stellar
      briefings.
    </p>

    {/* Form */}
    <form
      className="
        flex flex-col sm:flex-row          /* ⬅️ stack on phones, row on ≥ sm */
        w-full max-w-2xl
        border border-white/10 backdrop-blur-md bg-white/5
        rounded-2xl overflow-hidden shadow-lg
      "
    >
      {/* email field */}
      <input
        type="email"
        required
        placeholder="Enter your interstellar address"
        className="
          flex-grow px-4 py-3
          bg-transparent text-sm md:text-base text-white
          placeholder-slate-300/50 outline-none
        "
      />

      {/* subscribe button */}
      <button
        type="submit"
        className="
          w-full sm:w-auto                  /* full-width on phones, auto on ≥ sm */
          px-6 sm:px-10 py-3
          bg-yellow-400/80 hover:bg-yellow-400 transition
          text-white font-semibold uppercase tracking-wider
          text-xs md:text-sm
        "
      >
        Subscribe
      </button>
    </form>
  </section>
);

export default Newsletter