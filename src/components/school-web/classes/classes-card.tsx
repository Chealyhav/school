import { API_URL } from "@/App";
import { useList } from "@refinedev/core";

export function ClassesCard() {
  const { data } = useList({
    resource: "classes",
  });
  console.log(data);

  return (
    <div className="py-8">
      <div className="grid md:grid-cols-3 grid-col-2 gap-4 ">
        {data?.data.map((x) => (
          <div key={x.id} className="" >
            <div
          
              className="relative md:aspect-w-2 md:aspect-h-1 aspect-w-2 aspect-h-1 "
            >
              <img
                src={`${API_URL}${x.background}`}
                alt={x.title}
                className="object-fill relative"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-slate-500 p-4">
              <h2 className="text-white font-semibold">{x.title}</h2>
              <p className="text-white">{x.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
