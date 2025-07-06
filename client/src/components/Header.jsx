import React from "react";
import { assets } from "../assets/assets"; // keep using your assets object
import { useAppContext } from "../context/AppContext";
import { useRef } from "react";
const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();
   const onSubmitHandler = async (e) => {
        e.preventDefault();
        setInput(inputRef.current.value);
    }
    const onClear = () => {
        setInput('');
        inputRef.current.value = '';
    }

  return( 
  <div className="mx-8 sm:mx-16 xl:mx-24 relative">
  {/* Top announcement badge */}
  <div className="text-center mt-20 mb-8">
    <div
      className="
        inline-flex items-center gap-3
        px-6 py-1.5 mb-4
        rounded-full
        border border-primary/60
        bg-primary/15
        text-sm tracking-widest
        font-orbitron text-primary
        backdrop-blur-sm
      "
    >
      <p>NEW · Lunar AI to boost Info. Action Ratio </p>
      <span>🤖 </span>
      {/* <img src={assets.star_icon} alt="" className="w-2.5" /> */}
    </div>
     <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-silver-700'>Your Orbiting <span className='text-yellow-400 drop-shadow-[0_0_3px_rgba(255,255,100,0.6)]'>blogging</span> <br /> capsule.</h1>
     <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
     Broadcasting from the Sea of Tranquility·Set your thoughts in orbit, pen moon-lit manifestos, or jot a single cosmic whisper.  
     No filters, no gravity—just your voice, drifting through the hotel's quiet corridors.
    </p>
    <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                    <input ref={inputRef} type="text" placeholder='Navigate lunar logs…' className='w-full pl-4 outline-none' required />
                    <button type='submit' className='bg-primary text-silver px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
    </form>

  </div>
  <div className="text-center mt-6">
  {input && (
    <button
      onClick={onClear}
      className="
        inline-flex items-center gap-1
        px-4 py-1.5
        text-xs font-mono tracking-wider uppercase
        text-yellow-200
        border border-yellow-300/40
        bg-white/5 backdrop-blur
        rounded-md shadow hover:shadow-yellow-200/20
        hover:bg-yellow-300/10
        transition
      "
    >
      ✦ Clear Search
    </button>
  )}
</div>

  {/* Faint aurora / gradient glow */}
  <img
    src={assets.gradientBackground}
    alt=""
    className="
      absolute -top-40 left-1/2 -translate-x-1/2
      w-[110%] max-w-none
      opacity-30
      pointer-events-none
      select-none
      -z-10
    "
  />
</div>

  )
};

export default Header;
