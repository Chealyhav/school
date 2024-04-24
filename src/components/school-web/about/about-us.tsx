import { API_URL } from "@/App";
import { useOne } from "@refinedev/core";

export function AboutUs() {
  const { data } = useOne({
    resource: "about",
    id:3
  });
  console.log(data);

  return (
    <div className="">
      <div className="grid md:grid-cols-2 grid-col-1  ">
        <div className="bg-red-400">
          <h2 className="text-xl font-semibold">{data?.data.title}</h2>
          <h2 className="text-xl font-semibold">{data?.data.subtitle}</h2>
          <p className="text-white">{data?.data.des}</p>

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
      <div className="h-10 bg-green-500"></div>
    </div>
  );
}
