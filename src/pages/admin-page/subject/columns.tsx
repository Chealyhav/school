
import { ColumnDef } from "@tanstack/react-table";
import {Edit} from "lucide-react";
import { Link } from "react-router-dom";
import { DeleteDialog } from "@/components/ui/delete-dialog";
export interface Subject {
  id: number;
  name: string;
  subject_code: string;
  des?: string | null;
  created_at: string;
  updated_at: string;
}

export const SubjectColumns: ColumnDef<Subject>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Subject Code",
    accessorKey: "subject_code",
  },
  {
    header: "Description",
    accessorKey: "des",
  },
  {
    header: "Created At",
    accessorKey: "created_at",
    cell: ({ row }) => {
      const createdAt = row.getValue("created_at");
      const formatted = createdAt ? new Date(createdAt as string).toLocaleDateString() : "";
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    header: "Updated At",
    accessorKey: "updated_at",
    cell: ({ row }) => {
      const updatedAt = row.getValue("updated_at");
      const formatted = updatedAt ? new Date(updatedAt as string).toLocaleDateString() : "";
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const subject = row.original;
      return (
        <div className="flex space-x-2 ">
          <Link to={`/subjects/edit/${subject.id}`}>
            <Edit size={24} color="red" />
          </Link>
          <button>
            <DeleteDialog
              resource={"subjects"}
              id={subject.id}
              message={
                "Are you sure you want to delete this subject?"
              }
            />
          </button>
        </div>
      );
    },
  },
];
