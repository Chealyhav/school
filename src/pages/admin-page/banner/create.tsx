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

export const CreateBanner: React.FC = () => {
  const {
    reset,
    register,
    handleSubmit,
    refineCore: { onFinish },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

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
            <div className="py-4">
              <Label>Upload Banner Photo (300px X 150px)</Label>
              <Input
                type="file"
                placeholder="input background "
                {...register("image")}
                name="image"
              />
            </div>
            <Button type="submit" className="float-right">Save</Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
