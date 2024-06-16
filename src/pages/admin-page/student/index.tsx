import { useTable } from "@refinedev/core";
import ListTable from "./list";
import { StudentProps } from "@/interface/home";
import { StudentColumns } from "./columns";



export const ListStudent:React.FC = ()=>{
    const {
      tableQueryResult
    } = useTable<StudentProps>({
      resource: "student",
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
  return <ListTable columns={StudentColumns} data={data}/>
}