import { useList } from "@refinedev/core";
import { IceCream2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const { data } = useList({
    resource: "contact",
  });
  return (
    <div className="container pt-12 pb-8">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        <div className="">
          <h1 className="font-semibold text-xl pb-4"></h1>
          <div className="flex flex-col space-y-4 ">
            <img src="/image/SYS-logo-01-01.png" alt="" className="size-64" />
          </div>
        </div>
        <div className="">
          <h1 className="font-semibold text-xl pb-4">Use Link</h1>
          <div className="flex flex-col space-y-4 ">
            <Link
              to="Abouts"
              className="hover:text-yellow-600 text-white font-semibold"
            >
              About Us
            </Link>
            <Link
              to="Blogs"
              className="hover:text-yellow-600 text-white font-semibold"
            >
              Blog
            </Link>
            <Link
              to="Contacts"
              className="hover:text-yellow-600 text-white font-semibold"
            >
              Contact
            </Link>
            <Link
              to="Class"
              className="hover:text-yellow-600 text-white font-semibold"
            >
              Classes
            </Link>
          </div>
        </div>

        <div className="">
          <h1 className="font-semibold text-xl">Contact</h1>
          <div className="">
            
          </div>
          <iframe
            className="w-full h-1/2"
            src={data?.data[0].map || ""}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="w-full h-0.5 bg-slate-600 my-8"></div>

      <div className="text-center">
        © 2017 LYHAV INTERACTIVE, ALL RIGHTS RESERVED
      </div>
    </div>
  );
};
