import { useTable } from "@refinedev/core";
import ListTable from "./list";
import { ClassesProps } from "@/interface/home";
import { ClassColumns } from "./columns";

export const ListClasses:React.FC = ()=>{
    const {
      tableQueryResult
    } = useTable<ClassesProps>({
      resource: "classes",
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
  return <ListTable columns={ClassColumns} data={data}/>
}