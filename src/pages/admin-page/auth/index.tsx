import { UserProps } from "@/interface/user";
import { useNavigation, useTable } from "@refinedev/core";
import ListTable from "./list";
import { UserColumns } from "./columns";

export const ListUser:React.FC = ()=>{
  const { edit, show, create } = useNavigation();
    const {
        tableQueryResult
      } = useTable<UserProps>({
        resource: "register",
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
    return <ListTable columns={UserColumns} data={data}/>
}

