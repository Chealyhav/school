import { API_URL } from "@/App";
import { Button } from "@/components/ui/button";
import { DeleteDialog } from "@/components/ui/delete-dialog";
import { BannerHomeProps } from "@/interface/home";
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

export const ListTeacher: React.FC = () => {
  const {
    tableQueryResult,
    pageCount,
    pageSize,
    current,
    setCurrent,
    setFilters,
    setPageSize,
  } = useTable<BannerHomeProps>({
    resource: "bannerhome",
    sorters: {
      initial: [
        {
          field: "date_created",
          order: "desc",
        },
      ],
    },
  });

  const { mutate } = useDelete();

  const hasNext = current < pageCount;
  const hasPrev = current > 1;
  const data = tableQueryResult?.data?.data ?? [];
  const [activePopup, setActivePopup] = useState(false);
  const [activeId, setActiveId] = useState<string | number>(0);

  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteId, setDeleteId] = useState<string | number>(0);

  const handleEditButtonClick = (id: string) => {
    // setActiveId(id);
    // setActivePopup(true);
    mutate({
      resource: "bannerhome",
      id: id,
    });
  };

  const deleteCategory = (id: string) => {
    // setDeleteId(id);
    // setDeletePopup(true);
    mutate({
      resource: "bannerhome",
      id: id,
    });
  };
  return (
    <div className="">
      <h1 className="text-xl font-semibold">Teacher Page</h1>
      <div className="">
      <Button className="left-0 right-1">
        <Link to="/bannerhome/create">Create</Link>
      </Button>
      <div className="h-1 w-full bg-slate-600 rounded-full mt-4"></div>
      <table className="w-full h-full text-center">
        <thead>
          <tr className=" border-gray-400 border-b-2 ">
            <th className="py-4">Title</th>
            <th>Background</th>
            <th>Subtitle</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => (
            <tr key={x.id} className=" border-gray-400 border-b-2">
              <td className="py-2">{x.title}</td>
              <td className="py-2">
                <img
                  src={`${API_URL}${x.background}`}
                  alt={x.title}
                  className="size-16 rounded-full object-cover mx-auto"
                />
              </td>
              <td>{x.subtitle}</td>
              <td>{x.des}</td>

              <td className="">
                <div className="flex space-x-2 ">
                  {/* <button onClick={() => handleEditButtonClick(x.id)}>
                    <Edit size={24} color="red" />
                    <Link to="/bannerhome/edit"></Link>
                  </button> */}
                  <Link  to={`/bannerhome/edit/${x.id}`}><Edit size={24} color="red" /></Link>
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
      
{/* 
      <div className="flex justify-center space-x-2 py-4">
        <div className="flex items-center space-x-2">
          <button
            className="flex items-center px-4  rounded-full bg-red-600 "
            onClick={() => setCurrent(1)}
            disabled={!hasPrev}
          >
            <ChevronsLeft size={24} />
          </button>
          <button
            className="flex items-center  px-4   rounded-full  bg-red-600 "
            onClick={() => setCurrent((prev) => prev - 1)}
            disabled={!hasPrev}
          >
            <ChevronLeft size={24} />
          </button>
          <span className="px-4 py-1 max-sm:hidden">
            Page{" "}
            <strong>
              {current} of {pageCount}
            </strong>
          </span>
          <button
            className="flex items-center px-4  rounded-full bg-red-600 "
            onClick={() => setCurrent((prev) => prev + 1)}
            disabled={!hasNext}
          >
            <ChevronRight size={24} />
          </button>
          <button
            className="flex items-center px-4 rounded-full bg-red-600 "
            onClick={() => setCurrent(pageCount)}
            disabled={!hasNext}
          >
            <ChevronsRight size={24} />
          </button>
        </div>
        <div className="max-sm:hidden">
          <select
            className="px-4 py-2  rounded-full "
            value={pageSize}
            onChange={(e) => {
              const value = e.target.value ? Number(e.target.value) : 10;
              setPageSize(value);
            }}
          >
            {[10, 20, 30, 40, 50].map((size) => (
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
      </div> */}
    </div>
  );
};
