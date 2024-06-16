import { API_URL } from "@/api/url";
import { Button } from "@/components/ui/button";
import { DeleteDialog } from "@/components/ui/delete-dialog";
import { BannerHomeProps, ClassesProps } from "@/interface/home";
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
import { Link } from "react-router-dom";

export const ListBlog: React.FC = () => {
  const {
    tableQueryResult,
    pageCount,
    pageSize,
    current,
    setCurrent,
    setFilters,
    setPageSize,
  } = useTable<ClassesProps>({
    resource: "classes",
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
      <h1 className="text-xl font-semibold">Classes List</h1>
      <div className="overflow-x-auto py-4">
        <Button className="left-0 right-1">
          <Link to="/classes/create">Create</Link>
        </Button>
        <div className="h-1 w-full bg-slate-600 rounded-full mt-4"></div>

        <table className="w-full h-full text-center">
          <thead>
            <tr className=" border-gray-400 border-b-2 md:text-lg text-base">
              <th className="py-2 max-sm:hidden" >Classes Code</th>
              <th className="py-2">Name</th>
              <th>Background</th>
              <th className="max-sm:hidden">Subtitle</th>
              <th className="max-sm:hidden">Description</th>
              <th className="max-sm:hidden">Duration</th>
              <th>Sessions</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr
                key={x.id}
                className=" border-gray-400 border-b-2 md:text-base text-sm"
              >
                <td className="max-sm:hidden">{x.classCode}</td>
                <td className="py-2">{x.name}</td>
                <td className="py-2">
                  <img
                    src={`${API_URL}${x.background}`}
                    alt={x.name}
                    className="size-16 rounded-full object-cover mx-auto"
                  />
                </td>
                <td className="max-sm:hidden">{x.subtitle}</td>
                <td className="max-sm:hidden max-w-sm">{x.des}</td>
                <td className="max-sm:hidden">{x.duration}</td>
                <td>{x.sessions}</td>
                <td className="text-right">
                  <div className="flex space-x-2 ">
                    <Link to={`/classes/edit/${x.id}`}>
                      <Edit size={24} color="red" />
                    </Link>
                    <button>
                      <DeleteDialog
                        resource={"classes"}
                        id={x.id as any}
                        message={
                          "are you sure you want to delete from banner home page?"
                        }
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
