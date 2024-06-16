import { useTable } from "@refinedev/core";
import { Subject, SubjectColumns } from "./columns";
import ListTable from "./list";

export const ListSubject: React.FC = () => {
  const { tableQueryResult } = useTable<Subject>({
    resource: "subjects",
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

  return <ListTable columns={SubjectColumns} data={data} />;
};
