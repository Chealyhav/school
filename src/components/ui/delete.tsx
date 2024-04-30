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
import { Trash2Icon } from "lucide-react";

interface Props {
  resource: string;
  id: number;
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
      <Trash2Icon size={24} color="red" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
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
