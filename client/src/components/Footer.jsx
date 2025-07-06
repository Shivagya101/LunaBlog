import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-white/5 backdrop-blur-sm border-t border-white/10 text-slate-300 font-light">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-12 border-b border-white/10">
        
        {/* Logo & Description */}
        <div>
          <img src={assets.lunarLogo} alt="logo" className="w-32 sm:w-44 drop-shadow" />
          <p className="max-w-[420px] mt-6 text-sm leading-relaxed text-slate-400">
            QuickBlog is your lunar launchpad for ideas, stories, and reflections. 
            Orbit with fellow creators and beam your thoughts into the cosmos.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-6">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-orbitron text-white text-sm uppercase tracking-widest mb-3">{section.title}</h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-yellow-300 hover:underline transition duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className="py-5 text-center text-xs tracking-wider text-silver-500/70">
        ⓒ 2025 QuickBlog — Broadcasting from the Sea of Tranquility.
      </p>
    </div>
  );
};

export default Footer;
