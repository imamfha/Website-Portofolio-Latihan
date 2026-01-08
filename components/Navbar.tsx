
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[960px] h-16 z-50 flex items-center justify-between px-4 md:px-8 bg-white/80 backdrop-blur-md rounded-b-2xl framer-shadow">
      <div className="logo font-black text-lg tracking-tighter uppercase text-[#191c1f]">
        Portafo
      </div>
      <div className="actions flex items-center gap-4">
        <a 
          href="https://morvasupply.lemonsqueezy.com/checkout/buy/35753547-e1af-4664-9706-8269e9bb099e"
          className="bg-[#191c1f] text-white text-[12px] font-semibold px-6 py-2 rounded-full hover:scale-105 transition-transform"
        >
          Get Template
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
