import React from 'react';
import AboutImg from "../assets/supriya-profile.jpg";
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative z-10 w-full flex flex-col items-center justify-center px-6 md:px-20 py-20"
    >
      {/* Background blob */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] 
        rounded-[60%_40%_70%_50%/60%_60%_40%_40%] 
        bg-[radial-gradient(circle_at_60%_40%,#fbeffb_60%,#e0c3fc_100%)] 
        opacity-30 blur-[2px] 
        shadow-[0_0_60px_10px_#e0c3fc55] z-[-1] pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">

        {/* Wrapper allows both stars outside the border */}
        <div className="relative w-[400px] h-[400px]">
          {/* ✨ Top-left star emoji outside */}
          <div className="absolute -top-3 -left-3 text-white text-lg md:text-2xl animate-starEmojiBlink select-none pointer-events-none z-10">
            ✨
          </div>

          {/* ✨ Bottom-right star emoji outside */}
          <div className="absolute -bottom-3 -right-3 text-white text-lg md:text-2xl animate-starEmojiBlink delay-1000 select-none pointer-events-none z-10">
            ✨
          </div>

          {/* Glowing image card */}
          <div className="relative w-full h-full rounded-3xl p-[4px] 
            bg-[conic-gradient(at_top_left,_#fcddec,_#e3e0ff,_#dcf5f8,_#fce8e6,_#fcddec)] 
            shadow-[0_0_40px_5px_rgba(255,182,193,0.2)] 
            overflow-hidden"
          >
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={AboutImg}
              alt="Supriya"
            />
          </div>
        </div>

        {/* About text */}
        <div className="text-purple-600 space-y-6 max-w-xl">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 via-pink-400 bg-clip-text text-transparent drop-shadow-sm">
            About
          </h2>

          {/* ✅ ADDED THIS PARAGRAPH HERE */}
          <p className="italic text-lg md:text-xl text-pink-700 font-medium leading-relaxed">
  “Hey there! I'm a BTech AIML student who loves turning ideas into interactive web experiences. 
  I build full-stack apps with the MERN stack and explore AI to solve real-world problems. 
  Always learning, always building — that’s what drives me!” ✨
</p>


          <div className="flex gap-3">
            <IoArrowForward size={28} className="mt-1 text-pink-900" />
            <div>
              <h3 className="text-2xl text-pink-900 font-bold">Frontend Developer</h3>
              <p className="text-base text-purple-700 font-semibold">
                I specialize in building responsive and accessible user interfaces using React, Tailwind CSS, and modern frontend tools.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <IoArrowForward size={28} className="mt-1 text-pink-900" />
            <div>
              <h3 className="text-2xl text-pink-900 font-bold">Backend Developer</h3>
              <p className="text-base text-purple-700 font-semibold">
                I manage data, APIs, and server logic with tools like Node.js, Express, and secure database systems.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <IoArrowForward size={28} className="mt-1 text-pink-900" />
            <div>
              <h3 className="text-2xl text-pink-900 font-bold">Database Developer</h3>
              <p className="text-base text-purple-700 font-semibold">
                I handle database design and queries with MySQL, MongoDB, and PostgreSQL for optimized performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

