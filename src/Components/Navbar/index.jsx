import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../Context";
import { useScrollPosition } from "../../Utils/useScrollPosition";
import { useAuth } from "../../Context/auth";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const activeStyle = "underline text-gray-500 underline-offset-4";
  const hoverStyle = "hover:text-gray-500 transition-colors duration-100";
  const dropdownStyle =
    "absolute flex flex-col gap-2 w-36 py-2 px-1 transition-all duration-300 transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 bg-white text-black rounded-b-md shadow-md shadow-gray-500 z-50";

  const context = useContext(AppContext);

  //scrollPosition:
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownTech, setShowDropdownTech] = useState(false);

  function classNamesNavBarScroll(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  // console.log(scrollPosition);

  // AuthContext:
  const auth = useAuth();
  // console.log("in Navbar, Auth.user: ", auth.user);

  // Navigate:
  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    if (
      window.confirm(`${auth.user.username}, Are you sure you want to logout?`)
    ) {
      auth.logout();
      console.log("You have been logged out.");
      navigate("/"); // Redirect to home page after logout
    }
  };
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
        <ul className="flex flex-col items-center gap-3 sm:flex-row">
          <li className="text-lg font-semibold">
            <NavLink
              to="/"
              onClick={() => context.setSearchByCategory(null)}
              className="flex items-center gap-3"
            >
              <img src={logo} alt="logo" className="h-5" />
              <span>Collection</span>
            </NavLink>
          </li>
          <li className={hoverStyle}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => context.setSearchByCategory(null)}
            >
              All
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setShowDropdownTech(true)}
            onMouseLeave={() => setShowDropdownTech(false)}
            className={`group relative cursor-pointer ${hoverStyle}`}
          >
            Games
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
            Tools
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
            Tools with an API
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
              Markdown Previewer
            </NavLink>
          </li>
        </ul>
        <ul className="hidden items-center gap-3 sm:flex">
          {auth.user && (
            <>
              <li className={hoverStyle}>
                <NavLink
                  to="/my-account"
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  My Account
                </NavLink>
              </li>
              <li>
                <NavLink
                  // to="/Logout"
                  onClick={handleLogout}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  Logout
                </NavLink>
              </li>
            </>
          )}
          {!auth.user && (
            <li className={hoverStyle}>
              <NavLink
                to="/sign-in"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Sign In
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
