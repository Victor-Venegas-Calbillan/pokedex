import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png`;

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = isOpen ? "" : `opacity-0 top-[-400px]`;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-indigo-950 p-2 shadow-xl">
      <div className="max-w-7xl text-white md:mx-auto md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link
            to="/home"
            className="flex items-center hover:text-yellow-500 transition-colors duration-300"
          >
            <img
              src={pokemonImage}
              alt="pokemon"
              className="w-14 h-14"
            />
            <h2 className="text-3xl">P</h2>
            <h3 className="text-2xl">okedex</h3>
          </Link>
          <span onClick={toggleMenu}>
            {isOpen ? (
              <IoClose className="md:hidden text-3xl block mx-3 hover:text-yellow-500 duration-300 transition-colors" />
            ) : (
              <IoMenu className="md:hidden text-3xl block mx-3 hover:text-yellow-500 duration-300 transition-colors" />
            )}
          </span>
        </div>

        <ul
          className={`md:flex md:items-center  md:z-auto md:static absolute bg-indigo-950 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-3 md:opacity-100 transition-all ${showMenu} ease-in duration-150`}
        >
          <li className="mx-4 my-6 md:my-0">
            <Link
              className="text-xl hover:text-yellow-400 transition-colors duration-300"
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              className="text-xl hover:text-yellow-400 transition-colors duration-300"
              to="/favorites"
            >
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
