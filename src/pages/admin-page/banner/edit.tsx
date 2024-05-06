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
interface EditBannerHomeProps {
  id: string;
}
export const EditBanner: React.FC<EditBannerHomeProps> = ({ id }) => {
  const {
    register,
    handleSubmit,
    reset,
    refineCore: { onFinish },
  } = useForm<BannerHomeProps>({
    refineCoreProps: {
      resource: "banner",
      action: "edit",
      id: id,
    },
  });

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
        <a>Edit</a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Banners </DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-4 space-y-2">
              <Label className="text-start">Upload Banner Photo (300px X 150px)</Label>
              <Input
                type="file"
                placeholder="input background "
                {...register("image")}
                name="image"
              />
            </div>
            <Button type="submit" className="float-right">Update</Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
