import { PropsWithChildren, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGetIdentity, useLogout, useMenu, useOne } from "@refinedev/core";
import { Button } from "@/components/ui/button";
import {
  BookOpenIcon,
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  ChartBarIcon,
  UserGroupIcon,
  UsersIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookAIcon } from "lucide-react";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { mutate: logout } = useLogout();
  const [showSideBar, setShowSideBar] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDownmenu, setShowDropDownmenu] = useState(false);
  const Username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const toggleDrop = () => {
    setShowDropDown(!showDropDown);
  };
  const toggleDropMenu = () => {
    setShowDropDownmenu(!showDropDownmenu);
  };
  return (
    <div className="h-screen w-full">
      <div className="flex h-full">
        {/* Sidebar */}
        <div
          className={`w-[400px] h-full text-white transition duration-1000 ${
            showSideBar ? "" : "hidden"
          }`}
        >
          <div className=" bg-gray-900 flex items-center">
            <div className="font-bold text-xl px-[20px]">
              <img src="/image/SYS-logo-01-01.png" alt="" className="size-16" />
            </div>
          </div>
          <div className="bg-gray-800 h-[calc(100%-20px)] px-[20px] py-[20px]">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col space-y-2">
                <ul className="space-y-2">
                  {(role === "1" || role === "3") && (
                    <>
                      {role === "1" && (
                        <>
                          <li className="flex justify-start items-center space-x-2">
                            <ChartBarIcon className="size-4" />
                            <Link to="dashboard">Dashboard</Link>
                          </li>
                        </>
                      )}
                      <li className="flex justify-start items-center space-x-2">
                        <AcademicCapIcon className="size-4" />
                        <Link to="student">Student</Link>
                      </li>
                      <li className="flex justify-start items-center space-x-2">
                        <UsersIcon className="size-4" />
                        <Link to="teacher">Teacher</Link>
                      </li>
                      <li className="flex justify-start items-center space-x-2">
                        <BookOpenIcon className="size-4" />
                        <Link to="classes">Classes</Link>
                      </li>
                      <li className="flex justify-start items-center space-x-2">
                        <BookAIcon className="size-4" />
                        <Link to="subjects">Subject</Link>
                      </li>
                      <li className="flex justify-start items-center space-x-2">
                        <UserGroupIcon className="size-4" />
                        <Link to="parent">Parent</Link>
                      </li>
                    </>
                  )}
                  {role === "1" && (
                    <>
                   
                      <li className="flex justify-start items-center space-x-2">
                        <UserIcon className="size-4" />
                        <Link to="register">User</Link>
                      </li>
                      <li>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Website-school</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 pt-2">
                                <li className="flex justify-start items-center space-x-2">
                                  <AdjustmentsHorizontalIcon className="size-4" />
                                  <Link to="bannerhome">Banner Home</Link>
                                </li>
                                <li className="flex justify-start items-center space-x-2">
                                  <AdjustmentsHorizontalIcon className="size-4" />
                                  <Link to="banner">Banner</Link>
                                </li>
                                <li className="flex justify-start items-center space-x-2">
                                  <AdjustmentsHorizontalIcon className="size-4" />
                                  <Link to="about">About Us</Link>
                                </li>
                                <li className="flex justify-start items-center space-x-2">
                                  <AdjustmentsHorizontalIcon className="size-4" />
                                  <Link to="contact">Contact</Link>
                                </li>
                                <li className="flex justify-start items-center space-x-2">
                                  <AdjustmentsHorizontalIcon className="size-4" />
                                  <Link to="blog">Blog</Link>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="w-full h-full">
          {/* Header */}
          <div className="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
            <div className="cursor-pointer w-[30px]" onClick={toggleSideBar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className=" w-[25px] h-[25px]"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </div>
            {/* Other header content */}

            <div className="w-[calc(100%-30px)] flex justify-end items-center">
              <div className="w-[200px]">
                <div
                  className="flex items-center justify-start space-x-4"
                  onClick={toggleDrop}
                >
                  <UserCircleIcon className="size-10 text-slate-600" />
                  <div className="font-semibold dark:text-dark text-left text-xl">
                    <div>{Username}</div>
                  </div>
                </div>
                {showDropDown && (
                  <div
                    className="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div className="py-1 text-left" role="none">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        id="menu-item-0"
                      >
                        Account settings
                      </a>
                      <form method="POST" action="#" role="none">
                        <button
                          onClick={() => logout()}
                          type="submit"
                          className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:text-yellow-600 "
                          role="menuitem"
                          id="menu-item-3"
                        >
                          Sign out
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gray-200 h-[calc(100%-20px)] px-4 pb-12 pt-2">
            <div className="border rounded-md h-full p-6 overflow-y-auto bg-white">
              {children}
            </div>
            <div className="text-center pt-4">
              <span className="font-semibold">© Copyrights </span>IT 424 from
              group 2024. All rights reserved. Designed by Lyhav
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
