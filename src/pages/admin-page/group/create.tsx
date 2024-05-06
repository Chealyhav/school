import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@refinedev/react-hook-form";
import { Trash2Icon } from "lucide-react";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
interface PopupProps {
  id: string;
}

export const CreateGroup: React.FC = () => {
  const {
    reset,
    register,
    handleSubmit,
    refineCore: { onFinish },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("subtitle", data.subtitle);

      await onFinish(formData);
      reset();
      console.log("Data posted successfully");
      console.log(formData);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <a>Create</a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Banners</DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="flex flex-col space-y-2">
              <div className="py-4">
                <Label>Name</Label>
                <Input type="text" {...register("name")} name="name" />
              </div>
              <div className="py-4">
                <Label>Description</Label>
                <Input type="text" {...register("subtitle")} name="subtitle" />
              </div>
            </div>
            <Button type="submit" className="float-right">
              Save
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
