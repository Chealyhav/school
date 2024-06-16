import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useList } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CreateTeacher: React.FC = () => {
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
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("dob", data.dob);
      formData.append("gender", data.gender);
      formData.append("subject", data.subject);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("experience", data.experience);
      formData.append("classes", data.classes);
      formData.append("profile", data.profile[0]);
      await onFinish(formData);
      reset();
    } catch (error) {
      console.error("Error posting data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const { data: subject } = useList({
    resource: "subjects",
  });
  const { data: classes } = useList({
    resource: "classes",
  });

  return (
    <div className="">
      <h1 className="text-xl font-semibold">Create Teacher</h1>
      <div className="flex justify-between py-2">
        <Link
          to="/teacher/list"
          className="hover:text-yellow-400 font-semibold"
        >
          List
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-4">
          <div className="">
            <Label>First Name</Label>
            <Input
              type="text"
              placeholder="First Name"
              {...register("firstName",{
                required: "This field is required",
              })}
            />
            <span className="text-red-600 text-sm">
              {(errors as any)?.firstName?.message as string}
            </span>
          </div>
          <div className="">
            <Label>Last Name</Label>
            <Input
              type="text"
              {...register("lastName",{
                required: "This field is required",
              })}
            />
            <span className="text-red-600 text-sm">
              {(errors as any)?.lastName?.message as string}
            </span>
          </div>
          <div className="">
            <Label>Gender</Label>
            <Input type="text" placeholder="Gender" {...register("gender")} />
          </div>
          <div className="">
            <Label>Date of Birth</Label>
            <Input
              type="date"
              placeholder="Date of Birth"
              {...register("dob")}
            />
          </div>
          <div className="">
            <Label>Email</Label>
            <Input type="email" placeholder="Email" {...register("email")} />
          </div>
          <div className="">
            <Label>Phone</Label>
            <Input type="text" placeholder="Phone" {...register("phone")} />
          </div>
          <div className="">
            <Label>Experience</Label>
            <Textarea placeholder="Experience" {...register("experience")} />
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
            <Label>Profile</Label>
            <Input
              type="file"
              placeholder="Upload Profile"
              {...register("profile")}
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
