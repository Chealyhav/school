import { PropsWithChildren, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLogout, useMenu } from "@refinedev/core";
import { Button } from "@/components/ui/button";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { mutate: logout } = useLogout();
  const { menuItems } = useMenu();
  const [showSideBar, setShowSideBar] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const toggleDrop = () => {
    setShowDropDown(!showDropDown);
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
              <div className="flex flex-col space-y-[10px]">
                {menuItems.map((item) => (
                  <li key={item.key}>
                    <NavLink to={item.route ?? "/"}>{item.label}</NavLink>
                  </li>
                ))}
                <Button onClick={() => logout()}>Logout</Button>
              </div>
              <div className="h-[50px]">
                <div>
                  <Link
                    to="/setting"
                    className="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
                  >
                    {/* Add SVG code here */}
                    Setting
                  </Link>
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
                    <div>Chea Lyhav</div>
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
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        id="menu-item-1"
                      >
                        Support
                      </a>
               
                      <form method="POST" action="#" role="none">
                        <button
                          type="submit"
                          className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
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

          <div className="bg-gray-50 h-[calc(100%-50px)] px-4 pb-4">
            <div className="border rounded-md h-full p-6 overflow-y-scroll">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
