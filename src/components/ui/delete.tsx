import { useDelete, useUpdate } from "@refinedev/core";
import { Button } from "./button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "./dialog";


interface Props {
  resource: string;
  id: number| string;
  message: string;
}
export const Delete: React.FC<Props> = ({ resource, id, message }) => {
  const { mutate } = useDelete();
  const handleDelete = () => {
    mutate({
      resource:resource,
      id: id,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
       <Button>Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete</DialogTitle>
          <DialogDescription className="text-center text-xl pt-6 text-slate-800 font-semibold">{message}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={handleDelete}>Confirm</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
