import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useList } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CreateParent: React.FC = () => {
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
      await onFinish(data);
      reset();
    } catch (error) {
      console.error("Error posting data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold">Create Parent</h1>
      <div className="flex justify-between py-2">
        <Link to="/parent/list" className="hover:text-yellow-400 font-semibold">List</Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <Label>Name</Label>
            <Input type="text" placeholder="Name" {...register("name", { required: true })} />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="Email" {...register("email", { required: true })} />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input type="text" placeholder="Phone Number" {...register("phone_number", { required: true })} />
            {errors.phone_number && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label>Address</Label>
            <Textarea placeholder="Address" {...register("address", { required: true })} />
            {errors.address && <span className="text-red-500">This field is required</span>}
          </div>
        </div>
        <Button type="submit" className="float-right mt-4 bg-green-600 hover:bg-green-500" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </form>
    </div>
  );
};
