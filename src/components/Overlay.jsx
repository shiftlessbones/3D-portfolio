import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-6 md:p-12 font-mono ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
        transition: "opacity 0.1s ease-out",
      }}
    >
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full relative">
          {/* Futuristic Sci-Fi Corner Borders */}
          <div className="absolute top-0 left-0 w-3 h-[2px] bg-brand-neon" />
          <div className="absolute top-0 left-0 w-[2px] h-3 bg-brand-neon" />
          <div className="absolute bottom-0 right-0 w-3 h-[2px] bg-brand-neon" />
          <div className="absolute bottom-0 right-0 w-[2px] h-3 bg-brand-neon" />

          {/* Core Content Box with Matte Finish */}
          <div className="bg-slate-950/80 border border-slate-900 px-6 py-10 md:p-12 shadow-2xl backdrop-blur-md text-slate-100">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen select-none">
        
        {/* --- SECTION 1: INTRODUCTION --- */}
        <Section opacity={opacityFirstSection}>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-brand-neon animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Pilot // Initialization</span>
          </div>
          <h1 className="font-black text-3xl uppercase text-white tracking-tight">
            Hello, I'm <span className="text-brand-neon">Shiftlessbones</span> �
          </h1>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Welcome to my interactive 3D portfolio experience</p>
          
          <div className="mt-6 border-l border-slate-800 pl-4 space-y-3">
            <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">// ARCHITECTURE_CAPABILITIES:</p>
            <ul className="text-sm space-y-1 text-slate-300">
              <li>⚡ <span className="text-white font-bold">COMPILING:</span> How to code</li>
              <li>🧠 <span className="text-white font-bold">ANALYZING:</span> How to learn</li>
              <li>📦 <span className="text-white font-bold">DEPLOYING:</span> How to deliver</li>
            </ul>
          </div>
          <p className="animate-bounce mt-8 text-brand-neon font-bold text-center w-full">↓ SCROLL TO EXPLORE</p>
        </Section>

        {/* --- SECTION 2: SKILLSETS --- */}
        <Section right opacity={opacitySecondSection}>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-brand-orange" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">System // Specifications</span>
          </div>
          <h1 className="font-black text-3xl uppercase text-white tracking-tight">
            POWER <span className="text-brand-orange">ARSENAL</span> ⚙️
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">// PS: RUNTIME PIPELINE CONTAINS ZERO TESTS</p>
          
          <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-900/40 p-3 border border-slate-900">
              <p className="text-brand-orange font-black uppercase tracking-wider mb-2">▶ FRONTEND_ENG</p>
              <ul className="space-y-1 text-slate-400 font-sans">
                <li>ReactJS</li>
                <li>React Native</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-slate-900/40 p-3 border border-slate-900">
              <p className="text-brand-orange font-black uppercase tracking-wider mb-2">▶ BACKEND_CORE</p>
              <ul className="space-y-1 text-slate-400 font-sans">
                <li>NodeJS</li>
                <li>Django</li>
                <li>Express</li>
                <li>Flutter</li>
              </ul>
            </div>
          </div>
          <p className="animate-bounce mt-8 text-brand-orange font-bold text-center w-full">↓</p>
        </Section>

        {/* --- SECTION 3: CONTACT & CREDITS --- */}
        <Section opacity={opacityLastSection}>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Comms // Channels</span>
          </div>
          <h1 className="font-black text-3xl uppercase text-white tracking-tight mb-4">
            CALL ME <span className="text-emerald-400">MAYBE?</span> 🤙
          </h1>
          <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
            High quality engineering requirements. Premium infrastructure execution.
          </p>
          
          <a 
            href="tel:+9779846197513"
            className="block text-center p-3 border border-emerald-900/50 bg-emerald-950/20 text-emerald-400 text-sm font-black tracking-widest rounded-xs hover:bg-emerald-400 hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          >
            📞 +977 9846197513
          </a>

          {/* PRESTIGE SYSTEM MANIFEST / REFERENCE SECTION */}
          <div className="mt-8 pt-6 border-t border-slate-900">
            <div className="flex items-center justify-between text-[10px] font-black tracking-widest text-slate-500 uppercase mb-3">
              <span>[ DIAGNOSTIC_CREDITS ]</span>
              <span className="text-brand-orange">REV_2026</span>
            </div>
            
            {/* Wawa Sensei Special Recognition Unit */}
            <div className="mb-4 bg-brand-orange/5 border border-brand-orange/20 p-3 rounded-xs text-xs">
              <div className="flex justify-between items-center font-bold text-brand-orange mb-1">
                <span>🎯 VISUAL INSPIRATION</span>
                <span className="text-[10px] bg-brand-orange text-white px-1 font-black">MENTOR</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Core interactive scroll patterns and layout logic structured explicitly from tutorials by <b className="text-slate-200">Wawa Sensei</b>.
              </p>
            </div>

            {/* Framework Link Grid */}
            <div className="grid grid-cols-2 gap-1 text-[11px] font-bold">
              {[
                { name: "React", url: "https://react.dev/" },
                { name: "Three Fiber", url: "https://docs.pmnd.rs/react-three-fiber" },
                { name: "Drei Peripherals", url: "https://docs.pmnd.rs/drei" },
                { name: "GSAP Engine", url: "https://gsap.com/docs/v3/" }
              ].map((link) => (
                <a
                  key={link.name}
                  className="border border-slate-900 bg-slate-950/40 px-3 py-1.5 text-slate-500 hover:text-brand-neon hover:border-brand-neon/40 transition-all"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  // {link.name}
                </a>
              ))}
            </div>
          </div>
        </Section>

      </div>
    </Scroll>
  );
};