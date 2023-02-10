import React from "react";
import { Link } from "react-router-dom";
import avatar from "./common/defaultAvatar.png";
import logo from "./common/logo1.jpg";

function NavBar() {
  const mobileMenu = React.createRef();
  function toggleMobileMenu() {
    mobileMenu.current.classList.toggle("hidden");
  }

  return (
    <nav className="select-none h-min bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-neutral-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/">
          <div className="flex items-center">
            <img
              src={logo}
              className="h-6 mr-3 sm:h-10 rounded-full"
              alt="logo"
            />
            <span className="self-center text-xl font-consolas whitespace-nowrap dark:text-white">
              Abiddit
            </span>
          </div>
        </Link>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={avatar}
              alt="Avatar"
            ></img>
          </button>

          {/*  <!-- Dropdown menu --> */}

          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                You
              </span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                you@abiddit.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Dashboard
                </span>
              </li>
              <li>
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Settings
                </span>
              </li>
              <li>
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Earnings
                </span>
              </li>
              <li>
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Sign out
                </span>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-violet-500 rounded-lg md:hidden hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:text-violet-400 dark:hover:bg-violet-700 dark:focus:ring-violet-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="pl-4 sm:max-md:w-[200px] sm:max-md:right-2 sm:max-md:top-12 sm:max-md:fixed sm:max-md:flex-col sm:max-md:items-end lg:flex-1 hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
          ref={mobileMenu}
        >
          <ul className="flex flex-col p-4 mt-4   md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <span className="block py-2 pl-3 pr-4 text-violet-700 rounded hover:bg-violet-100 md:hover:bg-transparent  md:p-0 dark:text-neutral-400 md:dark:hover:text-white dark:hover:bg-violet-700 dark:hover:text-plum md:dark:hover:bg-transparent dark:border-violet-700">
                <Link to="/" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </span>
            </li>
            <li>
              <span className="block py-2 pl-3 pr-4 text-violet-700 rounded hover:bg-violet-100 md:hover:bg-transparent  md:p-0 dark:text-neutral-400 md:dark:hover:text-white dark:hover:bg-violet-700 dark:hover:text-plum md:dark:hover:bg-transparent dark:border-violet-700">
                <Link to="/articles" onClick={toggleMobileMenu}>
                  Articles
                </Link>
              </span>
            </li>
            <li>
              <span className="block py-2 pl-3 pr-4 text-violet-700 rounded hover:bg-violet-100 md:hover:bg-transparent  md:p-0 dark:text-neutral-400 md:dark:hover:text-white dark:hover:bg-violet-700 dark:hover:text-plum md:dark:hover:bg-transparent dark:border-violet-700">
                <Link to="/users" onClick={toggleMobileMenu}>
                  Users
                </Link>
              </span>
            </li>
            <li>
              <span className="block py-2 pl-3 pr-4 text-violet-700 rounded hover:bg-violet-100 md:hover:bg-transparent  md:p-0 dark:text-neutral-400 md:dark:hover:text-white dark:hover:bg-violet-700 dark:hover:text-plum md:dark:hover:bg-transparent dark:border-violet-700">
                <Link to="/about" onClick={toggleMobileMenu}>
                  About
                </Link>
              </span>
            </li>
            <li>
              <span className="block py-2 pl-3 pr-4 text-violet-700 rounded hover:bg-violet-100 md:hover:bg-transparent  md:p-0 dark:text-neutral-400 md:dark:hover:text-white dark:hover:bg-violet-700 dark:hover:text-plum md:dark:hover:bg-transparent dark:border-violet-700">
                <Link to="/contact" onClick={toggleMobileMenu}>
                  Contact
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
