import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Edit } from "lucide-react";
import { Link } from "react-router-dom";
import { ClassesProps } from "@/interface/home";
import { DeleteDialog } from "@/components/ui/delete-dialog";



export const ClassColumns: ColumnDef<ClassesProps>[] = [
  {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === "asc");
        }}
      >
        ID
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Class Code",
    accessorKey: "classCode",
  },
  {
    header: "Background",
    accessorKey: "background",
    cell: ({ row }) => {
      const backgroundUrl = row.getValue("background") as string;
      return (
        <div className="flex items-center">
          <img src={backgroundUrl} alt="Background" className="h-10 w-10 rounded-full" />
        </div>
      );
    },
  },
  {
    header: "Description",
    accessorKey: "des",
  },
  {
    header: "Price",
    accessorKey: "price",
  },
  {
    header: "Duration",
    accessorKey: "duration",
  },
  {
    header: "Subtitle",
    accessorKey: "subtitle",
  },
  {
    header: "Sessions",
    accessorKey: "sessions",
  },
  {
    header: "Created At",
    accessorKey: "created_at",
  },
  {
    header: "Updated At",
    accessorKey: "updated_at",
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const classItem = row.original;
      return (
        <div className="flex space-x-2 ">
          <Link to={`/classes/edit/${classItem.id}`}>
            <Edit size={24} color="red" />
          </Link>
          <button>
            <DeleteDialog
              resource={"classes"}
              id={classItem.id}
              message={
                "Are you sure you want to delete this classes?"
              }
            />
          </button>
        </div>
      );
    },
  },
];
