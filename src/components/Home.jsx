import React, { useEffect, useState } from "react";
import supriyaPhoto from "../assets/supriya-profile.jpg";
import chibiImage from "../assets/avtar.png";

const Home = () => {
  const fullText = "I'm Supriya";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let index = 0;
    let timer;

    const type = () => {
      if (!isDeleting) {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
          timer = setTimeout(type, 120);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
            index = fullText.length - 1;
            type();
          }, 1500);
        }
      } else {
        if (index >= 0) {
          setTypedText(fullText.slice(0, index));
          index--;
          timer = setTimeout(type, 80);
        } else {
          setIsDeleting(false);
          index = 0;
          timer = setTimeout(type, 400);
        }
      }
    };

    type();
    return () => clearTimeout(timer);
  }, [isDeleting]);

  const styleTag = `
    @keyframes neonPulse {
      0%, 100% {
        box-shadow: 0 0 10px #ff80bf, 0 0 20px #ff80bf, 0 0 30px #ff80bf;
      }
      50% {
        box-shadow: 0 0 20px #ff80bf, 0 0 40px #ff80bf, 0 0 60px #ff80bf;
      }
    }

    @keyframes smallBounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-4px);
      }
    }
  `;

  const neonGlowStyle = {
    animation: "neonPulse 2s infinite",
    borderRadius: "9999px",
    width: "260px",
    height: "260px",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-start px-4 pt-36 relative bg-transparent"
    >
      <style>{styleTag}</style>

      {/* Avatar + Welcome Heading */}
      <div className="flex items-center gap-4 z-30 mt-[-60px] mb-[-40px]">
        <img
          src={chibiImage}
          alt="Chibi Supriya"
          className="w-32 md:w-36"
        />
        <h1 className="text-pink-500 text-3xl md:text-5xl font-extrabold whitespace-nowrap">
          Welcome to my portfolio
        </h1>
      </div>

      {/* White Card Section */}
      <div className="relative w-full max-w-6xl mt-6 z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between relative">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 drop-shadow-md min-h-[60px]">
              Hello, <span>{typedText}</span>
            </h1>
            <h2 className="text-pink-500 text-xl font-semibold">
              Aspiring Software Engineer
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              I'm a BTech student specializing in AIML, passionate about building
              applications with the MERN stack and exploring AI solutions.
            </p>

            <div className="flex gap-4 mt-4 flex-wrap justify-center md:justify-start">
              <button className="px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full font-medium hover:scale-105 transform duration-300 shadow-md">
                About Me
              </button>
              <a
                href="/supriyaresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-full font-medium hover:scale-105 transform duration-300 shadow-md"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center items-center mt-10 md:mt-0">
            <div style={neonGlowStyle}>
              <img
                className="w-64 h-64 rounded-full object-cover"
                src={supriyaPhoto}
                alt="Supriya Profile"
              />
              <div
                className="absolute bottom-2 right-2 bg-pink-400 text-white text-xs px-3 py-1 rounded-full shadow-md"
                style={{ animation: "smallBounce 1.5s infinite ease-in-out" }}
              >
                Hi!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;























