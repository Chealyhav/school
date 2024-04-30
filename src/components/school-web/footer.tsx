import { IceCream2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <div className="container pt-12 pb-8">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
        <div className="bg-red-600 ">
          <h1 className="font-semibold text-xl">Educate</h1>
          <p>ffffffffffff</p>
          <div className=""></div>
        </div>
        <div className="bg-red-600">
          <h1 className="font-semibold text-xl">Latest News</h1>
          <p>ffffffffffff</p>
          <div className=""></div>
        </div>
        <div className="bg-red-600">
          <h1 className="font-semibold text-xl">Useful Links</h1>
          <p>ffffffffffff</p>
          <div className=""></div>
        </div>
        <div className="bg-red-600">
          <h1 className="font-semibold text-xl">Flexible learning</h1>
          <p>ffffffffffff</p>
          <div className=""></div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-slate-600 my-8"></div>

      <div className="text-center">
        © 2017 LYHAV INTERACTIVE, ALL RIGHTS RESERVED
      </div>
    </div>
  );
};
