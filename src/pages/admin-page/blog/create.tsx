import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";

export const CreateBlog: React.FC = () => {
  const {
    reset,
    register,
    handleSubmit,
    refineCore: { onFinish },
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      const formData = new FormData();
      formData.append("background", data.background[0]);
      formData.append("title", data.title);
      formData.append("des", data.des);
      formData.append("subtitle", data.subtitle);


      await onFinish(formData);
      reset();
      console.log("Data posted successfully");
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
        <p className="px-1"> / </p>Add Classes
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-4">
          <div className="space-y-2">
            <Label>
            Title <span className="text-red-600">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Input title"
              {...register("name", {
                required: "This field is required",
              })}
            />
            <span className="text-red-600 text-sm">
              {(errors as any)?.title?.message as string}
            </span>
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
        <Button
          type="submit"
          className="float-right mt-4 bg-green-600 hover:bg-green-500"
        >
          Save
        </Button>
      </form>
    </div>
  );
};
