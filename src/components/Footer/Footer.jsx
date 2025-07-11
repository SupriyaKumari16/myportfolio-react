import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#ffeef1] text-center py-10 mt-20 text-sm text-gray-800 font-medium tracking-wide">
      
      {/* ✨ Quote section */}
      <p className="mb-4 italic text-gray-600 text-base max-w-xl mx-auto">
        “In progress, but with purpose — this portfolio evolves with every line of code.”
      </p>

      <p className="mb-6">
       "Made with coffee, code, and cosmic dust 😺."
      </p>

      <div className="flex justify-center space-x-6 mb-6 text-indigo-600 font-bold">
        <a href="#home" className="hover:text-gray-500 transition duration-300">Home</a>
        <a href="#about" className="hover:text-gray-500 transition duration-300">About</a>
        <a href="#Skills" className="hover:text-gray-500 transition duration-300">Skills</a>
        <a href="#Projects" className="hover:text-gray-500 transition duration-300">Projects</a>
        <a href="#Contact" className="hover:text-gray-500 transition duration-300">Contact</a>
      </div>

      <div className="flex justify-center space-x-6 text-2xl mb-6 text-pink-600">
        <a
          href="https://formsubmit.co/supriyakumarigdg@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <HiOutlineMail />
        </a>
        <a
          href="https://github.com/SupriyaKumari16"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/supriya-kumari-9257aa281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/supriya.jha16"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FaInstagram />
        </a>
      </div>

      <p className="text-xs text-gray-500">
        © 2025 Supriya Jha. All rights reserved.
      </p>

      <div className="mt-2 text-pink-300 text-sm tracking-widest select-none">
        ✧･ﾟ: *✧･ﾟ:* 　 *:･ﾟ✧*:･ﾟ✧
      </div>
    </footer>
  );
};

export default Footer;