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

export interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  gender?: string;
  dob?: string;
  subject?: string;
  email?: string;
  registrationDate?: string;
  phone?: string;
  experience?: string;
  profile?: string;
  classes?: string;
  created_at: string;
  updated_at: string;
}

export const Teachercolumns: ColumnDef<Teacher>[] = [

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
    header: "First Name",
    accessorKey: "firstName",
  },
  {
    header: "Last Name",
    accessorKey: "lastName",
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "Date of Birth",
    accessorKey: "dob",
    cell: ({ row }) => {
      const dob = row.getValue("dob");
      const formatted = dob ? new Date(dob as string).toLocaleDateString() : "";
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    header: "Subject",
    accessorKey: "subject",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Registration Date",
    accessorKey: "registrationDate",
    cell: ({ row }) => {
      const registrationDate = row.getValue("registrationDate");
      const formatted = registrationDate
        ? new Date(registrationDate as string).toLocaleDateString()
        : "";
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    header: "Phone",
    accessorKey: "phone",
  },
  {
    header: "Experience",
    accessorKey: "experience",
  },
  {
    header: "Profile",
    accessorKey: "profile",
    cell: ({ row }) => {
      const profileUrl = row.getValue("profile") as string;
      return (
        <div className="flex items-center border">
          <img src={profileUrl} alt="Profile" className="h-10 w-10 rounded-full" />
        </div>
      );
    },
  },
  {
    header: "Classes",
    accessorKey: "classes",
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const teacher = row.original;
      return (
        <div className="flex space-x-2 ">
          <Link to={`/teacher/edit/${teacher.id}`}>
            <Edit size={24} color="red" />
          </Link>
          <button>
            <DeleteDialog
              resource={"teacher"}
              id={teacher.id}
              message={
                "Are you sure you want to delete this teacher?"
              }
            />
          </button>
        </div>
      );
    },
  },
];
