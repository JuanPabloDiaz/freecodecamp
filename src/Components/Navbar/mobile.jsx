// Source code: https://tailwindui.com/components/application-ui/navigation/navbars

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/images/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// const navigation = [
//   { name: "Certifications", href: "/", current: false },
//   { name: "Tic Tac Toc Game", href: "/TicTacToe", current: false },
//   { name: "Simon Game", href: "/simon", current: false },
//   { name: "Drum Machine", href: "/drum", current: false },
//   { name: "Calculator", href: "/calculator", current: false },
//   { name: "25 + 5 Clock", href: "/pomodoro", current: false },
//   { name: "Local Weather", href: "/weather", current: false },
//   { name: "Twitch", href: "/twitch", current: false },
//   { name: "Random Quote Generator", href: "/quote", current: false },
//   { name: "Wikipedia Viewer", href: "/wikipedia", current: false },
//   { name: "Markdown Previewer", href: "/markdown", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Mobile() {
  // const navigate = useNavigate();
  const location = useLocation();
  // const [closeMenu, setCloseMenu] = useState(false);
  const [key, setKey] = useState(0);

  // const handleLinkClick = (path, closeMenu) => {
  //   navigate(path);
  //   closeMenu();
  // };

  useEffect(() => {
    if (location.pathname !== "/") {
      // setCloseMenu(true);
      setKey((prevKey) => prevKey + 1);
    }
  }, [location]);

  const navigation = [
    { name: "Certifications", href: "/", current: location.pathname === "/" },
    {
      name: "Tic Tac Toc Game",
      href: "/TicTacToe",
      current: location.pathname === "/TicTacToe",
    },
    {
      name: "Simon Game",
      href: "/simon",
      current: location.pathname === "/simon",
    },
    {
      name: "Drum Machine",
      href: "/drum",
      current: location.pathname === "/drum",
    },
    {
      name: "Calculator",
      href: "/calculator",
      current: location.pathname === "/calculator",
    },
    {
      name: "25 + 5 Clock",
      href: "/pomodoro",
      current: location.pathname === "/pomodoro",
    },
    {
      name: "Local Weather",
      href: "/weather",
      current: location.pathname === "/weather",
    },
    {
      name: "Twitch",
      href: "/twitch",
      current: location.pathname === "/twitch",
    },
    {
      name: "Random Quote Generator",
      href: "/quote",
      current: location.pathname === "/quote",
    },
    {
      name: "Wikipedia Viewer",
      href: "/wikipedia",
      current: location.pathname === "/wikipedia",
    },
    {
      name: "Markdown Previewer",
      href: "/markdown",
      current: location.pathname === "/markdown",
    },
  ];
  return (
    // <Disclosure as="nav" className="bg-gray-800 md:hidden" open={!closeMenu}>
    <Disclosure as="nav" className="bg-gray-800 md:hidden" key={key}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto rounded-xl bg-white p-2"
                    src={logo}
                    alt="FreeCodeCamp Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  // onClick={closeMenu}
                  // onClick={() => setCloseMenu(true)}
                  onClick={() => setKey((prevKey) => prevKey + 1)}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
