import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-[#f4cbd6] backdrop-blur-md shadow-md flex items-center justify-between px-8">
      <span className="text-3xl font-semibold italic font-serif drop-shadow-md text-pink-600 flex items-center gap-2">
        🌸supriya🦄
      </span>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:static absolute top-16 left-0 w-full md:w-auto bg-[#ef6f91] md:bg-transparent py-4 md:py-0 px-6 md:px-0 rounded-xl md:rounded-none md:shadow-none shadow-lg text-center md:flex-row gap-6`}
      >
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "skills", label: "Skills" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ].map(({ id, label }) => (
          <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
            <li className="relative text-purple-600 text-xl font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:text-purple-500 hover:bg-[rgba(251,239,251,0.8)] hover:-translate-y-1 
              after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-[80%]">
              {label}
            </li>
          </a>
        ))}
      </ul>

      {/* Hamburger Icons */}
      {menuOpen ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-6 top-4 cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-6 top-4 cursor-pointer"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
