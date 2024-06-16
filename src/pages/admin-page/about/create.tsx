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

export const CreateAbout: React.FC = () => {
  const {
    reset,
    register,
    handleSubmit,
    refineCore: { onFinish },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("background", data.background[0]);
      formData.append("des", data.des);
      formData.append("subtitle", data.subtitle);
      await onFinish(formData);
      reset();
  
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
        <p className="px-1"> / </p>Add About Us
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
            </div>
            <Button
              type="submit"
              className="float-right bg-green-600 hover:bg-green-500"
            >
             Save
            </Button>
          </form>
      </div>
    </div>
  );
};
