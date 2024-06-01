import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between">
      <h1 className="text-white font-medium  text-[30px]">
        {/* <b class="font-bold poppins">Rasel </b> Rahman */}
      </h1>
      <div className="md:hidden">
        <button
          className="text-white text-2xl hover:text-violet-400"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        {isMenuOpen && (
          <div className="mr-12 ml-64 bg-white absolute right-0 left-0 flex flex-col items-end gap-3 rounded-xl py-2 px-2">
            <a
              href="#intro"
              className="block py-2 bg-violet-400 rounded-full w-full hover:bg-violet-800"
              onClick={toggleMenu}
            >
              About Me
            </a>
            <a
              href="#Qualifications"
              className="block py-2 bg-violet-400 rounded-full w-full hover:bg-violet-800"
              onClick={toggleMenu}
            >
              Qualifications
            </a>
            <a
              href="#Skills"
              className="block py-2 bg-violet-400 rounded-full w-full hover:bg-violet-800"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block py-2 bg-violet-400 rounded-full w-full hover:bg-violet-800"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block py-2 bg-violet-400 rounded-full w-full hover:bg-violet-800"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        )}
      </div>
      <div className="hidden md:flex items-center justify-between space-x-4 text-white">
        <a href="#intro" className="duration-200 hover:text-violet-400">
          About Me
        </a>
        <a
          href="#Qualifications"
          className="duration-200 hover:text-violet-400"
        >
          Qualifications
        </a>
        <a href="#Skills" className="duration-200 hover:text-violet-400">
          Skills
        </a>
        <a href="#projects" className="duration-200 hover:text-violet-400">
          Services
        </a>
        <a href="#contact" className="duration-200 hover:text-violet-400">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
