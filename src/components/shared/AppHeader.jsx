import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import HireMeModal from "../HireMeModal";
import logoLight from "../../images/logo-light.png";
import logoDark from "../../images/logo-dark.png";
import { motion } from "framer-motion";
import Button from "../reusable/Button";

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            <Link to="/">
              {activeTheme === "dark" ? (
                <img
                  src={logoDark}
                  className="w-24"
                  style={{ maxWidth: "70px" }}
                  alt="Dark Logo"
                />
              ) : (
                <img
                  src={logoLight}
                  className="w-24"
                  style={{ maxWidth: "70px" }}
                  alt="Dark Logo"
                />
              )}
            </Link>
          </div>

          {/* Theme switcher small screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          <a
            onClick={() =>
              document
                .getElementById("projectsSection")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 cursor-pointer"
            aria-label="Projects"
          >
            Projects
          </a>
          <a
            onClick={() =>
              document
                .getElementById("aboutMeSection")
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark cursor-pointer"
            aria-label="About Me"
          >
            About Me
          </a>

          <a
            onClick={() =>
              document
                .getElementById("contactSection")
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark cursor-pointer"
            aria-label="Contact"
          >
            Contact
          </a>
          <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <span
              onClick={showHireMeModal}
              className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24 cursor-pointer"
              aria-label="Hire Me Button"
            >
              <Button title="Hire Me" />
            </span>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <a
            onClick={() =>
              document
                .getElementById("projectsSection")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="block text-left text-3xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 cursor-pointer"
            aria-label="Projects"
          >
            Projects
          </a>
          <a
            onClick={() =>
              document
                .getElementById("aboutMeSection")
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className="block text-left text-3xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 cursor-pointer"
            aria-label="About Me"
          >
            About Me
          </a>
          <a
            onClick={() =>
              document
                .getElementById("contactSection")
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className="block text-left text-3xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 cursor-pointer"
            aria-label="Contact"
          >
            Contact
          </a>
        </div>

        {/* Header right section buttons */}

        {/* Theme switcher large screen */}
        <div
          onClick={() => setTheme(activeTheme)}
          aria-label="Theme Switcher"
          className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
        >
          {activeTheme === "dark" ? (
            <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
          ) : (
            <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
          )}
        </div>
      </div>

      {/* Hire me modal */}
      <div>
        {showModal ? (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        ) : null}
        {showModal ? showHireMeModal : null}
      </div>
    </motion.nav>
  );
};

export default AppHeader;
