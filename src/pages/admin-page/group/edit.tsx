import { API_URL } from "@/App";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BannerHomeProps } from "@/interface/home";
import { useOne, useUpdate } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit, Edit2Icon } from "lucide-react";
interface EditBannerHomeProps {
  id: string;
}
export const EditGroup: React.FC<EditBannerHomeProps> = ({ id }) => {
  const {
    register,
    handleSubmit,
    reset,
    refineCore: { onFinish },
  } = useForm<BannerHomeProps>({
    refineCoreProps: {
      resource: "group",
      action: "edit",
      id: id,
    },
  });

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
        <Edit size={24} color="red" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Banners </DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              Update
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
