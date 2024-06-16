import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";

export const CreateUser: React.FC = () => {
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
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("password", data.password);
      formData.append("role", data.role);
      await onFinish(formData);
      reset();
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="">
      <h1 className="text-xl font-semibold">Register User</h1>
      <div className="flex  py-2">
        <Link to="/users" className="hover:text-yellow-400 ">
          List
        </Link>
        <p className="px-1"> / </p>Register User
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4 py-4">
          <div className="space-y-2">
            <Label>
              Username <span className="text-red-600">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter username"
              {...register("username", {
                required: "This field is required",
              })}
            />
            <span className="text-red-600 text-sm">
              {(errors as any)?.username?.message as string}
            </span>
          </div>
          <div className="space-y-2">
            <Label>
              Email <span className="text-red-600">*</span>
            </Label>
            <Input
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "This field is required",
              })}
            />
            <span className="text-red-600 text-sm">
              {(errors as any)?.email?.message as string}
            </span>
          </div>
          <div className="space-y-2">
            <Label>
              First Name <span className="text-red-600">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter first name"
              {...register("first_name", {
                required: "This field is required",
              })}
            />
            <span className="text-red-600 text-sm">
              {(errors as any)?.first_name?.message as string}
            </span>
          </div>
          <div className="space-y-2">
            <Label>
              Last Name <span className="text-red-600">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter last name"
              {...register("last_name", {
                required: "This field is required",
              })}
            />
            <span className="text-red-600 text-sm">
              {(errors as any)?.last_name?.message as string}
            </span>
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter password"
              {...register("password")}
            />
          </div>
          <div className="space-y-2">
            <Label>
              Role <span className="text-red-600">*</span>
            </Label>
            <select
              {...register("role", {
                required: "This field is required",
              })}
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            >
              <option value={1}>Admin</option>
              <option value={2}>Staff</option>
              <option value={3}>User</option>
            </select>
            <span className="text-red-600 text-sm">
              {(errors as any)?.role?.message as string}
            </span>
          </div>
        </div>
        <Button
          type="submit"
          className="float-right mt-4 bg-green-600 hover:bg-green-500"
        >
          Register
        </Button>
      </form>
    </div>
  );
};
