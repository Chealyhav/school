import { Login } from "../../../pages/login";
import { PropsWithChildren } from "react";
import Header from "../header";

export const LayoutHomepage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div >
    
      <Header />
      {/* <Login /> */}
      <div className="">{children}</div>
      <div className="bg-red-400">Footer</div>
    </div>
  );
};

