import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BannerHomeProps } from "@/interface/home";
import { useUpdate } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
interface EditBannerHomeProps {
  id?: string;
}
export const EditClasses: React.FC<EditBannerHomeProps> = ({ id }) => {
  const { id: paramId } = useParams<{ id: string }>();
  const userId = id || paramId;
  const {
    register,
    handleSubmit,
    reset,
    refineCore: { onFinish },
    formState: { errors },
  } = useForm<BannerHomeProps>({
    refineCoreProps: {
      resource: "classes",
      action: "edit",
      id: userId,
    },
  });
  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("background", data.background[0]);
      formData.append("name", data.name);
      formData.append("classCode", data.classCode);
      formData.append("des", data.des);
      formData.append("price", data.price);
      formData.append("duration", data.duration);
      formData.append("subtitle", data.subtitle);
      formData.append("sessions", data.sessions);

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
      <h1 className="text-xl font-semibold">Add Classes</h1>
      <div className="flex  py-2">
        <Link to="/classes" className="hover:text-yellow-400 ">
          List
        </Link>
        <p className="px-1"> / </p>Edit Classes
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-4">
          <div className="space-y-2">
            <Label>
              Name <span className="text-red-600">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Input title"
              {...register("name", {
                required: "This field is required",
              })}
            />
            <span className="text-red-600 text-sm">
              {(errors as any)?.name?.message as string}
            </span>
          </div>
          <div className="space-y-2">
            <Label>ClassCode</Label>
            <Input
              type="text"
              placeholder="Input class code"
              {...register("classCode")}
            />
          </div>
          <div className="space-y-2">
            <Label>Price</Label>
            <Input
              type="text"
              placeholder="Input price"
              {...register("price")}
            />
          </div>
          <div className="space-y-2">
            <Label>Duration</Label>
            <Input
              type="text"
              placeholder="Input duration"
              {...register("duration")}
            />
          </div>
          <div className="space-y-2">
            <Label>Subtitle</Label>
            <Input
              type="text"
              placeholder="Input subtitle"
              {...register("subtitle")}
            />
          </div>

          <div className="space-y-2">
            <Label>Sessions</Label>
            <Input
              type="text"
              placeholder="Input sessions"
              {...register("sessions")}
            />
          </div>
          <div className="space-y-2">
            <Label>
              Background <span className="text-red-600">*</span>
            </Label>
            <Input
              type="file"
              placeholder="Input background"
              {...register("background", {
                required: "This field is required",
              })}
            />
            <span className="text-red-600 text-sm">
              {(errors as any)?.background?.message as string}
            </span>
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              placeholder="Type your description here..."
              {...register("des")}
            />
          </div>
        </div>
        <Button type="submit" className="float-right mt-4 bg-blue-600 hover:bg-blue-500">
          Update
        </Button>
      </form>
    </div>
  );
};
