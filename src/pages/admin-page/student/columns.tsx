import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Edit} from "lucide-react";
import { StudentProps } from "@/interface/home";
import { DeleteDialog } from "@/components/ui/delete-dialog";
import { Link } from "react-router-dom";

export const StudentColumns: ColumnDef<StudentProps>[] = [
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
    header: "Age",
    accessorKey: "age",
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
    header: "Student ID",
    accessorKey: "studentID",
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
      const student = row.original;
      return (
        <div className="flex space-x-2 ">
          <Link to={`/student/edit/${student.id}`}>
            <Edit size={24} color="red" />
          </Link>
          <button>
            <DeleteDialog
              resource={"student"}
              id={student.id}
              message={
                "Are you sure you want to delete this student?"
              }
            />
          </button>
        </div>
      );
    },
  },
];
