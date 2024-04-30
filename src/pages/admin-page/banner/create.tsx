import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";

export const CreateBanner: React.FC = () => {
    const { reset, register, handleSubmit, refineCore: { onFinish } } = useForm();

    const onSubmit = async (data: FieldValues) => {
      try {
        const formData = new FormData();
        // formData.append("title", data.title);
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
      <h1 className="text-xl font-semibold">Banners HomePage</h1>
      <div className="flex justify-between py-2">
        <Link to="/bannerhome/list" className="hover:text-yellow-400 font-semibold">List</Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} >
      <div className="py-4">
         <Label>Upload Banner Photo (150px X 150px)</Label>
        <Input type="file" placeholder="input background " {...register("image")}  name="image" />
      </div>
      <Button type="submit">Save</Button>
      </form>
    </div>
  );
};
