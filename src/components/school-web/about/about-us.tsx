import { API_URL } from "@/App";
import { useList, useOne } from "@refinedev/core";

export function AboutUs() {
  const { data } = useList({
    resource: "about",
  });

  return (
    <>
      <div className="grid md:grid-cols-2 grid-col-1">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-600">
            {data?.data[0].title}
          </h2>
          <h2 className="text-xl font-semibold text-slate-600">
            {data?.data[0].subtitle}
          </h2>
          <p className="text-slate-600">{data?.data[0].des}</p>

          <div className=""></div>
        </div>
        <div className="relative md:aspect-w-2 md:aspect-h-1 aspect-w-16 aspect-h-1">
          <img
            src={`${API_URL}${data?.data[0].background}`}
            alt={data?.data[0].title}
            className="object-fill relative"
          />
        </div>
      </div>
    </>
  );
}
