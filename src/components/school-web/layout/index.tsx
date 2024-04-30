import { Login } from "../../../pages/login";
import { PropsWithChildren } from "react";
import Header from "../header";
import { Footer } from "../footer";

export const LayoutHomepage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div >
    
      <Header />
      {/* <Login /> */}
      <div className="">{children}</div>
      <div className="bg-slate-300 pt-8"><Footer/></div>
    </div>
  );
};

