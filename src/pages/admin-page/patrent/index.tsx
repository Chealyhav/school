import { useTable } from "@refinedev/core";
import { Parent, ParentColumns } from "./columns";
import ListTable from "./list";

export const ListParent: React.FC = () => {
  const { tableQueryResult } = useTable<Parent>({
    resource: "parent",
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

  return <ListTable columns={ParentColumns} data={data} />;
};
