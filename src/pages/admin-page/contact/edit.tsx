import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BannerHomeProps } from "@/interface/home";
import { useUpdate } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
interface EditBannerHomeProps {
  id: string;
  // isopen: boolean;
  // setisopen: (isOpen: boolean) => void;
}
export const EditContact: React.FC<EditBannerHomeProps> = ({ id }) => {
  const { mutate } = useUpdate();
  const {
    register,
    handleSubmit,
    reset,
    refineCore: { onFinish },
    formState: { errors },
  } = useForm<BannerHomeProps>({
    refineCoreProps: {
      resource: "contact",
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
      formData.append("id", data.id);
      formData.append("email", data.email);
      formData.append("facebook", data.facebook);
      formData.append("telegram", data.telegram);
      formData.append("instagram", data.instagram);
      formData.append("phone_number", data.phone_number);
      formData.append("map", data.map);

      await onFinish(formData);
      reset();
      console.log("Data posted successfully");
      console.log(formData);
    } catch (error) {
      console.error("Error posting data:", error);
      // Handle error, show error message, etc.
    }
  };
  return (
    <div className="">
      <h1 className="text-xl font-semibold">Edit Contact</h1>
      <div className="flex  py-2">
        <Link to="/contact" className="hover:text-yellow-400 ">
          List
        </Link>
        <p className="px-1"> / </p>Edit Contact
      </div>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-y-4">
            <div>
              <Label>
                Background <span className="text-red-600">*</span>
              </Label>
              <Input
                type="file"
                id="background"
                {...register("background", {
                  required: "This field is required",
                })}
              />
              <span className="text-red-600 text-sm">
                {(errors as any)?.background?.message as string}
              </span>
            </div>
            <div>
              <Label>Description:</Label>
              <Input type="text" id="des" {...register("des")} />
            </div>
            <div>
              <Label>Title:</Label>
              <Input type="text" id="title" {...register("title")} />
            </div>
            <div>
              <Label>Subtitle:</Label>
              <Input type="text" id="subtitle" {...register("subtitle")} />
            </div>
            <div>
              <Label>Email:</Label>
              <Input type="text" id="email" {...register("email")} />
            </div>
            <div>
              <Label>Facebook:</Label>
              <Input type="text" id="facebook" {...register("facebook")} />
            </div>
            <div>
              <Label>Telegram:</Label>
              <Input type="text" id="telegram" {...register("telegram")} />
            </div>
            <div>
              <Label>Instagram:</Label>
              <Input type="text" id="instagram" {...register("instagram")} />
            </div>
            <div>
              <Label>Phone Number:</Label>
              <Input
                type="text"
                id="phone_number"
                {...register("phone_number")}
              />
            </div>
            <div>
              <Label>Map:</Label>
              <Input type="text" id="map" {...register("map")} />
            </div>
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
