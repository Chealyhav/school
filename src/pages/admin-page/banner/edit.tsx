import { API_URL } from "@/App";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BannerHomeProps } from "@/interface/home";
import { useOne, useUpdate } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
interface EditBannerHomeProps {
  id: string;
  // isopen: boolean;
  // setisopen: (isOpen: boolean) => void;
}
export const EditBanner: React.FC<EditBannerHomeProps> = ({ id }) => {
  const { mutate } = useUpdate();
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
  console.log(id)
  const { data } = useOne({
    resource: "banner",
    id: id,
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
    <div className="">
      <Link
        to="/bannerhome/list"
        className="hover:text-yellow-400 font-semibold"
      >
        List
      </Link>
      <h1 className="text-xl font-semibold">Edit Banners Homepage</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-4">
          <Label>Upload Banner Photo (150px X 150px)</Label>
          <Input
            type="file"
            placeholder="input background "
            {...register("image")}
            name="image"
          />
        </div>
        <div className="aspect-h-2 aspect-w-7 border">
          <img
            src={`${API_URL}${data?.data.image}`} // || "image/about.png"
            alt=""
            className="object-cover mx-auto "
          />
        </div>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};
