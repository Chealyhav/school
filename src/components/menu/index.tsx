import { useLogout, useMenu } from "@refinedev/core";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

export const Menu = () => {
  const { mutate: logout } = useLogout();
  const { menuItems } = useMenu();

  return (
      <nav className="border-r bg-slate-600 ">
        <ul className="z-30 sticky top-0 p-2 ">
          <div className="w-full h-10 bg-black"></div>
          {menuItems.map((item) => (
            <li key={item.key}>
              <NavLink to={item.route ?? "/"}>{item.label}</NavLink>
            </li>
          ))}
            <Button onClick={() => logout()}>Logout</Button>
        </ul>
      
      </nav>
  );
};
