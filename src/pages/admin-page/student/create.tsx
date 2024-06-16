import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useList } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CreateStudent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    refineCore: { onFinish },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("firstName", data.first_name);
      formData.append("lastName", data.last_name);
      formData.append("dob", data.dob);
      formData.append("gender", data.gender);
      formData.append("age", data.age);
      formData.append("subject", data.subject);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("studentID", data.studentID);
      formData.append("classes", data.classes);
      formData.append("parent", data.parent);
      formData.append("profile", data.background[0]);
      await onFinish(formData);
      reset();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  const { data: subject } = useList({
    resource: "subjects",
  });
  const { data: classes } = useList({
    resource: "classes",
  });
  const { data: parent } = useList({
    resource: "parent",
  });
  return (
    <div className="">
      <h1 className="text-xl font-semibold">Student List</h1>
      <div className="flex justify-between py-2">
        <Link to="/student" className="hover:text-yellow-400 font-semibold">
          List
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-4">
          <div className="">
            <Label>First Name</Label>
            <Input
              type="text"
              placeholder="input first name"
              {...register("first_name", {
                required: "This field is required",
              })}
            />
            <span className="text-red-600 text-sm">
              {(errors as any)?.first_name?.message as string}
            </span>
          </div>

          <div className="">
            <Label>Last Name</Label>
            <Input
              type="text"
              placeholder="input last name"
              {...register("last_name",{
                required: "This field is required",
              })}
            />
            <span className="text-red-600 text-sm">
              {(errors as any)?.last_name?.message as string}
            </span>
          </div>
          <div className="">
            <Label>StudentID</Label>
            <Input
              type="text"
              placeholder="input last name"
              {...register("studentID")}
            />
          </div>

          <div className="">
            <Label>Gender</Label>
            <Input placeholder="input gender" {...register("gender")} />
          </div>

          <div className="">
            <Label>Age</Label>
            <Input type="number" placeholder="input age" {...register("age")} />
          </div>
          <div className="">
            <Label>Date of Birth</Label>
            <Input
              type="date"
              placeholder="input date of birth"
              {...register("dob")}
            />
          </div>
          <div className="">
            <Label>Email</Label>
            <Input placeholder="input email" {...register("email")} />
          </div>
          <div className="">
            <Label>Phone</Label>
            <Input placeholder="input phone" {...register("phone")} />
          </div>

          <div className="">
            <Label>Subject</Label>
            <select
              id="subject"
              {...register("subject")}
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            >
              <option value="" selected disabled>
                Select subject...
              </option>
              {subject?.data.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <Label>Classes</Label>
            <select
              id="classes"
              {...register("classes")}
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            >
              <option value="" selected disabled>
                Select classes...
              </option>
              {classes?.data.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <Label>Parent</Label>
            <select
              id="parent"
              {...register("parent")}
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            >
              <option value="" selected disabled>
                Select parent...
              </option>
              {parent?.data.map((parent) => (
                <option key={parent.id} value={parent.id}>
                  {parent.name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <Label>Profile</Label>
            <Input
              type="file"
              placeholder="upload profile"
              {...register("background")}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="float-right mt-4 bg-green-600 hover:bg-green-500"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </form>
    </div>
  );
};
