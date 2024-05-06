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
import { Link } from "react-router-dom";
interface EditBannerHomeProps {
  id: string;
}
export const EditAbout: React.FC<EditBannerHomeProps> = ({ id }) => {
  const {
    register,
    handleSubmit,
    reset,
    refineCore: { onFinish },
  } = useForm<BannerHomeProps>({
    refineCoreProps: {
      resource: "about",
      action: "edit",
      id: id,
    },
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("background", data.background[0]);
      formData.append("des", data.des);
      formData.append("subtitle", data.subtitle);
      // formData.append("vision_title", data.vision_title);
      // formData.append("vision_des", data.vision_des);
      // formData.append("vision_logo", data.vision_logo);
      // formData.append("mission_title", data.mission_title);
      // formData.append("mission_des", data.mission_des);
      // formData.append("mission_logo", data.mission_logo);
      // formData.append("value_title", data.value_title);
      // formData.append("value_des", data.value_des);
      // formData.append("value_logo", data.value_logo);
      // formData.append("created_at", data.created_at);
      // formData.append("updated_at", data.updated_at);

      await onFinish(formData);
      reset();
      console.log("Data posted successfully");
      console.log(formData);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  return (
    <div className="">
      <h1 className="text-xl font-semibold">Add About Us</h1>
      <div className="flex  py-2">
        <Link to="/about" className="hover:text-yellow-400 ">
          List
        </Link>
        <p className="px-1"> / </p>Edit About Us
        </div>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-4 grid-cols-1  md:gap-4 gap-y-0">
              <div className="py-4">
                <Label htmlFor="background">
                  Upload Banner Photo (200px X 150px)
                </Label>
                <Input
                  type="file"
                  {...register("background")}
                  name="background"
                  id="background"
                />
              </div>
              <div className="py-4">
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  {...register("title")}
                  name="title"
                  id="title"
                />
              </div>
              <div className="py-4">
                <Label htmlFor="des">Description</Label>
                <Input type="text" {...register("des")} name="des" id="des" />
              </div>
              <div className="py-4">
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  type="text"
                  {...register("subtitle")}
                  name="subtitle"
                  id="subtitle"
                />
              </div>
              {/* <div className="py-4">
      <Label htmlFor="vision_title">Vision Title</Label>
      <Input
        type="text"
        {...register("vision_title")}
        name="vision_title"
        id="vision_title"
      />
    </div>
    <div className="py-4">
      <Label htmlFor="vision_des">Vision Description</Label>
      <Input
        type="text"
        {...register("vision_des")}
        name="vision_des"
        id="vision_des"
      />
    </div>
    <div className="py-4">
      <Label htmlFor="vision_logo">Vision Logo</Label>
      <Input
        type="file"
        {...register("vision_logo")}
        name="vision_logo"
        id="vision_logo"
      />
    </div> */}
              {/* <div className="py-4">
      <Label htmlFor="mission_title">Mission Title</Label>
      <Input
        type="text"
        {...register("mission_title")}
        name="mission_title"
        id="mission_title"
      />
    </div>
    <div className="py-4">
      <Label htmlFor="mission_des">Mission Description</Label>
      <Input
        type="text"
        {...register("mission_des")}
        name="mission_des"
        id="mission_des"
      />
    </div>
    <div className="py-4">
      <Label htmlFor="mission_logo">Mission Logo</Label>
      <Input
        type="file"
        {...register("mission_logo")}
        name="mission_logo"
        id="mission_logo"
      />
    </div>
    <div className="py-4">
      <Label htmlFor="value_title">Value Title</Label>
      <Input
        type="text"
        {...register("value_title")}
        name="value_title"
        id="value_title"
      />
    </div>
    <div className="py-4">
      <Label htmlFor="value_des">Value Description</Label>
      <Input
        type="text"
        {...register("value_des")}
        name="value_des"
        id="value_des"
      />
    </div>
    <div className="py-4">
      <Label htmlFor="value_logo">Value Logo</Label>
      <Input
        type="file"
        {...register("value_logo")}
        name="value_logo"
        id="value_logo"
      />
    </div> */}
            </div>
            <Button
              type="submit"
              className="float-right bg-blue-600 hover:bg-blue-500"
            >
              Update
            </Button>
          </form>
      </div>
    </div>
  );
};
