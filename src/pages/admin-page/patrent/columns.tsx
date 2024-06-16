import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, Edit, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { DeleteDialog } from "@/components/ui/delete-dialog";

export interface Parent {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  address: string;
  created_at: string;
  updated_at: string;
}

export const ParentColumns: ColumnDef<Parent>[] = [
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
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Phone Number",
    accessorKey: "phone_number",
  },
  {
    header: "Address",
    accessorKey: "address",
  },
  {
    header: "Created At",
    accessorKey: "created_at",
    cell: ({ row }) => {
      const createdAt = row.getValue("created_at");
      const formatted = createdAt
        ? new Date(createdAt as string).toLocaleDateString()
        : "";
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    header: "Updated At",
    accessorKey: "updated_at",
    cell: ({ row }) => {
      const updatedAt = row.getValue("updated_at");
      const formatted = updatedAt
        ? new Date(updatedAt as string).toLocaleDateString()
        : "";
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const classItem = row.original;
      return (
        <div className="flex space-x-2 ">
          <Link to={`/parent/edit/${classItem.id}`}>
            <Edit size={24} color="red" />
          </Link>
          <button>
            <DeleteDialog
              resource={"parent"}
              id={classItem.id}
              message={"Are you sure you want to delete this parent?"}
            />
          </button>
        </div>
      );
    },
  },
];
