import { API_URL } from "@/App";
import { Button } from "@/components/ui/button";
import { DeleteDialog } from "@/components/ui/delete-dialog";
import { BannerHomeProps, StudentProps } from "@/interface/home";
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

export const ListStudent: React.FC = () => {
  const {
    tableQueryResult,
    pageCount,
    pageSize,
    current,
    setCurrent,
    setFilters,
    setPageSize,
  } = useTable<StudentProps>({
    resource: "student",
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
  // const { edit, show, create } = useNavigation();
  return (
    <div className="">
      <h1 className="md:text-xl text-base font-semibold pb-4">Student </h1>
      <Button className="">
        <Link to="/student/create">Create</Link>
      </Button>
      <div className="h-1 w-full bg-slate-600 rounded-full mt-4"></div>
      <div className="border-collapse">
        <table className="w-full h-full text-center">
          <thead>
            <tr className=" border-gray-400 border-b-2 ">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Profile</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr key={x.id} className=" border-gray-400 border-b-2">
                <td className="py-2 text-sm md:text-base">{x.studentID}</td>
                <td className="py-2 text-sm md:text-base">{x.firstName}</td>
                <td className="py-2 text-sm md:text-base">{x.lastName}</td>
                <td className="py-2">
                  <img
                    src={`${API_URL}${x.profile}`}
                    alt={x.firstName}
                    className="size-16 rounded-full object-cover mx-auto"
                  />
                </td>
                <td>{x.dob}</td>
                <td>{x.gender}</td>
                <td>{x.age}</td>
                <td>{x.phone}</td>
                <td>{x.email}</td>
                <td>{x.subject}</td>
                <td className="">
                  <div className="flex space-x-2 ">
                    <Link to={`/bannerhome/edit/${x.id}`}>
                      <Edit size={24} color="red" />
                    </Link>
                    <button>
                      <DeleteDialog
                        resource={"bannerhome"}
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
              {[5,20, 30, 40, 50].map((size) => (
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
