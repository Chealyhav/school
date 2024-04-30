import { PropsWithChildren, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGetIdentity, useLogout, useMenu, useOne } from "@refinedev/core";
import { Button } from "@/components/ui/button";
import { User } from "@/interface/user";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  // const { data: identity } = useGetIdentity<User>();
  const { mutate: logout } = useLogout();
  const { menuItems } = useMenu();
  const [showSideBar, setShowSideBar] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDownmenu, setShowDropDownmenu] = useState(false);
  const Username = localStorage.getItem("username");
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
    <div className="h-screen w-screen">
      <div className="flex h-full">
        {/* Sidebar */}
        <div
          className={`w-[400px] h-full text-white transition duration-1000 ${
            showSideBar ? "" : "hidden"
          }`}
        >
          <div className="h-[50px] bg-gray-900 flex items-center">
            <div className="font-bold text-xl px-[20px]">Admin Dashboard</div>
          </div>
          <div className="bg-gray-800 h-[calc(100%-50px)] px-[20px] py-[20px]">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col space-y-2">
                {/* {menuItems.map((item) => (
                  <li key={item.key}>
                    <NavLink to={item.route ?? "/"}>{item.label}</NavLink>
                  </li>
                ))} */}
                <ul className="space-y-2">
                  <li className="flex justify-start items-center space-x-2">
                    <AcademicCapIcon className="size-4" />
                    <Link to="dashboard">Dashboard</Link>
                  </li>
                  <li className="flex justify-start items-center space-x-2">
                    <AcademicCapIcon className="size-4" />
                    <Link to="student">Student</Link>
                  </li>
                </ul>
                <li className="flex justify-start items-center space-x-2">
                  <AcademicCapIcon className="size-4" />
                  <Link to="teacher">Teacher</Link>
                </li>
                <li className="flex justify-start items-center space-x-2">
                  <AcademicCapIcon className="size-4" />
                  <Link to="classes">Classes</Link>
                </li>

                <div className="py-4">
                  <h2 onClick={toggleDropMenu}>WebSite</h2>
                  <div className="bg-white h-0.5 w-full rounded-full"></div>
                  {showDropDownmenu && (
                    <ul className="space-y-2 pt-2">
                      <li className="flex justify-start items-center space-x-2">
                        <AcademicCapIcon className="size-4" />
                        <Link to="bannerhome">Banner Home</Link>
                      </li>
                      <li className="flex justify-start items-center space-x-2">
                        <AcademicCapIcon className="size-4" />
                        <Link to="banner">Banner</Link>
                      </li>
                      <li className="flex justify-start items-center space-x-2">
                        <AcademicCapIcon className="size-4" />
                        <Link to="about">About Us</Link>
                      </li>
                      <li className="flex justify-start items-center space-x-2">
                        <AcademicCapIcon className="size-4" />
                        <Link to="contact">Contact</Link>
                      </li>
                      <li className="flex justify-start items-center space-x-2">
                        <AcademicCapIcon className="size-4" />
                        <Link to="blog">Blog</Link>
                      </li>
                    </ul>
                  )}
                  <div className="">xx</div>
                </div>
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
                  <img
                    className="w-10 h-10 rounded-full border-2 border-gray-50"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzXD140wCYEKBSqQq9hBF1QEVY3YZ39GqEA&usqp=CAU"
                    alt=""
                  />
                  <div className="font-semibold dark:text-dark text-left">
                    <div>{Username}</div>
                    <div className="text-xs text-dark dark:text-gray-400">
                      Admin
                    </div>
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

          <div className="bg-gray-200 h-[calc(100%-50px)] px-4 pb-12 pt-2">
            <div className="border rounded-md h-full p-6 overflow-y-auto bg-white">
              {children}
            </div>
            <div className="py-2">
              <span className="font-semibold">© Copyrights </span>IT 424 from
              group 2024. All rights reserved. Designed by Lyhav
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
