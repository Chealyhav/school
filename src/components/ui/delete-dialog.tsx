import { useDelete, useUpdate } from "@refinedev/core";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../ui/dialog";
import { Trash2Icon } from "lucide-react";

interface Props {
  resource: string;
  id: number|string;
  message: string;
}
export const DeleteDialog: React.FC<Props> = ({ resource, id, message }) => {
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
      <Trash2Icon size={24} color="red" />
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
