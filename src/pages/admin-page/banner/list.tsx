import { API_URL } from "@/App";
import { Button } from "@/components/ui/button";
import { Delete } from "@/components/ui/delete";
import { DeleteDialog } from "@/components/ui/delete-dialog";
import { BannerHomeProps, BannerProps } from "@/interface/home";
import { useDelete, useList, useTable, useUpdate } from "@refinedev/core";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Edit,
  Trash2Icon,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import { EditBanner } from "./edit";

export const ListBanner: React.FC = () => {
  const {
    tableQueryResult,
    pageCount,
    pageSize,
    current,
    setCurrent,
    setFilters,
    setPageSize,
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
      <h1 className="text-xl font-semibold">Banners HomePage</h1>
      <div className="">
        {data.length === 0 && (
          <div className="">
            <Button className="bg-blue-600 hover:bg-slate-500">
              <Link to="/banner/create">Create</Link>
            </Button>
          </div>
        )}

        {data.map((x) => (
          <div className="">
            <div className="aspect-h-2 aspect-w-7 border">
              <img
                src={`${API_URL}${x.image}`}  // || "image/about.png"
                alt=""
                className="object-cover mx-auto "
              />
            </div>
            
            <Button className="bg-blue-500 hover:bg-blue-400">
              <Link to={`/banner/edit/${x.id}`}>Edit</Link>
              {/* <EditBanner id={x.id}/> */}
            </Button>
            <Button>
              <Delete
                resource={"banner"}
                id={x.id as any}
                message={
                  "are you sure you want to delete from banner home page?"
                }
              />
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
