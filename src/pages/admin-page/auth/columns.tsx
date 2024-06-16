import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Edit } from "lucide-react";
import { DeleteDialog } from "@/components/ui/delete-dialog";
import { Link } from "react-router-dom";
import { UserProps } from "@/interface/user";

export const UserColumns: ColumnDef<UserProps>[] = [
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
    header: "Username",
    accessorKey: "username",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "First Name",
    accessorKey: "first_name",
  },
  {
    header: "Last Name",
    accessorKey: "last_name",
  },
  {
    header: "Role",
    accessorKey: "role",
    cell: ({ row }) => {
      const role = row.getValue("role");
      const roleLabel = role === 1 ? 'Admin' : role === 2 ? 'Staff' : 'User';
      return <div className="font-medium">{roleLabel}</div>;
    },
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex space-x-2 ">
          <button>
            <DeleteDialog
              resource={"register"}
              id={user.id}
              message={
                "Are you sure you want to delete this user?"
              }
            />
          </button>
        </div>
      );
    },
  },
];
