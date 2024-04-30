import { API_URL } from "@/App";
import { Button } from "@/components/ui/button";
import { useList } from "@refinedev/core";
import { Link } from "react-router-dom";

export function ClassesCard() {
  const { data } = useList({
    resource: "classes",
  });

  return (
    <div className="py-8">
      <div className="grid md:grid-cols-3 grid-col-2 gap-4 h-full w-full ">
        {data?.data.map((x) => (
          <div key={x.id} className=" h-full w-full border rounded-xl">
            <div className="md:aspect-w-3 md:aspect-h-2 aspect-w-7 aspect-h-3">
              <img
                src={`${API_URL}${x.background}`}
                alt={x.title}
                className="object-fill rounded-t-xl "
              />
            </div>

            <div className="flex flex-col justify-center p-4">
              <div className="flex justify-between pt-2">
                <h2 className="font-semibold md:text-xl text-lg ">{x.name}</h2>
                <div className="bg-slate-500 px-6 rounded-full font-semibold text-white text-sm md:text-lg py-1">
                  {x.duration}
                </div>
              </div>
              <div className="w-full h-[1px] bg-slate-500 mt-2 mb-4"></div>
              <p className="py-2">{x.des}</p>

              <div className="w-1/4 mx-auto h-[1px] bg-slate-500 mt-2"></div>
              <div className=" font-semibold  w-full text-center md:text-xl text-lg ">
                {x.sessions}
              </div>
              <div className="flex border-t justify-between items-center py-2">
                <div className=" text-red-600 font-semibold md:text-2xl text-xl ">
                  {x.price}
                </div>
                <Button className="bg-blue-600 hover:bg-blue-500">
                  <Link to="">Enroll Now</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
