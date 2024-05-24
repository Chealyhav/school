import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Login } from "@/pages/login";
import { ModeToggle } from "../ui/mode-toggle";

const Header = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/Abouts" },
    { name: "CLASSES", link: "/Class" },
    { name: "TEACHER", link: "/Teachers" },
    { name: "BLOG", link: "/Blogs" },
    { name: "CONTACT", link: "/Contacts" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed z-30 top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <img src="/image/SYS-logo-01-01.png" alt="" className="size-11" />
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:ps-0 ps-6  md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-2 font-semibold">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500 md:text-xl text-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="px-4">
            <Login />
          </li>
          <li className="px-4">
            <ModeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
