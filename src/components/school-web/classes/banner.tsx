
import { useOne } from "@refinedev/core";
import { API_URL } from "@/App";


export function BannerClasses() {
  const { data } = useOne({
    resource: "classes",
    id:1
  });
  console.log(data);

  return (
    <div className="">
      <div className="relative md:aspect-w-16 md:aspect-h-4 aspect-w-2 aspect-h-1">
        <img
          src={`${API_URL}${data?.data.banner}`}
          alt={data?.data.title}
          className="object-fill relative"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-white">{data?.data.title}</h2>
          <p className="text-white">{data?.data.des}</p>
        </div>
      </div>
    </div>
  );
}
