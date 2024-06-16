import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";

export const CreateBannerHome: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    refineCore: { onFinish },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("subtitle", data.subtitle);
      formData.append("des", data.des);
      formData.append("background", data.background[0]);

      await onFinish(formData);
      reset();
    } catch (error) {
      console.error("Error posting data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <div className="flex justify-between py-4">
        <Link
          to="/bannerhome"
          className="hover:text-yellow-400 font-semibold"
        >
          List
        </Link>
      </div>
      <h1 className="md:text-xl text-lg font-semibold py-4">Add Banners HomePage</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 md:space-y-4"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="space-y-2 w-full">
            <Label>
              Title <span className="text-red-600">*</span>
            </Label>
            <Input
              type="text"
              placeholder="input title"
              {...register("title", {
                required: "This field is required",
              })}
              name="title"
            />
            <span className="text-red-600 text-sm">
              {(errors as any)?.title?.message as string}
            </span>
          </div>
          <div className="space-y-2">
            <Label>Sub Tittle</Label>
            <Input
              type="text"
              placeholder="input subtitle"
              {...register("subtitle")}
              name="subtitle"
            />
          </div>
          <div className="space-y-2">
            <Label>
              Upload Banner HomePage Photo (400px X 200px){" "}
              <span className="text-red-600">*</span>
            </Label>
            <Input
              type="file"
              placeholder="input background "
              {...register("background", {
                required: "This field is required",
              })}
              name="background"
            />
            <span className="text-red-600 text-sm">
              {(errors as any)?.background?.message as string}
            </span>
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              placeholder="type your description here..."
              {...register("des")}
              name="des"
            />
          </div>
        </div>

        <Button type="submit" className="float-right" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </form>
    </div>
  );
};
