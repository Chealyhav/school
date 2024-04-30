import { API_URL } from "@/App";
import { useOne } from "@refinedev/core";

export function AboutUs() {
  const { data } = useOne({
    resource: "about",
    id:1
  });
  console.log(data);

  return (
    <>
      <div className="grid md:grid-cols-2 grid-col-1">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-600">{data?.data.title}</h2>
          <h2 className="text-xl font-semibold text-slate-600">{data?.data.subtitle}</h2>
          <p className="text-slate-600">{data?.data.des}</p>

          <div className="">
            
          </div>
        </div>
        <div className="relative md:aspect-w-2 md:aspect-h-1 aspect-w-16 aspect-h-1">
          <img
            src={`${API_URL}${data?.data.background}`}
            alt={data?.data.title}
            className="object-fill relative"
          />
        </div>
      </div>
     
    </>
  );
}
