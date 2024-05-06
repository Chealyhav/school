import { API_URL } from "@/App";
import { Button } from "@/components/ui/button";
import { Delete } from "@/components/ui/delete";
import { DeleteDialog } from "@/components/ui/delete-dialog";
import {
  AboutProps,
  BannerHomeProps,
  BannerProps,
  ContactProps,
} from "@/interface/home";
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

export const ListContact: React.FC = () => {
  const { tableQueryResult } = useTable<ContactProps>({
    resource: "contact",
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
      <h1 className="text-xl font-semibold">Contact</h1>
      <div className="pt-4">
        {data.length === 0 && (
          <Button className="bg-blue-600 hover:bg-slate-500">
            <Link to={`/contact/create/`}>Create</Link>
          </Button>
        )}

        {data.map((x) => (
          <div className="">
            <div className="grid xl:grid-cols-4 md:grid-col-2 grid-cols-1 gap-4">
              <div className="">
                <h1 className="font-semibold md:text-xl text-base">
                  Background
                </h1>
                <div className="aspect-h-3 aspect-w-4 ">
                  <img
                    src={`${API_URL}${x.background}`} // || "image/about.png"
                    alt=""
                    className="object-cover mx-auto "
                  />
                </div>
              </div>

              <div className="">
                <h1 className="font-semibold md:text-xl text-base">Title</h1>
                <h1>{x.title}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold md:text-xl text-base">
                  Sub Title
                </h1>
                <h1>{x.subtitle}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold md:text-xl text-base">
                  Description
                </h1>
                <h1>{x.des}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold md:text-xl text-base">Email</h1>
                <h1>{x.email}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold md:text-xl text-base">Phone</h1>
                <a href={`tel:${x.phone_number}`}>{x.phone_number}</a>
              </div>
              <div className="">
                <h1 className="font-semibold md:text-xl text-base">
                  Instagram
                </h1>
                <h1>{x.instagram}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold md:text-xl text-base">Telegram</h1>
                <h1>{x.telegram}</h1>
              </div>
              <div className="">
                <h1 className="font-semibold md:text-xl text-base">Map</h1>
                <div>
                  <iframe
                    className="w-full h-280"
                    src={x.map || ""}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="flex space-x-8 py-4">
              <Button className="bg-blue-500 hover:bg-blue-400">
                <Link to={`/contact/edit/${x.id}`}>Edit</Link>
              </Button>

              <Delete
                resource={"contact"}
                id={x.id as any}
                message={
                  "are you sure you want to delete from banner home page?"
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
