import { PropsWithChildren } from "react";
import { Breadcrumb } from "../breadcrumb";
import { Menu } from "../menu";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex gap-1">
      <Menu />
      <div className="bg-red-300 w-full h-full ">
        <Breadcrumb />
        <div className="">{children}</div>
        <div className="">footer page</div>
      </div>
    </div>
  );
};
