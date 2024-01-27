import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useScrollPosition } from "../../Utils/useScrollPosition";
import { useAuth } from "../../Context/auth";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { PiCertificateDuotone } from "react-icons/pi";

const Navbar = () => {
  const activeStyle = "underline text-gray-500 underline-offset-4";
  const hoverStyle = "hover:text-gray-500 transition-colors duration-100";
  const dropdownStyle =
    "absolute flex flex-col gap-2 w-36 py-2 px-1 transition-all duration-300 transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 bg-white text-black rounded-b-md shadow-md shadow-gray-500 z-50";

  //scrollPosition:
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownTech, setShowDropdownTech] = useState(false);

  function classNamesNavBarScroll(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  // console.log(scrollPosition);

  return (
    <header
      className={classNamesNavBarScroll(
        scrollPosition > 0
          ? "top-6 md:h-auto md:-translate-y-6 md:bg-white md:shadow"
          : "md:h-none md:translate-y-0 md:bg-none md:shadow-none",
        "md:transition-shadow-xl md:transition-color absolute inset-x-0 top-4 z-40 duration-500 md:fixed md:h-20 md:-translate-y-6 md:shadow-black lg:h-14",
      )}
    >
      <nav className="text-md fixed top-0 z-10 hidden w-full flex-col items-center justify-between px-8 py-0 font-light sm:flex sm:flex-row">
        <ul className="flex flex-col items-center gap-8 sm:flex-row">
          <li className="text-lg font-semibold">
            <NavLink to="/" className="flex items-center gap-3">
              <img src={logo} alt="logo" className="h-5" />
              <span>Collection</span>
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setShowDropdownTech(true)}
            onMouseLeave={() => setShowDropdownTech(false)}
            className={`group relative cursor-pointer ${hoverStyle}`}
          >
            Gaming
            {showDropdownTech && (
              <div className={dropdownStyle}>
                <NavLink
                  to="/TicTacToe"
                  className={`${hoverStyle} ${({ isActive }) =>
                    isActive ? activeStyle : undefined}`}
                >
                  Tic Tac Toe
                </NavLink>
                <NavLink
                  to="/Simon"
                  className={`${hoverStyle} ${({ isActive }) =>
                    isActive ? activeStyle : undefined}`}
                >
                  Simon
                </NavLink>
                <NavLink
                  to="/Drum"
                  className={`${hoverStyle} ${({ isActive }) =>
                    isActive ? activeStyle : undefined}`}
                >
                  Drum Machine
                </NavLink>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            className={`group relative cursor-pointer ${hoverStyle}`}
          >
            Productivity
            {showDropdown && (
              <div className={dropdownStyle}>
                <NavLink
                  to="/calculator"
                  className={`${hoverStyle} ${({ isActive }) =>
                    isActive ? activeStyle : undefined}`}
                >
                  Calculator
                </NavLink>
                <NavLink
                  to="/Pomodoro"
                  className={`${hoverStyle} ${({ isActive }) =>
                    isActive ? activeStyle : undefined}`}
                >
                  25 + 5 Clock
                </NavLink>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            className={`group relative cursor-pointer ${hoverStyle}`}
          >
            Consuming API&apos;s
            {showDropdown && (
              <div className={dropdownStyle}>
                <NavLink
                  to="/Weather"
                  className={`${hoverStyle} ${({ isActive }) =>
                    isActive ? activeStyle : undefined}`}
                >
                  Local Weather
                </NavLink>
                <NavLink
                  to="/Twitch"
                  className={`${hoverStyle} ${({ isActive }) =>
                    isActive ? activeStyle : undefined}`}
                >
                  Twitch
                </NavLink>
                <NavLink
                  to="/Quote"
                  className={`${hoverStyle} ${({ isActive }) =>
                    isActive ? activeStyle : undefined}`}
                >
                  Quote Generator
                </NavLink>
                <NavLink
                  to="/Wikipedia"
                  className={`${hoverStyle} ${({ isActive }) =>
                    isActive ? activeStyle : undefined}`}
                >
                  Wikipedia Viewer
                </NavLink>
              </div>
            )}
          </li>

          <li className={hoverStyle}>
            <NavLink
              to="/Markdown"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Editing
            </NavLink>
          </li>
        </ul>
        <ul className="hidden items-center gap-3 sm:flex">
          <li
            className={`flex items-center justify-center rounded-full border-2 border-black p-1 text-black hover:border-black/40 ${hoverStyle}`}
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <PiCertificateDuotone
                className={`h-8 w-8 text-black ${hoverStyle}`}
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
