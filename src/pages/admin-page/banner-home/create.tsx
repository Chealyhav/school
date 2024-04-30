import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";

export const CreateBannerHome: React.FC = () => {
    const { reset, register, handleSubmit, refineCore: { onFinish } } = useForm();

    const onSubmit = async (data: FieldValues) => {
      try {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("subtitle", data.subtitle);
        formData.append("des", data.des);
        formData.append("background", data.background[0]);
  
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
      <h1 className="text-xl font-semibold">Banners HomePage</h1>
      <div className="flex justify-between py-2">
        <Link to="/bannerhome/list" className="hover:text-yellow-400 font-semibold">List</Link>

      </div>
      <form onSubmit={handleSubmit(onSubmit)} >
      <div className="flex py-4 space-x-4">
        <Input type="text" placeholder="input title"  {...register("title")}  name="title" />
        <Input type="text" placeholder="input subtitle"  {...register("subtitle")} name="subtitle" />
      </div>
      <div className="flex py-4 space-x-4 ">
        <Textarea placeholder="type your description here..."  {...register("des")} name="des" />
        <Input type="file" placeholder="input background " {...register("background")}  name="background" />
      </div>
      <Button type="submit">Save</Button>
      </form>
    </div>
  );
};
