import { API_URL } from "@/App";
import { Button } from "@/components/ui/button";
import { Delete } from "@/components/ui/delete";
import { DeleteDialog } from "@/components/ui/delete-dialog";
import { BannerHomeProps, BannerProps, GroupProps } from "@/interface/home";
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
import { CreateGroup } from "./create";
import { EditGroup } from "./edit";

export const ListGroup: React.FC = () => {
  const {
    tableQueryResult,
    pageCount,
    pageSize,
    current,
    setCurrent,
    setFilters,
    setPageSize,
  } = useTable<GroupProps>({
    resource: "group",
    sorters: {
      initial: [
        {
          field: "date_created",
          order: "desc",
        },
      ],
    },
  });
  const hasNext = current < pageCount;
  const hasPrev = current > 1;
  const data = tableQueryResult?.data?.data ?? [];
  const shouldShowPagination = data.length >= 6;
  return (
    <div className="">
      <h1 className="md:text-xl text-base font-semibold pb-4">
        Banners HomePage
      </h1>
      <Button className="bg-blue-600 hover:bg-slate-500">
        <CreateGroup />
      </Button>
      <div className="h-1 w-full bg-slate-600 rounded-full mt-4"></div>
      <div className="">
        <table className="w-full h-full text-center">
          <thead>
            <tr className=" border-gray-400 border-b-2 ">
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr key={x.id} className=" border-gray-400 border-b-2 space-y-2">
                <td className="py-2 text-sm md:text-base">{x.name}</td>
                <td className="text-sm md:text-base">{x.subtitle}</td>
                <td className="flex justify-center items-center">
                  <div className="flex space-x-2 items-center ">
                    <button>
                      <EditGroup id={x.id} />
                   </button>
                    <button>
                      <DeleteDialog
                        resource={"group"}
                        id={x.id as any}
                        message={"are you sure you want to delete from group?"}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {shouldShowPagination && pageSize && (
        <div className="flex justify-center space-x-2 py-4">
          <div className="flex items-center space-x-2">
            <button
              className="flex items-center px-4 cursor-pointer border rounded-sm max-sm:hidden"
              onClick={() => setCurrent(1)}
              disabled={!hasPrev}
            >
              <ChevronsLeft size={24} />
            </button>
            <button
              className="flex items-center  px-4 cursor-pointer border rounded-sm"
              onClick={() => setCurrent((prev) => prev - 1)}
              disabled={!hasPrev}
            >
              <ChevronLeft size={24} />
            </button>
            <span className="px-4 py-1 ">
              Page{" "}
              <strong>
                {current} of {pageCount}
              </strong>
            </span>
            <button
              className="flex items-center px-4 cursor-pointer border rounded-sm"
              onClick={() => setCurrent((prev) => prev + 1)}
              disabled={!hasNext}
            >
              <ChevronRight size={24} />
            </button>
            <button
              className="flex items-center px-4 cursor-pointer border rounded-sm max-sm:hidden"
              onClick={() => setCurrent(pageCount)}
              disabled={!hasNext}
            >
              <ChevronsRight size={24} />
            </button>
          </div>
          <div className="max-sm:hidden ">
            <select
              className="px-4 py-2 rounded-md cursor-pointer"
              value={pageSize}
              onChange={(e) => {
                const value = e.target.value ? Number(e.target.value) : 5;
                setPageSize(value);
              }}
            >
              {[5, 20, 30, 40, 50].map((size) => (
                <option
                  key={size}
                  value={size}
                  className="hover:bg-white text-black"
                >
                  Show {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
