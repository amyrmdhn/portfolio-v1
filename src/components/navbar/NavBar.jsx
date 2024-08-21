import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Clients", href: "#clients" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const fixedNav = document.querySelector("header").offsetTop;
      if (window.scrollY > fixedNav) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMobileMenuOpen((preveState) => !preveState);
  };

  const handleClickOutside = (e) => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    if (e.target !== hamburger && e.target !== navMenu) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`${
        isFixed ? "navbar-fixed" : ""
      } absolute left-0 top-0 z-10 flex w-full items-center bg-transparent`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a
              href="#home"
              className="block py-6 text-lg font-bold text-primary shadow-indigo-300 hover:[text-shadow:_0_0_16px_var(--tw-shadow-color)]"
            >
              <span className="sr-only">My Portfolio</span>
              amyramadhan
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`${
                isMobileMenuOpen && "hamburger-active"
              } absolute right-4 block lg:hidden`}
              onClick={handleMenuClick}
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>

            <nav
              id="nav-menu"
              className={`${
                isMobileMenuOpen ? "" : "hidden"
              } absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent`}
            >
              <ul className="block lg:flex">
                {navigation.map((nav) => (
                  <NavLink key={nav.name} {...nav} />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
