import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-green-200 body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex lg:order-none lg:w-1/5 mb-4 md:mb-0 font-bold"
        >
          <span className="text-2xl">Rick and Morty search</span>
        </Link>

        <nav className="flex lg:w-auto w-full justify-center text-base md:ml-auto">
          <Link to="/" className="mr-5 hover:text-green-900">
            Home
          </Link>
          <Link to="/characters" className="hover:text-green-900">
            Characters
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
