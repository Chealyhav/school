
import { useForm } from "@refinedev/react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Person } from "./list";
import { useUpdate } from "@refinedev/core";
import { FieldValues } from "react-hook-form";

export const Edit = () => {
  const { register, handleSubmit, reset, refineCore } = useForm<Person>({
    refineCoreProps: {
      resource: "test",
      action: "edit",
      id: 3,
    },
  });
  const { mutate } = useUpdate();
  const onSubmit = (data: FieldValues) => {
    mutate({
      resource: "test",
      values: {
        first_name: data.first_name,
        last_name: data.last_name,
        gender: data.gender,
        dob: data.dob,
      },
      id:3,
    });
    reset();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="First Name"
          {...register("name", { required: true })}
          className="w-1/2"
          name="name"
        />
        <Input
          placeholder="First Name"
          {...register("first_name", { required: true })}
          className="w-1/2"
          name="first_name"
        />
        <Input
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
        </select>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
