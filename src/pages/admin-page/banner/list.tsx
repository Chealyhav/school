import { API_URL } from "@/api/url";
import { Button } from "@/components/ui/button";
import { Delete } from "@/components/ui/delete";
import { BannerProps } from "@/interface/home";
import { useTable } from "@refinedev/core";
import { Edit } from "lucide-react";
import { Link } from "react-router-dom";
import { EditBanner } from "./edit";
import { CreateBanner } from "./create";

export const ListBanner: React.FC = () => {
  const {
    tableQueryResult,
  } = useTable<BannerProps>({
    resource: "banner",
    sorters: {
      initial: [
        {
          field: "created_at",
          order: "desc",
        },
      ],
    },
  });

  const data = tableQueryResult?.data?.data ?? [];

  return (
    <div className="">
      <h1 className="text-xl font-semibold">Banner</h1>
      <div className="pt-4">
        {data.length === 0 ? (
          <Button className="bg-blue-600 hover:bg-slate-500">
            <CreateBanner />
          </Button>
        ) : (
          data.map((x) => (
            <div key={x.id} className="">
              <div className="aspect-h-2 aspect-w-7 border">
                <img
                  src={`${API_URL}${x.image}`} // || "image/about.png"
                  alt=""
                  className="object-cover mx-auto"
                />
              </div>
              <div className="flex space-x-8 py-4">
                <Button className="bg-blue-500 hover:bg-blue-400">
                  <EditBanner id={x.id} />
                </Button>
                <Delete
                  resource={"banner"}
                  id={x.id}
                  message={
                    "Are you sure you want to delete this banner?"
                  }
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
