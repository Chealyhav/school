import { useList, useTable } from "@refinedev/core";
import { Teacher, Teachercolumns} from "./columns"
import ListTable from "./list"


export const ListTeacher:React.FC = ()=>{
      const {
        tableQueryResult
      } = useTable<Teacher>({
        resource: "teacher",
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
    return <ListTable columns={Teachercolumns} data={data}/>
}