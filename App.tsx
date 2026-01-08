
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import AIChat from './components/AIChat';
import { PROJECTS, NAV_ITEMS } from './constants';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Replicating Framer's appear animation delay
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <Navbar />

      <main className="max-w-[960px] mx-auto pt-32 pb-20 px-4 md:px-0">
        {/* Hero Section */}
        <section id="hero" className="py-14 text-center">
          <span className="uppercase text-[12px] font-bold tracking-[0.2em] text-[#191c1f]/60 mb-6 block">
            framer portfolio template
          </span>
          <h1 className="text-6xl md:text-8xl font-[900] uppercase leading-[0.95] tracking-tighter text-[#191c1f] mb-12">
            build <span className="text-[#787d82]">Your Portfolio</span> with portafo.
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://morvasupply.lemonsqueezy.com/checkout/buy/35753547-e1af-4664-9706-8269e9bb099e"
              className="w-full sm:w-auto bg-[#191c1f] text-white text-base font-semibold px-10 py-4 rounded-full hover:scale-105 transition-transform"
            >
              Get Template
            </a>
            <a 
              href="#pages"
              className="w-full sm:w-auto bg-white text-[#191c1f] text-base font-semibold px-10 py-4 rounded-full border border-gray-100 shadow-sm hover:scale-105 transition-transform"
            >
              View Pages
            </a>
          </div>
        </section>

        {/* Project Grid */}
        <section id="pages" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

        {/* Services / CTA Section */}
        <section className="mt-32">
          <div className="bg-[#191c1f] rounded-[32px] p-8 md:p-16 text-center text-white overflow-hidden relative">
            <div className="relative z-10">
              <span className="uppercase text-[10px] font-bold tracking-[0.3em] text-white/40 mb-8 block">
                get portafo now
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[1] mb-6">
                Build <span className="text-[#787d82]">your portfolio</span> with portafo
              </h2>
              <p className="text-white/60 text-lg md:text-xl max-w-lg mx-auto mb-10">
                Showcase with style, customize with ease, and reach your audience effortlessly.
              </p>
              <a 
                href="https://morvasupply.lemonsqueezy.com/checkout/buy/35753547-e1af-4664-9706-8269e9bb099e"
                className="inline-block bg-white text-[#191c1f] text-base font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform"
              >
                Get Portafo for $49
              </a>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          </div>
        </section>

        {/* Stacked Discount Banner Section */}
        <section className="mt-10">
          {/* Outer Layer (Stacked Card Effect) */}
          <div className="p-2 border border-black/[0.03] rounded-[32px]">
            {/* Main Card */}
            <div className="bg-white border border-black/[0.03] rounded-[24px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0px_4px_24px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-6">
                {/* Framer Logo Icon */}
                <div className="w-12 h-12 flex-shrink-0 opacity-10">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#191c1f]">
                    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
                  </svg>
                </div>
                
                <div className="flex flex-col">
                  <h4 className="font-black uppercase text-[#191c1f] text-xl md:text-[22px] leading-tight tracking-tight">
                    GET FREE 3 MONTHS
                  </h4>
                  <h4 className="font-bold uppercase text-[#787d82] text-xl md:text-[22px] leading-tight tracking-tight">
                    FRAMER PRO ANNUAL PLAN
                  </h4>
                  
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[14px] text-[#787d82] mt-5 font-medium">
                    <span>using</span>
                    <div className="bg-[#f2f2f2] px-3 py-1.5 rounded-lg flex items-center gap-2 group cursor-pointer hover:bg-gray-200 transition-colors">
                      <code className="font-mono font-bold text-[#191c1f] tracking-tight">partner25proyearly</code>
                      <svg className="w-4 h-4 opacity-30 group-hover:opacity-60 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </div>
                    <span>promo code at checkout.</span>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://www.framer.com?via=npw"
                className="bg-[#191c1f] text-white px-10 py-4 rounded-full text-[15px] font-bold hover:scale-105 transition-transform active:scale-95 whitespace-nowrap"
              >
                Get Framer Discount
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-[960px] mx-auto py-20 px-4 md:px-0 border-t border-gray-100">
        <div className="flex flex-col items-center gap-10">
          <div className="font-black text-2xl tracking-tighter uppercase text-[#191c1f]">
            Portafo
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3">
            {NAV_ITEMS.map((item, i) => (
              <React.Fragment key={item.label}>
                <a 
                  href={item.href} 
                  className="text-lg font-bold text-[#191c1f] hover:line-through transition-all duration-200"
                >
                  {item.label}
                </a>
                {i < NAV_ITEMS.length - 1 && (
                  <span className="text-[#787d82] opacity-20 font-light text-xl select-none">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="text-[#787d82] text-sm font-medium text-center mt-4">
            © 2024 Made in <a href="https://framer.com" className="text-[#191c1f] hover:underline">Framer</a> by <a href="https://mrv.ink/morvasupply" className="text-[#191c1f] hover:underline">Morva Supply</a>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
