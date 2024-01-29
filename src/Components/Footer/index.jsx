// source code: https://tailwindcomponents.com/component/tailwind-css-footer-1
import logo from "../../assets/images/logo.png";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsDot } from "react-icons/bs";

const footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="body-font w-full bg-gray-100 text-gray-700">
        <div className="container flex flex-col flex-wrap items-center justify-center px-5 pb-12 pt-10 md:flex-row md:items-center">
          {/* logo: */}
          <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
            <a className="title-font flex items-center justify-center gap-2 text-lg font-medium text-gray-900 md:justify-start">
              <img
                className="h-5 w-auto fill-current text-gray-900"
                src={logo}
                alt="logo"
              />
              Collection
            </a>
            <p className="mt-2 text-sm text-gray-500">
              An unofficial FreeCodeCamp site
            </p>
            <p className="mt-2 text-sm text-gray-500">Never Stop Learning</p>
            <p className="mt-2 text-sm text-gray-500">Developed by</p>
            <p className="mt-2">
              <a
                className="juanchosFont text-lg font-semibold transition duration-500 ease-in-out hover:text-black hover:underline hover:underline-offset-2"
                href="https://www.linkedin.com/in/1diazdev/"
              >
                Juan Diaz
              </a>
            </p>

            <div className="mt-8">
              <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
                <a
                  className="ml-3 cursor-pointer text-gray-500 hover:text-gray-700"
                  href="https://twitter.com/1diazdev"
                >
                  <TbBrandGithubFilled className="h-5 w-5" />
                </a>
                <a
                  className="ml-3 cursor-pointer text-gray-500 hover:text-gray-700"
                  href="https://www.linkedin.com/in/1diazdev/"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
                <a
                  className="ml-3 cursor-pointer text-gray-500 hover:text-gray-700"
                  href="https://twitter.com/1diazdev"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="-mb-16 mt-10 flex flex-grow flex-col justify-around text-center md:flex-row md:pl-20 md:text-left">
            <section className="min-w-fit px-4">
              <h2 className="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-900">
                About
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a
                    className="cursor-pointer text-gray-500 hover:text-gray-900"
                    href="https://jpdiaz.dev"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    className="cursor-pointer text-gray-500 hover:text-gray-900"
                    href="https://github.com/JuanPabloDiaz"
                  >
                    GitHub
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    className="cursor-pointer text-gray-500 hover:text-gray-900"
                    href="https://www.linkedin.com/in/1diazdev/"
                  >
                    Linkedin
                  </a>
                </li>
              </nav>
            </section>
            <section className="min-w-fit px-4">
              <h2 className="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-900">
                Original Projects (demo)
              </h2>
              <nav className="mb-10 list-none">
                <div className="flex flex-wrap gap-2 text-justify md:gap-10 lg:gap-16">
                  <div className="w-auto">
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://tictactoe.jpdiaz.dev/"
                      >
                        Tic Tac Toe
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://simon.jpdiaz.dev/"
                      >
                        Simon
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://drum.jpdiaz.dev/"
                      >
                        Drum Machine
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://math.jpdiaz.dev/"
                      >
                        Calculator
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://25.jpdiaz.dev/"
                      >
                        25 + 5 Clock
                      </a>
                    </li>
                  </div>
                  <div className="w-auto">
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://weather.jpdiaz.dev/"
                      >
                        Local Weather
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://twitch.jpdiaz.dev/"
                      >
                        Twitch
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://quote.jpdiaz.dev/"
                      >
                        Random Quote Generator
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://wiki.jpdiaz.dev/"
                      >
                        Wikipedia Viewer
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://markdown.jpdiaz.dev/"
                      >
                        Markdown Previewer
                      </a>
                    </li>
                  </div>
                </div>
              </nav>
            </section>
            <section className="min-w-fit px-4">
              <h2 className="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-900">
                Github Repo
              </h2>
              <nav className="mb-10 list-none">
                <div className="flex flex-wrap gap-2 text-justify md:gap-10 lg:gap-16">
                  <div className="w-auto">
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://github.com/JuanPabloDiaz/ticTacToe"
                      >
                        Tic Tac Toe
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://github.com/JuanPabloDiaz/simonGame"
                      >
                        Simon
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://github.com/JuanPabloDiaz/drumMachine"
                      >
                        Drum Machine
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://github.com/JuanPabloDiaz/calculator"
                      >
                        Calculator
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://github.com/JuanPabloDiaz/25-5_clock"
                      >
                        25 + 5 Clock
                      </a>
                    </li>
                  </div>
                  <div className="w-auto">
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://github.com/JuanPabloDiaz/weather"
                      >
                        Local Weather
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://github.com/JuanPabloDiaz/twitch"
                      >
                        Twitch
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://github.com/JuanPabloDiaz/random-quote-generator"
                      >
                        Random Quote Generator
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://github.com/JuanPabloDiaz/wikipediaViewer"
                      >
                        Wikipedia Viewer
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="cursor-pointer text-gray-500 hover:text-gray-900"
                        href="https://github.com/JuanPabloDiaz/markdownPreviewer"
                      >
                        Markdown Previewer
                      </a>
                    </li>
                  </div>
                </div>
              </nav>
            </section>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="flex items-center justify-center gap-1 py-4 text-sm capitalize text-gray-700">
            <p className="">© {currentYear} All rights reserved</p>
            <BsDot />
            <a
              className="transition duration-500 ease-in-out hover:font-semibold hover:text-black hover:underline hover:underline-offset-2"
              href="https://www.linkedin.com/in/1diazdev/"
            >
              Juan diaz
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
