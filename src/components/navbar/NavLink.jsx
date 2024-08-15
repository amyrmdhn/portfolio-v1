import React from "react";

const NavLink = ({ name, href }) => {
  return (
    <li className="group hover:bg-indigo-50 lg:hover:bg-transparent">
      <a
        href={href}
        className="mx-5 flex py-2 text-base text-dark font-medium group-hover:text-indigo-700 dark:text-white"
      >
        {name}
      </a>
    </li>
  );
};

export default NavLink;
