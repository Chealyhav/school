
import { useForm } from "@refinedev/react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Person } from "./list";
import { useUpdate } from "@refinedev/core";
import { FieldValues } from "react-hook-form";

export const Edit = () => {
  const { register, handleSubmit, reset, refineCore: { onFinish }  } = useForm<Person>({
    refineCoreProps: {
      resource: "image",
      action: "edit",
      id: 8,
    },
  });
  // const { mutate } = useUpdate();
  // const onSubmit = (data: FieldValues) => {
  //   mutate({
  //     resource: "image",
  //     values: {
  //       title: data.title,
  //       image: data.image[0],
    
  //     },
  //     id:8,
  //   });
  //   reset();
  //   console.log(data);
  // };
  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("image", data.image[0]);

      // Use the onFinish method to create a new record with the file data
      await onFinish(formData);
      reset();
      console.log("Data posted successfully");
    } catch (error) {
      console.error("Error posting data:", error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
         type="text"
          placeholder="Title"
          {...register("title", { required: true })}
          className="w-1/2"
          name="title"
        />

        {/* <div className="w-20 h-10">{...register("image")}</div> */}
        <Input
        type="file"
          placeholder="Image"
          {...register("first_name", { required: true })}
          className="w-1/2"
          name="first_name"
        />
        {/* <Input
          placeholder="Last Name"
          {...register("last_name", { required: true })}
          className="w-1/2"
          name="last_name"
        />
        <Input
          type="date"
          {...register("dob", { required: true })}
          className="w-1/2"
          name="dob"
        />
        <select
          {...register("gender", { required: true })}
          className="w-1/2"
          name="gender"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select> */}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
