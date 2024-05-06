import { API_URL } from "@/App";
import { useList } from "@refinedev/core";

export const CardBlog:React.FC = () =>{
    const { data } = useList({
        resource: "blog",
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
                    className="object-fill"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}